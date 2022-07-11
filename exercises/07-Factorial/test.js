const rewire = require("rewire");
const app = rewire("./app.js");

test("factorialize function must exist.", () => {
  const factorialize = app.__get__("factorialize");
  expect(factorialize).toBeTruthy();
});

test("The factorials yield the correct answer.", () => {
  const factorialize = app.__get__("factorialize");

  expect(factorialize(4)).toBe(24);
  expect(factorialize(5)).toBe(120);
  expect(factorialize(13)).toBe(6227020800);
});
