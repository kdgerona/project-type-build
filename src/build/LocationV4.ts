import { LocationV4Entity } from '@dnamicro/gorentals-schema-core/build/src/location_v4';

export default interface ILocationV4 extends LocationV4Entity {
  attribute?: ILocationV4Attr;
}

export interface ILocationV4Attr {
  country: string;
  city: string;
  open_hours_from?: string;
  lid?: string;
  latitude: number;
  available_price_template: string[];
  open_hours: string[];
  zip_code: string;
  emails: string[];
  category_strings: string[];
  primary_phone_number: string;
  entity_code: string;
  location_code: string;
  street: string;
  location_manager: ILocationManager;
  id: string;
  unit_apartment_suite?: string;
  state: string;
  categories: ICategories[];
  longitude: number;
  partner_fbo: IPartnerFbo;
  address: string;
  open_hours_to: string;
  partner_hotel: IPartnerHotel;
  counter_type: string;
  phone_numbers: string[];
  location_name: string;
  preferred_contact: string;
  name: string;
  primary_email: string;
  region: IRegion;
}

export interface ILocationManager {
  last_name: string;
  id: string;
  first_name: string;
}
export interface ICategories {
  name: string;
  category_type: string;
  id: string;
}
export interface IPartnerFbo {
  name: string;
  id: string;
  status: string;
}
export interface IPartnerHotel {
  name?: string;
  id?: string;
  status?: string;
}
export interface IRegion {
  name: string;
  id: string;
  attribute: IAttribute;
}
export interface IAttribute {
  corporate: ICorporate;
}
export interface ICorporate {
  name: string;
  id: string;
}
