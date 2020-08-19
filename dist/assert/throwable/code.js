(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/string/code"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const code_1 = require("../../boolean/string/code");
    /**
     * Standard Error for not compatible with code
     */
    function Code(string) {
        return new TypeError(code_1.default(false, string));
    }
    exports.default = Code;
});
//# sourceMappingURL=code.js.map