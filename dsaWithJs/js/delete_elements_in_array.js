const button = document.getElementById("btn");

button.addEventListener('click', ()=>{
    const arr = [20, 30, 40, 50, 60, 70];
    var position = document.getElementById("inp").value;
    position = parseInt(position);
    
    for(let i=position; i<arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    arr.length = arr.length-1;
    
    console.log(arr);
})








