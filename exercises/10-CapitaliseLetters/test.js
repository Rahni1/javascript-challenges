const fs = require("fs");
const path = require("path");

jest.dontMock("fs");
//here we are going to store and accumulate (concatenate) all the console log's from the exercise
let _buffer = "";
let _log = console.log;

// lets override the console.log function to mock it,
// but we are also going to save what supposed to be the ouput of the console inside _buffer
global.console.log = console.log = jest.fn((text) => (_buffer += text + "\n"));

test("You should be printing your result", function () {
  /*
        Here is how to mock the alert function:
        https://stackoverflow.com/questions/41885841/how-to-mock-the-javascript-window-object-using-jest
    */

  //then I import the index.js (which should have the alert() call inside)
  const file = require("./app.js");

  //and I expect the console.log to be already called just one time.
  expect(console.log.mock.calls.length).toBe(1);
});


const rewire = require("rewire");
const app = rewire("./app.js");

test("caps function must exist", ()=>{
    const caps = app.__get__("caps");
    expect(caps).toBeTruthy();
})
test("caps function must return strings in the correct format for any input", ()=>{
    const caps = app.__get__("caps");
    expect(caps("the world of gamble")).toBe("The World Of Gamble")
    expect(caps("My little Angel")).toBe("My Little Angel")
    expect(caps("jose Alberto hernandez cortez de borbon")).toBe("Jose Alberto Hernandez Cortez De Borbon")
})