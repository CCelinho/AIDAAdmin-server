import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { readFileSync } from 'fs';
import { ApolloServer, BaseContext } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginCacheControl } from '@apollo/server/plugin/cacheControl';

import { resolvers } from './graphql/resolvers';
import { mongoCString } from './constants';
import { mongoConnect } from './connections/mongoConnection';
import forceUpdate from './functions/forceUpdate';

const app = express();
const port = process.env.VITE_GRAPHQLPORT;

const typeDefs = readFileSync('./src/graphql/schema.graphql', 'utf-8');

const bootstrapServer = async () => {
  await mongoConnect(mongoCString);
  await forceUpdate();
  // let lastCheckTimestamp = new Date().toISOString();
  // cron.schedule('0 * * * *', async () => {
  //   checkForUpdates(lastCheckTimestamp);
  // });

  const server = new ApolloServer<BaseContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginCacheControl({ defaultMaxAge: 60 })],
  });
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
