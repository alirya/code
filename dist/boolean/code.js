(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/property/boolean/property"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const property_1 = require("@dikac/t-object/property/boolean/property");
    /**
     * check if {@param value} is compatible with {@link CodeInterface}
     */
    function Code(value) {
        if (!property_1.default(value, 'code')) {
            return false;
        }
        return true;
    }
    exports.default = Code;
});
//# sourceMappingURL=code.js.map