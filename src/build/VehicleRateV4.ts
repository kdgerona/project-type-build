import { VehicleRateV4Entity } from '@dnamicro/gorentals-schema-core/build/src/vehicle_rate_v4';

export default interface IVehicleRateV4 extends VehicleRateV4Entity {
  attribute?: IVehicleRateV4Attr;
}

export interface IVehicleRateV4Attr {}
