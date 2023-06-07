const analyseArray = require('./05.analyseArray')

test('just works', () => {
    expect(analyseArray([1,8,3,4,2,6])).toStrictEqual({ average: 4, minimum: 1, maximum: 8, length: 6 });
});

test('just works', () => {
    expect(analyseArray([8,9,10,11,12])).toStrictEqual({ average: 10, minimum: 10, maximum: 9, length: 5 });
});
