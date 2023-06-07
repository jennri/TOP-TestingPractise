const capitalise = require('./02.reverseStr');

test('reverse string', () => {
    expect(capitalise("croissant")).toBe("tnassiorc");
});

test('reverse string, works with numbers and symbols', () => {
    expect(capitalise("hello! ^^")).toBe("^^ !olleh");
});