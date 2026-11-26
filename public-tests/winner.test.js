const { connect4Winner } = require("../src/winner");

describe("connect4Winner", () => {
  it("erkennt 4 in einer Spalte (vertikal)", () => {
    let board = [
      ['_', '_', '_', '_', '_', '_', '_'],
      ['_', '_', '_', '_', '_', '_', '_'],
      ['_', '_', '_', 'r', '_', '_', '_'],
      ['_', '_', '_', 'r', 'b', 'b', '_'],
      ['_', '_', '_', 'r', 'b', 'r', 'b'],
      ['b', 'b', 'b', 'r', 'r', 'b', 'b']
    ];
    expect(connect4Winner('r', board)).toBe(true);
    expect(connect4Winner('b', board)).toBe(false);
  });

  it("erkennt 4 in einer Zeile (horizontal)", () => {
    let board = [
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['', 'b', 'b', 'b', 'b', 'r', '']
    ];
    expect(connect4Winner('b', board)).toBe(true);
    expect(connect4Winner('r', board)).toBe(false);
  });

  it("erkennt 4 diagonal (unten rechts & oben rechts)", () => {
    let boardDiag = [
      ['', '', '', '', '', '', ''],
      ['', '', '', '', '', '', ''],
      ['r', '', '', '', '', '', ''],
      ['b', 'r', '', '', '', '', ''],
      ['b', 'b', 'r', '', '', '', ''],
      ['b', 'b', 'b', 'r', '', '', '']
    ];
    expect(connect4Winner('r', boardDiag)).toBe(true);
  });
});