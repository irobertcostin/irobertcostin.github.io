const countDown = () => {

    const countDate = new Date ("December 1, 2022 00:00:00:00").getTime() // .getTime() transforms in miliseconds 
    const now = new Date().getTime(); // gets the now time
    gap = countDate - now; // difference until objective completion
    

    //How do time in js work
const second = 1000; //miliseconds
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Calculations

const textDay = Math.floor(gap / day);
const textHour = Math.floor((gap % day) / hour);
const textMinute = Math.floor((gap % hour) / minute);
const textSecond = Math.floor ((gap % minute) / second);


// injecting to HTML 

document.querySelector('.day').innerHTML = textDay;
document.querySelector('.hour').innerHTML = textHour;
document.querySelector('.minute').innerHTML = textMinute;
document.querySelector('.second').innerHTML = textSecond;

if (textSecond < 10) {
    document.querySelector('.second').innerHTML = '0'+textSecond;
}

if (textMinute < 10) {
    document.querySelector('.minute').innerHTML = '0'+textMinute;
}

if (textHour < 10) {
    document.querySelector('.hour').innerHTML = '0'+textHour;
}

if (textDay < 10) {
    document.querySelector('.day').innerHTML = '0'+textDay;
}

} 

// running it every second 

setInterval(countDown, 1000);


