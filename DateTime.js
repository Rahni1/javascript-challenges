const today = new Date()
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
const dateTime = date+' '+time
console.log(dateTime)

