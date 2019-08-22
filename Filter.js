// Filter() method creates an array containing all array elements that meet certain condition
// Original array
const ages = [17, 5, 19, 24, 99] 

function checkAdult(age) {
    return  age >= 18
}
function myFunction() {
    console.log(ages.filter(checkAdult))
}
myFunction()


const people = ['John', 'Rahni', 'Barbara', 'Sakari', 'Brenda']

const checkNameLength = name => {
    return name.length <= 6
}
function filterPeople() {
    console.log(people.filter(checkNameLength))
}
filterPeople()
