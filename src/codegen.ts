import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: './src/graphql/schema.graphql',
  debug: true,
  generates: {
    './src/graphql/resolvers-types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      /* config: {
                useIndexSignature: true,
                contextType: '../index#MyContext'

            } */
    },
    /* './graphql.schema.json': {
            plugins: ['introspection'],
        }, */
  },
};

export default config;
