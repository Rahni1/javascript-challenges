 // SOLUTION 1: Is divisible by 5
 function divisibleBy5(int) {
    if (int % 5 === 0) {
      console.log(true)
    } else {
      console.log(false)
    }
  }
  divisibleBy5(3)
  



  // SOLUTION 2: Ternary operator
  function divisibleBy5(int) {
      const result = int % 5 === 0 ? true : false
      console.log(result)
    }
    divisibleBy5(3)