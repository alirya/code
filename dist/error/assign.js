/**
 * assign {@param code} as {@link Code} value to {@param error}
 *
 * @param error
 * @param code
 */
export default function Assign(error, code) {
    return Object.assign(error, {
        code: code
    });
}
//# sourceMappingURL=assign.js.map