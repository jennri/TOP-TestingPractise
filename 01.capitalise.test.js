const capitalise = require('./01.capitalise');

test('capitalise first letter of single word', () => {
    expect(capitalise("croissant")).toBe("Croissant");
});

test('capitalise first letter of single word', () => {
    expect(capitalise("aaA")).toBe("AaA");
});

test('capitalise first letter of single word', () => {
    expect(capitalise("")).toBe("nada");
});