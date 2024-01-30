import { dept, relationship, serv, unit } from '../mongo/schemas/schemas';
import { Service, Specialty, Unit } from '../graphql/resolvers-types';

export const fetchServParent = async (child: Service) => {
  const id = child._id;

  const parentID = (
    await relationship
      .findOne({ service: id })
      .select({ _id: 0, department: 1 })
  )?.toObject().department;

  const result = await dept.findById(parentID);

  return result;
};

export const fetchUnitParent = async (child: Unit) => {
  const id = child._id;

  const parentID = (
    await relationship.findOne({ unit: id }).select({ _id: 0, service: 1 })
  )?.toObject().service;

  const result = await serv.findById(parentID);

  return result;
};

export const fetchSpecParent = async (child: Specialty) => {
  const id = child._id;

  const parentID = (
    await relationship.findOne({ specialty: id }).select({ _id: 0, unit: 1 })
  )?.toObject().unit;

  const result = await unit.findById(parentID);

  return result;
};
