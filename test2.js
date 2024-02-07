const prompt=require("prompt-sync")();
let age = prompt("What's your age? ");

if (age >= 10 && age <= 20) {
    console.log(`Age ${age} lies in the range of 10 to 20`);
} else {
    console.log("Age is out of range");
}

let ss=prompt("What's your Number? ");
let s=parseInt(ss)
switch(s){
    case 1:
    {
        console.log("One")
        break  
    }
    case 2:
    {
        console.log("Two")
        break
    }
    case 3: 
    {
       console.log("Three")
        break
    }
    default : console.log("Stop")
}


let n=prompt('Enter the number ')

if(n%2==0 && n%3==0){
    console.log(`Number ${n} is divisible by both 2 and 3 `)
}
else{
    console.log("Please enter the correct no")
}

if(n%2==0 || n%3==0){
    console.log(`Number ${n} is divisible by both 2 or 3 `)
}
else{
    console.log("Please enter the correct no")
}

let ages=prompt('Enter the Age ')
if(ages>=18){
    console.log("You can Drive")
}
else{
    console.log("You can't Drive")
}

console.log("---------------------")
age=20
a=age>18? 'Can drive':'Canot drive'
console.log(a)