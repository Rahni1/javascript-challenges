 // Determine whether the pie is fairly split
  function SliceOfPie(totalSlices, recipients, slicesPerPerson) {
if (recipients * slicesPerPerson < totalSlices) {
  console.log(true)
} else {
  console.log(false)
}
  }
SliceOfPie(10, 3, 2)

function sumOfCubes(nums) {
	nums.forEach (element => {
 return Math.pow(element, 3)
	})

}
sumOfCubes([1, 2, 3])


