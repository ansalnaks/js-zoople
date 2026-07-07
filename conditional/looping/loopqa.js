// let n = 10;
// let a = 0, b = 1;

// console.log(a);
// console.log(b);

// for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     console.log(c);
//     a = b;
//     b = c;
// }


let n = 6;
let a = 0, b = 1;
let sum = a + b;

for (let i = 3; i <= n; i++) {
    let c = a + b;
    sum = sum + c;
    a = b;
    b = c;
}

console.log("Sum =", sum);

// let n = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${i} * 5 = ${i * 5}`);
}

// reverse
let num = 123;
let reverse=0
for(let i=num;i>0;i=Math.floor(i/10)){
    let remainder=i%10
    reverse=reverse*10+remainder
}
console.log("Reverse =", reverse);


// fact
let num5=5
let fact=1
for(let i=1;i<=num5;i++){
    fact=fact*i
}   
console.log("Factorial =", fact);


// multiplication 
let nm=5
for(let k=1;k<=10;k++){
    console.log(`${k} * ${nm} = ${k*nm}`);
    
}


// let num = 153;
// let original = num;
// let sum = 0;

// while (num > 0) {
//     let remainder = num % 10;
//     sum = sum + remainder * remainder * remainder;
//     num = Math.floor(num / 10);
// }

// if (sum === original) {
//     console.log("Armstrong Number");
// } else {
//     console.log("Not Armstrong Number");
// }

// let num = 7;
// let sum = 0;

// for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//         sum = sum + i;
//     }
// }

// if (sum === num) {
//     console.log("Perfect Number");
// } else {
//     console.log("Not Perfect Number");
// }