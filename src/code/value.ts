import Infer from './infer';
import Code from '../code';

/**
 * get {@link Code.code} value
 *
 * @param code
 * object tobe extracted
 */
export default function Value<CodeTemplate extends Code>(code : CodeTemplate) : Infer<CodeTemplate> {

    return <Infer<CodeTemplate>> code.code;
}
