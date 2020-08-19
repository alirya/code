import Guard from "../boolean/code";
import Function from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/callback";
import StringError from "./throwable/code";
import CodeInterface from "../code";

/**
 * assert {@param value} is compatible with {@link CodeInterface}
 *
 * @param value
 *
 * @param error
 * throw {@link Error} from {@param error} if  {@param value} is not compatible
 */
export default function Code(
    value : object,
    error : Function<[object], Error> = StringError
) : asserts value is CodeInterface {

    Callback(value, Guard, error);
}
