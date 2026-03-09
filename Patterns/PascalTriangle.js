function generatePascal(rows) {
  for (let i = 0; i < rows; i++) {
    let row = " ".repeat(rows - i);
    let val = 1;
    for (let j = 0; j <= i; j++) {
      row += val + " ";
      val = val * (i - j) / (j + 1); // Logic for next binomial coefficient
    }
    console.log(row);
  }
}

generatePascal(5);