const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");
const displayTime = document.getElementById("displayTime");
const display = document.querySelector(".display");
const timerStatus = document.getElementById("timer-status");
const outputMinutes = document.getElementById("minutes");
const outputSeconds = document.getElementById("seconds");
const outputMilliseconds = document.getElementById("milliseconds");
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let timeInterval;
let running = false;

startBtn.addEventListener("click", () => {
  running = true;
  clearInterval(timeInterval);
  timeInterval = setInterval(startStopwatch, 10);
  pauseBtn.removeAttribute("disabled");
  resetBtn.removeAttribute("disabled");
  startBtn.style.display = "none";
  displayTime.style.display = "block";
  display.style.animation = "pulse 1s infinite";
});

pauseBtn.addEventListener("click", () => {
  if (running === true) {
    clearInterval(timeInterval);
    pauseBtn.innerText = "continue";
    running = false;
    timerStatus.innerText = "Timer is paused";
    display.style.animation = "";
  } else {
    timeInterval = setInterval(startStopwatch, 10);
    pauseBtn.innerText = "pause";
    running = true;
    timerStatus.innerText = "";
    display.style.animation = "pulse 1s infinite";
  }
});
resetBtn.addEventListener("click", () => {
  clearInterval(timeInterval);
  seconds = "00";
  minutes = "00";
  milliseconds = "00";
  outputMilliseconds.innerText = milliseconds;
  outputMinutes.innerText = minutes;
  outputSeconds.innerText = seconds;
  pauseBtn.innerText = "pause";
  pauseBtn.disabled = "true";
  resetBtn.disabled = "true";
  startBtn.style.display = "block";
  startBtn.removeAttribute("disabled");
  displayTime.style.display = "none";
  timerStatus.innerText = "";
  display.style.animation = "";
});

function startStopwatch() {
    milliseconds++;
    // console.log(outputSeconds.innerText);
    if (milliseconds <= 9) {
    outputMilliseconds.innerHTML = "0" + milliseconds;
  }
  if (milliseconds > 9) {
    outputMilliseconds.innerHTML = milliseconds;
  }
  if (milliseconds > 99) {
    seconds++;
    console.log('increased', outputSeconds.innerText);
    outputSeconds.innerHTML = "0" + seconds;
    milliseconds = 0;
    outputMilliseconds.innerHTML = "0" + milliseconds;
  }

  if (seconds <= 9) {
    if (seconds == 0) {
        // not using strict equals operator because time is in string
        outputSeconds.innerHTML = "00";
      } else {
        outputSeconds.innerHTML = "0" + seconds;
      }
  }
  if (seconds > 9) {
    outputSeconds.innerHTML = seconds;
  }
  if (seconds > 59) {
    minutes++;
    outputMinutes.innerHTML = "0" + minutes;
    seconds = 0;
    outputSeconds.innerHTML = "0" + seconds;
  }

  if (minutes <= 9) {
    if (minutes == 0) {
      // not using strict equals operator because time is in string
      outputMinutes.innerHTML = "00";
    } else {
      outputMinutes.innerHTML = "0" + minutes;
    }
  }

  if (minutes > 9) {
    outputMinutes.innerHTML = minutes;
  }
}
