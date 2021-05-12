//==================== HORLOGE===================================================

let myVar = setInterval(myTimer, 1000);

function myTimer() {
    let d = new Date();
    document.getElementById("horloge").innerHTML = d.toLocaleTimeString();
}





// ======================CHRONOMETRE==================================================================

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









// ====================REVEIL=====================================================================

let timer = document.getElementById('timer');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let secondes = document.getElementById('seconds');
let startstop = document.getElementById('startstop');

let currentTime;
let alarmElement;
let activeAlarm = false;
// let sound = alert("Message d'alert");

function showTime() {
    let now = new Date();
    currentTime = now.toLocaleTimeString();

    if(currentTime === alarmElement){
        alert("Mon Seign'or il est l'or l'or de se réveillez");
    }
    timer.textContent = currentTime;
    setTimeout(showTime, 1000);
}



showTime();

function addMinSec(id){
    let select = id;
    let min = 59;

    for(i = 0; i <= min; i++){
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i); //Sert à mettre les secondes dans le select
    }
}

function addHour(id) {
    let select = id;
    let min = 24;

    for (i = 0; i <= min; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i); //Sert à mettre les secondes dans le select
    }
}

addMinSec(secondes);
addMinSec(minutes);
addHour(hours);

startstop.onclick = function(){
    if (activeAlarm === false) {
        hours.disabled = true;
        minutes.disabled = true;
        secondes.disabled = true;

        alarmElement = hours.value + ":" + minutes.value + ":" + secondes.value;
        console.log(alarmElement);
        console.log(currentTime);
        this.textContent = "Clear Alarm";
        activeAlarm = true;
    }
    else {
        hours.disabled = false;
        minutes.disabled = false;
        secondes.disabled = false;

        this.textContent = "Set Alarm";
        activeAlarm = false;
    }
}





// MINUTEUR======================



