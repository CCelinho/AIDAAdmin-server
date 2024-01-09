import { DepartmentTree, Resolvers } from './resolvers-types';
import {
  uh,
  dept,
  serv,
  spec,
  unit,
  relationship,
} from '../mongo/schemas/schemas';

export const resolvers: Resolvers = {
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
    depChildren: async (_, { id }) => {
      try {
        const relsQuery = await relationship
          .find({
            parent: id,
            type: 3,
          })
          .select({ _id: 0, child: 1 });
        const serviceIDs = await relsQuery.map((obj) => obj.toObject().child);
        const result = await serv.find({ _id: { $in: serviceIDs } });
        return result;
      } catch {
        throw new Error('No relationships found');
      }
    },
    serChildren: async (_, { id }) => {
      try {
        const relsQuery = await relationship
          .find({
            parent: id,
            type: 2,
          })
          .select({ _id: 0, child: 1 });
        const unitIDs = await relsQuery.map((obj) => obj.toObject().child);
        const result = await unit.find({ _id: { $in: unitIDs } });
        return result;
      } catch {
        throw new Error('No relationships found');
      }
    },
    depTree: async (_, { id }) => {
      try {
        const result: DepartmentTree = {
          uhs: [],
          department: null,
          services: [],
          units: [],
          specialties: [],
        };

        result.department = await dept.findById(id);

        const relUp1 = await relationship
          .find({ child: id, type: 4 })
          .select({ _id: 0, parent: 1 });
        const uhIDs = relUp1.map((obj) => obj.toObject().parent);
        result.uhs = await uh.find({ _id: { $in: uhIDs } });

        const relDown1 = await relationship
          .find({ parent: id, type: 3 })
          .select({ _id: 0, child: 1 });
        const serviceIDs = relDown1.map((obj) => obj.toObject().child);
        result.services = await serv.find({ _id: { $in: serviceIDs } });

        const relDown2 = await relationship
          .find({ parent: { $in: serviceIDs }, type: 2 })
          .select({ _id: 0, child: 1 });
        const unitIDs = relDown2.map((obj) => obj.toObject().child);
        result.units = await unit.find({ _id: { $in: unitIDs } });

        const relDown3 = await relationship
          .find({ parent: { $in: unitIDs }, type: 1 })
          .select({ _id: 0, child: 1 });
        const specialtyIDs = relDown3.map((obj) => obj.toObject().child);
        result.specialties = await spec.find({ _id: { $in: specialtyIDs } });

        return result;
      } catch {
        throw new Error('Error fetching tree');
      }
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
