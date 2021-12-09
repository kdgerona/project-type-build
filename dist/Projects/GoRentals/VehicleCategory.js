"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../types");
var VehicleCategory = {
    entity: 'vehicle_category',
    schema_version: 'v4',
    properties: [
        {
            id: 'code',
            name: 'code',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'name',
            name: 'name',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
    ]
};
exports.default = VehicleCategory;
