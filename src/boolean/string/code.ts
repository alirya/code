export default function Code(
    value : object,
    valid : boolean,
) : string {

    if(valid) {

        return `value is compatible with Code interface`;

    } else {

        return `value is not compatible with Code interface`;
    }
}
