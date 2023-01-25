// Legical scope and scope chain
console.log("1", varName);
var varName = 10;
console.log("2", varName);
function fn(){
    console.log("3", varName);
    var varName = 20;
    console.log(varName);
}
fn();