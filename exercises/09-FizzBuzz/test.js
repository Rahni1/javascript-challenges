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
  expect(console.log.mock.calls.length).toBe(101);

  //You can also compare the entire console buffer (if there have been several console.log calls on the exercise)
  expect(_buffer).toBe(
`FizzBuzz
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz
31
32
Fizz
34
Buzz
Fizz
37
38
Fizz
Buzz
41
Fizz
43
44
FizzBuzz
46
47
Fizz
49
Buzz
Fizz
52
53
Fizz
Buzz
56
Fizz
58
59
FizzBuzz
61
62
Fizz
64
Buzz
Fizz
67
68
Fizz
Buzz
71
Fizz
73
74
FizzBuzz
76
77
Fizz
79
Buzz
Fizz
82
83
Fizz
Buzz
86
Fizz
88
89
FizzBuzz
91
92
Fizz
94
Buzz
Fizz
97
98
Fizz
Buzz\n`);
});
