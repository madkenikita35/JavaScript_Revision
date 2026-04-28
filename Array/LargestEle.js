let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//First Method
// let largest = Math.max(...a);

//Second Method
let largest = a.reduce((max, current) => {
  return current > max ? current : max;
}, a[0]);
console.log(largest);
