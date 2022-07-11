const rewire = require("rewire")
const app = rewire('./app.js')


test('AreaOfTriangle function must exist.', ()=>{
  const AreaOfTriangle = app.__get__('AreaOfTriangle')
  expect(AreaOfTriangle).toBeTruthy();
})

test('The base for the triangle is correct', ()=>{
  const AreaOfTriangle = app.__get__("AreaOfTriangle");

  expect(AreaOfTriangle(2,5)).toBe(5)
  expect(AreaOfTriangle(7,14)).toBe(49)
})