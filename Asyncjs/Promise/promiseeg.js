function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num > 0) {
            resolve("Number is positive ");
        } else if (num < 0) {
            reject("Number is negative ");
        } else {
            reject("Number is zero ");
        }

    });
}
checkNumber(-5)
    .then(result => {
        console.log(result);  
    })
    .catch(error => {
        console.log(error);   
    })
    .finally(() => {
        console.log("Execution completed "); 
    });