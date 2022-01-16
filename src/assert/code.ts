import Guard from '../boolean/code';
import Callback from '@alirya/function/assert/callback-parameters';
import StringError from './throwable/code';
import CodeInterface from '../code';

/**
 * assert {@param value} is compatible with {@link CodeInterface}
 *
 * @param value
 *
 * @param error
 * throw {@link Error} from {@param error} if  {@param value} is not compatible
 */
export default function Code(
    value : object,
    error : (value:object)=>Error = StringError
) : asserts value is CodeInterface {

    Callback(value, Guard, error);
}
