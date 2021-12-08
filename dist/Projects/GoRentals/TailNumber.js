"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../types");
var TailNumber = {
    entity: 'tail_number',
    schema_version: 'v4',
    properties: [
        {
            id: 'aircraft_model',
            name: 'aircraft_model',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'code',
            name: 'code',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'name',
            name: 'name',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'associated_partner_id',
            name: 'associated_partner_id',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'id',
            name: 'id',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'type',
            name: 'type',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'associated_partner_name',
            name: 'associated_partner_name',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'country_of_registration',
            name: 'country_of_registration',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
    ]
};
exports.default = TailNumber;
