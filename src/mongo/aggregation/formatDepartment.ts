import { department } from '../schemas/schemas';
import { collectionNames } from '../../constants';

const formatDepartment = async () => {
  await department.aggregate([
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
          from: 'ser',
          localField: 'COD_DEPARTAMENTO',
          foreignField: 'COD_DEPARTAMENTO',
          as: 'CHILDREN',
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
          CHILDREN: '$CHILDREN.COD_SERVICO',
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
          from: 'spe',
          localField: 'COD_DEPARTAMENTO',
          foreignField: 'COD_DEPARTAMENTO',
          as: 'COD_ESTATISTICO',
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
          COD_ESTATISTICO: '$COD_ESTATISTICO.COD_ESTATISTICO',
        },
    },
    {
      $set:
        /**
         * field: The field name
         * expression: The expression.
         */
        {
          type: {
            coding: {
              code: 'dept',
              display: 'department',
            },
            text: 'department',
          },
          name: '$DES_DEPARTAMENTO',
          'contact.organization': {
            reference: '$COD_DEPARTAMENTO',
            display: '$DES_DEPARTAMENTO',
          },
          partOf: {
            reference: 'CHUSA',
            display: 'Centro Hospitalar Universitário Santo António',
          },
        },
    },
    {
      $out: collectionNames.dept,
    },
  ]);
  await department.aggregate([
    {
      $unwind:
        /**
         * path: Path to the array field.
         * includeArrayIndex: Optional name for index.
         * preserveNullAndEmptyArrays: Optional
         *   toggle to unwind null and empty values.
         */
        {
          path: '$UH',
        },
    },
    {
      $group:
        /**
         * _id: The id of the group.
         * fieldN: The first field name.
         */
        {
          _id: '$UH',
          ID_CP: {
            $first: '$ID_CP',
          },
          VIG_INI: {
            $first: '$VIG_INI',
          },
          VIG_FIM: {
            $first: '$VIG_FIM',
          },
          UH: {
            $first: '$UH',
          },
          CR: {
            $first: '$CR',
          },
          identifier: {
            $first: '$identifier',
          },
          active: {
            $first: '$active',
          },
          type: {
            $first: '$type',
          },
          name: {
            $first: '$name',
          },
          contact: {
            $first: '$contact',
          },
          partOf: {
            $first: '$partOf',
          },
          endpoint: {
            $first: '$endpoint',
          },
          alias: {
            $first: '$alias',
          },
          description: {
            $first: '$description',
          },
          CHILDREN: {
            $addToSet: '$COD_DEPARTAMENTO',
          },
        },
    },
    {
      $out:
        /**
         * Provide the name of the output collection.
         */
        collectionNames.uh,
    },
  ]);
};

export default formatDepartment;
