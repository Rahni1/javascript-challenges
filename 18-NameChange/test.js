const rewire = require("rewire");
const app = rewire("./app.js");

test("Person object function must exist", () => {
  const Person = app.__get__("Person");
  expect(Person).toBeTruthy();
});
test("changeName method must exist", () => {
  const changeName = app.__get__("changeName");
  expect(changeName).toBeTruthy();
});
test("firstName property must exist in Person object", () => {
  const firstName = app.__get__("firstName");
  expect(firstName).toBeTruthy();
});
test("lastName property must exist in Person object", () => {
  const lastName = app.__get__("lastName");
  expect(lastName).toBeTruthy();
});

test("I should be able to change my last name.", () => {
    const Person = app.__get__("Person")
    const personTest = new Person("Max", "Gonz")

    personTest.changeName("Smith")

    expect(personTest.firstName).toBe("Smith");
})
