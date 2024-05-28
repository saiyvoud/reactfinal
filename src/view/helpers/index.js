export function timeFormatter (value) {
    if(!value || value === '' || (typeof value !== 'string')) return "--";
    return value.match(/^\d{4}-\d{2}-\d{2}/)[0];
}