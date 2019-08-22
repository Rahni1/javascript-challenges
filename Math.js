// get area of a triangle
function AreaOfTriangle(b, h) {
    const result = (b * h) / 2
    console.log(result)
}
AreaOfTriangle(6, 5)

// Find factorial
function factorialize(num) {
    // Step 1. Create a variable result to store num
  const result = num;
    // If num = 0 OR num = 1, the factorial will return 1
  if (num === 0 || num === 1) 
    return 1; 
    // Step 2. Create the WHILE loop 
  while (num > 1) { 
    num--; // decrementation by 1 at each iteration
    result *= num;
  }
  console.log(result);
}
factorialize(5);

// Check nums
function CheckNums(num1, num2) { 
  if (num2 > num1) {
    console.log("true")
  } else if (num2 === num1) {
    console.log("-1") 
  } else {
  console.log("false") 
  }
console.log(num1 + num2)   
}
  CheckNums(3, 5)   

  // Is divisible by 5
  function divisibleBy5(int) {
    if (int % 5 === 0) {
      console.log(true)
    } else {
      console.log(false)
    }
  }
  divisibleBy5(3)

// Rounds num down
const x = 7.6
  const roundDown = Math.floor(x)
  console.log(roundDown)

// Rounds num up
const x = 7.6 
const roundUp = Math.ceil(x)
console.log(roundUp)