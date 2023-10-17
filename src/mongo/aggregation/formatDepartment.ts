import { department } from '../schemas/schemas';
import { collectionNames } from '../../constants';

const formatDepartment = async () => {
  await department.aggregate([
    {
      $lookup: {
        from: 'ser',
        localField: 'COD_DEPARTAMENTO',
        foreignField: 'COD_DEPARTAMENTO',
        as: 'CHILDREN',
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
      $lookup: {
        from: 'spe',
        localField: 'COD_DEPARTAMENTO',
        foreignField: 'COD_DEPARTAMENTO',
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
      $set: {
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
};

export default formatDepartment;
