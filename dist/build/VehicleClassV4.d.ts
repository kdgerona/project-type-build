import { VehicleClassV4Entity } from '@dnamicro/gorentals-schema-core/build/src/vehicle_class_v4';
export default interface IVehicleClassV4 extends VehicleClassV4Entity {
    attribute?: IVehicleClassV4Attr;
}
export interface IVehicleClassV4Attr {
    model_name: string;
    make_name: string;
    model_id: string;
    make_id: string;
}
//# sourceMappingURL=VehicleClassV4.d.ts.map