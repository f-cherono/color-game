const colors = ["#33FFF6", "#FF8C33", "#FF33A1", "#3357FF", "#33FF57", "#FF5733"];
;
let targetColor;
let score = 0;

const colorBox = document.getElementById("colorBox");
const gameInstructions = document.getElementById("gameInstructions");
const colorOptions = document.getElementById("colorOptions");
const gameStatus = document.getElementById("gameStatus");
const scoreDisplay = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");

function startGame() {
  gameStatus.textContent = "";
  gameStatus.classList.remove("fade-out");

  // Randomly pick the target color
  targetColor = colors[Math.floor(Math.random() * colors.length)];
  colorBox.style.backgroundColor = targetColor;

  // Shuffle and display color options
  const options = [...colors];
  shuffle(options);
  colorOptions.innerHTML = "";
  options.slice(0, 6).forEach(color => {
    const button = document.createElement("button");
    button.style.backgroundColor = color;
    button.setAttribute("data-testid", "colorOption");
    button.onclick = () => checkGuess(color);
    colorOptions.appendChild(button);
  });
}


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


function checkGuess(selectedColor) {
  if (selectedColor === targetColor) {
    score++;
    gameStatus.textContent = "Correct!";
    gameStatus.classList.remove("fade-out");
  } else {
    gameStatus.textContent = "Wrong! Try again!";
    gameStatus.classList.add("fade-out");
  }
  scoreDisplay.textContent = `Score: ${score}`;
}

newGameButton.addEventListener("click", () => {
  score = 0;
  scoreDisplay.textContent = `Score: ${score}`;
  startGame();
});

startGame();  // Initialize the first game
