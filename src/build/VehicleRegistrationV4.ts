import { VehicleRegistrationV4Entity } from '@dnamicro/gorentals-schema-core/build/src/vehicle_registration_v4';

export default interface IVehicleRegistrationV4
  extends VehicleRegistrationV4Entity {
  attribute?: IVehicleRegistrationV4Attr;
}

export interface IVehicleRegistrationV4Attr {
  licensing_fee: string;
  license_plate_number: string;
}
