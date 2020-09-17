export default function Code(value, validation) {
    if (!validation(value.code)) {
        return false;
    }
    return true;
}
//# sourceMappingURL=code.js.map