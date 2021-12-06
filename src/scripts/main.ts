import { EPropertyTypes } from '../types';
import {
  constructBasicTypes,
  constructArrayTypes,
  constructObjectTypes,
} from './handlers';

const builder = () => {
  console.log(
    'BASIC CONTRUCT',
    constructBasicTypes({
      name: 'first_name',
      type: EPropertyTypes.STRING,
      nullable: true,
    })
  );

  console.log(
    'ARRAY CONTRUCT',
    constructArrayTypes({
      name: 'emails',
      nullable: false,
      type: EPropertyTypes.ARRAY,
      data_type: EPropertyTypes.STRING,
    })
  );

  console.log(
    'OBJECT CONTRUCT',
    constructObjectTypes({
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
        // Test for overly nested objects
        {
          name: 'insurance_two',
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
            {
                name: 'insurance_third',
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
        },
      ],
    })
  );
};

export default builder;
