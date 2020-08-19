(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Code(valid, value) {
        if (valid) {
            return `value is compatible with Code interface`;
        }
        else {
            return `value is not compatible with Code interface`;
        }
    }
    exports.default = Code;
});
//# sourceMappingURL=code.js.map