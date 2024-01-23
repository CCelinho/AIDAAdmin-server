import { UUID } from 'mongodb';
import {
  Department,
  Service,
  Specialty,
  Uh,
  Unit,
} from '../graphql/resolvers-types';
import { partyRel } from '../mongo/schemas/schemas';

const findErrors = async (
  org: Department | Service | Unit | Specialty | Uh
) => {
  if (org.active === true) {
    return false;
  } else {
    const activeRels = await partyRel.find({});
    for (let rel of activeRels) {
      if ((org.uuid as UUID).toString() === (rel.target as UUID).toString()) {
        return true;
      }
    }
  }
  return false;
};

export default findErrors;
