// console.log("hello");
// console.lhg("hai");
// console.log("fghj");
// console.log(x);
import {add1} from 'math.js'

try {
    let num1 = prompt("Enter first number");
    let num2 = prompt("Enter second number");

    if(num2==0){
        throw new Error("you can't divide")
    }

    let result=num1/num2
    console.log(result);


}
catch(error) {
    console.error("Error:", error);
}
finally {
    console.log("Program finished");
}




