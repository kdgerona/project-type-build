import { IEntitySchemaConfig, EPropertyTypes } from '../../types';

const PriceTemplate: IEntitySchemaConfig = {
    entity: 'price_template',
    schema_version: 'v4',
    properties: [
        {
            id: 'name',
            name: 'name',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'partner_ids',
            name: 'partner_ids',
            type: EPropertyTypes.ARRAY,
            data_type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'guest_ids',
            name: 'guest_ids',
            type: EPropertyTypes.ARRAY,
            data_type: EPropertyTypes.STRING,
            nullable: false
        }
    ]
}

export default PriceTemplate