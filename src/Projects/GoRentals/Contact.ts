import { IEntitySchemaConfig, EPropertyTypes } from '../../types';

const Contact: IEntitySchemaConfig = {
  entity: 'contact',
  schema_version: 'v4',
  properties: [
    {
      id: 'first_name',
      name: 'first_name',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'last_name',
      name: 'last_name',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'is_primary',
      name: 'is_primary',
      type: EPropertyTypes.BOOLEAN,
      nullable: false,
    },
    {
      id: 'birthdate',
      name: 'birthdate',
      nullable: true,
      type: EPropertyTypes.NUMBER,
    },
    {
      id: 'emails',
      name: 'emails',
      nullable: true,
      type: EPropertyTypes.ARRAY,
      data_type: EPropertyTypes.STRING,
    },
    {
      id: 'phone_number',
      name: 'phone_number',
      type: EPropertyTypes.COLLECTION,
      nullable: true,
      additional_properties: [
        {
          id: 'number',
          name: 'number',
          type: EPropertyTypes.STRING,
          nullable: false,
        },
      ],
    },
    {
      id: 'insurance',
      name: 'insurance',
      type: EPropertyTypes.OBJECT,
      nullable: true,
      additional_properties: [
        {
          id: 'company_name',
          name: 'company_name',
          type: EPropertyTypes.STRING,
          nullable: false,
        },
        {
          id: 'insured_date',
          name: 'insured_date',
          type: EPropertyTypes.NUMBER,
          nullable: false,
        },
        {
          id: 'insurance-partner',
          name: 'insurance_partner',
          type: EPropertyTypes.OBJECT,
          nullable: true,
          link: 'insurance'
        },
      ],
    },
  ],
};

export default Contact;
