// reverse
let num = 323;
let reverse=0

for(let i=1;num>0;i++){
    let remainder=num%10//123%10=3  12%10=2  1%10=1
    reverse=reverse*10+remainder //0*10+3=3 3*10+2=32 32*10+1=321
    num=Math.floor(num/10) //12 12/10=1  1/10=0
}

console.log(reverse)





















let originalNum = num; // Store the original number for comparison



if(reverse==originalNum){
    console.log("Palindrome")
}
else{
    console.log("Not Palindrome")
}
console.log("Reverse =", reverse);


// for(let i=num;i>0;i=Math.floor(i/10)){
//     let remainder=i%10
//     reverse=reverse*10+remainder
// }
