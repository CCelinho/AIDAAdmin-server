import { Resolvers } from './resolvers-types';
import {
  uh,
  dept,
  serv,
  spec,
  unit,
  relationship,
} from '../mongo/schemas/schemas';
import fetchChildren from '../functions/fetchChildren';
import { collectionNames } from '../constants';
import fetchParent from '../functions/fetchParent';

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
      return fetchChildren(parent, collectionNames.uh);
    },
  },
  Department: {
    children: async (parent) => {
      return fetchChildren(parent, collectionNames.dept);
    },
    parents: async (child) => {
      const id = child._id;

      const parentIDs = (
        await relationship.find({ child: id }).select({ _id: 0, parent: 1 })
      ).map((parent) => parent.toObject().parent);

      const result = await uh.find({ _id: { $in: parentIDs } });

      return result;
    },
  },
  Service: {
    children: async (parent) => {
      return fetchChildren(parent, collectionNames.serv);
    },
    parent: async (child) => {
      return fetchParent(child, collectionNames.serv);
    },
  },
  Unit: {
    children: async (parent) => {
      return fetchChildren(parent, collectionNames.unit);
    },
    parent: async (child) => {
      return fetchParent(child, collectionNames.unit);
    },
  },
  Specialty: {
    parent: async (child) => {
      return fetchParent(child, collectionNames.spec);
    },
  },
  Query: {
    uhs: async (_, { offset, limit }) => {
      let query = uh.find({ active: true });
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
      let query = dept.find({ active: true });
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
      let query = serv.find({ active: true });
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
      let query = unit.find({ active: true });
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
      let query = spec.find({ active: true });
      offset && query.skip(offset);
      limit && query.limit(limit);
      try {
        const result = query.exec();
        return await result;
      } catch {
        throw new Error('No specialties found');
      }
    },
    departmentById: async (_, { id }) => {
      const dep = await dept.findById(id);
      if (!dep) {
        throw new Error('Department not found: ' + id);
      }
      return dep.toObject();
    },
    specialtyById: async (_, { id }) => {
      const spe = await spec.findById(id);
      if (!spe) {
        throw new Error('Specialty not found: ' + id);
      }
      return spe.toObject();
    },
    departmentByCOD: async (_, { cod }) => {
      try {
        const dep = await dept.findOne({ COD_DEPARTAMENTO: cod });
        return dep ? dep.toObject() : null;
      } catch {
        throw new Error('Department not found');
      }
    },
    departmentByDES: async (_, { des }) => {
      try {
        const dep = await dept.findOne({ DES_DEPARTAMENTO: des });
        return dep ? dep.toObject() : null;
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
  },
};
