const p1 = new Promise((resolve) => setTimeout(() => resolve("Slow"), 3000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("Fast"), 1000));

Promise.race([p1, p2])
  .then((result) => console.log(result)); // Fast