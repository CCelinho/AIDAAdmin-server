// import { CodegenConfig } from '@graphql-codegen/cli';
// import { dateScalar, objectIdScalar } from './graphql/scalarTypes';

// const config: CodegenConfig = {
//   schema: './src/graphql/schema.graphql',
//   generates: {
//     './src/graphql/resolvers-types.ts': {
//       config: {
//         useIndexSignature: true,
//         scalars: {
//           Date: dateScalar,
//           ObjectId: objectIdScalar,
//         },
//       },
//       plugins: ['typescript', 'typescript-resolvers'],
//     },
//   },
//   ignoreNoDocuments: true,
// };

// export default config;

import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: './src/graphql/schema.graphql',
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
