import { MakeV4Entity } from '@dnamicro/gorentals-schema-core/build/src/make_v4';

export default interface IMakeV4 extends MakeV4Entity {
  attribute?: IMakeV4Attr;
}

export interface IMakeV4Attr {}
