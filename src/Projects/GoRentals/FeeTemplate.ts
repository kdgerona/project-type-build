import { IEntitySchemaConfig, EPropertyTypes } from '../../types';

const FeeTemplate: IEntitySchemaConfig = {
  entity: 'fee_template',
  schema_version: 'v4',
  properties: [
    {
      id: 'fee_template_condition',
      name: 'fee_template_condition',
      type: EPropertyTypes.OBJECT,
      nullable: false,
      additional_properties: [
        {
          id: 'end_date',
          name: 'end_date',
          type: EPropertyTypes.NUMBER,
          nullable: false,
        },
        {
          id: 'fee_template_counters',
          name: 'fee_template_counters',
          type: EPropertyTypes.COLLECTION,
          nullable: false,
          additional_properties: [
            {
              id: 'id',
              name: 'id',
              type: EPropertyTypes.STRING,
              nullable: false,
            },
            {
              id: 'label',
              name: 'label',
              type: EPropertyTypes.STRING,
              nullable: false,
            },
            {
              id: 'value',
              name: 'value',
              type: EPropertyTypes.STRING,
              nullable: false,
            },
          ],
        },
        {
          id: 'formula',
          name: 'formula',
          type: EPropertyTypes.STRING,
          nullable: false,
        },
        {
          id: 'conditions',
          name: 'conditions',
          type: EPropertyTypes.COLLECTION,
          nullable: false,
          additional_properties: [
            {
              id: 'duration',
              name: 'duration',
              type: EPropertyTypes.NUMBER,
              nullable: false,
            },
            {
              id: 'duration_type',
              name: 'duration_type',
              type: EPropertyTypes.STRING,
              nullable: false,
            },
            {
              id: 'condition_type',
              name: 'condition_type',
              type: EPropertyTypes.STRING,
              nullable: false,
            },
            {
              id: 'id',
              name: 'id',
              type: EPropertyTypes.STRING,
              nullable: false,
            },
            {
              id: 'operation',
              name: 'operation',
              type: EPropertyTypes.STRING,
              nullable: false,
            },
            {
              id: 'duration_unit',
              name: 'duration_unit',
              type: EPropertyTypes.STRING,
              nullable: false,
            },
          ],
        },
        {
          id: 'start_date',
          name: 'start_date',
          type: EPropertyTypes.NUMBER,
          nullable: false,
        },
        {
          id: 'enable_conditions',
          name: 'enable_conditions',
          type: EPropertyTypes.BOOLEAN,
          nullable: false,
        },
      ],
    },
    {
      id: 'receiving_vendor',
      name: 'receiving_vendor',
      type: EPropertyTypes.OBJECT,
      nullable: false,
      additional_properties: [
        {
          id: 'name',
          name: 'name',
          type: EPropertyTypes.STRING,
          nullable: false,
        },
        {
          id: 'id',
          name: 'id',
          type: EPropertyTypes.STRING,
          nullable: false,
        },
      ],
    },
  ],
};

export default FeeTemplate;
