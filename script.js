const board = document.querySelector('.board');
board.style.gridTemplateColumns = "repeat(16,1fr)";
board.style.gridTemplateRows = "repeat(16,1fr)";

for(let i = 0; i < 256;i++){
    let boardAdd = document.createElement('div');
    boardAdd.style.backgroundColor = 'blue';
    board.appendChild(boardAdd)
}
