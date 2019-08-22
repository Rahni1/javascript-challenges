// let day 
// switch (new Date().getDay()) {
//     case 0:
//         day = "Sunday"
//         break;
//     case 1:
//         day = "Monday"
//         break;
//     case 2:
//         day = "Tuesday"
//         break;
//     case 3:
//         day = "Wednesday"
//         break;
//     case 4:
//         day = "Thursday"
//         break;
//     case 5:
//         day = "Friday"
//         break;
//     case 6:
//         day = "Saturday"
//         break;
//         default:
//         day = "Unknown day"
// }
// console.log(day)

// const result  = 'value1'
// switch (result) {
//     case 'value1': // if (x === 'value1')
//     console.log('This is value1')
//     break
//     case 'value2':
//         console.log('This is value2')
//         default:
//             console.log('default')
// }

// const sum = 3 * 3
// switch (sum) {
//     case 9:
//         console.log('Yaay correct')
//     break
//     case 10: 
//     console.log("C'est un dommage :(")
//     break
//     default: console.log('default')
// }
// Convert fizzBuzz to switch
// for (let i=1; i <= 100; i++) {
// switch (true) {
// case(i % 3 === 0 && i % 5 === 0): 
// console.log("FizzBuzz")
// break
// case(i % 5 === 0): 
// console.log("Buzz")
// break
// case(i % 3 === 0):
// console.log("Fizz")
// break
// default:
//     console.log(i)
// }
// }
// Convert multiplySkip to switch
for (let i =1; i <= 100; i++) {
   switch(true) {
       case(i % 3 === 0):
       continue
       case(i % 5 === 0):
       console.log(i)
   }
}

