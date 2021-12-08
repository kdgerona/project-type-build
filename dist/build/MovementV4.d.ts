import { MovementV4Entity } from '@dnamicro/gorentals-schema-core/build/src/movement_v4';
export default interface IMovementV4 extends MovementV4Entity {
    attribute?: IMovementV4Attr;
}
export interface IMovementV4Attr {
    status: string;
    category: string;
    category_strings: string[];
    categories: ICategories[];
    driver?: IDriver;
    vendor?: IDriver;
    estimated_cost?: string;
    vehicles_and_destinations: IVehiclesAndDestinations[];
}
export interface ICategories {
    id: string;
    name: string;
    category_type: string;
}
export interface IDriver {
    label: string;
    value: string;
    data: any;
    isNew: boolean;
}
export interface IVehiclesAndDestinations {
    movement_purpose: string;
    booking: IDriver;
    other_purpose?: string;
    maintenance?: IDriver;
    destination_type?: string;
    counter?: IDriver;
    partner?: IDriver;
    vendor?: IDriver;
    specific_address?: ISpecificAddress;
    selected_vehicles: ISelectedVehicles;
}
export interface ISpecificAddress {
    country: string;
    address: string;
    city: string;
    street: string;
    latitude: number;
    longitude: number;
    state: string;
    zip_code: string;
}
export interface ISelectedVehicles {
    id: string;
    code: string;
    vin: string;
    year: string;
    exterior_color: string;
    make_name: string;
    model_name: string;
    status: string;
    vehicle_class: any;
}
//# sourceMappingURL=MovementV4.d.ts.map