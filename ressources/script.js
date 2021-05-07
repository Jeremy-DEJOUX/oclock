// let minuteur = document.getElementById("minuteur");
// let my_minuteur = document.getElementById("my_minuteur");
// let send_minuteur = document.getElementById("send_minuteur");
// let more_time = document.getElementById("more_time");
// let less_time = document.getElementById("less_time");

let myVar = setInterval(myTimer, 1000);

function myTimer() {
    let d = new Date();
    document.getElementById("horloge").innerHTML = d.toLocaleTimeString();
}





// CHRONOMETRE=========================

function timeToString(time) {
      let diffInHrs = time / 3600000;
      let hh = Math.floor(diffInHrs);

      let diffInMin = (diffInHrs - hh) * 60;
      let mm = Math.floor(diffInMin);

      let diffInSec = (diffInMin - mm) * 60;
      let ss = Math.floor(diffInSec);

      let diffInMs = (diffInSec - ss) * 100;
      let ms = Math.floor(diffInMs);

      let formattedMM = mm.toString().padStart(2, "0");
      let formattedSS = ss.toString().padStart(2, "0");
      let formattedMS = ms.toString().padStart(2, "0");

      return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

let startTime;
let elapsedTime = 0;
let timerInterval;

function print(txt) {
    document.getElementById("display").innerHTML = txt;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
    showButton("PAUSE");
}

function pause() {
    clearInterval(timerInterval);
    showButton("PLAY");
}

function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    showButton("PLAY");
}

function appendlap(t){
    let newLi = document.createElement("li");
    newLi.className = "Lap"
    newLi.textContent = t;
    document.getElementById("lapDisplay").appendChild(newLi);
}

function lap() {
    appendlap(timeToString(elapsedTime));
}

function clearLap() {
    let element = document.getElementById("lapDisplay");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}


// Create function to display buttons

function showButton(buttonKey) {
    const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
    const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
}
// Create event listeners

let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");
let lapButton = document.getElementById("lapButton");
let clearButton = document.getElementById("clearButton");

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);
lapButton.addEventListener("click", lap);
clearButton.addEventListener("click", clearLap);