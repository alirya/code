import Guard from '../boolean/code.js';
import {CallbackParameters} from '@alirya/function/assert/callback.js';
import StringError from './throwable/code.js';
import CodeInterface from '../code.js';

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

    CallbackParameters(value, Guard, error);
}
