

let a=true;
const candrive=(age)=>{
    return age>=18?true:false
    }
    
while(a){
    let ages=prompt("Enter the age ")
    let age=parseInt(ages)
if(candrive(age)){
    alert("You can drive")
}
else{
    alert("You cant drive")
}
a=confirm("Do you want to run again")
}