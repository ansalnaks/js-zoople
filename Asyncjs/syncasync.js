console.log("start");
console.log("Learning JavaScript");
console.log("End");

// Problem with syn
console.log("Start");
for(let i=1;i<=100;i++){
    console.log(i);
    
}
console.log("End");


//Asynchronous means some tasks run in the background without blocking the main code.
//The next line does not wait for the previous task to finish.

console.log("Start");
// setTimeout(function, delay);
setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);

console.log("End");


console.log("1");
setTimeout(() => {
    console.log("2");
}, 0);
console.log("3");



// // setInterval()
// // setInterval(function, interval);

setInterval(() => {
    console.log("Hello");
}, 1000);

setInterval(() => {
    const date = new Date();
    console.log(date.toLocaleTimeString());
}, 1000);

// Example

let id = setInterval(() => {
    console.log("Running...");
}, 3000);

setTimeout(() => {
    clearInterval(id);
    console.log("stopped");
    
}, 6000);


