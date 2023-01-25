// Types of Function
// 1. Function Statement
    // function sayHello(param){
    //     console.log("Hello", param);
    // }
    // Function Invocation
    // sayHello(10);
    // sayHello("Hello");
    // sayHello([1,2,3,4,5]);
    // sayHello({name: "Nawaz Danish"});
    // sayHello();


// 2. Annonymous function
    // It is a function that does not have any name associated with it.
    // const fnContainer = function (){
    //     console.log("mr");
    // }
    // fnContainer();

    // We also declare an anonymous function using the arrow function technique 
    // (()=>{
    //     console.log("Mrs");
    // })();


// 3. IIFE -> Immediately Invoked Function Expression
    // (function fn(){
    //     console.log("I am IIFE");
    //     console.log("I will run on my own");
    // })();


// 4. Arrow Function
    //Arrow functions allow us to write shorter function syntax
    // const hello =  ()=>{
    //     console.log("Arrow Function");
    // }
    // hello();

// First Class Citizens
    // function fn (){
    //     console.log("function");
    //     smaller();
    // }
    // function smaller(){
    //     console.log("Smaller Function");
    // }
    // fn();


    function outer(){
        console.log("I am outer returning inner");
        return function inner(){
            console.log("Inner function");
        }
    }
    let rVal = outer();
    console.log(rVal);
    rVal();