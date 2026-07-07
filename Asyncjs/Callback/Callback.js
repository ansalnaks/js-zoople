//callback handle async operatio



function hello(callback){
    console.log("Hai hello");
    callback()
}
function greet(){
    console.log("Welcome"); 
}

hello(greet)