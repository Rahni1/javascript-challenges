const rewire = require("rewire");
const app = rewire("./app.js");

test("Function divisibleBy5 should exist", () => {
  const divisibleBy5 = app.__get__("divisibleBy5");
  expect(divisibleBy5).toBeTruthy();
});
test("Number should be divisible by 5", () => {
  const divisibleBy5 = app.__get__("divisibleBy5");
  //checks if true when divisible by 5
  expect(divisibleBy5(35)).toBe(true);
  expect(divisibleBy5(30)).toBe(true);
  expect(divisibleBy5(5)).toBe(true);
  expect(divisibleBy5(90)).toBe(true);
  
  // Checks if false when not divisible by 5
  expect(divisibleBy5(14)).toBe(false);
  expect(divisibleBy5(26)).toBe(false);
});
