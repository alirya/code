import Function from "@dikac/t-function/function";
import CodeInterface from "../code";
/**
 * return {@param value} is compatible with {@link CodeInterface}
 *
 * @param value
 *
 * @param error
 * throw {@link Error} from {@param error} if {@param value} is not compatible
 */
export default function Code(value: object, error?: Function<[object], Error>): CodeInterface;
