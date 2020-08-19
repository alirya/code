import Code from "../code";
/**
 * assign {@param code} as {@link Code} value to {@param error}
 *
 * @param error
 * @param code
 */
export default function Assign<CodeTemplate, ErrorTemplate extends Error>(error: ErrorTemplate, code: CodeTemplate): ErrorTemplate & Code<CodeTemplate>;
