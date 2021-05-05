let minuteur = document.getElementById("minuteur");
let my_minuteur = document.getElementById("my_minuteur");
let send_minuteur = document.getElementById("send_minuteur");
let more_time = document.getElementById("more_time");
let less_time = document.getElementById("less_time");

let myVar = setInterval(myTimer, 1000);

function myTimer() {
    let d = new Date();
    document.getElementById("horloge").innerHTML = d.toLocaleTimeString();
}