const { reverse } = require("dns")

let a=[1,'abc',true]
console.log(a)
console.log(a[1])
console.log(a.length)
a[0]=123
console.log(a)
console.log(typeof(a))
console.log(a.toString())
console.log(a.join("+"))
console.log(a.push(55))
console.log(a)
console.log(a.pop())
console.log(a)
let a1=[1,2,3,4]
let a2=[2,4,6,8]
let a3=[1,3,5,7]
a=a1.concat(a2,a3)
console.log(a)
console.log(a.sort())
let number=[1,2,3,4,5,6]
number.splice(2,1,9,8)
console.log(number)
console.log(a.slice(2))
console.log(a.reverse())

obj={a:1,b:2,c:3}
console.table(obj)
console.warn("Dont do like that")
console.info("Hello JS")