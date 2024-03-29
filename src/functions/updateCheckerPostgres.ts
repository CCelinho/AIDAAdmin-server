// Imports
import { readFileSync } from 'fs';
import pg from 'pg';
import 'dotenv/config';

// Modules
import { pgConfig, postgresUpdateQuery } from '../constants';
import {
  contactData,
  specialty,
  uni,
  service,
  department,
  uhosp,
  base,
} from '../mongo/schemas/schemas';
import formatSpecialty from '../mongo/aggregation/formatSpecialty';
import formatUnit from '../mongo/aggregation/formatUnit';
import formatService from '../mongo/aggregation/formatService';
import formatDepartment from '../mongo/aggregation/formatDepartment';
import formatUH from '../mongo/aggregation/formatUH';
import formatRelationships from '../mongo/aggregation/formatRelationships';

export const checkForUpdates = async (lastCheckTimestamp: string) => {
  console.log('Last check for updates: ' + lastCheckTimestamp);

  const postgresClient = new pg.Client(pgConfig);

  try {
    // Query postgres for updates
    await postgresClient.connect();
    const { rows: updates } = await postgresClient.query(postgresUpdateQuery, [
      lastCheckTimestamp,
    ]);

    console.log('Connection to PostgreSQL successful');

    // If there's an update
    if (updates.length !== 0) {
      // Export postgres data to json files
      await postgresClient.query(
        "COPY (SELECT json_agg(ROW_TO_JSON(t)) FROM (SELECT * FROM org_data.org_data) t) TO 'C:/Users/Public/orgdataupdate.json';"
      );
      await postgresClient.query(
        "COPY (SELECT json_agg(ROW_TO_JSON(t)) FROM (SELECT * FROM org_data.org_contacts) t) TO 'C:/Users/Public/contactdataupdate.json';"
      );

      // Read json files
      const orgPath = await readFileSync('C:/Users/Public/orgdataupdate.json', {
        encoding: 'utf8',
      });
      const conPath = await readFileSync(
        'C:/Users/Public/contactdataupdate.json',
        {
          encoding: 'utf8',
        }
      );

      const orgUpdate: string = await JSON.parse(orgPath);
      const conUpdate: string = await JSON.parse(conPath);

      // Insert documents
      await base.deleteMany({});
      await specialty.deleteMany({});
      await uni.deleteMany({});
      await service.deleteMany({});
      await department.deleteMany({});
      await contactData.deleteMany({});

      await specialty.insertMany(orgUpdate);
      await contactData.insertMany(conUpdate);

      await formatSpecialty();
      await formatUnit();
      await formatService();
      await formatDepartment();
      await formatUH();
      await formatRelationships();

      const speCount = await specialty.countDocuments();
      const uniCount = await uni.countDocuments();
      const serCount = await service.countDocuments();
      const depCount = await department.countDocuments();
      const UHCount = await uhosp.countDocuments();

      console.log(
        'Document count:\n' +
          speCount +
          '\n' +
          uniCount +
          '\n' +
          serCount +
          '\n' +
          depCount +
          '\n' +
          UHCount
      );
    } else {
      console.log('No updates found.');
    }
  } catch (error) {
    console.log('An error ocurred:', error);
  } finally {
    // Disconnect from Postgres and Mongo
    await postgresClient.end();
    // Make a new timestamp
    lastCheckTimestamp = new Date().toISOString();

    console.log('done');
  }
};
