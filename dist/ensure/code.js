(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/code", "../assert/throwable/code"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const code_1 = require("../assert/code");
    const code_2 = require("../assert/throwable/code");
    /**
     * return {@param value} is compatible with {@link CodeInterface}
     *
     * @param value
     *
     * @param error
     * throw {@link Error} from {@param error} if {@param value} is not compatible
     */
    function Code(value, error = code_2.default) {
        code_1.default(value, error);
        return value;
    }
    exports.default = Code;
});
//# sourceMappingURL=code.js.map