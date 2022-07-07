const numLimit = (num, lowest, highest) => {
switch(true) {
    case(num >= lowest && num <= highest):
    console.log(num)
    break
    case(num < lowest):
    console.log(lowest)
    break
    case(num > highest):
    console.log(highest)
    break
}
}
numLimit(5, 10, 20)