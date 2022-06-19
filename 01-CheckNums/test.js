const rewire = require("rewire");
const app = rewire("./app.js");

test('There should be a checkNums function', () => { 
    const checkNums = app.__get__("checkNums");
    expect(checkNums).toBeTruthy(); 
})

test('If num2 is bigger than num1 you should return true', () => {
    const checkNums = app.__get__("checkNums");
    expect(checkNums(4, 23)).toBe(true);
});

test("If num2 is less than num1 you should return false", () => {
    const checkNums = app.__get__("checkNums");
    expect(checkNums(23, 4)).toBe(false);
});

test("If num1 is EQUAL to num2 you should return -1", () => {
    const checkNums = app.__get__("checkNums");
    expect(checkNums(5, 5)).toBe(-1);
});