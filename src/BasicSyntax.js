export function romanToInteger(str) {
    let total = 0;
    let curVal = null;
    let val = null;
    let nextVal = null;

    for (let i = 0; i < str.length; i++) {
        curVal = romanCharToInt(str[i]);
        nextVal = romanCharToInt(str[i + 1]);
        if (nextVal > curVal) {
            val = nextVal - curVal;
            i++;
        } else {
            val = curVal;
        }
        total += val;
    }
    return total;
}

function romanCharToInt(char) {
    switch (char) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return 0;
    }
}
