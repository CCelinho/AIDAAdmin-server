import { Department, Service, Uh, Unit } from '../graphql/resolvers-types';
import { dept, relationship, serv, spec, unit } from '../mongo/schemas/schemas';

export const fetchUhChildren = async (parent: Uh) => {
  const id = parent._id;

  const childrenIDs = await (
    await relationship.find({ uh: id }).select({ _id: 0, department: 1 })
  ).map((child) => child.toObject().department);

  const result = await dept.find({ _id: { $in: childrenIDs } });

  return result;
};

export const fetchDeptChildren = async (parent: Department) => {
  const id = parent._id;

  const childrenIDs = (
    await relationship.find({ department: id }).select({ _id: 0, service: 1 })
  ).map((child) => child.toObject().service);

  const result = await serv.find({ _id: { $in: childrenIDs } });

  return result;
};

export const fetchServChildren = async (parent: Service) => {
  const id = parent._id;

  const childrenIDs = (
    await relationship.find({ service: id }).select({ _id: 0, unit: 1 })
  ).map((child) => child.toObject().unit);

  const result = await unit.find({ _id: { $in: childrenIDs } });

  return result;
};

export const fetchUnitChildren = async (parent: Unit) => {
  const id = parent._id;

  const childrenIDs = (
    await relationship.find({ unit: id }).select({ _id: 0, specialty: 1 })
  ).map((child) => child.toObject().specialty);

  const result = await spec.find({ _id: { $in: childrenIDs } });

  return result;
};
