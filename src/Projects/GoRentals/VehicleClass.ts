import { IEntitySchemaConfig, EPropertyTypes } from '../../types';

const VehicleClass: IEntitySchemaConfig = {
  entity: 'vehicle_class',
  schema_version: 'v4',
  properties: [
    {
      id: 'model_name',
      name: 'model_name',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'make_name',
      name: 'make_name',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'model_id',
      name: 'model_id',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'make_id',
      name: 'make_id',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
  ],
};

export default VehicleClass;
