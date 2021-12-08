import { FeeTemplateV4Entity } from '@dnamicro/gorentals-schema-core/build/src/fee_template_v4';
export interface IFeeTemplateV4 extends FeeTemplateV4Entity {
    attribute?: IFeeTemplateV4Attr;
}
export interface IFeeTemplateV4Attr {
    fee_template_conditions: IFeeTemplate_conditions;
    receiving_vendor: IReceivingVendor;
}
export interface IFeeTemplate_conditions {
    end_date: number;
    fee_template_counters: IFeeTemplate_counters[];
    formula: string;
    conditions: IConditions[];
    start_date: number;
    enable_conditions: boolean;
}
export interface IFeeTemplate_counters {
    id: string;
    label: string;
    value: string;
}
export interface IConditions {
    duration: number;
    duration_type: string;
    condition_type: string;
    id: string;
    operation: string;
    duration_unit: string;
}
export interface IReceivingVendor {
    name: string;
    id: string;
}
//# sourceMappingURL=FeeTemplateV4.d.ts.map