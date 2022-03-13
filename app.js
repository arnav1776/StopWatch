var button = document.querySelector(".start");
var seconds = document.querySelector(".second");
var minutes = document.querySelector(".minute");
var hour = document.querySelector(".hour");
var lap = document.querySelector(".lap");
var lapContainer = document.querySelector(".lap-container");

var count = 1;
var sec = 0;
var hr = 0;
var min = 0;
var isTimerOn = false;
var timerVar = false;
button.addEventListener("click",  () => {
    if(isTimerOn)
  {
    clearInterval(timerVar);
    button.innerHTML = "Start";
    isTimerOn = false;
    lap.innerHTML = "Reset"
  }
  else
  {
        timerVar = setInterval( () => {
            sec = parseInt(sec);
            min = parseInt(min);
            hr = parseInt(hr);

            
            sec = sec+1;
            if (sec == 60) {
                min = min + 1;
                sec = 0;
            }
            if (min == 60) {
                hr = hr + 1;
                min = 0;
                sec = 0;
            }
           
            if (sec < 10 || sec == 0) {
                sec = '0' + sec;
            }
            if (min < 10 || min == 0) {
                min = '0' + min;
            }
            if (hr < 10 || hr == 0) {
                hr = '0' + hr;
            }
            hour.innerHTML = hr;
            minutes.innerHTML = min;
            seconds.innerHTML = sec;
        },1000);
        isTimerOn = true;
        button.innerHTML = "stop"
        lap.innerHTML = "lap"
        button.style.background = "red"
  }
    
});

lap.addEventListener("click", () => {
    var timeDiv = document.createElement("div");
    timeDiv.setAttribute("id","timeStamp")
    var hr = document.createElement("hr");
    var timeStamp = document.createElement("span");
    var lapCounter = document.createElement("span")
    if(lap.innerHTML == 'lap'){
    lapCounter.innerHTML = count;
    count+=1;
    timeStamp.innerHTML = `${hour.innerHTML}:${minutes.innerHTML}:${seconds.innerHTML}`
    timeDiv.appendChild(lapCounter)
    timeDiv.appendChild(timeStamp)
    lapContainer.appendChild(timeDiv);
    lapContainer.appendChild(hr);
    }
    else{
        lapContainer.innerHTML = "";
        hour.innerHTML = '00'
        minutes.innerHTML = '00'
        seconds.innerHTML = '00'
        count = 1
        sec = 0;
        hr = 0;
        min = 0;
    }
    
})
