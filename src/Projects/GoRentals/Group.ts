import { IEntitySchemaConfig, EPropertyTypes } from '../../types';

const Group: IEntitySchemaConfig = {
    entity: 'group',
    schema_version: 'v4',
    properties: [
        {
            id: 'country',
            name: 'country',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'address',
            name: 'address',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'city',
            name: 'city',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'latitude',
            name: 'latitude',
            type: EPropertyTypes.NUMBER,
            nullable: false
        },
        {
            id: 'zip_code',
            name: 'zip_code',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'emails',
            name: 'emails',
            type: EPropertyTypes.ARRAY,
            data_type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'phone_numbers',
            name: 'phone_numbers',
            type: EPropertyTypes.ARRAY,
            data_type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'category_strings',
            name: 'category_strings',
            type: EPropertyTypes.ARRAY,
            data_type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'primary_phone_number',
            name: 'primary_phone_number',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'street',
            name: 'street',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'name',
            name: 'name',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'primary_email',
            name: 'primary_email',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'unit_apartment_suite',
            name: 'unit_apartment_suite',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'state',
            name: 'state',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'categories',
            name: 'categories',
            type: EPropertyTypes.COLLECTION,
            nullable: false,
            additional_properties: [
                {
                    id: 'name',
                    name: 'name',
                    type: EPropertyTypes.STRING,
                    nullable: false
                },
                {
                    id: 'category_type',
                    name: 'category_type',
                    type: EPropertyTypes.STRING,
                    nullable: false
                },
                {
                    id: 'id',
                    name: 'id',
                    type: EPropertyTypes.STRING,
                    nullable: false
                },
            ]
        },
        {
            id: 'longitude',
            name: 'longitude',
            type: EPropertyTypes.NUMBER,
            nullable: false
        },
        {
            id: 'status',
            name: 'status',
            type: EPropertyTypes.STRING,
            nullable: false
        },
    ]
}

export default Group;