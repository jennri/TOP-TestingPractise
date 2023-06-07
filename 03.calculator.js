//Placed each operations in object, calculator.add(a, b) seems to work
//FYI cause i spent way too much time figuring this out
// Number.isInteger(6.5) and Number.isInteger('6')
    //will both return false
// parseFloat(6.5) parseFloat("6.5")
    //will both return a new value, both 6.5
//typeof 6.5, typeof "6.5"
    //returns number and str 


var calculator = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
};

//Some how isInt only works for nonfloats, and parseFloats still allows string number to go thru
//Ahhhh
function validArg(a, b) {
    if (typeof a == 'number' && typeof b == 'number'){
        return true;
    } else {
        return false;
    }
}

function add(a, b) {
    if (validArg(a, b)) {
        return a + b
    }

}
function subtract(a, b) {
    if (validArg(a, b)) {
        return a - b
    }
}

function multiply(a, b) {
    if (validArg(a, b)) {
        return a * b
    }
}

function divide(a, b) {
    if (validArg(a, b)) {
        return a / b
    }

}

//export all the functions and objects we have here, all in an object
module.exports = {
    calculator,
    subtract,
    add,
    multiply,
    divide
}