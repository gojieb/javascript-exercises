const repeatString = function (string, num) {
    let stringAdd = string;
    string = '';
    for (let i = 0; i < num; i++) {
        string += stringAdd;
    }
    if (num < 0) {
        return string = 'ERROR';
    } else {
        return string;
    }
};

//test cmd: npm test testname.spec.js

// Do not edit below this line
module.exports = repeatString;
