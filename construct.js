const { log } = require("async");

function Father(first,last,age,bg) {
    this.First_name=first;
    this.Last_name=last;
    this.age=age;
    this.bg=bg;
}

const myFather= new Father("Abc","Xyz",50,"B+");
console.log(myFather.First_name);
myFather.height='165 cms'
console.log(myFather.height);

myFather.name=function (){
    return this.Last_name +" "+ this.First_name
}
console.log(myFather.name());
