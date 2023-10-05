import { CodegenConfig } from '@graphql-codegen/cli';
import { dateScalar } from './graphql/scalarTypes';

const config: CodegenConfig = {
  schema: './src/graphql/schema.graphql',
  generates: {
    './src/graphql/resolvers-types.ts': {
      config: {
        useIndexSignature: true,
        scalars: {
          Date: dateScalar,
        },
      },
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
  ignoreNoDocuments: true,
};

export default config;
