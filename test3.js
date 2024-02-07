const mark={
    Narry: 98,
    Rohan:78,
    Akash:73
}

for(let i=0;i<Object.keys(mark).length;i++){
console.log("The marks of "+Object.keys(mark)[i]+" is "+mark[Object.keys(mark)[i]])
}

console.log("-------------------------------")
for(i in mark){
    console.log(i+" "+mark[i])
} 

const prompt=require("prompt-sync")();
let n=0
let target=5
while(n!=target){
    n=prompt("Entered no is ")
}

const mean=(a,b,c,d)=>{
    return(a+b+c+d)/4
}
console.log(mean(2,4,15,8))