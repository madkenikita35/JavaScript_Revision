const fruits = ['apple', 'banana', 'mango'];
// join(): Turns array into a string
const tags = ['js', 'react', 'node'];
console.log(tags.join(' #')); // "js #react #node"

// flat(): Flattens nested arrays
const messy = [1, [2, [3]]];
console.log(messy.flat(2)); // [1, 2, 3]

// // slice(): Copies a portion of an array (non-mutating)
// const part = fruits.slice(0, 2); // ['apple', 'banana']