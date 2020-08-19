import Code from "../code";

/**
 * get {@link Code.code} type
 */
type Infer<Type> = Type extends Code<infer As> ? As : never;

export default Infer;
