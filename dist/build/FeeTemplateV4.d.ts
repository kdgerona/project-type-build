import { FeeTemplateV4Entity } from '@dnamicro/gorentals-schema-core/build/src/fee_template_v4';
export default interface IFeeTemplateV4 extends FeeTemplateV4Entity {
    attribute?: IFeeTemplateV4Attr;
}
export interface IFeeTemplateV4Attr {
    fee_template_condition: IFeeTemplateCondition;
    receiving_vendor: IReceivingVendor;
}
export interface IFeeTemplateCondition {
    end_date: number;
    fee_template_counters: IFeeTemplateCounters[];
    formula: string;
    conditions: IConditions[];
    start_date: number;
    enable_conditions: boolean;
}
export interface IFeeTemplateCounters {
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