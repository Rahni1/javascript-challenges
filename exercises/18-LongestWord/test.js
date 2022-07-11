const rewire = require("rewire")
const app = rewire('./app.js')


test('longestWord function must exist.', ()=>{
  const longestWord = app.__get__('longestWord')
  expect(longestWord).toBeTruthy();
})

test('You should return the longest word', ()=>{
  const longestWord = app.__get__("longestWord");

  expect(longestWord("Well, which is the longest word?")).toBe("longest");
  expect(longestWord("Hello my name is Nicola de Fuentevideo")).toBe("Fuentevideo");
})