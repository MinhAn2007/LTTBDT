let score = 0;
let secretNumber = Math.floor(Math.random() * 20) + 1;

// Function to reset the game
const resetGame = () => {
  score = 0;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector("#message").textContent = "Start guessing...";
  document.querySelector("#number").textContent = "?";
  document.querySelector("#score").textContent = "0";
  document.querySelector("#guess").value = "";
  document.querySelector("body").style.backgroundColor = "#2ECC40";//Exam required #222
  document.querySelector("#number").style.width = "15rem";
};

document.querySelector(".again").addEventListener("click", resetGame);