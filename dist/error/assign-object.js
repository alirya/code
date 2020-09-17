import Assign from "./assign";
/**
 * assign {@link Code} to {@param error}, only assign {@link Code.code} value
 *
 * @param error
 * @param code
 */
export default function AssignObject(error, code) {
    return Assign(error, code.code);
}
//# sourceMappingURL=assign-object.js.map