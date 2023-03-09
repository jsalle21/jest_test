const subtract = require('./subtract');

test ('subtracts 4 from 9 equals 5', () => {
    expect(subtract(9, 4)).toBe(5);
});