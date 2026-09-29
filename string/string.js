let name="Ansa"
let name2='hello'
let sample=`gbhnjkl`

console.log(name2.length);
console.log(name[2]);
console.log("uppercase",name2.toUpperCase()); 
console.log("Lowercase",name.toLowerCase());

let text="       Hello world"
console.log(text);
console.log("Trim",text.trim());

let text2="Welcome to programming"
let text3="hello,hai,hh,oo" //hello hai hh
console.log("Slice",text2.slice(4,8));
console.log("Substring",text2.substring(0,8));

let str = "JavaScript";
console.log(str.slice(-4));
console.log(str.substring(-4));


console.log("replace",text2.replace("to","to the"));
console.log("replace all",text3.replaceAll(","   , " "));

console.log("includes",text2.includes("o"));
console.log("charAt",text2.charAt(3));
console.log("indexof",text2.indexOf("m"));
console.log("lastindex",text2.lastIndexOf("m"));

console.log("startswith",text.startsWith("Hello"));
console.log("Endswith",text.endsWith("ld"));
let str1="Hello"
let str2="world"

console.log("concat",str1.concat(" ",str2));
console.log("concat",str1+str2);

const fruit="apple mango"
console.log("split",fruit.split(" "));// [apple,mango]


let str7="hello"
console.log(str7.repeat(2)); //hello hello


let str8="Welcome js"
console.log(str8.match(/jo/));
console.log(str8.search("dfghjs"));

let words=["hai","hello","jj"]
console.log(words.join(" "));   //hello  => h e e l l o => o l l e h =>olleh

//template literals
let name1="meen"
let role ="devel"
let title=`${name1} is a ${role}`
console.log(title);


//

let word="hello"
// console.log(word.reverse());

console.log(word.split("").reverse().join(""));




// let letter = prompt("Enter a letter");

// if("aeiouAEIOU".includes(letter)){
//     document.writeln("Vowel");
// } else {
//     console.log("Not a Vowel");
// }


// let word = prompt("Enter a word");

// if (word.includes("a") ||word.includes("e") ||word.includes("i") ||word.includes("o") ||word.includes("u") ||word.includes("A") ||
//     word.includes("E") ||word.includes("I") ||word.includes("O") ||word.includes("U")) {
//     console.log("Contains vowel");
// } else {
//     console.log("No vowel");
// }




// console.log(freq); 
// // // let word = prompt("Enter a word");

// // // if(/[aeiouAEIOU]/.test(word)){
// // //     console.log("Contains vowel");
// // // }else{
// // //     console.log("No vowel");
// // // }

// // let world="hello world"
// // let result=world.split(" ").map(item=>item.charAt(0).toUpperCase()+item.slice(1)).join(" ")
// //  console.log(result);




// //  //anagram
 let str4 = "listen";  
let str5 = "silent";   

let a = str4.split("").sort().join("");
let b = str5.split("").sort().join("");

console.log(a === b ? "Anagram" : "Not Anagram");




// //lo




// //word 
// // let str6 = "hello";
// // let frequ = {};
// // let maxchar=""
// // let maxcount=0

// for (let word of str6) {
//     frequ[word] = (frequ[word] || 0) + 1;
//     if(frequ[word]>maxcount){
//         maxcount=frequ[word]
//         maxchar=word
//     }
    
// }
// console.log(maxchar,maxcount);


