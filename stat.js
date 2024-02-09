class test{
     a=10;
     static b=20;

     m1(){
        console.log("This is a normal method")
     }

     static m2(){
        console.log("This is a static method")
     }
}

console.log(test.b)
test.m2()
test.b=1000
console.log(test.b)
 let t=new test()
 console.log(t.a)
 t.m1()