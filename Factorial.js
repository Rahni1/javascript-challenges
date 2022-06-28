function factorialize(num) {
    // Step 1. Create a variable called result to store num
  let result = num;
    // If num = 0 OR num = 1, the factorial will return 1
  if (num === 0 || num === 1) 
    return 1; 
    // Step 2. Create the WHILE loop 
  while (num > 1) { 
    num--; // decrements by 1 at each iteration
    result *= num;
  }
  console.log(result);
}
factorialize(5);
