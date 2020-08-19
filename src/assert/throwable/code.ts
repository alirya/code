import CodeType from "../../boolean/string/code";
import Function from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/throwable/callback";

/**
 * Standard Error for not compatible with code
 */
export default function Code(
    string : object,
) : Error {

    return new TypeError(CodeType(false, string));
}
