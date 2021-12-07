import { ContactV4Entity } from '@dnamicro/gorentals-schema-core/build/src/contact_v4';
export interface IContactV4 extends ContactV4Entity {
    attribute?: IContactV4Attr;
}
export interface IContactV4Attr {
    first_name: string;
    last_name: string;
    is_primary: boolean;
    birthdate?: number;
    emails?: string[];
    phone_number?: IPhoneNumber[];
    insurance?: IInsurance;
}
export interface IPhoneNumber {
    number: string;
}
export interface IInsurance {
    company_name: string;
    insured_date: number;
<<<<<<< HEAD
    insurance?: IInsurance;
}
export interface IInsurance {
    company_name: string;
    insured_date: number;
=======
    insurance_partner?: IInsurance;
>>>>>>> 8de3183f59d990d354ee016d00f9266ce7fe38e0
}
//# sourceMappingURL=ContactV4.d.ts.map