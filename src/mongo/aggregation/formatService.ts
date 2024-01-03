import { service } from '../schemas/schemas';
import { collectionNames } from '../../constants';

const formatService = async () => {
  await service
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
            from: 'uni',
            localField: 'COD_SERVICO',
            foreignField: 'COD_SERVICO',
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
            COD_SERVICO: 1,
            DES_SERVICO: 1,
            COD_ESTATISTICO: 1,
            identifier: 1,
            active: 1,
            type: 1,
            name: 1,
            contact: 1,
            partOf: 1,
            endpoint: 1,
            alias: 1,
            description: 1,
            CHILDREN: '$result.COD_UNIDADE',
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
            localField: 'COD_SERVICO',
            foreignField: 'COD_SERVICO',
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
            COD_SERVICO: 1,
            DES_SERVICO: 1,
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
            type: {
              coding: {
                code: 'serv',
                display: 'service',
              },
              text: 'service',
            },
            name: '$DES_SERVICO',
            'contact.organization': {
              reference: '$COD_SERVICO',
              display: '$DES_SERVICO',
            },
            partOf: {
              reference: '$COD_DEPARTAMENTO',
              display: '$DES_DEPARTAMENTO',
            },
          },
      },
      {
        $out: collectionNames.serv,
      },
    ])
    .exec()
    .catch((err) => console.log(err));

  await service
    .aggregate([
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
            _id: '$COD_DEPARTAMENTO',
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
              $addToSet: '$UH',
            },
            CR: {
              $first: '$CR',
            },
            COD_DEPARTAMENTO: {
              $first: '$COD_DEPARTAMENTO',
            },
            DES_DEPARTAMENTO: {
              $first: '$DES_DEPARTAMENTO',
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
        $out: collectionNames.dept,
      },
    ])
    .exec()
    .catch((err) => console.log(err));

  await service.aggregate([
    {
      $merge: { into: 'orgs' },
    },
  ]);
};

export default formatService;
