import CodeInterface from "../code";
/**
 * check if {@param value} is compatible with {@link CodeInterface}
 */
export default function Code(value: object): value is CodeInterface;
