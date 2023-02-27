let color = "blue";
function populateBoard(size) {
  const board = document.querySelector(".board");
  let gridSize = Math.round(size / 2);
  board.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
  board.style.gridTemplateRows = `repeat(${gridSize},1fr)`;

  board.innerHTML = '';
  for (let i = 0; i <= size; i++) {
    let boardAdd = document.createElement("div");
    boardAdd.classList.add('cell');
    boardAdd.addEventListener("mouseover", colorSqare);
    
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
    this.style.backgroundColor = color;
    
  }
}
function changeColor(choice) {
  color = choice;
}
