import { specialty } from '../schemas/schemas';
import { collectionNames } from '../../constants';

const formatSpecialty = async () => {
  await specialty
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
            from: 'contacts',
            localField: 'COD_ESTATISTICO',
            foreignField: 'COD_ESTATISTICO',
            as: 'result',
          },
      },
      {
        $unset:
          /**
           * Provide the field name to exclude.
           * To exclude multiple fields, pass the field names in an array.
           */
          ['contact', '__v'],
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
            AGREGA1: 1,
            AGREGA2: 1,
            AGREGA3: 1,
            COD_ESTATISTICO: 1,
            DES_ESTATISTICO: 1,
            COD_UNIDADE: 1,
            DES_UNIDADE: 1,
            COD_SERVICO: 1,
            DES_SERVICO: 1,
            DES_DEPARTAMENTO: 1,
            COD_DEPARTAMENTO: 1,
            identifier: {
              use: '$result.identifier_use',
              type: {
                coding: {
                  system: 'http://hl7.org/fhir/ValueSet/identifier-type',
                  version: '5.0.0',
                  code: '$result.identifier_type',
                  display: 'Provider Number',
                  userSelected: {
                    $toBool: false,
                  },
                },
                text: 'Provider Number',
              },
              system: 'https://www.spms.min-saude.pt',
              value: '$result.identifier_value',
              period: {
                start: '$VIG_INI',
                end: '$VIG_FIM',
              },
              assigner: 'Serviços Partilhados do Ministério da Saúde',
            },
            contact: {
              $map: {
                input: '$result',
                as: 'contactItem',
                in: {
                  purpose: {
                    coding: {
                      system:
                        'https://terminology.hl7.org/5.1.0/ValueSet-contactentity-type.html',
                      version: null,
                      code: '$contactItem.contact_purpose',
                      display: '$contactItem.contact_purpose',
                      userSelected: false,
                    },
                    text: '$contactItem.contact_purpose',
                  },
                  name: {
                    use: 'official',
                    text: '$contactItem.contact_name',
                    prefix: '$contactItem.contact_prefix',
                    suffix: '$contactItem.contact_suffix',
                    period: {
                      start: '$contactItem.contact_start',
                      end: '$contactItem.contact_end',
                    },
                  },
                  telecom: {
                    system: '$contactItem.contact_system',
                    value: '$contactItem.contact_value',
                    use: '$contactItem.contact_use',
                    rank: '$contactItem.contact_rank',
                    period: {
                      start: 'contactItem.contact_start',
                      end: '$contactItem.contact_end',
                    },
                  },
                  address: {
                    use: '$contactItem.address_use',
                    type: '$contactItem.address_text',
                    text: '$contactItem.address_type',
                    line: '$contactItem.address_line',
                    city: '$contactItem.address_city',
                    district: '$contactItem.address_district',
                    state: '$contactItem.address_state',
                    postalCode: '$contactItem.address_postalCode',
                    country: '$contactItem.address_country',
                    period: {
                      start: '$contactItem.address_start',
                      end: '$contactItem.address_end',
                    },
                  },
                  organization: {
                    reference: '$COD_ESTATISTICO',
                    type: 'Organization',
                    identifier: {
                      use: '$contactItem.identifier_use',
                      type: {
                        coding: {
                          system:
                            'https://www.hl7.org/fhir/valueset-identifier-type.html',
                          version: '5.0.0',
                          code: 'PRN',
                          display: 'Provider number',
                          userSelected: false,
                        },
                        text: 'Provider number',
                      },
                      system: 'https://www.spms.min-saude.pt/',
                      value: '$contactItem.identifier_value',
                      period: {
                        start: '$contactItem.address_start',
                        end: '$contactItem.address_end',
                      },
                      assigner: '$COD_UNIDADE',
                    },
                  },
                },
              },
            },
            endpoint: 'https://www.chporto.pt/',
          },
      },
      {
        $addFields:
          /**
           * newField: The new field name.
           * expression: The new field expression.
           */
          {
            active: true,
            type: {
              coding: {
                system: 'uh | dept | serv | unit | spec',
                version: null,
                code: 'spec',
                display: 'specialty',
                userSelected: true,
              },
              text: 'specialty',
            },
            name: '$DES_ESTATISTICO',
            alias: null,
            description: null,
            partOf: {
              reference: '$COD_UNIDADE',
              type: 'organization',
              identifier: null,
              display: '$DES_UNIDADE',
            },
          },
      },
      {
        $out: collectionNames.spec,
      },
    ])
    .exec()
    .catch((err) => console.log(err));

  await specialty.aggregate([
    {
      $group:
        /**
         * _id: The id of the group.
         * fieldN: The first field name.
         */
        {
          _id: '$COD_UNIDADE',
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
          COD_UNIDADE: {
            $first: '$COD_UNIDADE',
          },
          DES_UNIDADE: {
            $first: '$DES_UNIDADE',
          },
          COD_ESTATISTICO: {
            $first: '$COD_ESTATISTICO',
          },
          DES_ESTATISTICO: {
            $first: '$DES_ESTATISTICO',
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
    { $out: collectionNames.unit },
  ]);
};

export default formatSpecialty;
