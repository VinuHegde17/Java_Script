let multply=function (a,b) {
    console.log(a*b);
}

let mult=multply.bind(this,2)
mult(5)

let m=multply.bind()
m(5,5)
