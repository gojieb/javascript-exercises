const sumAll = function (a, b) {
    let sum = 0;
    let val1 = 0;
    let val2 = 0;
    if (a < b) {
        val1 = a;
        val2 = b;
    } else {
        val1 = b;
        val2 = a;
    }
    if (a < 0 || b < 0
        || !Number.isInteger(a)
        || !Number.isInteger(b)
        || isNaN(a)
        || isNaN(b)
    ) {
        return 'ERROR';
    }
    for (let i = val1; i <= val2; i++) {
        console.log(`i is ${i}`);
        sum += i;
        console.log(sum);
    }
    return sum;
};

console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;
