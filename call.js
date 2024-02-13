function sum(a,b) {
  console.log(a+b);  
}
function cal(a,b, sumcallback) {
 sumcallback(a,b)   
}
cal(4,6,sum)

function greet(name, callback) {
  setTimeout(function() {
    callback("Hello, " + name);
  }, 1000);
}

function displayGreeting(message) {
  console.log(message);
}

greet("John", displayGreeting);
