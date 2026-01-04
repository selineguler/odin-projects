// Gameboard Module
const Gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;

  const setMark = (index, mark) => {
    if (board[index] === "") {
      board[index] = mark;
      return true;
    }
    return false;
  };

  const reset = () => {
    board = ["", "", "", "", "", "", "", "", ""];
  };

  return { getBoard, setMark, reset };
})();

// Player Factory
const Player = (name, mark) => {
  return { name, mark };
};

// Game Controller Module
const GameController = (() => {
  let players = [];
  let currentPlayerIndex = 0;
  let gameOver = false;

  const start = (p1Name, p2Name) => {
    players = [Player(p1Name || "Player 1", "X"), Player(p2Name || "Player 2", "O")];
    currentPlayerIndex = 0;
    gameOver = false;
    Gameboard.reset();
    DisplayController.render();
    DisplayController.setMessage(`${players[0].name}'s turn (X)`);
  };

  const playRound = (index) => {
    if (gameOver) return;

    const currentPlayer = players[currentPlayerIndex];
    const validMove = Gameboard.setMark(index, currentPlayer.mark);

    if (!validMove) return;

    DisplayController.render();

    if (checkWinner(currentPlayer.mark)) {
      DisplayController.setMessage(`${currentPlayer.name} wins!`);
      gameOver = true;
      return;
    }

    if (Gameboard.getBoard().every(cell => cell !== "")) {
      DisplayController.setMessage("It's a tie!");
      gameOver = true;
      return;
    }

    currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    DisplayController.setMessage(`${players[currentPlayerIndex].name}'s turn (${players[currentPlayerIndex].mark})`);
  };

  const checkWinner = (mark) => {
    const b = Gameboard.getBoard();
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
      [0, 4, 8], [2, 4, 6]             // diagonals
    ];
    return winPatterns.some(pattern => pattern.every(i => b[i] === mark));
  };

  return { start, playRound };
})();

// Display Controller Module
const DisplayController = (() => {
  const boardDiv = document.getElementById("board");
  const messageDiv = document.getElementById("message");
  const startBtn = document.getElementById("startBtn");
  const restartBtn = document.getElementById("restartBtn");

  const render = () => {
    const board = Gameboard.getBoard();
    boardDiv.innerHTML = "";

    board.forEach((cell, index) => {
      const cellDiv = document.createElement("div");
      cellDiv.classList.add("cell");
      cellDiv.textContent = cell;
      cellDiv.addEventListener("click", () => GameController.playRound(index));
      boardDiv.appendChild(cellDiv);
    });
  };

  const setMessage = (msg) => {
    messageDiv.textContent = msg;
  };

  startBtn.addEventListener("click", () => {
    const p1 = document.getElementById("player1").value;
    const p2 = document.getElementById("player2").value;
    GameController.start(p1, p2);
  });

  restartBtn.addEventListener("click", () => {
    Gameboard.reset();
    render();
    setMessage("Game reset. Start a new one!");
  });

  return { render, setMessage };
})();

// Initial render
DisplayController.render();
