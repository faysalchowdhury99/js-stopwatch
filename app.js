// Selectors
let min = document.querySelector('.min .num');
let sec = document.querySelector('.sec .num');

const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

let minValue;
let secValue = 0;

// Events
startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);

let timer;
let isWatchRunning = false;

// Functions
function start() {
  if (!isWatchRunning) {
    isWatchRunning = true;
    timer = setInterval(function () {
      secValue++;
      let { secondValue, minValue } = getTime(secValue);
      sec.innerHTML = secondValue < 10 ? '0' + secondValue : secondValue;
      min.innerHTML = minValue < 10 ? '0' + minValue : minValue;
    }, 1000);
  }
}

function stop() {
  isWatchRunning = false;
  clearInterval(timer);
}

function reset() {
  isWatchRunning = false;
  clearInterval(timer);
  sec.innerHTML = '00';
  min.innerHTML = '00';
  secondValue = 0;
  minValue = 0;
  secValue = 0;
}

function getTime(secValue) {
  minValue = parseInt(secValue / 60);
  secondValue = parseInt(secValue % 60);
  return {
    secondValue,
    minValue,
  };
}
