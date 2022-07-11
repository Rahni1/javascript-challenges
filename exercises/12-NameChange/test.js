const rewire = require("rewire");
const app = rewire("./app.js");
const Person = app.__get__("Person");
const person1 = new Person("John", "Calleway")

test("Person object function must exist", () => {
  expect(Person).toBeTruthy();
});
test("firstName property must exist in Person object", () => {
  expect(person1.firstName).toBe("John");
});
test("lastName property must exist in Person object", () => {
  expect(person1.lastName).toBe("Calleway");
});

test("I should be able to change my last name.", () => {
    person1.changeName("Lucas")

    expect(person1.lastName).toBe("Lucas");
})
