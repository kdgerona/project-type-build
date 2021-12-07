"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../types");
var Contact = {
    entity: 'contact',
    schema_version: 'v4',
    properties: [
        {
            id: 'first_name',
            name: 'first_name',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'last_name',
            name: 'last_name',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'is_primary',
            name: 'is_primary',
            type: types_1.EPropertyTypes.BOOLEAN,
            nullable: false,
        },
        {
            id: 'birthdate',
            name: 'birthdate',
            nullable: true,
            type: types_1.EPropertyTypes.NUMBER,
        },
        {
            id: 'emails',
            name: 'emails',
            nullable: true,
            type: types_1.EPropertyTypes.ARRAY,
            data_type: types_1.EPropertyTypes.STRING,
        },
        {
            id: 'phone_number',
            name: 'phone_number',
            type: types_1.EPropertyTypes.COLLECTION,
            nullable: true,
            additional_properties: [
                {
                    id: 'number',
                    name: 'number',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
            ],
        },
        {
            id: 'insurance',
            name: 'insurance',
            type: types_1.EPropertyTypes.OBJECT,
            nullable: true,
            additional_properties: [
                {
                    id: 'company_name',
                    name: 'company_name',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
                {
                    id: 'insured_date',
                    name: 'insured_date',
                    type: types_1.EPropertyTypes.NUMBER,
                    nullable: false,
                },
                {
                    id: 'insurance-partner',
                    name: 'insurance_partner',
                    type: types_1.EPropertyTypes.OBJECT,
                    nullable: true,
                    link: 'insurance'
                },
            ],
        },
    ],
};
exports.default = Contact;
