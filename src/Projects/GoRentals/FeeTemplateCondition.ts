import { IEntitySchemaConfig, EPropertyTypes } from '../../types';

const FeeTemplateCondition: IEntitySchemaConfig = {
  entity: 'fee_template_condition',
  schema_version: 'v4',
  properties: [
    {
      id: 'formula',
      name: 'formula',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'enable_conditions',
      name: 'enable_conditions',
      type: EPropertyTypes.BOOLEAN,
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
      id: 'conditions',
      name: 'conditions',
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
          id: 'condition_type',
          name: 'condition_type',
          type: EPropertyTypes.STRING,
          nullable: false,
        },
        {
          id: 'duration_type',
          name: 'duration_type',
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
          id: 'duration',
          name: 'duration',
          type: EPropertyTypes.NUMBER,
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
  ],
};

export default FeeTemplateCondition;
