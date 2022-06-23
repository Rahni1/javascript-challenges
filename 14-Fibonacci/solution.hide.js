function fib(n) {
  const result = [0, 1];
  for (let i = 2; i < n; i++) {
    if ((result[i - 2] + result[i - 1]) <= 10000){
        result.push(result[i - 2] + result[i - 1]);
    }else{
        i = n;
    }
  }
  console.log(result);
  return result;
}
fib(22);