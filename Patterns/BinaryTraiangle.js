let rows = 5;

for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    // If (i+j) is even, print 1, else 0
    line += (i + j) % 2 === 0 ? "1 " : "0 ";
  }
  console.log(line);
}