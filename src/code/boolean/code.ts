import CodeInterface from '../../code.js';

export default function Code<
    Type
>(
    value : CodeInterface,
    validation : (value:unknown)=>value is Type
) : value is CodeInterface<Type> {

    return validation(value.code);
}
