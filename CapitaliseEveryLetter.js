const caps = str => {
  str = str.toLowerCase()
  .split(' ')
  .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
  .join(' ')
  console.log(str)
}
caps("javascript is a fantastic language.")