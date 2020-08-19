(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/code", "@dikac/t-function/assert/callback", "./throwable/code"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const code_1 = require("../boolean/code");
    const callback_1 = require("@dikac/t-function/assert/callback");
    const code_2 = require("./throwable/code");
    /**
     * assert {@param value} is compatible with {@link CodeInterface}
     *
     * @param value
     *
     * @param error
     * throw {@link Error} from {@param error} if  {@param value} is not compatible
     */
    function Code(value, error = code_2.default) {
        callback_1.default(value, code_1.default, error);
    }
    exports.default = Code;
});
//# sourceMappingURL=code.js.map