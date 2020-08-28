import CodeInterface from "../code";
/**
 * assert {@param value} is compatible with {@link CodeInterface}
 *
 * @param value
 *
 * @param error
 * throw {@link Error} from {@param error} if  {@param value} is not compatible
 */
export default function Code(value: object, error?: (value: object) => Error): asserts value is CodeInterface;
