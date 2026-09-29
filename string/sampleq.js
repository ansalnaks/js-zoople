function sumArray(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); 


// function fibonacci(n) {
//     let series = [0, 1];

//     for(let i = 2; i < n; i++) {
//         series[i] = series[i - 1] + series[i - 2];
//     }

//     return series;
// }

// console.log(fibonacci(6));



// function findMinMax(arr) {
//     let min = arr[0];
//     let max = arr[0];

//     for(let i = 1; i < arr.length; i++) {
//         if(arr[i] < min) min = arr[i];
//         if(arr[i] > max) max = arr[i];
//     }

//     return { min, max };
// }


// console.log(findMinMax([10, 5, 20, 3, 8]));



// function isPrime(num) {
//     if(num <= 1) return false;

//     for(let i = 2; i < num; i++) {
//         if(num % i === 0) return false;
//     }

//     return true;
// }

// console.log(isPrime(7));
// console.log(isPrime(10)); 

// function countChars(str) {
//     let count = {};

//     for(let char of str) {
//         count[char] = (count[char] || 0) + 1;
//     }

//     return count;
// }

// console.log(countChars("hello"));

// length
let str = "Hello World";
// let count = 0;
for (let ch of str) {
    count++;
}

console.log("Length:", count);

//string
//1. Reverse  a string  ,Pallindrome

let name="Anna"
let rev=""
for(let i=name.length-1;i>=0;i--){
    rev+=name[i]
}
if(rev===name){
    console.log("Pallindrome");   
}else{
    console.log("Not Pallindrome");    
}

console.log("Reverse",rev);

//2. Count Vowels

let alpha='Javascript'
let count=''

for(let i=0;i<alpha.length;i++){
if(alpha[i]=='a'||alpha[i]=='e'||alpha[i]=='i'||alpha[i]=='o'||alpha[i]=='u'){
    count++
}
}
console.log(`${alpha} contains ${count} Vowels`);


//3. word frequency

let sentence = "java is easy java is powerful java";
let word = "java";

let words = sentence.split(" ");
let count1 = 0;

for (let i = 0; i < words.length; i++) {
    if (words[i] === word) {
        count1++;
    }
}

console.log(word + " appears " + count1 + " times");




// longest word
 let string = "I love JavaScript programming";

let word6 = string.split(" ");
let longest = "";

// for (let word of word6) {
//     if (word.length > longest.length) {
//         longest = word;
//     }
// }

for (let i = 0; i < word6.length; i++) {
    if (word6[i].length > longest.length) {
        longest = word6[i];
    }   
}

console.log(longest); 


