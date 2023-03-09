const divide = require('./divide');

test('divide 5 / 5 to equal 1', () => {
    expect(divide(5, 5)).toBe(1);
});