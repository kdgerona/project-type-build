"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../types");
var VehicleRegistration = {
    entity: 'vehicle_registration',
    schema_version: 'v4',
    properties: [
        {
            id: 'licensing_fee',
            name: 'licensing_fee',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'license_plate_number',
            name: 'license_plate_number',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
    ],
};
exports.default = VehicleRegistration;
