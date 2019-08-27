// SOLUTION 1: Using an if...else statement
function CheckNums(num1, num2) { 
    if (num2 > num1) {
      console.log(true)
    } else if (num2 === num1) {
      console.log(-1) 
    } else {
    console.log(false) 
    }
  }
    CheckNums(3, 5)  

// SOLUTION 2: Using a switch statement
function CheckNums(num1, num2) {
    switch(true) {
        case(num2 > num1):
            console.log(true)
            break
        case(num2 === num1):
            console.log(-1)
            break
        default:
            console.log(false)
        }
    }
CheckNums(3, 5)
