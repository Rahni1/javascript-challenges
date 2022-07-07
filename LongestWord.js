function longestWord(sen) { 
    let str = sen.split(" ")
    let longest = 0
    sen = null
    for (let i = 0; i < str.length - 1; i++) {
      if (longest < str[i].length) {
        longest = str[i].length
        sen = str[i]
      }
    }
    console.log(sen)
    }
    longestWord("Well, which is the longest word?")