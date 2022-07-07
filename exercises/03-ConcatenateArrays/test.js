const rewire = require("rewire");
const app = rewire("./app.js");

test("concatenateIntArrays function must exist.", () => {
  const concatenateIntArrays = app.__get__("concatenateIntArrays");
  expect(concatenateIntArrays).toBeTruthy();
});

test("The final output should be a mix of the two arrays", () => {
  const concatenateIntArrays = app.__get__("concatenateIntArrays");

  expect(concatenateIntArrays([2, 3, 4, 6], [7, 12, 32, 64])).toEqual([2, 3, 4, 6, 7, 12, 32, 64]);
  expect(concatenateIntArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
