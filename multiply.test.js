const multiply = require('./multiply');

test('multiply 9 * 9 to equal 81', () => {
    expect(multiply(9, 9)).toBe(81);
});