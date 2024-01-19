import mongoose, { InferSchemaType } from 'mongoose';
import { collectionNames as cn, collectionNames } from '../../constants';
import extendSchema from './schemaExtender';

const periodSchema = new mongoose.Schema({
  start: { type: Date },
  end: { type: Date },
});

const codingSchema = new mongoose.Schema({
  system: { type: String },
  version: { type: String },
  code: { type: String },
  display: { type: String },
  userSelected: { type: Boolean },
});

const codeableConceptSchema = new mongoose.Schema({
  coding: { type: codingSchema },
  text: { type: String },
});

const identifierSchema = new mongoose.Schema({
  use: { type: String },
  type: { type: codeableConceptSchema },
  system: { type: String },
  value: { type: String },
  period: { type: periodSchema },
  assigner: { type: String },
});

const humanNameSchema = new mongoose.Schema({
  use: { type: String },
  text: { type: String },
  family: { type: String },
  given: { type: String },
  prefix: { type: String },
  suffix: { type: String },
  period: { type: periodSchema },
});

const contactPointSchema = new mongoose.Schema({
  system: { type: String },
  value: { type: String },
  use: { type: String },
  rank: { type: Number },
  period: { type: periodSchema },
});

const addressSchema = new mongoose.Schema({
  use: { type: String },
  type: { type: String },
  text: { type: String },
  line: { type: String },
  city: { type: String },
  district: { type: String },
  state: { type: String },
  postalCode: { type: String },
  country: { type: String },
  period: { type: periodSchema },
});

const referenceSchema = new mongoose.Schema({
  reference: { type: String },
  type: { type: String },
  identifier: { type: identifierSchema },
  display: { type: String },
});

const extendedContactDetailSchema = new mongoose.Schema({
  purpose: { type: codeableConceptSchema },
  name: { type: humanNameSchema },
  telecom: [{ type: contactPointSchema }],
  address: [{ type: addressSchema }],
  organization: { type: referenceSchema },
  period: { type: periodSchema },
});

// Organizations
const baseSchema = new mongoose.Schema(
  {
    ID_CP: { type: String },
    VIG_INI: { type: Date },
    VIG_FIM: { type: Date },
    CR: { type: String },
    identifier: { type: identifierSchema },
    active: { type: Boolean },
    type: { type: codeableConceptSchema },
    name: { type: String },
    alias: { type: String },
    description: { type: String },
    contact: [{ type: extendedContactDetailSchema }],
    partOf: { type: referenceSchema },
    endpoint: { type: referenceSchema },
  },
  { collection: collectionNames.all }
);

export const uhospSchema = extendSchema(
  baseSchema,
  {
    UH: [{ type: String }],
    CHILDREN: [{ type: Number }],
    COD_ESTATISTICO: [{ type: String }],
  },
  { collection: cn.uh }
);

export const departmentSchema = extendSchema(
  baseSchema,
  {
    UH: [{ type: String }],
    CHILDREN: [{ type: Number }],
    DES_DEPARTAMENTO: { type: String },
    COD_DEPARTAMENTO: { type: Number },
    COD_ESTATISTICO: [{ type: String }],
  },
  { collection: cn.dept }
);

export const serviceSchema = extendSchema(
  baseSchema,
  {
    UH: [{ type: String }],
    CHILDREN: [{ type: Number }],
    COD_SERVICO: { type: Number },
    DES_SERVICO: { type: String },
    DES_DEPARTAMENTO: { type: String },
    COD_DEPARTAMENTO: { type: Number },
    COD_ESTATISTICO: [{ type: String }],
  },
  { collection: cn.serv }
);

export const uniSchema = extendSchema(
  baseSchema,
  {
    UH: [{ type: String }],
    COD_UNIDADE: { type: Number },
    DES_UNIDADE: { type: String },
    COD_SERVICO: { type: Number },
    DES_SERVICO: { type: String },
    DES_DEPARTAMENTO: { type: String },
    COD_DEPARTAMENTO: { type: Number },
    COD_ESTATISTICO: [{ type: String }],
  },
  { collection: cn.unit }
);

export const specialtySchema = extendSchema(
  baseSchema,
  {
    UH: { type: String },
    COD_ESTATISTICO: { type: String },
    DES_ESTATISTICO: { type: String },
    COD_UNIDADE: { type: Number },
    DES_UNIDADE: { type: String },
    COD_SERVICO: { type: Number },
    DES_SERVICO: { type: String },
    DES_DEPARTAMENTO: { type: String },
    COD_DEPARTAMENTO: { type: Number },
    AGREGA1: { type: String },
    AGREGA2: { type: String },
    AGREGA3: { type: String },
  },
  { collection: cn.spec }
);

const relationshipSchema = new mongoose.Schema(
  {
    parent: { type: mongoose.Types.ObjectId },
    child: { type: mongoose.Types.ObjectId },
    type: { type: Number },
  },
  { collection: cn.rels }
);

const contactDataSchema = new mongoose.Schema(
  {
    COD_ESTATISTICO: { type: String },
    identifier_use: { type: String },
    identifier_type: { type: String },
    identifier_value: { type: Number },
    contact_purpose: { type: String },
    contact_name: { type: String },
    contact_prefix: { type: String },
    contact_system: { type: String },
    contact_value: { type: String },
    contact_use: { type: String },
    contact_rank: { type: Number },
    contact_start: { type: Date },
    contact_end: { type: Date },
    address_use: { type: String },
    address_type: { type: String },
    address_text: { type: String },
    address_line: { type: String },
    address_city: { type: String },
    address_district: { type: String },
    address_state: { type: String },
    address_postalcode: { type: String },
    address_country: { type: String },
    address_start: { type: Date },
    address_end: { type: Date },
    endpoint: { type: String },
    active_start: { type: Date },
    active_end: { type: Date },
  },
  { collection: cn.contacts }
);

export const uhSchema = new mongoose.Schema({
  UH: { type: String },
  COD_ESTATISTICO: [{ type: String }],
});

export const deptSchema = new mongoose.Schema({
  DES_DEPARTAMENTO: { type: String },
  COD_DEPARTAMENTO: { type: Number },
  COD_ESTATISTICO: [{ type: String }],
});

export const servSchema = new mongoose.Schema({
  COD_SERVICO: { type: Number },
  DES_SERVICO: { type: String },
  COD_ESTATISTICO: [{ type: String }],
});

export const unitSchema = new mongoose.Schema({
  COD_UNIDADE: { type: Number },
  DES_UNIDADE: { type: String },
  COD_ESTATISTICO: [{ type: String }],
});

export const specSchema = new mongoose.Schema({
  COD_ESTATISTICO: { type: String },
  DES_ESTATISTICO: { type: String },
  AGREGA1: { type: String },
  AGREGA2: { type: String },
  AGREGA3: { type: String },
});

export type identifier = InferSchemaType<typeof identifierSchema>;

// Models defined solely for purpose of aggregation
export const uhosp = mongoose.model('uhosp', uhospSchema);
export const department = mongoose.model('department', departmentSchema);
export const service = mongoose.model('service', serviceSchema);
export const uni = mongoose.model('uni', uniSchema);
export const specialty = mongoose.model('specialty', specialtySchema);
export const contactData = mongoose.model('contacts', contactDataSchema);
export const relationship = mongoose.model('relationship', relationshipSchema);

type uh = InferSchemaType<typeof uhospSchema>;
type dept = InferSchemaType<typeof departmentSchema>;
type serv = InferSchemaType<typeof serviceSchema>;
type unit = InferSchemaType<typeof uniSchema>;
type spec = InferSchemaType<typeof specialtySchema>;

// Models defined for querying
export const base = mongoose.model('base', baseSchema);
export const uh = base.discriminator<uh>('uh', uhSchema);
export const dept = base.discriminator<dept>('dept', deptSchema);
export const unit = base.discriminator<unit>('unit', unitSchema);
export const serv = base.discriminator<serv>('serv', servSchema);
export const spec = base.discriminator<spec>('spec', specSchema);
