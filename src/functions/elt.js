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

// Model: Leeres Board zeichnen
let state = {
  board: Array(6).fill('').map(el => Array(7).fill(''))
};

// View: Lade Board und fülle Werte ab
function showBoard() {
  const board = document.querySelector(".board");
  board.innerHTML = ""; //wegen Neuladung des Boards durch den Timer

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

      board.appendChild(field);
    }
  }
}

// Timer
setInterval(() => {
  let randomRow = Math.floor(Math.random() * 6);
  let randomCol = Math.floor(Math.random() * 7);
  let values = ['', 'r', 'b'];
  let randomVal = values[Math.floor(Math.random() * 3)];

  state.board[randomRow][randomCol] = randomVal;

  showBoard();
}, 1000);