// reverse
let num = 131;
let originalNum1 = num; // Store the original number for comparison
let reverse=0

for(let i=1;num>0;i++){
    let remainder=num%10//123%10=3  12%10=2  1%10=1
    reverse=reverse*10+remainder //0*10+3=3 3*10+2=32 32*10+1=321
    num=Math.floor(num/10) //12 12/10=1  1/10=0
}
if(reverse===originalNum1){
    console.log("Palindrome")
}
else{
    console.log("Not Palindrome")
}

console.log(reverse)



function hhh(num1){


let count=0
for(let i=1;i<=num1;i++){
    if(num1%i==0){
        count++
    }
}
if(count==2){
    console.log("Prime")
}else{
    console.log("not prime")
}
}

hhh(678)






















// for(let i=num;i>0;i=Math.floor(i/10)){
//     let remainder=i%10
//     reverse=reverse*10+remainder
// }
