import { Resolvers } from './resolvers-types';
import {
  uh,
  dept,
  serv,
  spec,
  unit,
  relationship,
  base,
} from '../mongo/schemas/schemas';
import {
  fetchDeptChildren,
  fetchServChildren,
  fetchUnitChildren,
  fetchUhChildren,
} from '../functions/fetchChildren';
import {
  fetchServParent,
  fetchSpecParent,
  fetchUnitParent,
} from '../functions/fetchParent';
import findErrors from '../functions/finderrors';

export const resolvers: Resolvers = {
  AnyOrg: {
    __resolveType(org) {
      if (org.type?.coding?.code === 'uh') {
        return 'UH';
      } else if (org.type?.coding?.code === 'dept') {
        return 'Department';
      } else if (org.type?.coding?.code === 'serv') {
        return 'Service';
      } else if (org.type?.coding?.code === 'unit') {
        return 'Unit';
      } else if (org.type?.coding?.code === 'spec') {
        return 'Specialty';
      } else {
        throw new Error(
          '__resolveType: Invalid organization type definition: ' +
            org.type?.coding?.code
        );
      }
    },
  },
  UH: {
    children: async (parent) => {
      return fetchUhChildren(parent);
    },
    errorflag: async (uho) => {
      const flag = await findErrors(uho);
      return flag;
    },
  },
  Department: {
    children: async (parent) => {
      return fetchDeptChildren(parent);
    },
    parents: async (child) => {
      const id = child._id;

      const parentIDs = await relationship
        .find({ department: id })
        .distinct('uh');

      const result = await uh.find({ _id: { $in: parentIDs } });

      return result;
    },
    errorflag: async (dep) => {
      return await findErrors(dep);
    },
  },
  Service: {
    children: async (parent) => {
      return fetchServChildren(parent);
    },
    parent: async (child) => {
      return fetchServParent(child);
    },
    errorflag: async (ser) => {
      return await findErrors(ser);
    },
  },
  Unit: {
    children: async (parent) => {
      return fetchUnitChildren(parent);
    },
    parent: async (child) => {
      return fetchUnitParent(child);
    },
    errorflag: async (uni) => {
      return await findErrors(uni);
    },
  },
  Specialty: {
    parent: async (child) => {
      return fetchSpecParent(child);
    },
    errorflag: async (spe) => {
      return await findErrors(spe);
    },
  },
  Query: {
    orgs: async (_, { offset, limit }) => {
      let query = base.find({});
      offset && query.skip(offset);
      limit && query.limit(limit);
      try {
        const result = query.exec();
        return await result;
      } catch {
        throw new Error('No organizations found');
      }
    },
    uhs: async (_, { offset, limit }) => {
      let query = uh.find({});
      offset && query.skip(offset);
      limit && query.limit(limit);
      try {
        const result = await query.sort('UH').exec();
        return await result;
      } catch {
        throw new Error('No UH found');
      }
    },
    departments: async (_, { offset, limit }) => {
      let query = dept.find({});
      offset && query.skip(offset);
      limit && query.limit(limit);
      try {
        const result = query.sort('COD_DEPARTAMENTO').exec();
        return await result;
      } catch {
        throw new Error('No departments found');
      }
    },
    services: async (_, { offset, limit }) => {
      let query = serv.find({});
      offset && query.skip(offset);
      limit && query.limit(limit);
      try {
        const result = query.sort('COD_SERVICO').exec();
        return await result;
      } catch {
        throw new Error('No services found');
      }
    },
    units: async (_, { offset, limit }) => {
      let query = unit.find({});
      offset && query.skip(offset);
      limit && query.limit(limit);
      try {
        const result = query.exec();
        return await result;
      } catch {
        throw new Error('No units found');
      }
    },
    specialties: async (_, { offset, limit }) => {
      let query = spec.find({});
      offset && query.skip(offset);
      limit && query.limit(limit);
      try {
        const result = query.exec();
        return await result;
      } catch {
        throw new Error('No specialties found');
      }
    },
    uhById: async (_, { id }) => {
      const uho = await uh.findById(id);
      if (!uho) {
        throw new Error('UH not found: ' + id);
      }
      return uho;
    },
    departmentById: async (_, { id }) => {
      const dep = await dept.findById(id);
      if (!dep) {
        throw new Error('Department not found: ' + id);
      }
      return dep;
    },
    serviceById: async (_, { id }) => {
      const ser = await serv.findById(id);
      if (!ser) {
        throw new Error('Service not found: ' + id);
      }
      return ser;
    },
    unitById: async (_, { id }) => {
      const uni = await unit.findById(id);
      if (!uni) {
        throw new Error('Unit not found: ' + id);
      }
      return uni;
    },
    specialtyById: async (_, { id }) => {
      const spe = await spec.findById(id);
      if (!spe) {
        throw new Error('Specialty not found: ' + id);
      }
      return spe;
    },
    everythingBySpec: async (_, { specId }) => {
      const rel = await relationship.findOne({ specialty: specId });
      if (!rel) {
        throw new Error('No specialty with ID ' + specId);
      }
      const spe = await spec.findById(rel.specialty);
      const uni = await unit.findById(rel.unit);
      const ser = await serv.findById(rel.service);
      const dep = await dept.findById(rel.department);
      const u = await uh.findById(rel.uh);

      if (!spe || !uni || !ser || !dep || !u) {
        throw new Error(
          'Inconsistency in data: Organization ID listed in relationship document not found'
        );
      }

      const result = {
        specialty: spe,
        unit: uni,
        service: ser,
        department: dep,
        uh: u,
      };
      return result;
    },
    everythingByUnit: async (_, { unitId }) => {
      const rel = await relationship.findOne({ unit: unitId });
      if (!rel) {
        throw new Error('No specialty with ID ' + unitId);
      }
      const uni = await unit.findById(rel.unit);
      const ser = await serv.findById(rel.service);
      const dep = await dept.findById(rel.department);
      const u = await uh.findById(rel.uh);

      if (!uni || !ser || !dep || !u) {
        throw new Error(
          'Inconsistency in data: Organization ID listed in relationship document not found '
        );
      }

      const result = {
        unit: uni,
        service: ser,
        department: dep,
        uh: u,
      };
      return result;
    },
    everythingByServ: async (_, { servId }) => {
      const rel = await relationship.findOne({ service: servId });
      if (!rel) {
        throw new Error('No service with ID ' + servId);
      }
      const ser = await serv.findById(rel.service);
      const dep = await dept.findById(rel.department);
      const u = await uh.findById(rel.uh);

      if (!ser || !dep || !u) {
        throw new Error(
          'Inconsistency in data: Organization ID listed in relationship document not found '
        );
      }

      const result = {
        service: ser,
        department: dep,
        uh: u,
      };
      return result;
    },
    departmentByCOD: async (_, { cod }) => {
      try {
        const dep = await dept.findOne({ COD_DEPARTAMENTO: cod });
        return dep ? dep : null;
      } catch {
        throw new Error('Department not found');
      }
    },
    departmentByDES: async (_, { des }) => {
      try {
        const dep = await dept.findOne({ DES_DEPARTAMENTO: des });
        return dep ? dep : null;
      } catch {
        throw new Error('Department not found');
      }
    },
    departmentSearch: async (_, { searchString }) => {
      try {
        const deps = await dept.find({
          $or: [
            { DES_DEPARTAMENTO: { $regex: searchString, $options: 'i' } },
            { 'partOf.display': { $regex: searchString, $options: 'i' } },
          ],
        });
        return deps;
      } catch {
        throw new Error('No departments found');
      }
    },
    textSearch: async (_, { searchString }) => {
      const orgs = await base.find({
        $or: [
          { name: { $regex: searchString, $options: 'i' } },
          { 'partOf.display': { $regex: searchString, $options: 'i' } },
        ],
      });

      return orgs;
    },
  },
};
