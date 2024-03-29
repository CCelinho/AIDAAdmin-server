import mongoose from 'mongoose';

function extendSchema(
  Schema: mongoose.Schema,
  definition: mongoose.SchemaDefinition,
  options: mongoose.SchemaOptions
) {
  return new mongoose.Schema(
    Object.assign({}, Schema.obj, definition),
    options
  );
}
export default extendSchema;
