const { add, subtract, multiply, devide } = require("./math.js");

test('addition tests', () => {
    expect(add(1,2)).toBe(3);
})

test('subtraction tests', () => {
    expect(subtract(2,1)).toBe(1);
})

test('multiply tests', () => {
    expect(multiply(3,5)).toBe(15);
})

test('devision tests', () => {
    expect(devide(10,2)).toBe(5);
})