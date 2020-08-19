(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./assign"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const assign_1 = require("./assign");
    /**
     * assign {@link Code} to {@param error}, only assign {@link Code.code} value
     *
     * @param error
     * @param code
     */
    function AssignObject(error, code) {
        return assign_1.default(error, code.code);
    }
    exports.default = AssignObject;
});
//# sourceMappingURL=assign-object.js.map