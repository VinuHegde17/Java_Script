const prompt=require("prompt-sync")();
let a=[1,2,3,4,5,6,7,8,9,10]
console.log(a);
let n=prompt("Enter the number to array ")
n=parseInt(n)
a.push(n);
console.log(a)



do{
n=prompt("Enter the number to array ")
n=parseInt(n)
a.push(n);
}
while(n!=0)




let aa=[5,10,15,20,25,30,35,40]
let a1=aa.filter((x)=>{
    return(x%10===0)
})
console.log(a1)


let m=[2,4,6,8,10]
let m1=m.map((x)=>{
    return(x*x)
})
console.log(m1)


m=[1,2,3,4,5]
 m1=m.reduce((x1,x2)=>{
    return(x1*x2)
})
console.log(m1)