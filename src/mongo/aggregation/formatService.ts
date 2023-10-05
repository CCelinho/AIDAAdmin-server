import { service } from '../schemas/schemas';
import { collectionNames } from '../../constants';

const formatService = async () => {
  await service
    .aggregate([
      {
        $lookup: {
          from: 'uni',
          localField: 'COD_SERVICO',
          foreignField: 'COD_SERVICO',
          as: 'result',
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
        $lookup: {
          from: 'spe',
          localField: 'COD_SERVICO',
          foreignField: 'COD_SERVICO',
          as: 'result',
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
        $set: {
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
        $group: {
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
            $first: '$UH',
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
        $unset: '_id',
      },
      {
        $out: collectionNames.dept,
      },
    ])
    .exec()
    .catch((err) => console.log(err));
};

export default formatService;
