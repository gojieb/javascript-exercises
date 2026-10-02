const removeFromArray = function (arr, ...a) {
    console.log(`l2 a is ${a}`)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === a[0]) {
            arr.splice(i, 1);
            i = -1;
        }
        if (arr.includes(a[0])) {
            continue
        } else {
            a.splice(0, 1);
        }
    }
    return arr;
};

const array = [1, 2, 2, 3, 4];

console.log(removeFromArray(array, 1, 2));

// Do not edit below this line
module.exports = removeFromArray;
