import { GroupV4Entity } from '@dnamicro/gorentals-schema-core/build/src/group_v4';
export default interface IGroupV4 extends GroupV4Entity {
    attribute?: IGroupV4Attr;
}
export interface IGroupV4Attr {
    country: string;
    address: string;
    city: string;
    latitude: number;
    zip_code: string;
    emails: string[];
    phone_numbers: string[];
    category_strings: string[];
    primary_phone_number: string;
    street: string;
    name: string;
    primary_email: string;
    unit_apartment_suite: string;
    state: string;
    categories: ICategories[];
    longitude: number;
    status: string;
}
export interface ICategories {
    name: string;
    category_type: string;
    id: string;
}
//# sourceMappingURL=GroupV4.d.ts.map