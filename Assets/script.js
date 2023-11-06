var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var container = document.querySelector(".container-fluid")
var timeblockTemplate = document.querySelector("#timeblock-template")




for (let index = 0; index < hours.length; index++) {
    const element = hours[index];
    var timeblock = timeblockTemplate.cloneNode(true).content
    container.append(timeblock)  
}