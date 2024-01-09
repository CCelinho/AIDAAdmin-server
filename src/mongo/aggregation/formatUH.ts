import { uhosp } from '../schemas/schemas';
import { collectionNames } from '../../constants';

const formatUH = async () => {
  await uhosp
    .aggregate([
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
            from: collectionNames.spec,
            localField: 'UH',
            foreignField: 'UH',
            as: 'result',
          },
      },
      {
        $project:
          /**
           * specifications: The fields to
           *   include or exclude.
           */
          {
            _id: 1,
            ID_CP: 1,
            VIG_INI: 1,
            VIG_FIM: 1,
            UH: 1,
            CR: 1,
            COD_DEPARTAMENTO: 1,
            DES_DEPARTAMENTO: 1,
            identifier: 1,
            active: 1,
            type: 1,
            name: 1,
            contact: 1,
            partOf: 1,
            endpoint: 1,
            alias: 1,
            description: 1,
            CHILDREN: 1,
            COD_ESTATISTICO: '$result.COD_ESTATISTICO',
          },
      },
      {
        $set:
          /**
           * field: The field name
           * expression: The expression.
           */
          {
            name: '$UH',
            type: {
              coding: {
                code: 'uh',
                display: 'uh',
              },
              text: 'uh',
            },
            __t: 'uh',
          },
      },
      {
        $unset:
          /**
           * Provide the field name to exclude.
           * To exclude multiple fields, pass the field names in an array.
           */
          '_id',
      },
      {
        $out:
          /**
           * Provide the name of the output collection.
           */
          collectionNames.uh,
      },
    ])
    .exec()
    .catch((err) => console.log(err));

  await uhosp.aggregate([
    {
      $set:
        /**
         * field: The field name
         * expression: The expression.
         */
        {
          parent: '$_id',
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
          path: '$CHILDREN',
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
          localField: 'CHILDREN',
          foreignField: 'COD_DEPARTAMENTO',
          as: 'child',
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
          path: '$child',
        },
    },
    {
      $project: {
        _id: 0,
        parent: '$parent',
        child: '$child._id',
      },
    },
    {
      $set:
        /**
         * field: The field name
         * expression: The expression.
         */
        {
          type: 4,
        },
    },
    {
      $merge:
        /**
         * Provide the name of the output collection.
         */
        {
          into: collectionNames.rels,
        },
    },
  ]);

  await uhosp.aggregate([
    { $unset: 'CHILDREN' },
    {
      $merge: { into: collectionNames.all },
    },
  ]);
};

export default formatUH;
