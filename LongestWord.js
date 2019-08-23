// Find longest word in sentence
function longestWord(sen) { 
    let str = sen.split(" ")
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
    longestWord();   