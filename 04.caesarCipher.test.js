const capitalise = require('./04.caesarCipher');

test('works with word', () => {
    expect(capitalise("keyboard")).toBe('lfzcpbse');
});

test('works with sentence', () => {
    expect(capitalise("keyboards are cool")).toBe('lfzcpbset bsf dppm');
});

test('works with punctuation 1', () => {
    expect(capitalise("attack at dawn!!")).toBe('buubdl bu ebxo!!');
});

test('works with punctuation 2', () => {
    expect(capitalise("heyo xoxo, :p i *wonder* where u have been??")).toBe("ifzp ypyp, :q j *xpoefs* xifsf v ibwf cffo??");
});