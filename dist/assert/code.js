import Guard from "../boolean/code";
import Callback from "@dikac/t-function/assert/callback";
import StringError from "./throwable/code";
/**
 * assert {@param value} is compatible with {@link CodeInterface}
 *
 * @param value
 *
 * @param error
 * throw {@link Error} from {@param error} if  {@param value} is not compatible
 */
export default function Code(value, error = StringError) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=code.js.map