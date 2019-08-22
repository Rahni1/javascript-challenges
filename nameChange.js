// Constructor function (like object template)
function BansalFamilyMembers(firstName, middleName, lastName) {
    this.firstName = firstName
    this.middleName = middleName
    this.lastName = lastName
    this.changeName = function (mName, name) {
        this.middleName = mName
        this.lastName = name
    }
    }
    
    // Member one has changed her name
    // Object instance
    const member1 = new familyMembers("Sidhu", " ", " Moosewala")
    // change name function
    member1.changeName("John", "Smith")
    console.log(`Member one is now called ${member1.firstName} ${member1.middleName} ${member1.lastName}.`)
    
    // Member two has changed her name
    const member2 = new BansalFamilyMembers("Stacy", "Anna", "Minaj")
    member2.changeName("Stacy", "Anna", "ishudjnus")
    console.log(`Member two is now called ${member2.firstName} ${member2.middleName} ${member2.lastName}.`)
    



