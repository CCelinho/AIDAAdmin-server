import { dept, relationship, serv, uh, unit } from '../mongo/schemas/schemas';
import {
  Department,
  Service,
  Specialty,
  Uh,
  Unit,
} from '../graphql/resolvers-types';
import { collectionNames } from '../constants';

type child = Uh | Department | Service | Unit | Specialty;

const fetchParent = async (child: child, modelCode: string) => {
  const id = child._id;

  const collection = getModel(modelCode);

  const parentID = (
    await relationship.find({ child: id }).select({ _id: 0, parent: 1 })
  ).map((parent) => parent.toObject().parent);

  const result = await collection.findById(parentID);

  return result;
};

const getModel = (modelCode: string) => {
  switch (modelCode) {
    case collectionNames.dept:
      return uh;
    case collectionNames.serv:
      return dept;
    case collectionNames.unit:
      return serv;
    case collectionNames.spec:
      return unit;
    default:
      throw new Error(
        `fetchChildren: Unsupported organization type: ${modelCode}`
      );
  }
};

export default fetchParent;
