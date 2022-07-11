const rewire = require("rewire");
const app = rewire("./app.js");

test("numLimit function must exist.", () => {
  const numLimit = app.__get__("numLimit");
  expect(numLimit).toBeTruthy();
});

test("The missing angle is correctly classified.", () => {
  const numLimit = app.__get__("numLimit");

  expect(numLimit(25, 30, 50)).toBe(30);
  expect(numLimit(17,10, 71)).toBe(17);
  expect(numLimit(102, 26, 90)).toBe(90);
  expect(numLimit(54, 36, 54)).toBe(54);
  expect(numLimit(24, 24, 47)).toBe(24);
});
