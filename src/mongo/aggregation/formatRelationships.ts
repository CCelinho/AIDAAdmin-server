import { collectionNames } from '../../constants';
import { specialty } from '../schemas/schemas';

const formatRelationships = async () => {
  await specialty.aggregate([
    {
      $lookup:
        /**
         * from: The target collection.
         * localField: The local join field.
         * foreignField: The target join field.
         * as: The name for the results.
         * pipeline: Optional pipeline to run on the foreign collection.
         * let: Optional variables to use in the pipeline field stages.
         */
        {
          from: collectionNames.unit,
          localField: 'COD_UNIDADE',
          foreignField: 'COD_UNIDADE',
          as: 'unit',
        },
    },
    {
      $unwind:
        /**
         * path: Path to the array field.
         * includeArrayIndex: Optional name for index.
         * preserveNullAndEmptyArrays: Optional
         *   toggle to unwind null and empty values.
         */
        {
          path: '$unit',
        },
    },
    {
      $lookup:
        /**
         * from: The target collection.
         * localField: The local join field.
         * foreignField: The target join field.
         * as: The name for the results.
         * pipeline: Optional pipeline to run on the foreign collection.
         * let: Optional variables to use in the pipeline field stages.
         */
        {
          from: collectionNames.serv,
          localField: 'COD_SERVICO',
          foreignField: 'COD_SERVICO',
          as: 'service',
        },
    },
    {
      $unwind:
        /**
         * path: Path to the array field.
         * includeArrayIndex: Optional name for index.
         * preserveNullAndEmptyArrays: Optional
         *   toggle to unwind null and empty values.
         */
        {
          path: '$service',
        },
    },
    {
      $lookup:
        /**
         * from: The target collection.
         * localField: The local join field.
         * foreignField: The target join field.
         * as: The name for the results.
         * pipeline: Optional pipeline to run on the foreign collection.
         * let: Optional variables to use in the pipeline field stages.
         */
        {
          from: collectionNames.dept,
          localField: 'COD_DEPARTAMENTO',
          foreignField: 'COD_DEPARTAMENTO',
          as: 'department',
        },
    },
    {
      $unwind:
        /**
         * path: Path to the array field.
         * includeArrayIndex: Optional name for index.
         * preserveNullAndEmptyArrays: Optional
         *   toggle to unwind null and empty values.
         */
        {
          path: '$department',
        },
    },
    {
      $lookup:
        /**
         * from: The target collection.
         * localField: The local join field.
         * foreignField: The target join field.
         * as: The name for the results.
         * pipeline: Optional pipeline to run on the foreign collection.
         * let: Optional variables to use in the pipeline field stages.
         */
        {
          from: collectionNames.uh,
          localField: 'UH',
          foreignField: 'UH',
          as: 'uh',
        },
    },
    {
      $unwind:
        /**
         * path: Path to the array field.
         * includeArrayIndex: Optional name for index.
         * preserveNullAndEmptyArrays: Optional
         *   toggle to unwind null and empty values.
         */
        {
          path: '$uh',
        },
    },
    {
      $project:
        /**
         * field: The field name
         * expression: The expression.
         */
        {
          _id: 0,
          uh: '$uh._id',
          department: '$department._id',
          service: '$service._id',
          unit: '$unit._id',
          specialty: '$_id',
        },
    },
    {
      $out:
        /**
         * Provide the name of the output collection.
         */
        collectionNames.rels,
    },
  ]);
};

export default formatRelationships;
