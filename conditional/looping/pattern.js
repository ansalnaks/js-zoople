// //upper pattern
let num=5
for(let i=1;i<=num;i++){
    for(let j=1;j<=i;j++){
        document.writeln(j) 
    }
    document.writeln("<br>")
}
document.writeln("<br>")
// //lower pattern
for(let i=num;i>=1;i--){
    for(let  j=1;j<=i;j++){
        document.writeln("*")
    }document.writeln("<br>")
}
document.writeln("<br>")
// //square pattern
for(let i=1;i<=num;i++){
    for(let j=1;j<=num;j++){
        document.writeln("*");
        
    }
    document.writeln("<br>");
    
}
document.writeln("<br>")
// //hollow square 
for(let i=1;i<=num;i++){
    for(let j=1;j<=num;j++){
        if(i==1||j==1||i==num||j==num){
            document.writeln("*")
        }else{
            document.writeln("&nbsp;&nbsp;")
        }
    }
    document.writeln("<br>")
}





// //floyed pattern
let k=1
for(let i=1;i<=num;i++){
    for(let j=1;j<=i;j++){
        document.writeln(k+ " ")
        k++
    }
    document.writeln("<br>")
}
    document.writeln("<br>");

//   //----------hourglass-------
 
    const n =7
    let pattern = "";
    // Top half 
    for (let i = n; i >= 1; i--) {
        for (let j = 0; j < n - i; j++) {
            pattern += "&nbsp;";
        }
        for (let k = 0; k < i; k++) {
            pattern += "*&nbsp;";
        }
        pattern += "<br>";
    }
    // Bottom half 
    for (let i = 2; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            pattern += "&nbsp;";
        }
        for (let k = 0; k < i; k++) {
            pattern += "*&nbsp;";
        }
        pattern += "<br>";
    }
   document.writeln(pattern);

//     document.writeln("<br>");
// //-----

// //             for (let i = 1; i <= n; i++) {
// //                     for (let j = 1; j <=i; j++) {
// //                          document.writeln("&nbsp;&nbsp ");
// //                     }
// //                      for (let k = 0; k < n; k++) {
// //                          document.writeln( "* ");
// //                          }
// //                         document.writeln("<br>") 
//           //  }
             
  
//             // let student={
//             //     name:"Ansa",
//             //     age:78
//             // }
//             // document.writeln(JSON.stringify(student))







// // 1001-1001
// // 1234-4321

//    let reverse = 0;
//     let num=403
//     let original=num
//     // for(let i = num; i > 0; i = Math.floor(i / 10)) {
//     //     let remainder = i % 10;
//     //     reverse = reverse * 10 + remainder;
//     // }
//     while(num>0){
//         let remainder=num%10 //
//         reverse=reverse*10+remainder
//         num=Math.floor(num/10)
//     }
//     if(reverse==original){
//         console.log("Pallindrome");
        
//     }else{
//         console.log("not");
        
//     }
//     console.log(reverse);



// // w

// let num2 = parseInt(prompt("Enter a number")); //7
// let isPrime = true;             //

// if (num2 <= 1) {             //6<=1
//     isPrime = false;          
// } else {
//     for (let i = 2; i < num2; i++) { //2<7,3<7,4<7,5<7,6<7
//         if (num2 % i === 0) {        //7%2==0,7%3==0,7%4==0,7%5==0,7%6==0
//             isPrime = false;        //false
//             break;
//         }
//     }
// }
// if (isPrime) {                      //
//     document.writeln(num2 + " is a Prime number");
// } else {
//     console.log(num2 + " is Not a Prime number");
// }

// // // 2*2=4
// // // 1*4=4

// // 1*5