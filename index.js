let count1 = 0;
const task1Div = document.getElementById("task1");
const intervalId1 = setInterval(() => {
  count1++;
  task1Div.innerHTML += `<p>Повідомлення №${count1}</p>`;
  if (count1 === 5) {
    clearInterval(intervalId1);
  }
}, 1000);

let size = 50;
let positionX = 0;
let positionY = 300;
const box = document.getElementById("animatedBox");

const intervalId = setInterval(() => {
  size += 5;
  positionX += 10;
  positionY += 10;
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.left = `${positionX}px`;
  box.style.top = `${positionY}px`;

  if (positionY > 500) {
    clearInterval(intervalId);
  }
}, 100);

let score = 0;
const gameBox = document.getElementById("gameBox");
const scoreDisplay = document.getElementById("score");
const startGameButton = document.getElementById("startGameButton");
let gameActive = false;
let gameDuration = 5000;

startGameButton.addEventListener("click", () => {
  score = 0;
  scoreDisplay.textContent = score;
  gameBox.style.pointerEvents = "auto";
  startGameButton.disabled = true;
  gameActive = true;

  setTimeout(() => {
    gameActive = false;
    gameBox.style.pointerEvents = "none";
    alert("Час гри закінчився! Ваші очки: " + score);
    startGameButton.disabled = false;
  }, gameDuration);
});

gameBox.addEventListener("click", () => {
  if (gameActive) {
    score++;
    scoreDisplay.textContent = score;
  }
});

gameBox.style.pointerEvents = "none";

const timeInput = document.getElementById('timeInput');
const startTimerButton = document.getElementById('startTimer');
const timeMessage = document.getElementById('timeMessage');

startTimerButton.addEventListener('click', () => {
    let intervalId; 
    clearInterval(intervalId); 
    const timeInSeconds = parseInt(timeInput.value);
    let remainingTime = timeInSeconds;

    intervalId = setInterval(() => {
        if (remainingTime > 0) {
            timeMessage.innerHTML = `Залишилось: ${remainingTime} секунд`;
            remainingTime--;
        } else {
            clearInterval(intervalId);  
            timeMessage.innerHTML = `Час вийшов! Пройшло ${timeInSeconds} секунд.`;
        }
    }, 1000);
});
