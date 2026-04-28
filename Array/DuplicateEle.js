let a = [1, 2, 3, 2, 4, 5, 6, 1];

//First Method
// let unique = [...new Set(a)];

//Second Method
let unique = a.filter((item, index) => {
  return a.indexOf(item) !== index;
});

console.log(unique);
