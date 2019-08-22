// Create function that takes array of 10 numbers (between 0 and 9) 
// & returns string of numbers formatted as phone number
function formatPhoneNumber(numbers) {
const args = Array.prototype.slice.call(arguments);
args.splice(6, 0, "-")
args.splice(2, 0, ") ")
args.splice(0, 0, "(")
console.log(args.join(''))
}
formatPhoneNumber(4,4,7,9,8,8,8,4,2,1,3,0)