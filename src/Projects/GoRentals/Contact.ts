import { IEntitySchemaConfig, EPropertyTypes } from '../../types';

const Contact: IEntitySchemaConfig = {
  entity: 'contact',
  schema_version: 'v4',
  properties: [
    {
      name: 'first_name',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      name: 'last_name',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      name: 'is_primary',
      type: EPropertyTypes.BOOLEAN,
      nullable: false,
    },
    {
      name: 'birthdate',
      nullable: true,
      type: EPropertyTypes.NUMBER,
    },
    {
      name: 'emails',
      nullable: true,
      type: EPropertyTypes.ARRAY,
      data_type: EPropertyTypes.STRING,
    },
    {
      name: 'phone_number',
      type: EPropertyTypes.COLLECTION,
      nullable: true,
      additional_properties: [
        {
          name: 'number',
          type: EPropertyTypes.STRING,
          nullable: false,
        },
      ],
    },
    {
      name: 'insurance',
      type: EPropertyTypes.OBJECT,
      nullable: true,
      additional_properties: [
        {
          name: 'company_name',
          type: EPropertyTypes.STRING,
          nullable: false,
        },
        {
          name: 'insured_date',
          type: EPropertyTypes.NUMBER,
          nullable: false,
        },
      ],
    },
  ],
};

export default Contact;
