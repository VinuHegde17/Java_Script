const { log } = require("document/lib/lang");

class A{
a=10;
display(){
    console.log(this.a)
}
}

class B extends A{
    b=20
    c=this.a+this.b
    show(){
        console.log(this.b)
        console.log(this.c)
    }
}

let o=new B()
o.display();
o.show();


class Bank{
    roi(){
        return 0
    }
}

class Axis extends Bank{
    roi(){
        return 8
    }
}

class Sbi extends Bank{
    roi(){
        return 6
    }
}

s=new Sbi()
console.log(s.roi());
a=new Axis()
console.log(a.roi());
b=new Bank()
console.log(b.roi());

class Animal{
    constructor(color){
        this.color=color
    }
    printcolor(){
        console.log(this.color)
    }
}
class dog extends Animal{
    constructor(color,food){
        super(color)
        this.food=food
    }
    eating(){
        console.log("Eating a",this.food)
    }
    display(){
        this.printcolor();
        this.eating()
    }
}

d=new dog("Black","Bread");
d.display();