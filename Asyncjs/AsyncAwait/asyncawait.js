//Async/Await is a cleaner way to write Promises . It makes asynchronous code look like synchronous code


function task() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Task completed");
        }, 2000);
    });
}

async function runTask() {
    let res = await task();
    console.log(res);
}

runTask();