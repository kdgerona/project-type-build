"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../types");
var Model = {
    entity: 'model',
    schema_version: 'v4',
    properties: [
        // existing attribute so far- master jane
        {
            id: 'minimum_selection',
            name: 'minimum_selection',
            type: types_1.EPropertyTypes.NUMBER,
            nullable: false,
        },
        {
            id: 'maximum_selection',
            name: 'maximum_selection',
            type: types_1.EPropertyTypes.NUMBER,
            nullable: false,
        },
        {
            id: 'value_type',
            name: 'value_type',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'values',
            name: 'values',
            type: types_1.EPropertyTypes.COLLECTION,
            nullable: true,
            additional_properties: [
                {
                    id: 'label',
                    name: 'label',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                }
            ]
        },
        {
            id: 'id',
            name: 'id',
            type: types_1.EPropertyTypes.STRING,
            nullable: true,
        },
        {
            id: 'label',
            name: 'label',
            type: types_1.EPropertyTypes.STRING,
            nullable: true,
        },
    ],
};
exports.default = Model;
