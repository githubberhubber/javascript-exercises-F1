const sumAll = function (firstNum, lastNum) {

    if (firstNum < 0 || lastNum < 0 || !Number.isInteger(firstNum) || !Number.isInteger(lastNum)) {
        return "ERROR";
    }

    let low = (firstNum <= lastNum) ? firstNum : lastNum;
    let high = (lastNum <= firstNum) ? firstNum : lastNum;
    let result = 0;

    for (; low <= high; low++) {
        result += low;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;

// const checkinglius = function (thing) {
//     console.log(typeof NaN);
//     console.log(isNaN(thing));
//     console.log(123 == NaN);
//     console.log(123 === NaN);
//     console.log(Object.is(thing, String));
//     console.log();
// };


// checkinglius("kok");