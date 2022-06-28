const missingAngle = (degree1, degree2) => {
    const result = 180 - (degree1 + degree2)
switch(true) {
    case(result < 90):
    console.log('Acute')
    break
    case(result === 90):
    console.log('Right')
    break
    case(result >= 90):
    console.log('Obtuse')
    break
}
}
missingAngle(7, 93)
