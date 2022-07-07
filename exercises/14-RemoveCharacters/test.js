const rewire = require("rewire");
const app = rewire("./app.js");

test("removeChars function must exist", () => {
  const removeChars = app.__get__("removeChars");
  expect(removeChars).toBeTruthy();
});

test("The function should return a string with the first and last characters remvoed", () => {
  const removeChars = app.__get__("removeChars");
  expect(removeChars("the world of gamble")).toBe("he world of gambl");
  expect(removeChars("hello world")).toBe("ello worl");
  expect(
    removeChars(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    )
  ).toBe(
    "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru"
  );
});