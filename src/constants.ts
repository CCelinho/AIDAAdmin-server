import 'dotenv/config';

export const collectionNames = {
  uh: 'uh',
  dept: 'dep',
  serv: 'ser',
  unit: 'uni',
  spec: 'spe',
  contacts: 'contacts',
  all: 'orgs',
};

export const postgresUpdateQuery =
  'SELECT * FROM org_data.updates WHERE datetime < $1';
export const updateQuery = `SELECT * FROM AIDASA.UPDATES WHERE DATETIME < TO_TIMESTAMP_TZ(:lastCheckTimestamp, 'YYYY-MM-DD"T"HH24:MI:SS.FF3"Z"')`;

export const mongoConfig = {
  host: process.env.MONGOHOST,
  port: process.env.MONGOPORT,
  db: process.env.MONGODB,
};

export const mongoCString = `mongodb://${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.db}`;

export const pgConfig = {
  host: 'localhost',
  user: 'postgres',
  pass: 'bolachamaria28',
  database: 'org_data',
  connectionTimeoutMillis: 5000,
};

export const oracleConfig = {
  user: 'aidasa',
  password: 'aidasa',
  connectString: process.env.ORACLECONNSTRING,
};

export const dbBackUpDirectory = process.env.DBBACKUPDIR;
