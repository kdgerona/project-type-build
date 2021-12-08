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
            id: 'address',
            name: 'address',
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
            id: 'unit_apartment_suite',
            name: 'unit_apartment_suite',
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
            id: 'state',
            name: 'state',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'zip_code',
            name: 'zip_code',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'country',
            name: 'country',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'company_name',
            name: 'company_name',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'date_of_birth',
            name: 'date_of_birth',
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
            id: 'phone_numbers',
            name: 'phone_numbers',
            type: types_1.EPropertyTypes.ARRAY,
            data_type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'preferred_contact',
            name: 'preferred_contact',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'primary_phone_number',
            name: 'primary_phone_number',
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
            id: 'coverage',
            name: 'coverage',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'risk_level',
            name: 'risk_level',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'tail_number',
            name: 'tail_number',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'local_contact',
            name: 'local_contact',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'corporate_id',
            name: 'corporate_id',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'guest_job_title',
            name: 'guest_job_title',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'employer',
            name: 'employer',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'license_details',
            name: 'license_details',
            type: types_1.EPropertyTypes.COLLECTION,
            nullable: false,
            additional_properties: [
                {
                    id: 'id',
                    name: 'id',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
                {
                    id: 'license_state',
                    name: 'license_state',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
                {
                    id: 'license_number',
                    name: 'license_number',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
                {
                    id: 'driver_expiry_date',
                    name: 'driver_expiry_date',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
                {
                    id: 'license_country',
                    name: 'license_country',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
            ],
        },
        {
            id: 'claim_hotline',
            name: 'claim_hotline',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'effective_date',
            name: 'effective_date',
            type: types_1.EPropertyTypes.NUMBER,
            nullable: false,
        },
        {
            id: 'expiration_date',
            name: 'expiration_date',
            type: types_1.EPropertyTypes.NUMBER,
            nullable: false,
        },
        {
            id: 'expiry_date',
            name: 'expiry_date',
            type: types_1.EPropertyTypes.NUMBER,
            nullable: false,
        },
        {
            id: 'insurance_company',
            name: 'insurance_company',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'insured_name',
            name: 'insured_name',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'policy_number',
            name: 'policy_number',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'partner_id',
            name: 'partner_id',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'partner_name',
            name: 'partner_name',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'employee_job_title',
            name: 'employee_job_title',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'job_title',
            name: 'job_title',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'status',
            name: 'status',
            type: types_1.EPropertyTypes.STRING,
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
            id: 'categories',
            name: 'categories',
            type: types_1.EPropertyTypes.COLLECTION,
            nullable: false,
            additional_properties: [
                {
                    id: 'id',
                    name: 'id',
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
                    id: 'category_type',
                    name: 'category_type',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
            ],
        },
        {
            id: 'latitude',
            name: 'latitude',
            type: types_1.EPropertyTypes.NUMBER,
            nullable: false,
        },
        {
            id: 'longitude',
            name: 'longitude',
            type: types_1.EPropertyTypes.NUMBER,
            nullable: false,
        },
        {
            id: 'payment_methods',
            name: 'payment_methods',
            type: types_1.EPropertyTypes.COLLECTION,
            nullable: false,
            additional_properties: [
                {
                    id: 'account_billing_address',
                    name: 'account_billing_address',
                    type: types_1.EPropertyTypes.OBJECT,
                    nullable: false,
                    additional_properties: [
                        {
                            id: 'country',
                            name: 'country',
                            type: types_1.EPropertyTypes.STRING,
                            nullable: false,
                        },
                        {
                            id: 'address',
                            name: 'address',
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
                            id: 'street',
                            name: 'street',
                            type: types_1.EPropertyTypes.STRING,
                            nullable: false,
                        },
                        {
                            id: 'latitude',
                            name: 'latitude',
                            type: types_1.EPropertyTypes.NUMBER,
                            nullable: false,
                        },
                        {
                            id: 'state',
                            name: 'state',
                            type: types_1.EPropertyTypes.STRING,
                            nullable: false,
                        },
                        {
                            id: 'zip_code',
                            name: 'zip_code',
                            type: types_1.EPropertyTypes.STRING,
                            nullable: false,
                        },
                        {
                            id: 'longitude',
                            name: 'longitude',
                            type: types_1.EPropertyTypes.NUMBER,
                            nullable: false,
                        },
                    ],
                },
                {
                    id: 'billing_address',
                    name: 'billing_address',
                    type: types_1.EPropertyTypes.BOOLEAN,
                    nullable: false,
                },
                {
                    id: 'card_holder',
                    name: 'card_holder',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
                {
                    id: 'credit_card_number',
                    name: 'credit_card_number',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
                {
                    id: 'credit_expiry',
                    name: 'credit_expiry',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
                {
                    id: 'cvv',
                    name: 'cvv',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
                {
                    id: 'default_payment_method',
                    name: 'default_payment_method',
                    type: types_1.EPropertyTypes.BOOLEAN,
                    nullable: false,
                },
                {
                    id: 'token',
                    name: 'token',
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
};
exports.default = Contact;
