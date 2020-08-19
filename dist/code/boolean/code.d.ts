import CodeInterface from "../../code";
import Guard from "@dikac/t-function/boolean/guard";
export default function Code<Type>(value: CodeInterface, validation: Guard<unknown, Type>): value is CodeInterface<Type>;
