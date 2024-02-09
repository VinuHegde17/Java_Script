class Shape{
    disp(){
        return "Its a shape"
    }
}

class circle extends Shape{
    disp(){
        return "Its a circle"
    }
}

class square extends Shape{
    disp(){
        return "Its a square"
    }
}

s=new Shape();
console.log(s.disp());
s=new circle();
console.log(s.disp());
s=new square();
console.log(s.disp());