// SOLUTION 1: Using if...else statement
for (let i = 0; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}

// SOLUTION 2: Using switch statement
for (let i = 0; i < 101; i++) {
    switch(true) {
        case(i % 3 === 0 && i % 5 === 0):
        console.log("FizzBuzz")
        break
        case(i % 3 === 0):
        console.log("Fizz")
        break
        case(i % 5 === 0):
        console.log("Buzz")
        break
        default:
        console.log(i)
    } 
}