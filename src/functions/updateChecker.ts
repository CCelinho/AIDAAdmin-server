// Imports
import * as cron from 'node-cron';

// Modules
import { mongoConfig as mongo, updateQuery } from '../constants';
import { mongoConnect, mongoDisconnect } from '../connections/mongoConnection';
import {
  contactData,
  specialty,
  unit,
  service,
  department,
} from '../mongo/schemas/schemas';
import formatSpecialty from '../mongo/aggregation/formatSpecialty';
import formatUnit from '../mongo/aggregation/formatUnit';
import formatService from '../mongo/aggregation/formatService';
import formatDepartment from '../mongo/aggregation/formatDepartment';
import { oracleConnection } from '../connections/oracleConnection';

const checkForUpdates = async () => {
  // Create a timestamp at the start
  let lastCheckTimestamp = new Date().toISOString();
  const mongoCString = `mongodb://${mongo.host}:${mongo.port}/${mongo.db}`;

  const oracle = await oracleConnection();

  // Create a new schedule function to run every minute
  cron.schedule('* * * * *', async () => {
    console.log('Last check for updates: ' + lastCheckTimestamp);

    try {
      // Query postgres for updates
      const { rows: updates } = await oracle.execute(updateQuery, {
        lastCheckTimestamp: lastCheckTimestamp,
      });
      if (updates) {
        console.log(updates);
      }

      console.log('Connection to Oracle successful');

      // If there's an update
      if (updates && updates !== undefined) {
        console.log(mongo.db);
        await mongoConnect(mongoCString);

        console.log('Connection to mongo successful');

        // Export oracle data to json

        const orgs = await oracle.execute('SELECT * FROM AIDASA.ORGANIZATIONS');
        const orgUpdate = orgs.rows;
        const conUpdate = orgs.rows;

        // Insert documents
        await specialty.deleteMany({});
        await unit.deleteMany({});
        await service.deleteMany({});
        await department.deleteMany({});
        await contactData.deleteMany({});

        await specialty.insertMany(orgUpdate);
        await contactData.insertMany(conUpdate);

        await formatSpecialty();
        await formatUnit();
        await formatService();
        await formatDepartment();

        const speCount = await specialty.countDocuments();
        const uniCount = await unit.countDocuments();
        const serCount = await service.countDocuments();
        const depCount = await department.countDocuments();

        console.log(
          'Document count:\n' +
            speCount +
            '\n' +
            uniCount +
            '\n' +
            serCount +
            '\n' +
            depCount
        );
      } else {
        console.log('No updates found.');
      }
    } catch (error) {
      console.log('An error ocurred:', error);
    } finally {
      // Make a new timestamp
      lastCheckTimestamp = new Date().toISOString();
      // Disconnect from Postgres and Mongo
      await mongoDisconnect();
      console.log('done');
    }
  });
};

checkForUpdates();
