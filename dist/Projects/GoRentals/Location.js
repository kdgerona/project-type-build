"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../types");
var Location = {
    entity: 'location',
    schema_version: 'v4',
    properties: [
        {
            id: 'country',
            name: 'country',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'city',
            name: 'city',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'open_hours_from',
            name: 'open_hours_from',
            type: types_1.EPropertyTypes.STRING,
            nullable: true,
        },
        {
            id: 'lid',
            name: 'lid',
            type: types_1.EPropertyTypes.STRING,
            nullable: true,
        },
        {
            id: 'latitude',
            name: 'latitude',
            type: types_1.EPropertyTypes.NUMBER,
            nullable: false,
        },
        {
            id: 'available_price_template',
            name: 'available_price_template',
            type: types_1.EPropertyTypes.ARRAY,
            data_type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'open_hours',
            name: 'open_hours',
            type: types_1.EPropertyTypes.ARRAY,
            data_type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'zip_code',
            name: 'zip_code',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'emails',
            name: 'emails',
            type: types_1.EPropertyTypes.ARRAY,
            data_type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'category_strings',
            name: 'category_strings',
            type: types_1.EPropertyTypes.ARRAY,
            data_type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'primary_phone_number',
            name: 'primary_phone_number',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'entity_code',
            name: 'entity_code',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'location_code',
            name: 'location_code',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'street',
            name: 'street',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'location_manager',
            name: 'location_manager',
            type: types_1.EPropertyTypes.OBJECT,
            nullable: false,
            additional_properties: [
                {
                    id: 'last_name',
                    name: 'last_name',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
                {
                    id: 'id',
                    name: 'id',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
                {
                    id: 'first_name',
                    name: 'first_name',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
            ],
        },
        {
            id: 'id',
            name: 'id',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'unit_apartment_suite',
            name: 'unit_apartment_suite',
            type: types_1.EPropertyTypes.STRING,
            nullable: true,
        },
        {
            id: 'state',
            name: 'state',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
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
                    nullable: false,
                },
                {
                    id: 'category_type',
                    name: 'category_type',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
                {
                    id: 'id',
                    name: 'id',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
            ],
        },
        {
            id: 'longitude',
            name: 'longitude',
            type: types_1.EPropertyTypes.NUMBER,
            nullable: false,
        },
        {
            id: 'partner_fbo',
            name: 'partner_fbo',
            type: types_1.EPropertyTypes.OBJECT,
            nullable: false,
            additional_properties: [
                {
                    id: 'name',
                    name: 'name',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
                {
                    id: 'id',
                    name: 'id',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
                {
                    id: 'status',
                    name: 'status',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
            ],
        },
        {
            id: 'address',
            name: 'address',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'open_hours_to',
            name: 'open_hours_to',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'partner_hotel',
            name: 'partner_hotel',
            type: types_1.EPropertyTypes.OBJECT,
            nullable: false,
            additional_properties: [
                {
                    id: 'name',
                    name: 'name',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: true,
                },
                {
                    id: 'id',
                    name: 'id',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: true,
                },
                {
                    id: 'status',
                    name: 'status',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: true,
                },
            ],
        },
        {
            id: 'counter_type',
            name: 'counter_type',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'phone_numbers',
            name: 'phone_numbers',
            type: types_1.EPropertyTypes.ARRAY,
            data_type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'location_name',
            name: 'location_name',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'preferred_contact',
            name: 'preferred_contact',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'name',
            name: 'name',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'primary_email',
            name: 'primary_email',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'region',
            name: 'region',
            type: types_1.EPropertyTypes.OBJECT,
            nullable: false,
            additional_properties: [
                {
                    id: 'name',
                    name: 'name',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
                {
                    id: 'id',
                    name: 'id',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
                {
                    id: 'attribute',
                    name: 'attribute',
                    type: types_1.EPropertyTypes.OBJECT,
                    nullable: false,
                    additional_properties: [
                        {
                            id: 'corporate',
                            name: 'corporate',
                            type: types_1.EPropertyTypes.OBJECT,
                            nullable: false,
                            additional_properties: [
                                {
                                    id: 'name',
                                    name: 'name',
                                    type: types_1.EPropertyTypes.STRING,
                                    nullable: false,
                                },
                                {
                                    id: 'id',
                                    name: 'id',
                                    type: types_1.EPropertyTypes.STRING,
                                    nullable: false,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
exports.default = Location;
