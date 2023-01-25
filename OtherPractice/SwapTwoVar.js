let a = 5;
let b = 10
console.log(a, b);

//create a temporary variable
// let temp;
// temp = a;
// a = b;
// b = temp;
// console.log(a, b);

//using destructuring assignment
[a, b] = [b, a];
console.log(a, b);