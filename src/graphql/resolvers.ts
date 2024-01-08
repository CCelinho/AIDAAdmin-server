import { Organization, Resolvers } from './resolvers-types';
import { uh, dept, serv, spec, unit } from '../mongo/schemas/schemas';

export const resolvers: Resolvers = {
  Organization: {
    __resolveType: (org) => {
      if (org.type?.coding?.code === 'dept') {
        return 'Department';
      }
      if (org.type?.coding?.code === 'serv') {
        return 'Service';
      }
      if (org.type?.coding?.code === 'unit') {
        return 'Unit';
      }
      if (org.type?.coding?.code === 'spec') {
        return 'Specialty';
      }
      if (org.type?.coding?.code === 'uh') {
        return 'UH';
      }
      return null;
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
    organizations: async () => {
      const departments = await dept.find({ active: true });
      const services = await serv.find({ active: true });
      const units = await unit.find({ active: true });
      const specialties = await spec.find({ active: true });

      const mergedResults: Organization[] = [
        ...departments,
        ...services,
        ...units,
        ...specialties,
      ];

      return mergedResults;
    },
    departmentById: async (_, { id }) => {
      try {
        const dep = await dept.findById({ _id: id });
        return dep ? dep.toObject() : null;
      } catch {
        throw new Error('Department not found: ' + id);
      }
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
    servicesByDep: async (_, { cod, offset, limit }) => {
      let query = serv.find({ COD_DEPARTAMENTO: { $in: cod } });
      offset && query.skip(offset);
      limit && query.limit(limit);
      try {
        const result = query.exec();
        return await result;
      } catch {
        throw new Error('No services found' + cod);
      }
    },
  },
};
