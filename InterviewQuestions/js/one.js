// find Largest and smallest element in an Array

var arr = [55, 9, 36, 456, 88];
let min = arr.reduce((smallNum, num)=> Math.min(smallNum, num));
let max = arr.reduce((smallNum, num)=> Math.max(smallNum, num));
console.log("Minimum Number is: "+min);
console.log("Maximum Number is: "+max);

// const myFun = (arr) =>{
//     return arr.reduce((smallNum, num)=> Math.max(smallNum, num))
// };
// console.log(myFun(arr));