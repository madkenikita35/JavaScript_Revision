let size = 5;
let board = "";

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
      board += "*";
    } else {
      board += " ";
    }
  }
  board += "\n";
}
console.log(board);