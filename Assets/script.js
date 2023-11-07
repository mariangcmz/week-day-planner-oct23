var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var container = document.querySelector(".container-fluid")
var timeblockTemplate = document.querySelector("#timeblock-template")
var todaysDate = new Date().toLocaleDateString("en-US", { weekday: "short", day: "numeric", month: "long", year: "numeric" })

var currentDay = document.getElementById("currentDay")
currentDay.textContent = todaysDate
var currentHour = new Date().getHours()



for (let index = 0; index < hours.length; index++) {
    var timeblock = timeblockTemplate.cloneNode(true).content
    timeblock.querySelector(".hour").textContent = getTimeStamp(hours[index])
    timeblock.querySelector(".description").classList.add(getClassName(hours[index]))
    timeblock.querySelector(".description").value = localStorage.getItem(hours[index]) || ""
    container.append(timeblock)
}

var buttons = document.querySelectorAll(".saveBtn")
var textAreas = document.querySelectorAll(".description")

    buttons.forEach((button, i) => {
        button.addEventListener("click", ()=>{
            localStorage.setItem(hours[i], textAreas[i].value)
        })
    })

function getTimeStamp(hourNumber) {
    switch (hourNumber) {
        case 9:
            return "9AM";
        case 10:
            return "10AM";
        case 11:
            return "11AM";
        case 12:
            return "12PM";
        case 13:
            return "1PM";
        case 14:
            return "2PM";
        case 15:
            return "3PM";
        case 16:
            return "4PM";
        case 17:
            return "5PM";


        default:
            break;
    }
}
function getClassName(hourNumber) {
    if (hourNumber > currentHour) {
        return "past"

    }
    else if (hourNumber === currentHour) {
        return "present"
    }
    else {
        return "future"
    }


}