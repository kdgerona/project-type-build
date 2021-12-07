"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../types");
var Vehicle = {
    entity: 'vehicle',
    schema_version: 'v4',
    properties: [
        {
            id: 'unit_id',
            name: 'unit_id',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'model_id',
            name: 'model_id',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'model_name',
            name: 'model_name',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'make_id',
            name: 'make_id',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'make_name',
            name: 'make_name',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'counter_id',
            name: 'counter_id',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'counter_name',
            name: 'counter_name',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'lot',
            name: 'lot',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'lot_id',
            name: 'lot_id',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'trim_name',
            name: 'trim_name',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'vehicle_class_id',
            name: 'vehicle_class_id',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'vehicle_class_name',
            name: 'vehicle_class_name',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'vehicle_category',
            name: 'vehicle_category',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'vehicle_category_id',
            name: 'vehicle_category_id',
            type: types_1.EPropertyTypes.STRING,
            nullable: false
        },
        {
            id: 'specs',
            name: 'specs',
            type: types_1.EPropertyTypes.ANY,
            nullable: false
        },
        {
            id: 'vehicle_status',
            name: 'vehicle_status',
            type: types_1.EPropertyTypes.STRING,
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
exports.default = Vehicle;
