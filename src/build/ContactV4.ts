import { ContactV4Entity } from '@dnamicro/gorentals-schema-core/build/src/contact_v4';

export interface IContactV4 extends ContactV4Entity {
  attribute?: IContactV4Attr;
}

export interface IContactV4Attr {
  first_name: string;
  last_name: string;
  address: string;
  street: string;
  unit_apartment_suite: string;
  city: string;
  state: string;
  zip_code: string;
  country: string;
  company_name: string;
  date_of_birth: string;
  emails: string[];
  phone_numbers: string[];
  preferred_contact: string;
  primary_phone_number: string;
  primary_email: string;
  coverage: string;
  risk_level: string;
  tail_number: string;
  local_contact: string;
  corporate_id: string;
  guest_job_title: string;
  employer: string;
  license_details: ILicenseDetails[];
  claim_hotline: string;
  effective_date: number;
  expiration_date: number;
  expiry_date: number;
  insurance_company: string;
  insured_name: string;
  policy_number: string;
  partner_id: string;
  partner_name: string;
  employee_job_title: string;
  job_title: string;
  status: string;
  category_strings: string[];
  categories: ICategories[];
  latitude: number;
  longitude: number;
  payment_methods: IPaymentMethods[];
}

export interface ILicenseDetails {
  id: string;
  license_state: string;
  license_number: string;
  driver_expiry_date: string;
  license_country: string;
}
export interface ICategories {
  id: string;
  name: string;
  category_type: string;
}
export interface IPaymentMethods {
  account_billing_address: IAccountBilling_address;
  billing_address: boolean;
  card_holder: string;
  credit_card_number: string;
  credit_expiry: string;
  cvv: string;
  default_payment_method: string;
  token: string;
  id: string;
}
export interface IAccountBilling_address {
  country: string;
  address: string;
  city: string;
  street: string;
  latitude: number;
  state: string;
  zip_code: string;
  longitude: number;
}
