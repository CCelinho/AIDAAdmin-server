import { ASTNode, GraphQLScalarType, Kind } from 'graphql';
import mongoose from 'mongoose';

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

export class objectIdScalar {
  description = 'Mongo object id scalar type';

  parseValue(value: string) {
    return new mongoose.Types.ObjectId(value); // value from the client
  }

  serialize(value: mongoose.Types.ObjectId) {
    return value.toHexString(); // value sent to the client
  }

  parseLiteral(ast: ASTNode) {
    if (ast.kind === Kind.STRING) {
      return new mongoose.Types.ObjectId(ast.value); // value from the client query
    }
    return null;
  }
}
