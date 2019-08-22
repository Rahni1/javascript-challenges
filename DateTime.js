// Get current date
const today = new Date()
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
console.log(date)

// Get current time
const todayTime = new Date()
const time = todayTime.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
console.log(time)

// Get date AND time
const today = new Date()
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
const dateTime = date+' '+time
console.log(dateTime)

