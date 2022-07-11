const rewire = require("rewire");
const app = rewire("./app.js");

test("formatPhoneNumber function must exist.", () => {
  const formatPhoneNumber = app.__get__("formatPhoneNumber");
  expect(formatPhoneNumber).toBeTruthy();
});

test("Phone number must be formatted correctly.", () => {
  const formatPhoneNumber = app.__get__("formatPhoneNumber");

  expect(formatPhoneNumber(7,8,6,7,4,0,2,3,1,4)).toBe("(786) 740-2314");
  expect(formatPhoneNumber(5,1,2,4,6,0,0,1,0,4)).toBe("(512) 460-0104");
  expect(formatPhoneNumber(8,8,1,6,2,0,2,5,1,7)).toBe("(881) 620-2517");
});
