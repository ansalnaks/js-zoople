//A Promise is an object that represents the future result of an operation.
function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("task1 executed");
        }, 1400)
    })
}

function task2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("task2 executed");
        }, 1200)
    })
}

function task3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("task3 executed");
        }, 1500)
    })
}

// task1(() => {
//     task2(() => {
//         task3(() => console.log("excuted")
//         )
//     })
// })


//Promise chaining 

task1()
.then(()=>task2())
.then(()=>task3())
.then(()=>console.log("completed"))


task1()
.then((res)=>{
    console.log(res)
   return task2()})
.then((res)=>{
    console.log(res);
    return task3()})
.then(()=>console.log("done"))
.catch(error=>console.log(error)
)





// // Promise.all

Promise.all([task1(), task2(), task3()])
.then(res => console.log(res))
.then(res=>console.log("done")
)
.catch(err => console.log(err));


// // Promise.race()

// // Returns first settled promise.

let p1 = new Promise(resolve =>
    setTimeout(() => resolve("First"),4000)
);

let p2 = new Promise(resolve =>
    setTimeout(() => resolve("Second"),2000)
);

Promise.race([p1,p2])
.then(result => {
    console.log(result);
});



