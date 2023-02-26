const cells = document.querySelectorAll('.cell');
let currentPlayer = 'x';

function handleClick(event) {
  event.target.innerText = currentPlayer;
  event.target.classList.add(currentPlayer);

  // Verificamos si hay un ganador
  if (checkForWinner()) {
    // Mostramos un mensaje de alerta
    window.alert(`¡El jugador ${currentPlayer} ha ganado!`);
  } else {
    // Cambiamos al siguiente jugador
    currentPlayer = (currentPlayer === 'x') ? 'o' : 'x';
  }
}

function checkForWinner() {
  const cells = document.querySelectorAll('.cell');
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columnas
    [0, 4, 8], [2, 4, 6] // diagonales
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText && cells[a].innerText !== '') {
      return true;
    }
  }

  return false;
}


cells.forEach((cell) => {
  cell.addEventListener('click', handleClick);
});
