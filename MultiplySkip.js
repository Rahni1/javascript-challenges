for (i = 1; i <= 100; i++) {
    switch(true) {
        case(i % 3 === 0):
        continue
        case(i % 5 === 0):
        console.log(i)
    }
}