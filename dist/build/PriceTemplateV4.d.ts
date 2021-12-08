import { PriceTemplateV4Entity } from '@dnamicro/gorentals-schema-core/build/src/price_template_v4';
export interface IPriceTemplateV4 extends PriceTemplateV4Entity {
    attribute?: IPriceTemplateV4Attr;
}
export interface IPriceTemplateV4Attr {
    name: string;
    partner_ids: string[];
    guest_ids: string[];
}
//# sourceMappingURL=PriceTemplateV4.d.ts.map