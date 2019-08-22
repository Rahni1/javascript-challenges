// Each num is a sum of the two preceeding numbers
function fib(n) {

    const result = [0, 1];
    for (let i = 2; i < n; i++) {
      result.push(result[i-2] + result[i-1]);
    }
    console.log(result) // or result[n-1] if you want to get the nth term
  
  }
  fib(8)

