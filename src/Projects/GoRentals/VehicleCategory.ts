import { IEntitySchemaConfig, EPropertyTypes } from '../../types';

const  VehicleCategory: IEntitySchemaConfig = {
  entity: 'vehicle_category',
  schema_version: 'v4',
  properties: [
    {
      id: 'code',
      name: 'code',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'name',
      name: 'name',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
  ]
};

export default  VehicleCategory;
