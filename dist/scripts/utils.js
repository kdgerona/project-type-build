"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPascalCase = exports.isNullableType = void 0;
var isNullableType = function (nullable) { return (nullable ? '?' : ''); };
exports.isNullableType = isNullableType;
var toPascalCase = function (string) {
    return string
        .replace(/[-_\s]+/, ' ')
        .split(' ')
        .map(
    //@ts-ignore
    function (_a) {
        var first_char = _a[0], rest_char = _a.slice(1);
        return "".concat(first_char.toUpperCase()).concat(rest_char);
    })
        .join('');
};
exports.toPascalCase = toPascalCase;
