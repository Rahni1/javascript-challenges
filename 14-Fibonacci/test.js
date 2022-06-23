const rewire = require("rewire");
const app = rewire("./app.js");

test("fib function must exist.", () => {
  const fib = app.__get__("fib");
  expect(fib).toBeTruthy();
});
test("fib function must return all the fibonacci numbers less than or equal to 10,000", () => {
  const fib = app.__get__("fib");
  expect(fib(22)).toEqual([
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
    2584, 4181, 6765,
  ]);
});
test("fib function must return all the fibonacci numbers for any other given input | Do not hard code your answer!!", () => {
  const fib = app.__get__("fib");
  expect(fib(14)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]);
});
