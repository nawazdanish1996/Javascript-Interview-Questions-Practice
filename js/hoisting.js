// JavaScript code execution | Hoisting |Execution Context

// function inside - global area
// window
// console.log(global);
// console.log(this);  // {}


// Hoisting
// console.log(a);
// var a;
// console.log(a);
// a = 10;
// console.log(a);

// fn();
// function fn (){
//     console.log("I can be called before my declaration.");
// }
// fn();

// function real(){
//     console.log(1);
// }
// function real(){
//     console.log(2);
// }
// function real(){
//     console.log(3);
// }
// real();

// console.log("Name "+ name);
// var name;
// name = "Nawaz Danish";

// fn();
// function fn(){
//     console.log("Hello from fn");
// }
// fn();

// fnContainer();
var fnContainer = function(){
    console.log("I am an expression");
}
fnContainer();