"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../types");
var VehicleClass = {
    entity: 'vehicle_class',
    schema_version: 'v4',
    properties: [
        {
            id: 'model_name',
            name: 'model_name',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'make_name',
            name: 'make_name',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'model_id',
            name: 'model_id',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'make_id',
            name: 'make_id',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
    ],
};
exports.default = VehicleClass;
