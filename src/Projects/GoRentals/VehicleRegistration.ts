import { IEntitySchemaConfig, EPropertyTypes } from '../../types';

const VehicleRegistration: IEntitySchemaConfig = {
  entity: 'vehicle_registration',
  schema_version: 'v4',
  properties: [
    {
      id: 'licensing_fee',
      name: 'licensing_fee',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'license_plate_number',
      name: 'license_plate_number',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
  ],
};

export default VehicleRegistration;
