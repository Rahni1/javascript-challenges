// SOLUTION 1: Using if statement
const sliceOfCake = (totalSlices, recipients, slicesPerPerson) => {
if (recipients * slicesPerPerson < totalSlices) {
  console.log(true)
} else {
  console.log(false)
}
  }
sliceOfCake(10, 3, 2)

// SOLUTION 2: Using switch statement
const sliceOfCake = (totalSlices, recipients, slicesPerPerson) => {
  switch(true) {
    case(recipients * slicesPerPerson < totalSlices):
    console.log(true)
    break
    default:
      console.log(false)
  }
}
sliceOfCake(10, 3, 2)

// SOLUTION 3: Using the ternary operator
const sliceOfCake = (totalSlices, recipients, slicesPerPerson) => {
  const result = recipients * slicesPerPerson < totalSlices ? true : false
  console.log(result)
}
sliceOfCake(10, 3, 2)

