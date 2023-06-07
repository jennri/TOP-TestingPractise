//imports the object and calls it myFunc
//calling upon is like object, myFuncs -> calculator -> any operation
const myFuncs = require('./03.calculator');

test('adding 1+2 = 3', () => {
    expect(myFuncs.calculator.add(1,2)).toBe(3);
});

test('subtracting 1-2 = -1', () => {
    expect(myFuncs.calculator.subtract(1,2)).toBe(-1);
});

test('multiplying 2*4 = 8', () => {
    expect(myFuncs.calculator.multiply(2,4)).toBe(8);
});

test('multiplying 2.5*6.5 = 16.25', () => {
    expect(myFuncs.calculator.multiply(2.5,6.5)).toBe(16.25);
});

test('divide 9/3 = 3', () => {
    expect(myFuncs.calculator.divide(9,3)).toBe(3);
});

test('divide 9/2 = 4.5', () => {
    expect(myFuncs.calculator.divide(9,2)).toBe(4.5);
});


//Testing for non numbers

test('divide 9/"2" = undefined', () => {
    expect(myFuncs.calculator.divide(9,"2")).toBe(undefined);
});

test('non numbers', () => {
    expect(myFuncs.calculator.divide(9,"hello")).toBe(undefined);
});



