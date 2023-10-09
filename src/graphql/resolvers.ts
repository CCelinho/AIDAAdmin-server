import { Resolvers } from './resolvers-types';
import { department, service, specialty, unit } from '../mongo/schemas/schemas';

export const resolvers: Resolvers = {
  Query: {
    departments: async () => {
      console.warn('-----------------------------');
      return await department.find({ active: true });
    },
    services: async () => {
      return await service.find({ active: true });
    },
    units: async () => {
      return await unit.find({ active: true });
    },
    specialties: async () => {
      return await specialty.find({ active: true });
    },
    gabriel: async () => {
      return await specialty.find({ active: true });
    },
    organizations: async () => {
      // const departments = await department.find({ active: true });
      // const services = await service.find({ active: true });
      // const units = await unit.find({ active: true });
      // const specialties = await specialty.find({ active: true });

      // const mergedResults = [
      //   ...departments,
      //   ...services,
      //   ...units,
      //   ...specialties,
      // ];

      return await department.find({});
    },
    departmentById: async (_, { id }) => {
      try {
        const dep = await department.findById({ _id: id });
        return dep ? dep.toObject() : null;
      } catch (error) {
        throw new Error('Department not found: ' + id);
      }
    },
    departmentByCOD: async (_, { cod }) => {
      try {
        const dep = await department.findOne({ COD_DEPARTAMENTO: cod });
        return dep ? dep.toObject() : null;
      } catch (error) {
        throw new Error('Department not found');
      }
    },
    departmentByDES: async (_, { des }) => {
      try {
        const dep = await department.findOne({ DES_DEPARTAMENTO: des });
        return dep ? dep.toObject() : null;
      } catch (error) {
        throw new Error('Department not found');
      }
    },
    servicesByDep: async (_, { cod }) => {
      return await service.find({ COD_DEPARTAMENTO: cod });
    },
  },
};
