let n = 5;

// Top half (Inverted)
for (let i = n; i >= 1; i--) {
  console.log(" ".repeat(n - i) + "* ".repeat(i));
}

// Bottom half (Regular)
for (let i = 2; i <= n; i++) {
  console.log(" ".repeat(n - i) + "* ".repeat(i));
}