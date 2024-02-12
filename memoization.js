const memo=[]

function square(n) {
  if(memo[n]!=null){
  return memo[n]
  }

  let result=0;
  for(let i=1;i<=n;i++){
    for(let j=1;j<=n;j++){
        result=result+1
    }
  }
memo[n]=result
return result
}
console.log(square(3232))
console.log(square(7945))
console.log(square(4662))
console.log(square(6542))
console.log(square(5231))