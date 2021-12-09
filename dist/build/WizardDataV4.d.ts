import { WizardDataV4Entity } from '@dnamicro/gorentals-schema-core/build/src/wizard_data_v4';
export default interface IWizardDataV4 extends WizardDataV4Entity {
    attribute?: IWizardDataV4Attr;
}
export interface IWizardDataV4Attr {
    id: string;
    additional_driver_ids?: string[];
    addon_ids?: string[];
    booked_by_id?: string;
    booking_status?: string;
    charge?: ICharge;
    code: string;
    dropoff_address: IDropoffAddress;
    dropoff_counter_id: string;
    entity_code: string;
    event_id: string;
    extras: undefined[];
    guest_id: string;
    image_url: string;
    notification_option: INotificationOption;
    partner_ids: string[];
    partner_representative_id: string;
    payment_option: IPaymentOption;
    pickup_address: IPickupAddress;
    pickup_counter_id: string;
    poc_ids: string[];
    status: string;
    tail_number_id: string;
    user_id: string;
    vehicle_class_id: string;
    vehicle_id: string;
    steps: string;
    attribute: Record<string, IAttribute>;
    partner_details: IPartnerDetails;
    booking_type: IBookingType;
    step_config: IStepConfig;
}
export interface ICharge {
}
export interface IDropoffAddress {
}
export interface INotificationOption {
}
export interface IPaymentOption {
}
export interface IPickupAddress {
}
export interface IAttribute {
    category: string;
    category_settings: string[];
    categories: ICategories[];
    addon_charges: IAddonCharges;
}
export interface ICategories {
    name: string;
    category_type: string;
    id: string;
}
export interface IAddonCharges {
}
export interface IPartnerDetails {
}
export interface IBookingType {
    id: string;
    name: string;
    duration_type: string;
}
export interface IStepConfig {
    current_step: number;
    traverse_counter: number;
    traverse_stap_data: any;
}
//# sourceMappingURL=WizardDataV4.d.ts.map