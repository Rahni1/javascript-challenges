
const people = ['John', 'Barbara', 'Sidhu', 'Pooja', 'Simran']
// Sort() sorts array alphabetically
people.sort()
// reverse() method reverses elements in array -> [ 'Simran', 'Pooja', 'Sidhu', 'Barbara', 'John' ]
people.reverse()

console.log(people)

// To sort numbers in order, use sort() with a compare function
const points = [66, 2, 33, 1, 4, 99, 74]
const sortedArray = points.sort(function(a, b){return a - b})
console.log(sortedArray)

const arrayAdd = points.unshift(72)
console.log(arrayAdd)