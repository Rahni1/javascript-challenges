const rewire = require("rewire")
const app = rewire('./app.js')

test('There should be a function called helloWorld', () => { 
    const total = app.__get__("helloWorld");
    expect(total).toBeTruthy();
})