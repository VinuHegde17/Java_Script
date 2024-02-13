console.log("Hello")
setTimeout(()=>{
    console.log("Course")
},1000)
console.log("Java Script")

async function asyncFunction() {
    let promise = new Promise(resolve => {
        resolve();
    });
    let response = await promise;
    return console.log(response);
}
