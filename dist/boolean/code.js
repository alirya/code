import PropertyExists from "@dikac/t-object/property/boolean/exists";
/**
 * check if {@param value} is compatible with {@link CodeInterface}
 */
export default function Code(value) {
    if (!PropertyExists(value, 'code')) {
        return false;
    }
    return true;
}
//# sourceMappingURL=code.js.map