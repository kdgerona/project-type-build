import { IEntitySchemaConfig, EPropertyTypes } from '../../types';

const TailNumber: IEntitySchemaConfig = {
    entity: 'tail_number',
    schema_version: 'v4',
    properties: [
        {
            id: 'aircraft_model',
            name: 'aircraft_model',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'code',
            name: 'code',
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
            id: 'associated_partner_id',
            name: 'associated_partner_id',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'id',
            name: 'id',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'type',
            name: 'type',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'associated_partner_name',
            name: 'associated_partner_name',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'country_of_registration',
            name: 'country_of_registration',
            type: EPropertyTypes.STRING,
            nullable: false
        },
    ]
}

export default TailNumber;