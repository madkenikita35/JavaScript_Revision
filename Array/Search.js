const cart = [
  { item: 'Bread', stock: 10 },
  { item: 'Milk', stock: 0 }, // Out of stock!
  { item: 'Eggs', stock: 12 }
];

// Check if EVERYTHING is in stock
const canShip = cart.every(product => product.stock > 0); // false

