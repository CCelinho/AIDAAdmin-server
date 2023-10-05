import { GraphQLScalarType, Kind } from 'graphql';

export const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date type in ISO string format',
  serialize(value) {
    return (value as typeof Date).toString();
  },
  parseValue(value) {
    return new Date(value as string);
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value);
    }
    console.log((err: Error) => 'An error has ocurred:\n' + err);
  },
});
