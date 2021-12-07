import { VehicleV4Entity } from '@dnamicro/gorentals-schema-core/build/src/vehicle_v4';
export interface IVehicleV4 extends VehicleV4Entity {
    attribute?: IVehicleV4Attr;
}
export interface IVehicleV4Attr {
    unit_id: string;
    model_id: string;
    model_name: string;
    make_id: string;
    make_name: string;
    counter_id: string;
    counter_name: string;
    lot: string;
    lot_id: string;
    trim_name: string;
    vehicle_class_id: string;
    vehicle_class_name: string;
    vehicle_category: string;
    vehicle_category_id: string;
    specs: any;
    vehicle_status: string;
    status: string;
}
//# sourceMappingURL=VehicleV4.d.ts.map