const rewire = require("rewire")
const app = rewire('./app.js')


test('missingAngle function must exist.', ()=>{
  const missingAngle = app.__get__('missingAngle')
  expect(missingAngle).toBeTruthy();
})

test('The missing angle is correctly classified.', ()=>{
  const missingAngle = app.__get__("missingAngle");

  expect(missingAngle(25, 30)).toBe("Obtuse")
  expect(missingAngle(17, 71)).toBe("Obtuse")
  expect(missingAngle(26, 90)).toBe("Acute")
  expect(missingAngle(54, 36)).toBe("Right")
})