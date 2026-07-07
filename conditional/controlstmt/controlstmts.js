//control stmts
//1.conditional stmt
//2.looping stmt
//3.jumb

//conditional

//if(condition){
//ex
//}



let age = 28
if (age >= 18) {
    console.log("Adult");
    document.write("adult")
}


// if else
let age1 = 8
if (age1 >= 18) {
    console.log("Adult");
} else {
    console.log("minor");
}

//ternery ? left(true):right(false)


let result = (age >= 18) ? "Adult" : "Minor"
console.log(result);


//if else if

// if () else if( ) else
let mark = 95

if (mark >= 90) {
    console.log("Grade A");
}
else if (mark > 60) {
    console.log("Grade B");
}
else if (mark > 30) {
    console.log("Grade C");
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
let attendance = 80
if (marks >= 50) {
    if (attendance >= 75) {
        console.log("pass");

    } else {
        console.log("Shortage");

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
    default:
        console.log("invalid");
}


// 1*2=2



