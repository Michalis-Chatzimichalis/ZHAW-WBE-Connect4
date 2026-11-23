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

function showBoard() {
  const board = document.querySelector(".board");

  for (let i = 0; i < 42; i++) {
    let field;
    let zufall = Math.random(); // Zufallszahl zwischen 0 und 1

    //60-20-20 Split (Leer-Rot-Blau)
    if (zufall < 0.2) {
      let piece = elt("div", { class: "piece red" });
      field = elt("div", { class: "field" }, piece);
    } else if (zufall < 0.4) {
      let piece = elt("div", { class: "piece blue" });
      field = elt("div", { class: "field" }, piece);
    } else {
      field = elt("div", { class: "field" });
    }

    board.appendChild(field);
  }
}