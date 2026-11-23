// Vorgegebene Hilfsfunktion aus dem Praktikum
function elt(type, attrs, ...children) {
  let node = document.createElement(type);
  Object.keys(attrs).forEach(key => {
    node.setAttribute(key, attrs[key]);
  });

  for (let child of children) {
    if (typeof child != "string") node.appendChild(child);
    else node.appendChild(document.createTextNode(child));
  }
  return node;
}

// Model: Leeres Board zeichnen + Rot hat den ersten Turn
let state = {
  board: Array(6).fill('').map(el => Array(7).fill('')),
  turn: 'r'
};

// View: Lade Board und fülle Werte ab
function showBoard() {
  const board = document.querySelector(".board");
  const status = document.querySelector("#status");
  status.textContent = (state.turn === 'r') ? "Turn: Red" : "Turn: Blue";
  board.innerHTML = ""; // wegen Neuladung des Boards durch den Timer

  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 7; col++) {
      let wert = state.board[row][col];
      let field;

      if (wert === "r") {
        field = elt("div", { class: "field" }, elt("div", { class: "piece red" }));
      } else if (wert === "b") {
        field = elt("div", { class: "field" }, elt("div", { class: "piece blue" }));
      } else {
        field = elt("div", { class: "field" });
      }

      field.addEventListener("click", () => handleColumnClick(col));

      board.appendChild(field);
    }
  }
}

// Von unten nach oben nach einem freien Feld suchen
function handleColumnClick(col) {
  for (let row = 5; row >= 0; row--) {
    if (state.board[row][col] === '') {
      state.board[row][col] = state.turn;
      state.turn = (state.turn === 'r') ? 'b' : 'r';
      showBoard();
      return;
    }
  }
}

function initGame() {
  const newGameBtn = document.querySelector("#newGameBtn");
  newGameBtn.addEventListener("click", () => {
    state.board = Array(6).fill('').map(() => Array(7).fill(''));
    state.turn = 'r';
    showBoard();
  });

  showBoard();
}