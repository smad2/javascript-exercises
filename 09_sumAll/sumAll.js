const sumAll = function (num1, num2) {
    if (num1 < 0 || num2 < 0) return 'ERROR';
    if (typeof(num1) != "number" || typeof(num2) != "number") return 'ERROR';
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR';

    let from = Math.min(num1,num2);
    let to = Math.max(num1,num2);

    let sum = 0;
    for (let i = from; i <= to; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
