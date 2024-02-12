function sum(a,b) {
  console.log(a+b);  
}
function cal(a,b, sumcallback) {
 sumcallback(a,b)   
}
cal(4,6,sum)