//control stmts
//1.conditional stmt
//2.looping stmt
//3.jumb

//conditional

// if(condition){
// ex
// }



let age = 48
if (age >= 18) {
    console.log("Adult");
    document.write("adult"+'<br>')
}


// if else
let age1 = 8
if (age1 >= 18) {
    console.log("Adult");
    document.write("adult"+'<br>')
} else {
    console.log("minor");
    document.write("minor"+'<br>')
}

//ternery ? left(true):right(false)


let result = (age >= 18) ? "Adult" : "Minor"
console.log(result);


//if else if

// if () else if( ) else
let mark = 15

if (mark >= 90) {
    console.log("Grade A");
}
else if (mark > 60) {
    console.log("Grade B");
}
else if (mark > 30) {
    console.log("Grade C");
}
else if(mark >10){
    console.log('Grade D');
    
}
else {
    console.log("Fail");
}


let day1="monday"
if(day1==="monday"){
    console.log("day is monday");
    
}else if(day1==="tuesday"){
    console.log("day is tuesday");
    
}else{
    console.log("invalid");   
}

//nested if

let marks = 95
let attendance = 8
if (marks >= 50) {
    if (attendance >= 75) {
        console.log("pass");

    } else {
        console.log("FAIL attendance Shortage");

    }
} else {
    console.log("Fail");
}

let day = "Monday"
switch (day) {
    case "Monday": console.log("Day is monday");
        break;
    case "Tuesday": console.log("Day is tuesday");
        break;
    case "Wednesday": console.log("Day is wednesday");
        break;
    default:
        console.log("invalid");
}


// 1*2=2



