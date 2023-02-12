import CodeType from '../../boolean/string/code.js';

/**
 * Standard Error for not compatible with code
 */
export default function Code(
    string : object,
) : Error {

    return new TypeError(CodeType(string, false));
}
