"use strict";

const runTimer = () => {
    var countDownDate = new Date("August 20, 2021 20:00");
    updateCountDown(countDownDate);
    var runningInterval = setInterval(updateCountDown, 1000, countDownDate);
}

const updateCountDown = (countDownDate) => {
    var difference = countDownDate.getTime() - new Date().getTime();
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);
    hours < 10 ? hours = `0${hours}` : hours;
    minutes < 10 ? minutes = `0${minutes}` : minutes;
    seconds < 10 ? seconds = `0${seconds}` : seconds;
    if (difference >= 0 && days == 0)
    {
        document.getElementById("countdown").innerHTML = `Today is the day! <br> We are getting married in ${hours}:${minutes}:${seconds}`;
    }
    else if (difference < 0)
    {
        document.getElementById("countdown").innerHTML = "We are married!! YIPPIE";
    }
    else
    {
        document.getElementById("countdown").innerHTML = `${days} days ${hours}:${minutes}:${seconds}<br>until we say 'I DO'!`;
    }
}

window.onload = runTimer