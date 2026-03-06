const cart = [
  { item: 'Bread', stock: 10 },
  { item: 'Milk', stock: 0 }, // Out of stock!
  { item: 'Eggs', stock: 12 }
];

// Check if EVERYTHING is in stock
const canShip = cart.every(product => product.stock > 0); // false

// Check if AT LEAST ONE item is out of stock
const hasAlert = cart.some(product => product.stock === 0); // true

// Find the first out-of-stock item
const brokenItem = cart.find(product => product.stock === 0); // { item: 'Milk', ... }