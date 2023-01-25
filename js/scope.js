// Legical scope and scope chain

var varName = 10;

function fn(){
    var varName = 20;
    console.log(varName);
}
fn();