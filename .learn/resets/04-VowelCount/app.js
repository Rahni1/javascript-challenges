// your code here
function findVowels(word){
 const matched = word.match(/[aeiou]/gi);
 console.log(matched ? matched.length : 0); 
 return matched ? matched.length : 0;
}

findVowels("carolas")