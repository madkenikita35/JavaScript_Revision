let n = 5;

for (let i = 1; i <= n; i++) {
  let line = "";
  // Character code 65 is 'A'
  for (let j = 0; j < i; j++) {
    line += String.fromCharCode(65 + j) + " ";
  }
  console.log(line);
}