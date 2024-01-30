import {
  Department,
  Service,
  Specialty,
  Uh,
  Unit,
} from '../graphql/resolvers-types';
import { partyRel } from '../mongo/schemas/schemas';

const findErrors = async (
  org: Uh | Department | Unit | Service | Specialty
) => {
  if (org.active === true) {
    return false;
  } else {
    const activeRels = await partyRel.find({});
    for (let rel of activeRels) {
      if (org.uuid === rel.target) {
        return true;
      }
    }
    return false;
  }
};

export default findErrors;
