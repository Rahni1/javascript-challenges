// Are strings equal?
function CompareStrings(string1, string2) {
    if (string1.length === string2.length) {
        console.log(true)
    } else {
        console.log(false)
    }
}
CompareStrings("Are they same length?", "No")

// Find longest word in sentence
function longestWord(sen) { 
    const str = sen.split(" ")
    let longest = 0
    sen = null
    for (let i = 0; i < str.length - 1; i++) {
      if (longest < str[i].length) {
        longest = str[i].length;
        sen = str[i];
      }
    }
      return sen; 
             
    }
    longestWord(readline());    