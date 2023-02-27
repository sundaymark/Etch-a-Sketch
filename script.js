let color = "black";
function populateBoard(size) {
  const board = document.querySelector(".board");
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;

  for (let i = 0; i < 256; i++) {
    let boardAdd = document.createElement("div");
    boardAdd.addEventListener("mouseover", colorSqare);
    boardAdd.style.backgroundColor = "blue";
    board.appendChild(boardAdd);
  }
}
populateBoard(16);

function changeSize(input) {
  if (input >= 2 && input <= 40) {
    populateBoard(input);
  } else alert("input must be between 2 and 40");
}

function colorSqare() {
  if (color == "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = "color";
  }
}
function changeColor(choice) {
  color = choice;
}
