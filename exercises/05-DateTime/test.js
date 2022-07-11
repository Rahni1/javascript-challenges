const rewire = require("rewire");
const app = rewire("./app.js");

test("today variable must exist.", () => {
  const today = app.__get__("today");
  expect(today).toBeTruthy();
});
test("date variable must exist.", () => {
  const date = app.__get__("date");
  expect(date).toBeTruthy();
});
test("time variable must exist.", () => {
  const time = app.__get__("time");
  expect(time).toBeTruthy();
});
test("dateTime variable must exist.", () => {
  const dateTime = app.__get__("dateTime");
  expect(dateTime).toBeTruthy();
});
test("today must be a date object", () => {
    const today = app.__get__("today");
    expect(typeof today).toBe("object");
});

