console.log("Hello");


console.log("Hello");

//function function name(){
//sdfgh
//dfgh
// }



function greet(){  //parameter
    console.log("hello world")
  
}
// console.log(a)  //error a is not defined

greet()  //arguments


function square(n){  //single parameter
    console.log(n*n)
}
square(6)



function add(a,b){  //multiple parameter
    console.log(a+b);
    
}
add(2,7)




const mul=(a,b)=>{
    console.log(a+b);
    
}
mul(5,8)

const sub=(a,b)=>{  //arrow function
   console.log( a-b);
   
}
let res=sub(5,2) //3
console.log(res)//undefined


const div=(a,b)=>{  //arrow function with return
   return a/b
    
}
const res1=div(10,2)
console.log(res1) //5

function test() {
   return 34567
    console.log("Hhhhhhhhh");
}
test()

// //function expre anonymous
const sayHello = function () {
    console.log("Hello World");
};

sayHello();

const welcomeMsg=function haii(){
    console.log("Welcome ");
    
}
welcomeMsg()

function welcome(name="meera"){  //default parameter
    console.log("welcome " +name)
}
welcome()
welcome('ramya')


// Rest Parameter

function sum(...numbers) {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log(sum(10, 20, 30,89));



function oe(num){
    if(num%2==0){
        console.log("even");
        
    }else{
        console.log("odd");
    }
}
oe(4)
//promt 2 number a,b button => function a+b

















// function add(a,b){
//     return console.log(a+b)
// }
// add(4,7)


// const add=(a,b)=>{

// }







// const mul=(a,b)=>{
//     console.log(a*b);
    
// }
// mul(3,7)

// const sub=(a,b)=>{
//     return console.log("sub va",a-b)
// }
// sub(7,3)



// // ??

// //value1??value2




function positive(number){
    if(number>0){
        console.log("positve");  
    }else{
        console.log("negative"); 
    }
}
positive(-24)





// // function factorial(num){
// //     let fact=1
// //     for(let i=1;i<=num;i++){
// //         fact=fact*i        
// //     }
// //      console.log(`factorial of ${num} is ` + fact);

// // }
// // factorial(5)




// function  greet(){
//     console.log("hello world")
// }

// greet()

// function reverseNumber(num) {
//     let reverse = 0;

//     while (num > 0) {
//         let remainder = num % 10;
//         reverse = reverse * 10 + remainder;
//         num = Math.floor(num / 10);
//     }

//     return reverse;
// }

// let result1 = reverseNumber(5678);
// console.log("Reversed Number =", result1);





// function checkPalindrome(num) {
//     let original = num;
//     let reverse = 0;

//     while (num > 0) {
//         let remainder = num % 10;     // get last digit
//         reverse = reverse * 10 + remainder;
//         num = Math.floor(num / 10);   // remove last digit
//     }

//     if (original === reverse) {
//         return "Palindrome Number";
//     } else {
//         return "Not a Palindrome Number";
//     }
// }

// let result = checkPalindrome(121);
// console.log(result);