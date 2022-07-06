import CodeInterface from '../code.js';
import {ExistsParameters} from '@alirya/object/property/boolean/exists.js';

/**
 * check if {@param value} is compatible with {@link CodeInterface}
 */
export default function Code(
    value : object,
) : value is CodeInterface {

    return ExistsParameters(value, 'code');
}
