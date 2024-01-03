import { mongoConnect } from './connections/mongoConnection';
import { mongoCString } from './constants';
import { checkForUpdates } from './functions/updateCheckerPostgres';

const forceUpdate = async () => {
  await mongoConnect(mongoCString);
  let lastCheckTimestamp = new Date().toISOString();
  checkForUpdates(lastCheckTimestamp);
};

export default forceUpdate;
