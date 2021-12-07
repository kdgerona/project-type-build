import { IEntitySchemaConfig, EPropertyTypes } from '../../types';

const Vehicle: IEntitySchemaConfig = {
    entity: 'vehicle',
    schema_version: 'v4',
    properties: [
        {
            id: 'unit_id',
            name: 'unit_id',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'model_id',
            name: 'model_id',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'model_name',
            name: 'model_name',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'make_id',
            name: 'make_id',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'make_name',
            name: 'make_name',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'counter_id',
            name: 'counter_id',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'counter_name',
            name: 'counter_name',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'lot',
            name: 'lot',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'lot_id',
            name: 'lot_id',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'trim_name',
            name: 'trim_name',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'vehicle_class_id',
            name: 'vehicle_class_id',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'vehicle_class_name',
            name: 'vehicle_class_name',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'vehicle_category',
            name: 'vehicle_category',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'vehicle_category_id',
            name: 'vehicle_category_id',
            type: EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'specs',
            name: 'specs',
            type: EPropertyTypes.ANY,
            nullable: false
        },
        {
            id: 'vehicle_status',
            name: 'vehicle_status',
            type: EPropertyTypes.STRING,
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

export default Vehicle;