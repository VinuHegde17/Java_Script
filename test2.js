const prompt=require("prompt-sync")();
let ageString = prompt("What's your age? ");
let age = parseInt(ageString); 

if (age >= 10 && age <= 20) {
    console.log(`Age ${age} lies in the range of 10 to 20`);
} else {
    console.log("Age is out of range");
}

let s=8
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
