let x=8;
if(x===10){
    console.log(x=x-1)
}

if(x>10)
{
    console.log("X is grater than 10",x=x-1)
}
else{
    console.log("'X is less than 10'", x=x+1)
}

let marks=50
if(marks<=100 && marks>=80){
    console.log(`Obtained marks is ${marks} and Grade is A`)
}

else if(marks<80 && marks>=60){
    console.log(`Obtained marks is ${marks} and Grade is B`)  
}

else if(marks<60 && marks>40){
    console.log(`Obtained marks is ${marks} and Grade is C`)
}
else{
    console.log('Fail')
}

let day='Monay'
switch(day){
    case 'Monday' :
        console.log("Week starting")
        break;
    case 'Wednesday':
        console.log('Mid week')
        break;
    case 'Saturday':
        console.log('Week end')
        break;
    default :
        console.log("Week days only")
}