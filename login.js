let username="admin"
let password="12345df"
// let password=12345

let name=prompt("Enter username")
let pass=prompt("Enter password")

if(name===username&&pass===password){
    document.write("Login successful")
    alert("Login successful")
}else{
    alert("login failed")
}





// let q=prompt("Enter number")
// let b=prompt("Enter second")


let num1=parseInt(prompt("enter first no"))
let num2=parseInt(prompt("Enter second no"))
let oper=prompt("Enter operator")
let result
if(oper==="+"){
    result=num1+num2
}else if(oper=='-'){
    result=num1-num2
}else{
    console.log("Invalid"); 
}
document.write(result)
console.log(result);


// first number =34 second number=45 operator=+ -


// let num1 = parseInt(prompt("Enter first number"))
// let num2 = parseInt(prompt("Enter second number"))
// let oper
// let result
// do{
//     oper = prompt("Enter operator (+ or type exit)")
//     if(oper === "+")
//     {
//         result = num1 + num2
//         document.writeln(result + "<br>")
//     }
//     else if(oper === "exit")
//     {
//         document.writeln("Program stopped")
//     }
//     else
//     {
//         console.log("Invalid operator")
//     }

// }while(oper !== "exit")


// let i = 1;
// let sum = 0;
// do{
//     sum = sum + i;
//     i++;
// }while(i <= 5);
// console.log("Sum =", sum);


