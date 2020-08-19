import CodeInterface from "../code";
import ObjectProperty from "@dikac/t-object/property/boolean/property";

/**
 * check if {@param value} is compatible with {@link CodeInterface}
 */
export default function Code(
    value : object,
) : value is CodeInterface {

    if(!ObjectProperty(value, 'code')) {

        return false;
    }

    return true;

}
