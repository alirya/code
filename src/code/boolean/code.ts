import CodeInterface from "../../code";

export default function Code<
    Type
>(
    value : CodeInterface,
    validation : (value:unknown)=>value is Type
) : value is CodeInterface<Type> {

    if(!validation(value.code)) {

        return false;
    }

    return true;

}
