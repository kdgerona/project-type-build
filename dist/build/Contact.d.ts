import { ContactV4Entity } from '@dnamicro/gorentals-schema-core/build/src/contact_v4';
export interface IContact extends ContactV4Entity {
    attribute?: {
        first_name: string;
        last_name: string;
        is_primary: boolean;
        birthdate?: number;
        emails?: string[];
        phone_number?: IPhoneNumber[];
        insurance?: IInsurance;
    };
}
export interface IPhoneNumber {
    number: string;
}
export interface IInsurance {
    company_name: string;
    insured_date: number;
}
//# sourceMappingURL=Contact.d.ts.map