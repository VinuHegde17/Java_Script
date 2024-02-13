function sum(a,b,c) {
    return a+b+c
}

let res=[1,2,3]
console.log(sum(...res))
console.log(sum.apply(null,res));
