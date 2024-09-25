console.log("start");

// setTimeout is a function that takes two arguments, a callback function and a time in milliseconds
//here the setTimeout is a asynchronous function and will go the callback queue after the time is over
setTimeout(()=>{
    console.log("we are in the timeout");
},5000);



//fetch is a function that takes a url as an argument and returns a promise
//here the fetch is a asynchronous function and will go to the microtask queue after the data is fetched
fetch("https://api.github.com/users").then(function cbF(){
    console.log("callback");
})

console.log("end");

//priority of the code execution
//1. synchronous code
//2. microtask queue
//3. callback queue
