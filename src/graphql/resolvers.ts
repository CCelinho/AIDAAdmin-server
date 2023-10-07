import { Resolvers } from './resolvers-types';
import { department, service, specialty, unit } from '../mongo/schemas/schemas';

export const resolvers: Resolvers = {
  Query: {
    departments: async () => {
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
