// Constructor function
function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    // change name function
    this.changeName = function (name) {
        this.lastName = name
    }
    }
    
    // Object instance
    const person1 = new Person("Sharon", "Goldsworth")

    // changeName() changes last name
    person1.changeName("Smith")

    // Print new name
    console.log(`Person one is now called ${person1.firstName} ${person1.lastName}.`)
