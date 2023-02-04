// Array traversing and accessing in Data structure

let data = [9, 45, 2, 8, 45, 23, 7, 78, 0, 11, 41, 77];

// for(let i=0; i<data.length; i++){
//     console.log(`Array ${i} is ${data[i]}`);
// }

// let x = 3;
// console.log(data[x]);

// console.log(parseInt()); // Nan

const getElement = () =>{
    const input = document.getElementById("element");
    if (input.value == ""){
        alert("Please enter valid input1")
    }
    else if(input.value < data.length && typeof parseInt(input.value) === "number"){
        console.log(data[input.value]);
        alert(data[input.value])
    }
    else if(input.value < 0){
        alert("-1")
    }
    else{
        alert("Please enter valid input")
    }
}