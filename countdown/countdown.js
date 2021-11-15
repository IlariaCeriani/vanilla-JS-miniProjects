const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

//put the date in the title

const title = document.querySelector('.title');

const countdownDate = new Date(2021,11,31,23,59,59, 0);

const endHour = countdownDate.getHours();
const endMinute = countdownDate.getMinutes();
const endYear = countdownDate.getFullYear();
const endDayn = countdownDate.getDate();
const endMonth = months[countdownDate.getMonth()];
const endDay = weekdays[countdownDate.getDay()];

title.innerHTML = `This giveaway will end on ${endDay}, ${endDayn} ${endMonth} ${endYear} at ${endHour}:${endMinute}.`

//countdown

const numbers = document.querySelectorAll('.number');

const futureTime = countdownDate.getTime();

function getFutureTime() {
    const today = new Date().getTime();
    const t = futureTime - today;
    
    const oneMinute = 1000*60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;

    let days = Math.floor(t/oneDay);
    let hours = Math.floor((t % oneDay) / oneHour);
    let mins = Math.floor((t % oneHour) / oneMinute);
    let sec = Math.floor((t % oneMinute) / 1000);

    function format(item) {
        if (item<10) {
            return item = `0${item}`
        }
        return item;
    }

    let values = [days, hours, mins, sec];
    numbers.forEach((num, index) => {
        num.innerHTML = format(values[index]);
    })
    

}

let count = setInterval(getFutureTime, 1000);

getFutureTime();