export function indentPriceTrait(value) {
    value = value.toString()
    for (let i = value.length - 3; i > 0; i-=3) {
        value = [value.slice(0, i), ' ', value.slice(i)].join('');
    }
    return value
}
