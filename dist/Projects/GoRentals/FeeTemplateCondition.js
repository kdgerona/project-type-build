"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../types");
var FeeTemplateCondition = {
    entity: 'fee_template_condition',
    schema_version: 'v4',
    properties: [
        {
            id: 'formula',
            name: 'formula',
            type: types_1.EPropertyTypes.STRING,
            nullable: false,
        },
        {
            id: 'enable_conditions',
            name: 'enable_conditions',
            type: types_1.EPropertyTypes.BOOLEAN,
            nullable: false,
        },
        {
            id: 'fee_template_counters',
            name: 'fee_template_counters',
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
                    id: 'label',
                    name: 'label',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
                {
                    id: 'value',
                    name: 'value',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
            ],
        },
        {
            id: 'conditions',
            name: 'conditions',
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
                    id: 'condition_type',
                    name: 'condition_type',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
                {
                    id: 'duration_type',
                    name: 'duration_type',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
                {
                    id: 'operation',
                    name: 'operation',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
                {
                    id: 'duration',
                    name: 'duration',
                    type: types_1.EPropertyTypes.NUMBER,
                    nullable: false,
                },
                {
                    id: 'duration_unit',
                    name: 'duration_unit',
                    type: types_1.EPropertyTypes.STRING,
                    nullable: false,
                },
            ],
        },
    ],
};
exports.default = FeeTemplateCondition;
