const rewire = require("rewire");
const app = rewire("./app.js");

test("fib function must exist.", () => {
  const fib = app.__get__("fib");
  expect(fib).toBeTruthy();
});
test("fib function must return n amount of Fibonacci numbers.", () => {
  const fib = app.__get__("fib");
  expect(fib(22)).toEqual([
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
    2584, 4181, 6765, 10946
  ]);
  expect(fib(22).length).toBe(22);
  expect(fib(14)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]);
  expect(fib(14).length).toBe(14);
});