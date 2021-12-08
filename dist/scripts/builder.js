"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var promises_1 = require("fs/promises");
var handlers_1 = require("./handlers");
var utils_1 = require("./utils");
var builder = function (write_path, config) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, entity, _b, schema_version, properties, pascalized_entity_name, interface_name, _c, root_properties, built_schemas, project_entity, template;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = config !== null && config !== void 0 ? config : {}, entity = _a.entity, _b = _a.schema_version, schema_version = _b === void 0 ? 'v4' : _b, properties = _a.properties;
                pascalized_entity_name = (0, utils_1.toPascalCase)(entity);
                interface_name = "I".concat(pascalized_entity_name);
                _c = (0, handlers_1.constructInterface)(properties), root_properties = _c.root_properties, built_schemas = _c.built_schemas;
                project_entity = "".concat(pascalized_entity_name).concat(schema_version.toUpperCase(), "Entity");
                template = "\n    import { ".concat(project_entity, " } from '@dnamicro/gorentals-schema-core/build/src/").concat(entity, "_").concat(schema_version, "'\n\n    export default interface ").concat(interface_name).concat(schema_version.toUpperCase(), " extends ").concat(project_entity, " {\n      attribute?: ").concat(interface_name).concat(schema_version.toUpperCase(), "Attr\n    }\n\n    export interface ").concat(interface_name).concat(schema_version.toUpperCase(), "Attr {\n      ").concat(root_properties.join('\n'), "\n    }\n\n    ").concat(built_schemas.join('\n'), "\n  ");
                return [4 /*yield*/, (0, promises_1.writeFile)("".concat(write_path, "/").concat(pascalized_entity_name).concat(schema_version.toUpperCase(), ".ts"), template)];
            case 1:
                _d.sent();
                return [2 /*return*/, "".concat(pascalized_entity_name).concat(schema_version.toUpperCase())];
        }
    });
}); };
exports.default = builder;
