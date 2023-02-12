import Infer from './infer.js';
import Code from '../code.js';

/**
 * get {@link Code.code} value
 *
 * @param code
 * object tobe extracted
 */
export default function Value<CodeTemplate extends Code>(code : CodeTemplate) : Infer<CodeTemplate> {

    return <Infer<CodeTemplate>> code.code;
}
