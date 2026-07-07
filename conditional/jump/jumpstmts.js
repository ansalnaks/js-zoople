// // 1.break
// // 2.continue
// // 3.return

for(let i=1;i<=10;i++){
    if(i==5){
        break;
    }
    console.log(i);
}

for(let i=1;i<=10;i++){
    if(i==5){
        continue
    }
    console.log(i);
}

for(let i=1;i<=50;i++){
    if(i%3==0){
       continue
    }
    console.log(i);
    
}

// print only odd numbers from 1 to 20 using continue
//print numbers 1-50 but skip multiple of 3