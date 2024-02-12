let person={
    name:"Akash",
    age:30
}
console.log(person)

function printbio() {
    console.log("My name is "+this.name+" age is "+this.age)
}
printbio.call(person);
printbio.apply(person);
