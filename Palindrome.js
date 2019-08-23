const palindrome = str => {
    // turn string to lowercase
    str = str.toLowerCase()
// split, reverse & join string and print
console.log(str === str.split('').reverse().join('')) 
}
palindrome('anna')
