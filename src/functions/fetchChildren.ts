import { collectionNames } from '../constants';
import {
  Department,
  Service,
  Specialty,
  Uh,
  Unit,
} from '../graphql/resolvers-types';
import { dept, relationship, serv, spec, unit } from '../mongo/schemas/schemas';

type parent = Uh | Department | Service | Unit | Specialty;

const fetchChildren = async (parent: parent, modelCode: string) => {
  const id = parent._id;

  const collection = getModel(modelCode);

  const childrenIDs = (
    await relationship.find({ parent: id }).select({ _id: 0, child: 1 })
  ).map((child) => child.toObject().child);

  const result = await collection.find({ _id: { $in: childrenIDs } });

  return result;
};

const getModel = (modelCode: string) => {
  switch (modelCode) {
    case collectionNames.uh:
      return dept;
    case collectionNames.dept:
      return serv;
    case collectionNames.serv:
      return unit;
    case collectionNames.unit:
      return spec;
    default:
      throw new Error(
        `fetchChildren: Unsupported organization type: ${modelCode}`
      );
  }
};

export default fetchChildren;
