// your code here
function findVowels(word) {
  const matched = word.match(/[aeiou]/gi);
  return matched ? matched.length : 0;
}