const fruits = ['apple', 'banana', 'mango'];

// find(): Returns the first element that matches
const found = fruits.find(f => f.startsWith('m')); // 'mango'

// findIndex(): Returns the index of that element
const index = fruits.findIndex(f => f === 'banana'); // 1

// includes(): Returns true/false
const hasApple = fruits.includes('apple'); // true

// some(): Returns true if AT LEAST ONE item matches
const hasLongName = fruits.some(f => f.length > 5); // true (banana)

// // every(): Returns true if ALL items match
// const allLongNames = fruits.every(f => f.length > 2); // true