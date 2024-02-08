const { log } = require("document/lib/lang")

let ailen={
    name:"Naveen",
    tech:"JS",
    'work_exp':5,
    laptop:{
        brand:"HP",
        color:'Silver',
        ram:4
    }
}

console.log(ailen)
console.log(ailen.name)
console.log(ailen['work_exp'])
console.log(ailen.laptop.color)
console.log(ailen.laptp?.color)
delete ailen.laptop.ram
console.log(ailen)

for(key in ailen){
    console.log(key,ailen[key])
}

for(key in ailen.laptop){
    console.log(key,ailen.laptop[key])
}

function greet(){
    console.log("Hello function")
}
greet()

function grt(a){
    return `Hello ${a}`
}
let a="Navin"
let b=grt(a)
console.log(b)

let az=function(n1,n2){
    return n1*n2
}
console.log(az(5,6))

let gt=(u)=>{
    return(`Hello ${u}`)
}
console.log(gt('Naveen'))

let l={
    brand:"Dell",
    ram:16,
    proc:'i7',
    greets:function(){
        let storage=1024
    console.log('Laptop spec')
    console.log(storage)
    console.log(this.ram)
    }

}
l.greets()

let l1={
    brand:"Dell",
    ram:8,
    proc:'i5',
    greets:function(){
        let storage=1024
    console.log('Laptop spec')
    console.log(storage)
    console.log(this.ram)
    }

}
l1.greets()

function Ailen(name, tech){
this.name=name,
this.tech=tech

this.work= function () {
   console.log('Learning JS') 
}
}

let ailen1=new Ailen('Naveen','JS'),
ailen2 =new Ailen('Ajay','Java')
ailen1.tech='Blockchain'
console.log(ailen1);
console.log(ailen2);

let data=['Naveen',5,tech={s:65},() => {console.log("JS")}]
console.log(data.length)
data[3]()
console.log(data.push(4))
console.log(data.pull)
console.log(data.shift())
console.log(data.unshift(8))
console.log(data)

let num=[]
num[0]=3
num[9]=8
console.log(num.length)
console.log(num)

for(let n of num){
    console.log(n)
}

let nums=[1,2,3,4]
let[,,c,d]=nums
console.log(nums);
console.log(c);
let z=3;
let y=5;
[z,y]=[y,z]
console.log(z,y)

nums.forEach((n)=>{
    console.log(n)
})

nums.forEach((n,i,nums)=>{
    console.log(n,i,nums)
})

let s= new Set("Bookkeeper")
console.log(s)
s.add(3)
s.add(8)
s.add("Naveen")
console.log(s)
console.log(s.has(3))

let map=new Map();
map.set("Naveen","Java")
map.set("Kiran","Android")
console.log(map)
map.forEach((k,v)=>{
    console.log(k,":",v)
})