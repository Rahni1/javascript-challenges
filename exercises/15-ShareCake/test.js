const rewire = require("rewire");
const app = rewire("./app.js");

test("sliceOfCake function must exist.", () => {
  const sliceOfCake = app.__get__("sliceOfCake");
  expect(sliceOfCake).toBeTruthy();
});

test("Phone number must be formatted correctly.", () => {
  const sliceOfCake = app.__get__("sliceOfCake");

  expect(sliceOfCake(20, 5, 1)).toBe(true);
  expect(sliceOfCake(64, 17, 10)).toBe(false);
  expect(sliceOfCake(400, 45, 3)).toBe(true);
});