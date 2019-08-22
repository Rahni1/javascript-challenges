// Print numbers, printing 'fizz' instead of multiples of 3, buzz for 5 and fizzbuzz for 15

for (let i = 0; i < 101; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}