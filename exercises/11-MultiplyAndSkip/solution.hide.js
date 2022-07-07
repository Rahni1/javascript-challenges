for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    continue;
  } else if (i % 5 === 0) {
    console.log(i);
  }
}