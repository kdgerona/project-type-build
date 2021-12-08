"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../types");
var PriceTemplate = {
    entity: 'price_template',
    schema_version: 'v4',
    properties: [
        {
            id: 'name',
            name: 'name',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'partner_ids',
            name: 'partner_ids',
            type: types_1.EPropertyTypes.ARRAY,
            data_type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'guest_ids',
            name: 'guest_ids',
            type: types_1.EPropertyTypes.ARRAY,
            data_type: types_1.EPropertyTypes.STRING,
            nullable: false
        }
    ]
};
exports.default = PriceTemplate;
