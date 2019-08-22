// Counts vowels in string
const findVowels2 = str => {
    const matched = str.match(/[aeiou]/gi)
    console.log(matched ? matched.length : 0) 
}
findVowels2('rahni')


