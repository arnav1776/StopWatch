var button = document.querySelector(".start");
// var miliseconds = document.querySelector(".milisecond");
var seconds = document.querySelector(".second");
var minutes = document.querySelector(".minute");
var hour = document.querySelector(".hour");
var lap = document.querySelector(".lap");
var lapContainer = document.querySelector(".lap-container");

var count = 1;
// var milisec = 0;
var sec = 0;
var min = 0;
var timerOn = false;
var timer = false;
button.addEventListener("click", function (event) {
    if(timerOn)
    {
        clearInterval(timer);
        button.innerHTML = "Start";
        timerOn = false;
        lap.innerHTML = "reset"
    }
    else {
        timer = setInterval( function() {
            // milisec = parseInt(milisec);
            sec = parseInt(sec);
            min = parseInt(min);
            hr = parseInt(hr);

            sec = sec + 1;
            // if (milisec == 60) {
            //     sec = sec + 1;
            //     milisec = 0;
            // }
            if (sec == 60) {
                min = min + 1;
                sec = 0;
            }
            if (min == 60) {
                hr = hr + 1;
                min = 0;
            }
            // if (milisec < 10 || milisec == 0) {
            //     milisec = '0' + milisec;
            // }
            if (sec < 10 || sec == 0) {
                sec = '0' + sec;
            }
            if (min < 10 || min == 0) {
                min = '0' + min;
            }
            if (hr < 10 || hr == 0) {
                hr = '0' + hr;
            }

            // miliseconds.innerHTML = milisec;
            seconds.innerHTML = sec;
            minutes.innerHTML = min;
            hour.innerHTML = hr;
        },1000);
        timerOn = true;
        button.innerHTML = "stop";
        lap.innerHTML = "lap";
    }
});

