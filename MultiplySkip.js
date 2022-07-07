// SOLUTION 1: Using switch statement
for (i = 1; i <= 100; i++) {
    switch(true) {
        case(i % 3 === 0):
        continue
        case(i % 5 === 0):
        console.log(i)
    }
}

// SOLUTION 2: Using if else statement
for (i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        continue
    } else if (i % 5 === 0) {
        console.log(i)
    }
}