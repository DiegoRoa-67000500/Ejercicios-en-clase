const player1 = 'X';
const player2 = 'O';
let currentPlayer = player1;
let gameBoard = ['', '', '', '', '', '', '', '', ''];
const winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const cells = document.querySelectorAll('.cell');
const statusDisplay = document.querySelector('.status');
const player1Button = document.querySelector('#player1');
const player2Button = document.querySelector('#player2');
const resetButton = document.querySelector('#reset');

function handleCellClick(e) {
  const cell = e.target;
  const cellIndex = parseInt(cell.getAttribute('id'));
  
  if (gameBoard[cellIndex] !== '' || !isGameActive()) {
    return;
  }
  
  gameBoard[cellIndex] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add(currentPlayer);
  
  if (checkForWin()) {
    endGame(false);
  } else if (checkForDraw()) {
    endGame(true);
  } else {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    setStatus();
  }
}

function checkForWin() {
  for (let i = 0; i < winStates.length; i++) {
    const [a, b, c] = winStates[i];
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return true;
    }
  }
  return false;
}

function checkForDraw() {
  return gameBoard.every(cell => cell !== '');
}

function setStatus() {
  if (isGameActive()) {
    statusDisplay.textContent = `Turno de ${currentPlayer}`;
    player1Button.classList.toggle('active');
    player2Button.classList.toggle('active');
  }
}

function endGame(draw) {
  if (draw) {
    statusDisplay.textContent = 'Ha sido un Empate!';
    player1Button.style.backgroundColor = 'orange';
    player2Button.style.backgroundColor = 'orange';
  } else {
    
    statusDisplay.textContent = `${currentPlayer} ha ganado!`;
    if (currentPlayer === player1) {
      player1Button.style.backgroundColor = 'green';
      player2Button.style.backgroundColor = 'red';
    } else {
      player1Button.style.backgroundColor = 'red';
      player2Button.style.backgroundColor = 'green';
    }
    alert(`Ha ganado ${currentPlayer}!`);

  }
  removeClickHandlers();
}


function isGameActive() {
  return !checkForWin() && !checkForDraw();
}

function resetGame() {
  currentPlayer = player1;
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  setStatus();
  player1Button.style.backgroundColor = '';
  player2Button.style.backgroundColor = '';
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove(player1);
    cell.classList.remove(player2);
  });
  addClickHandlers();
}

function removeClickHandlers() {
  cells.forEach(cell => {
    cell.removeEventListener('click', handleCellClick);
  });
}

function addClickHandlers() {
  cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
  });
}

addClickHandlers();
setStatus();

resetButton.addEventListener('click', resetGame);
