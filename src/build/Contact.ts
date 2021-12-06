export interface IContact {
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
  insurance_two?: IInsuranceTwo;
}
export interface IInsuranceTwo {
  company_name_2: string;
  insured_date_2: number;
}
