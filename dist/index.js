"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var promises_1 = require("fs/promises");
var fs_1 = require("fs");
var path_1 = require("path");
var process_1 = require("process");
var bluebird_1 = __importDefault(require("bluebird"));
var builder_1 = __importDefault(require("./scripts/builder"));
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var path_2, write_path_1, file_paths, build_types_file_names, export_files_template, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 7, , 8]);
                path_2 = "".concat((0, process_1.cwd)(), "/src/Projects/GoRentals");
                write_path_1 = "".concat((0, process_1.cwd)(), "/src/build");
                if (!(0, fs_1.existsSync)(write_path_1)) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, promises_1.rm)(write_path_1, {
                        recursive: true,
                        force: true,
                    })];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [4 /*yield*/, (0, promises_1.mkdir)(write_path_1)];
            case 3:
                _a.sent();
                return [4 /*yield*/, (0, promises_1.readdir)(path_2)];
            case 4:
                file_paths = (_a.sent()).map(function (file_name) {
                    return (0, path_1.join)(path_2, file_name);
                });
                return [4 /*yield*/, bluebird_1.default.map(file_paths, function (path) { return __awaiter(void 0, void 0, void 0, function () {
                        var config, file_name;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require(path)); })];
                                case 1:
                                    config = (_a.sent()).default;
                                    return [4 /*yield*/, (0, builder_1.default)(write_path_1, config)];
                                case 2:
                                    file_name = _a.sent();
                                    return [2 /*return*/, file_name];
                            }
                        });
                    }); })];
            case 5:
                build_types_file_names = _a.sent();
                export_files_template = build_types_file_names
                    .map(function (file_name) { return "export * from './".concat(file_name, "'"); })
                    .join('\n');
                return [4 /*yield*/, (0, promises_1.writeFile)("".concat(write_path_1, "/index.ts"), export_files_template)];
            case 6:
                _a.sent();
                return [3 /*break*/, 8];
            case 7:
                e_1 = _a.sent();
                console.error(e_1);
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
main();
