function populateBoard(size) {
  const board = document.querySelector(".board");
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;

  for (let i = 0; i < 256; i++) {
    let boardAdd = document.createElement("div");
    boardAdd.addEventListener("mouseover", () => {
      boardAdd.style.backgroundColor = "black";
      
    });
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
