"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../types");
var Group = {
    entity: 'group',
    schema_version: 'v4',
    properties: [
        {
            id: 'country',
            name: 'country',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'address',
            name: 'address',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'city',
            name: 'city',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'latitude',
            name: 'latitude',
            type: types_1.EPropertyTypes.NUMBER,
            nullable: false
        },
        {
            id: 'zip_code',
            name: 'zip_code',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'emails',
            name: 'emails',
            type: types_1.EPropertyTypes.ARRAY,
            data_type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'phone_numbers',
            name: 'phone_numbers',
            type: types_1.EPropertyTypes.ARRAY,
            data_type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'category_strings',
            name: 'category_strings',
            type: types_1.EPropertyTypes.ARRAY,
            data_type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'primary_phone_number',
            name: 'primary_phone_number',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'street',
            name: 'street',
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
            id: 'primary_email',
            name: 'primary_email',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'unit_apartment_suite',
            name: 'unit_apartment_suite',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'state',
            name: 'state',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'categories',
            name: 'categories',
            type: types_1.EPropertyTypes.COLLECTION,
            nullable: false,
            additional_properties: [
                {
                    id: 'name',
                    name: 'name',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false
                },
                {
                    id: 'category_type',
                    name: 'category_type',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false
                },
                {
                    id: 'id',
                    name: 'id',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false
                },
            ]
        },
        {
            id: 'longitude',
            name: 'longitude',
            type: types_1.EPropertyTypes.NUMBER,
            nullable: false
        },
        {
            id: 'status',
            name: 'status',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
    ]
};
exports.default = Group;
