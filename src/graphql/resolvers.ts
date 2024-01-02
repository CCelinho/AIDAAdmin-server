import { Organization, Resolvers } from './resolvers-types';
import { department, service, specialty, unit } from '../mongo/schemas/schemas';

export const resolvers: Resolvers = {
  Organization: {
    __resolveType: (org) => {
      if (org.type?.text === 'department') {
        return 'Department';
      }
      if (org.type?.text === 'service') {
        return 'Service';
      }
      if (org.type?.text === 'unit') {
        return 'Unit';
      }
      if (org.type?.text === 'specialty') {
        return 'Specialty';
      }
      return null;
    },
  },
  Query: {
    departments: async (_, { offset, limit }) => {
      let query = department.find({ active: true });
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
      let query = service.find({ active: true });
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
      let query = specialty.find({ active: true });
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
      const departments = await department.find({ active: true });
      const services = await service.find({ active: true });
      const units = await unit.find({ active: true });
      const specialties = await specialty.find({ active: true });

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
        const dep = await department.findById({ _id: id });
        return dep ? dep.toObject() : null;
      } catch {
        throw new Error('Department not found: ' + id);
      }
    },
    departmentByCOD: async (_, { cod }) => {
      try {
        const dep = await department.findOne({ COD_DEPARTAMENTO: cod });
        return dep ? dep.toObject() : null;
      } catch {
        throw new Error('Department not found');
      }
    },
    departmentByDES: async (_, { des }) => {
      try {
        const dep = await department.findOne({ DES_DEPARTAMENTO: des });
        return dep ? dep.toObject() : null;
      } catch {
        throw new Error('Department not found');
      }
    },
    departmentSearch: async (_, { searchString }) => {
      try {
        const deps = await department.find({
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
      let query = service.find({ COD_DEPARTAMENTO: { $in: cod } });
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
