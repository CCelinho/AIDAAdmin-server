import { Resolvers } from './resolvers-types';
import { department, service, specialty, unit } from '../mongo/schemas/schemas';

export const resolvers: Resolvers = {
  Query: {
    departments: async () => {
      return await department.find({});
    },
    services: async () => {
      return await service.find({});
    },
    units: async () => {
      return await unit.find({});
    },
    specialties: async () => {
      return await specialty.find({});
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
        const dep = await department.findOne({ COD_DEPARTAMENTO: des });
        return dep ? dep.toObject() : null;
      } catch (error) {
        throw new Error('Department not found:');
      }
    },
  },
};
