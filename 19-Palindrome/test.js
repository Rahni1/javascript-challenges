const rewire = require("rewire");
const app = rewire("./app.js");

test("palindrome function must exist", () => {
  const palindrome = app.__get__("palindrome");
  expect(palindrome).toBeTruthy();
});

test("The function should return if the string is a palidrone or not (true or false)", () => {
      const palindrome = app.__get__("palindrome");
      expect(palindrome("anna")).toBe(true);
      expect(palindrome("otto")).toBe(true);
      expect(palindrome("12321")).toBe(true);
      expect(palindrome("madman")).toBe(false);
      expect(palindrome("ily")).toBe(false);
})