import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import * as cron from 'node-cron';

import { readFileSync } from 'fs';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

import { resolvers } from './graphql/resolvers';
import { checkForUpdates } from './functions/updateCheckerPostgres';
import { mongoCString } from './constants';
import { mongoConnect } from './connections/mongoConnection';

const app = express();
const port = process.env.VITE_GRAPHQLPORT;

const typeDefs = readFileSync('./src/graphql/schema.graphql', 'utf-8');

const bootstrapServer = async () => {
  await mongoConnect(mongoCString);
  let lastCheckTimestamp = new Date().toISOString();
  cron.schedule('0 * * * *', async () => {
    checkForUpdates(lastCheckTimestamp);
  });

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/graphql', expressMiddleware(server));

  app.get('/graphql');

  app.listen(port, () => {
    console.log(`Server ready at http://localhost:${port}/graphql`);
  });
};

bootstrapServer();
