const fs = require("fs");
const path = require("path");

jest.dontMock("fs");
//here we are going to store and accumulate (concatenate) all the console log's from the exercise
let _buffer = "";
let _log = console.log;

// lets override the console.log function to mock it,
// but we are also going to save what supposed to be the ouput of the console inside _buffer
global.console.log = console.log = jest.fn((text) => (_buffer += text + "\n"));

test("Your output should be printing, fizz, buzz, fizzbuzz, or just a number depending on whether that number is divisible by 3, 5, 3 & 5, or none", function () {
  /*
        Here is how to mock the alert function:
        https://stackoverflow.com/questions/41885841/how-to-mock-the-javascript-window-object-using-jest
    */

  //then I import the index.js (which should have the alert() call inside)
  const file = require("./app.js");

  //and I expect the console.log to be already called just one time.
  expect(console.log.mock.calls.length).toBe(14);

  //You can also compare the entire console buffer (if there have been several console.log calls on the exercise)
  expect(_buffer).toBe(
`5
10
20
25
35
40
50
55
65
70
80
85
95
100\n`
  );
});
