import { BookingV4Entity } from '@dnamicro/gorentals-schema-core/build/src/booking_v4';

export default interface IBookingV4 extends BookingV4Entity {
  attribute?: IBookingV4Attr;
}

export interface IBookingV4Attr {
  category: string;
  category_strings: string[];
  categories: ICategories[];
  addon_charge: Record<string, IAddonCharge>;
  booking_type: IBookingType;
  guest_name: string;
  guest_tiers: string[];
  tail_number: string;
  pickup_time: number;
  dropoff_time: number;
  pickup_date: number;
  dropoff_date: number;
  pickup_address: IPickupAddress;
  dropoff_address: IPickupAddress;
  pickup_counter: IPickupCounter;
  dropoff_counter: IPickupCounter;
  ra_number: string;
  vehicle_search_filter?: IVehicleSearchFilter;
  vehicle_search_selected_counter_id: string;
  vehicle_search_selected_counter_name: string;
  vehicle_search_advanced_option_filter?: Record<
    string,
    IVehicleSearchAdvancedOptionFilter
  >;
  payment?: IPayment;
  guest_instruction?: string;
}

export interface ICategories {
  id: string;
  name: string;
  category_type: string;
}
export interface IAddonCharge {
  id: string;
  name: string;
  suggested_price_start: number;
  suggested_price_end: number;
  rate: number;
  quantity: number;
}
export interface IBookingType {
  id: string;
  name: string;
  duration_type: string;
}
export interface IPickupAddress {
  id: string;
  provider: string;
  name: string;
  lat: number;
  lng: number;
}
export interface IPickupCounter {
  id: string;
  provider: string;
  name: string;
  location_code: string;
  type: string;
  status: string;
  lat: number;
  lng: number;
}
export interface IVehicleSearchFilter {
  search_text?: string;
  search_pills?: string[];
  filter_options?: string[];
  filter_pill?: Record<string, IFilterPill>;
}
export interface IFilterPill {}
export interface IVehicleSearchAdvancedOptionFilter {}
export interface IPayment {
  total_charge?: number;
  total_auth?: number;
  total_paid?: number;
  remaining_balance?: number;
  direct_bills?: string[];
  credit_cards?: string[];
}
