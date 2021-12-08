import { TailNumberV4Entity } from '@dnamicro/gorentals-schema-core/build/src/tail_number_v4';

export default interface ITailNumberV4 extends TailNumberV4Entity {
  attribute?: ITailNumberV4Attr;
}

export interface ITailNumberV4Attr {
  aircraft_model: string;
  code: string;
  name: string;
  associated_partner_id: string;
  id: string;
  type: string;
  associated_partner_name: string;
  country_of_registration: string;
}
