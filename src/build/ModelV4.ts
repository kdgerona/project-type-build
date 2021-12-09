import { ModelV4Entity } from '@dnamicro/gorentals-schema-core/build/src/model_v4';

export default interface IModelV4 extends ModelV4Entity {
  attribute?: IModelV4Attr;
}

export interface IModelV4Attr {
  minimum_selection: number;
  maximum_selection: number;
  value_type: string;
  values?: IValues[];
  id?: string;
  label?: string;
}

export interface IValues {
  label: string;
}
