import { unit } from '../schemas/schemas';
import { collectionNames } from '../../constants';

const formatUnit = async () => {
  await unit
    .aggregate([
      {
        $lookup: {
          from: collectionNames.spec,
          localField: 'COD_UNIDADE',
          foreignField: 'COD_UNIDADE',
          as: 'COD_ESTATISTICO',
        },
      },
      {
        $project: {
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
          COD_UNIDADE: 1,
          DES_UNIDADE: 1,
          COD_ESTATISTICO: '$COD_ESTATISTICO.COD_ESTATISTICO',
          identifier: 1,
          active: 1,
          type: 1,
          name: 1,
          contact: 1,
          partOf: 1,
          endpoint: 1,
          alias: 1,
          description: 1,
        },
      },
      {
        $set: {
          type: {
            coding: {
              code: 'unit',
              display: 'unit',
            },
            text: 'unit',
          },
          name: '$DES_UNIDADE',
          'contact.organization': {
            reference: '$COD_UNIDADE',
            display: '$DES_UNIDADE',
          },
          partOf: {
            reference: '$COD_SERVICO',
            display: '$DES_SERVICO',
          },
        },
      },
      {
        $out: collectionNames.unit,
      },
    ])
    .exec()
    .catch((err) => console.log(err));

  await unit.aggregate([
    {
      $group: {
        _id: '$COD_SERVICO',
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
        COD_SERVICO: {
          $first: '$COD_SERVICO',
        },
        DES_SERVICO: {
          $first: '$DES_SERVICO',
        },
        COD_ESTATISTICO: {
          $first: '$COD_ESTATISTICO',
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
    { $unset: '_id' },
    { $out: collectionNames.serv },
  ]);
};

export default formatUnit;
