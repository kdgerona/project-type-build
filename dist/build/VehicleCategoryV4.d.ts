import { VehicleCategoryV4Entity } from '@dnamicro/gorentals-schema-core/build/src/vehicle_category_v4';
export default interface IVehicleCategoryV4 extends VehicleCategoryV4Entity {
    attribute?: IVehicleCategoryV4Attr;
}
export interface IVehicleCategoryV4Attr {
    code: string;
    name: string;
}
//# sourceMappingURL=VehicleCategoryV4.d.ts.map