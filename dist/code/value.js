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
    /**
     * get {@link Code.code} value
     *
     * @param code
     * object tobe extracted
     */
    function Value(code) {
        return code.code;
    }
    exports.default = Value;
});
//# sourceMappingURL=value.js.map