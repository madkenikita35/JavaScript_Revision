let columns = 15;
let rows = 3;

for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= columns; j++) {
    // Logic: (i+j) is divisible by 4 OR (i=2 and j is even)
    if (((i + j) % 4 === 0) || (i === 2 && j % 4 === 0)) {
       line += "*";
    } else {
       line += " ";
    }
  }
  console.log(line);
}