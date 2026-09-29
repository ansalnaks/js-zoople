// 1.arithmetic
// 2.assignment
// 3.comparison
// 4.logical
// 5.incre/decre

// 6.ternery

// arith

let a=10
let b=20
console.log("add",a+b); //30
console.log("diff",a-b); //-10
console.log("mul",a*b); //200
console.log("div",a/b); //0.5
console.log("mod",a%b); //10
console.log("expo",a**b); //100000000000000000000

// //assign

let x=6
console.log("+=",x+=5);  //x=x+5 //6+5=11
// console.log(x=x+5);

console.log("-=",x-=2);
// console.log(x=x-2);

console.log("*=",x*=2);
console.log("/=",x/=2);

// //comp
let g=10
let f="10"

console.log("== ",g==f); //true
console.log("===",g===f); //false
console.log("!==",5!=='5'); //true
console.log("!=",6!=4);//true
console.log(">",10>5); //true
console.log(">=",9>=10); //false
console.log("<",4<12);//true
console.log("<=",4<=3); //false


//logical 
// && || !
console.log("&&", true&&true);  //true
console.log("&&" ,true&&false);//false
console.log("||",true||true);  //true
console.log("||",true||false); //true
console.log("||",false||false); //false
console.log("!",true!=false); //true

let age=20
let hasId=true
console.log("fgh",age<=16&&hasId);  //false

console.log(age<18||hasId);  //true
console.log(!hasId);   //false

//incre/decre 
let m=5;

console.log("++m",++m);  //6
console.log("m++",m++);  //6 but m becomes 7
console.log("m++",m++);  //7 but m becomes 8
console.log("m--",m--);  //8 but m becomes 7
console.log("m",m--);    //7 but m becomes 6
console.log("--m",--m);  //5
// console.log("m--",m--);  //6 but m becomes 5
// console.log("m--",m--);  //5 but m becomes 4


// Nullish Coalescing
let user = null;
let name = user ?? "Guest";
console.log(name); // "Guest"








let score = null;
console.log(score && 10); // 10 (0 is falsy!)
console.log(score ?? 10); // 10 (?? only checks null/undefined)


// let person = { address: { city: "Kerala" } };
// console.log(person?.address?.city); // "Kerala"
// console.log(person?.phone?.number); // undefined (no error)


// // //swap
let q=10   
let w=20   

let temp=q //Q
    q=w   //W
    w=temp
    console.log("w",w);
    console.log("q",q);


  
    
// //output w=10 q=20

// //swap two numbers without using third variable

// let a=60
// let b=20

// a=a+b   //a=80
// b=a-b   //b=60
// a=a-b  //a=20
// console.log("a",a);
// console.log("b",b);


// //destructuring
// [a,b]=[b,a]



// // let num=5
// // for(let i=1;i<=10;i++){
// //     console.log(i+"*"+num+"=",i*num);
    
// // }

