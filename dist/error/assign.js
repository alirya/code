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
     * assign {@param code} as {@link Code} value to {@param error}
     *
     * @param error
     * @param code
     */
    function Assign(error, code) {
        return Object.assign(error, {
            code: code
        });
    }
    exports.default = Assign;
});
//# sourceMappingURL=assign.js.map