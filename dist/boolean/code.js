import PropertyExists from "@dikac/t-object/property/boolean/exists";
/**
 * check if {@param value} is compatible with {@link CodeInterface}
 */
export default function Code(value) {
    return PropertyExists(value, 'code');
}
//# sourceMappingURL=code.js.map