// Merge Two Sorted Array in Ascending order by removing Duplicates
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2,  7, 8, 11, 3, 25];

let marge = arr1.concat(arr2);
// let marge = [...arr1, ...arr2];
console.log("Marged two Array:  "+marge);

marge.sort();
console.log(marge);

marge.sort((a, b)=> a-b); // Ascendig Order
// marge.sort((a, b)=> b-a); // Decendig order
console.log("Sorted Array: "+marge);

console.log("Removig Duplicate ------------")
marge = [...new Set(marge)];
console.log(marge);