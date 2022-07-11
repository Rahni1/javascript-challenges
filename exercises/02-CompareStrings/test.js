const rewire = require("rewire")
const app = rewire("./app.js")

test('Function compareStrings should exist', ()=>{
    const compareStrings = app.__get__("compareStrings")
    expect(compareStrings).toBeTruthy();
});
test('If the strings have the same length it should be true', ()=>{
    const compareStrings = app.__get__("compareStrings")
    expect(compareStrings("hello", "table")).toBe(true);
});
test('If the strings have the different lengths it should be false', ()=>{
    const compareStrings = app.__get__("compareStrings")
    expect(compareStrings("zoo", "spectacular")).toBe(false);
});