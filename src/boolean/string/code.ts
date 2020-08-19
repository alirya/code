export default function Code(
    valid : boolean,
    value : object,
) : string {

    if(valid) {

        return `value is compatible with Code interface`;

    } else {

        return `value is not compatible with Code interface`;
    }
}
