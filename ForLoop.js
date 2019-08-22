// For loops loop through block of code several times
for (i = 0; i < 10; i++) {
    if (i === 3) {
        break; 
    }
        // Break statement breaks loop & continues executing the code after loop (if there's any)
        // Break can also be used to jump out of switch statements
        console.log("The number is " + i )
}

for (i = 0; i < 10; i++) {
    if (i === 3) {
        continue;
        // Continue breaks one iteration in loop if specified condition occurs & continues with next iteration
    }
        console.log("The number is " + i)
}   