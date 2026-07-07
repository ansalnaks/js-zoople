//  highest score
let scores = {
    John: 85,
    Alice: 92,
    Bob: 78,
    David: 95
};
let highestStudent = "";
let highestScore = 0;
for (let key in scores) {
    if (scores[key] > highestScore) {
        highestScore = scores[key];
        highestStudent = key;
    }
}
console.log(highestStudent);
console.log(highestScore);
// merge 2 objects
let obj1 = {
    name: "John",
    age: 25
};
let obj2 = {
    city: "Kochi",
    country: "India"
};

let merged = {
    ...obj1,
    ...obj2
};
console.log(merged);



// shallow copy and deep copy

// //word 
let str = "hello world hello";

let words9 = str.split(" "); 
let freq = {};

for (let word of words9) {
    freq[word] = (freq[word] || 0) + 1;
}

console.log(freq);