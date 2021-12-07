"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructDictionaryTypes = exports.constructCollectionTypes = exports.constructObjectTypes = exports.constructInterface = exports.constructArrayTypes = exports.constructBasicTypes = void 0;
var types_1 = require("../types");
var utils_1 = require("./utils");
var constructBasicTypes = function (config) {
    var _a = config !== null && config !== void 0 ? config : {}, name = _a.name, type = _a.type, nullable = _a.nullable;
    return "".concat(name).concat((0, utils_1.isNullableType)(nullable), ": ").concat(type);
};
exports.constructBasicTypes = constructBasicTypes;
var constructArrayTypes = function (config) {
    var _a = config !== null && config !== void 0 ? config : {}, name = _a.name, data_type = _a.data_type, nullable = _a.nullable, link = _a.link;
    return "".concat(name).concat((0, utils_1.isNullableType)(nullable), ": ").concat(link ? "I".concat((0, utils_1.toPascalCase)(link)) : data_type, "[]");
};
exports.constructArrayTypes = constructArrayTypes;
var constructInterface = function (properties) {
    if (properties === void 0) { properties = []; }
    var insulated_interface = properties.reduce(function (acc, curr) {
        var type = (curr !== null && curr !== void 0 ? curr : {}).type;
        switch (type) {
            case types_1.EPropertyTypes.STRING:
            case types_1.EPropertyTypes.NUMBER:
            case types_1.EPropertyTypes.BOOLEAN:
            case types_1.EPropertyTypes.ANY:
                var contructed_basic_type = (0, exports.constructBasicTypes)(curr);
                return __assign(__assign({}, acc), { root_properties: __spreadArray(__spreadArray([], acc.root_properties, true), [contructed_basic_type], false) });
            case types_1.EPropertyTypes.ARRAY:
                var contructed_array_type = (0, exports.constructArrayTypes)(curr);
                return __assign(__assign({}, acc), { root_properties: __spreadArray(__spreadArray([], acc.root_properties, true), [contructed_array_type], false) });
            case types_1.EPropertyTypes.OBJECT:
                var _a = (0, exports.constructObjectTypes)(curr), object_root_properties = _a.root_properties, object_built_schemas = _a.built_schemas;
                return __assign(__assign({}, acc), { root_properties: __spreadArray(__spreadArray([], acc.root_properties, true), object_root_properties, true), built_schemas: __spreadArray(__spreadArray([], acc.built_schemas, true), object_built_schemas, true) });
            case types_1.EPropertyTypes.COLLECTION:
                var _b = (0, exports.constructCollectionTypes)(curr), collection_root_properties = _b.root_properties, collection_built_schemas = _b.built_schemas;
                return __assign(__assign({}, acc), { root_properties: __spreadArray(__spreadArray([], acc.root_properties, true), collection_root_properties, true), built_schemas: __spreadArray(__spreadArray([], acc.built_schemas, true), collection_built_schemas, true) });
            case types_1.EPropertyTypes.DICTIONARY:
                var _c = (0, exports.constructDictionaryTypes)(curr), dictionary_root_properties = _c.root_properties, dictionary_built_schemas = _c.built_schemas;
                return __assign(__assign({}, acc), { root_properties: __spreadArray(__spreadArray([], acc.root_properties, true), dictionary_root_properties, true), built_schemas: __spreadArray(__spreadArray([], acc.built_schemas, true), dictionary_built_schemas, true) });
            default:
                return acc;
        }
    }, {
        root_properties: [],
        built_schemas: [],
    });
    return insulated_interface;
};
exports.constructInterface = constructInterface;
var constructObjectTypes = function (config) {
    var _a = config !== null && config !== void 0 ? config : {}, name = _a.name, nullable = _a.nullable, additional_properties = _a.additional_properties, link = _a.link;
    var interface_name = "I".concat((0, utils_1.toPascalCase)(link || name));
    if (link) {
        return {
            root_properties: [
                "".concat(name).concat((0, utils_1.isNullableType)(nullable), ": ").concat(interface_name),
            ],
            built_schemas: [],
        };
    }
    var _b = (0, exports.constructInterface)(additional_properties), _c = _b.root_properties, root_properties = _c === void 0 ? [] : _c, _d = _b.built_schemas, built_schemas = _d === void 0 ? [] : _d;
    var built_schema = "export interface ".concat(interface_name, " {\n      ").concat(root_properties.join('\n'), "\n  }");
    return {
        root_properties: ["".concat(name).concat((0, utils_1.isNullableType)(nullable), ": ").concat(interface_name)],
        built_schemas: __spreadArray([built_schema], built_schemas, true),
    };
};
exports.constructObjectTypes = constructObjectTypes;
var constructCollectionTypes = function (config) {
    var _a = config !== null && config !== void 0 ? config : {}, name = _a.name, nullable = _a.nullable, additional_properties = _a.additional_properties, link = _a.link;
    var interface_name = "I".concat((0, utils_1.toPascalCase)(link || name));
    if (link) {
        return {
            root_properties: [
                "".concat(name).concat((0, utils_1.isNullableType)(nullable), ": ").concat(interface_name, "[]"),
            ],
            built_schemas: [],
        };
    }
    var _b = (0, exports.constructInterface)(additional_properties), _c = _b.root_properties, root_properties = _c === void 0 ? [] : _c, _d = _b.built_schemas, built_schemas = _d === void 0 ? [] : _d;
    var built_schema = "export interface ".concat(interface_name, " {\n        ").concat(root_properties.join('\n'), "\n    }");
    return {
        root_properties: [
            "".concat(name).concat((0, utils_1.isNullableType)(nullable), ": ").concat(interface_name, "[]"),
        ],
        built_schemas: __spreadArray([built_schema], built_schemas, true),
    };
};
exports.constructCollectionTypes = constructCollectionTypes;
var constructDictionaryTypes = function (config) {
    var _a = config !== null && config !== void 0 ? config : {}, name = _a.name, nullable = _a.nullable, additional_properties = _a.additional_properties, link = _a.link;
    var interface_name = "I".concat((0, utils_1.toPascalCase)(link || name));
    if (link) {
        return {
            root_properties: [
                "".concat(name).concat((0, utils_1.isNullableType)(nullable), ": Record<string, ").concat(interface_name, ">"),
            ],
            built_schemas: [],
        };
    }
    var _b = (0, exports.constructInterface)(additional_properties), _c = _b.root_properties, root_properties = _c === void 0 ? [] : _c, _d = _b.built_schemas, built_schemas = _d === void 0 ? [] : _d;
    var built_schema = "export interface ".concat(interface_name, " {\n      ").concat(root_properties.join('\n'), "\n  }");
    return {
        root_properties: [
            "".concat(name).concat((0, utils_1.isNullableType)(nullable), ": Record<string, ").concat(interface_name, ">"),
        ],
        built_schemas: __spreadArray([built_schema], built_schemas, true),
    };
};
exports.constructDictionaryTypes = constructDictionaryTypes;
