const { log } = require("async");

function Main() {
    let mval="Bengalore"
    function Sub() {
    let sval="Capital City"
    let val= mval+" "+sval
    console.log(mval);
    console.log(sval);
    console.log(val);
    }
    Sub();
}
Main();

function Parent(callback) {
    let p="Parent"
    callback(p)
}

function Child(p) {
   let c="Child" 
   console.log("Value is "+p+" "+c);
}
Parent(Child)

function one(callback) {
    let x=10;
    callback(x);
}
function two(x) {
   console.log(x+=1); 
}
one(two)