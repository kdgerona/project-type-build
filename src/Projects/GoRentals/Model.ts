import { IEntitySchemaConfig, EPropertyTypes } from '../../types';

const Model: IEntitySchemaConfig = {
  entity: 'model',
  schema_version: 'v4',
  properties: [
    //recall pa ni master jane 1 month ago pa
    // existing attribute so far
    {
      id: 'code',
      name: 'code',
      type: EPropertyTypes.STRING,
      nullable: true,
    },
    {
      id: 'default_price_end',
      name: 'default_price_end',
      type: EPropertyTypes.STRING,
      nullable: true,
    },
    {
      id: 'default_price_start',
      name: 'default_price_start',
      type: EPropertyTypes.STRING,
      nullable: true,
    },
    {
      id: 'name',
      name: 'name',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
  ],
};

export default Model;
