// A palindrome is a word or set of characters which reads the same backwards as forwards like "Anna"
// If the reversed string is same as original input string, function should return true, if not, it returns false
const palindrome = str => {
    // turn string to lowercase
    str = str.toLowerCase()
// reverse input string and print the result of the comparison
console.log(str === str.split('').reverse().join('')) 
}
palindrome('anna')


// NUMBER PALINDROME
const palindrome2 = num => {
// reverse input string and return the result of the comparison
console.log(num === num.split('').reverse().join('')) 
}

palindrome2('131')

