const rewire = require("rewire")
const app = rewire('./app.js')


test('findVowels function must exist.', ()=>{
  const findVowels = app.__get__('findVowels')
  expect(findVowels).toBeTruthy();
})

test('You must have the correct number of vowels', ()=>{
  const findVowels = app.__get__("findVowels");

  expect(findVowels("carola")).toBe(3)
  expect(findVowels("youtube")).toBe(4)
})