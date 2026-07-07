// //object


// if("name" in student){
//   console.log("Property exists");
  
// }else{
//   console.log("not");
  
// }

let student = {
  name: "Rahul",
  age: 22,
  course: "MERN Stack"
};

console.log(student);

//accessing
console.log(student.name); //dot notation
console.log(student["age"]); //bracket notation

//adding
student.city="london"
console.log(student);

//updating
student.age=23
console.log(student);

//delete
delete student.age
console.log(student);



document.write(JSON.stringify(student))

//object with method
// let person = {
//     name: "Ansalna",
//     greet: function () {
//         console.log("Hello");
//     }
// };
// person.greet();
// // object with this keyword
// let person1 = {
//     name: "Ansalna",

//     greet: function () {
//         console.log("Hello " + this.name);
//     }
// };

// person1.greet();



// nested object
let student1 = {
    name: "Ansalna",

    address: {
        city: "Kochi",
        state: "Kerala"
    }
};

console.log(student1.address.city);



// object destructuring
let { name, address: { city } } = student1;
console.log(name);
console.log(city);

// spread operator
  let person3 = {
      name: "Ansalna",
      age: 25,
      addres:"fghjkl"
  };

let newPerson = {
    ...person3,
    city: "Kochi",
    place:"fghjk"
};

console.log(newPerson);

//Looping Through Object
let car = {
  brand: "Toyota",
  model: "Innova",
  year: 2023
};
for(let key in car){
  console.log(key, car[key]);
}


let user = {name:"John", age:25};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));


//1.count number of properties
console.log(Object.keys(user).length);

//2. Check if property exists
if("name" in user){
    console.log("Property exists");
} else {
    console.log("Property does not exist");
}