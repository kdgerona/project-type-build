import { FeeTemplateConditionV4Entity } from '@dnamicro/gorentals-schema-core/build/src/fee_template_condition_v4';

export default interface IFeeTemplateConditionV4
  extends FeeTemplateConditionV4Entity {
  attribute?: IFeeTemplateConditionV4Attr;
}

export interface IFeeTemplateConditionV4Attr {
  formula: string;
  enable_conditions: boolean;
  fee_template_counters: IFeeTemplateCounters[];
  conditions: IConditions[];
}

export interface IFeeTemplateCounters {
  id: string;
  label: string;
  value: string;
}
export interface IConditions {
  id: string;
  condition_type: string;
  duration_type: string;
  operation: string;
  duration: number;
  duration_unit: string;
}
