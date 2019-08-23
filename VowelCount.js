const findVowels = str => {
const matched = str.match(/[aeiou]/gi)
console.log(matched ? matched.length : 0) 
}
findVowels('vowels')


