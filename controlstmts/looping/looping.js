// // for loop

// for(Initialize;condition;incre/decrr)
// // 1-10 numbers

for(let j=1;j<=10;j++){
    console.log(j);
    // document.write(j+'<br>')
    
}//1 -10
 
//10-1












for(let i=1;i<=20;i++){
    if(i%2==0){
        console.log(i);
    }

}


let sum=0
for(let i=10;i>=1;i--){
    sum=sum+i
    
}
console.log("sum",sum);


// //Print Even numbers from 1 to 10 
// //entry controlled

// while(condition){
//     excute 
// }

let i=1
while(i<=10){
console.log(i);
i++
}




// exit controlled loop
let num=23
do{
console.log(num);
num++
}while(num<=10);






// //1.odd numbers print using while
// //2.sum of numbers using do while



let num1=1
while(num1<=10){
    if(num1%2!==0){
        console.log(num1);
        
    }num1++
}

// let sum=0
// let num3=1
// while(num3<=10){
//     sum=sum+num3
//     num3++
// }
// console.log(sum);

// // for ...in

let student={
    name:"Ansa",
    age:23
}

for(let keys in student ){
    // console.log(key);
    console.log(keys,student[keys]);
    
}


let numberS=[10,20,30]
for(let values in numberS){
    console.log(values,numberS[values]);  
}

for(let nums of numberS ){
    console.log(nums); 
}