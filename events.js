let btn1=document.querySelector('#btn1')

btn1.addEventListener("click",(evt)=>{
    console.log('Btn1 clicked 1st time');
    console.log(evt.target)
    console.log(evt)
    console.log(evt.type)
})

btn1.addEventListener("click",(evt)=>{
    console.log('Btn1 clicked 3nd time');
    console.log(evt.target)
    console.log(evt)
    console.log(evt.type)
})

const bt=()=>{
    console.log('Btn1 clicked 2nd time');
    console.log(evt.target)
    console.log(evt)
    console.log(evt.type)
}

btn1.addEventListener('click',bt)
let btn2=document.querySelector('#btn2')
btn2.onclick =() =>{
    console.log('Btn2 clicked');
    let a=20;
    a++;
    console.log(a);
    alert(`${a}`)

    }

let div1=document.querySelector('#div1')
div1.onmouseover=()=>{
    console.log("You are on the mouse pad");
}

btn1.removeEventListener("click",bt)