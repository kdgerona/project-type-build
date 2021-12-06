"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../types");
var Contact = {
    entity: 'contact',
    properties: [
        {
            name: 'first_name',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            name: 'last_name',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            name: 'is_primary',
            type: types_1.EPropertyTypes.BOOLEAN,
            nullable: false,
        },
        {
            name: 'birthdate',
            nullable: true,
            type: types_1.EPropertyTypes.NUMBER,
        },
        {
            name: 'emails',
            nullable: true,
            type: types_1.EPropertyTypes.ARRAY,
            data_type: types_1.EPropertyTypes.STRING,
        },
        {
            name: 'phone_number',
            type: types_1.EPropertyTypes.COLLECTION,
            nullable: true,
            additional_properties: [
                {
                    name: 'number',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
            ],
        },
        {
            name: 'insurance',
            type: types_1.EPropertyTypes.OBJECT,
            nullable: true,
            additional_properties: [
                {
                    name: 'company_name',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
                {
                    name: 'insured_date',
                    type: types_1.EPropertyTypes.NUMBER,
                    nullable: false,
                },
            ],
        },
    ],
};
exports.default = Contact;
