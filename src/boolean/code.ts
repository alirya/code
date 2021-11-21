import CodeInterface from "../code";
import PropertyExists from "@dikac/t-object/property/boolean/exists";

/**
 * check if {@param value} is compatible with {@link CodeInterface}
 */
export default function Code(
    value : object,
) : value is CodeInterface {

    return PropertyExists(value, 'code');
}
