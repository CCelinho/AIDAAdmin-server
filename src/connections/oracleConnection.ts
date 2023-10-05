import { oracleConfig } from '../constants';
import 'dotenv/config';
import oracledb from 'oracledb';

export const oracleConnection = async () => {
  await oracledb.initOracleClient({
    libDir: process.env.ORACLELIBDIR,
  });
  oracledb.autoCommit = true;
  const connection = await oracledb.getConnection(oracleConfig);
  return connection;
};
