import CodeType from "../../boolean/string/code";
/**
 * Standard Error for not compatible with code
 */
export default function Code(string) {
    return new TypeError(CodeType(string, false));
}
//# sourceMappingURL=code.js.map