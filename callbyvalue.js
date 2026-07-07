
//call by value
function changeValue(x){
    x = 50;
    console.log(x);
    
}

let num = 10;

changeValue(num);

console.log(num);




function add(a, b){
    a = a + 10;
    b = b + 20;
    console.log(a, b);
}

let x = 5;
let y = 10;

add(x, y);

console.log(x, y);

//call by reference
//object
function changeName(obj){
    obj.name = "John";
}

let person = {
    name: "Ansa"
};

changeName(person);

console.log(person.name);

//

function changeObject(obj) {
    obj.value = obj.value + 10;
    console.log("Inside:", obj.value);
}

let data = { value: 5 };
changeObject(data);

console.log("Outside:", data.value);


//array
function updateArray(arr){
    arr.push(4);
}

let numbers = [1,2,3];

updateArray(numbers);

console.log(numbers);