let n = 5;

// Upper part
for (let i = 1; i <= n; i++) {
  console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
}

// Lower part (Inverted)
for (let i = n - 1; i >= 1; i--) {
  console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
}