var map = {
    'gbp': '£',
    'usd': '$',
    'cny': '¥',
    'jpy': '¥',
    'eur': '€',
    'afn': '؋',
    'awg': 'ƒ',
    'azn': '₼',
    'khr': '៛',
    'cup': '₱',
    'crc': '₡',
    'vnd': '₫',
    'krw': '₩',
    'kpw': '₩'
};

function symbol(code) {
    if (!code) {
        throw new Error('Code must be specified');
    }
    code = code.toLowerCase();
    return map[code] ? map[code] : code;
}

export default {
    symbol
};