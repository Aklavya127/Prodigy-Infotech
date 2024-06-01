let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let reset = false;

const display = document.getElementById("display");
const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");

startStopButton.addEventListener("click", startStop);
resetButton.addEventListener("click", resetWatch);

function startStop() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(updateTime, 10); // Update every 10 milliseconds
        startStopButton.textContent = "Stop";
        startStopButton.style.backgroundColor = "#dc3545";
        running = true;
        reset = false;
    } else {
        clearInterval(tInterval);
        startStopButton.textContent = "Start";
        startStopButton.style.backgroundColor = "#28a745";
        running = false;
    }
}

function resetWatch() {
    clearInterval(tInterval);
    reset = true;
    running = false;
    display.textContent = "00:00:00.00";
    startStopButton.textContent = "Start";
    startStopButton.style.backgroundColor = "#28a745";
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000) / 10);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    if (!reset) {
        display.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
    }
}
