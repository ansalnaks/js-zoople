// math.js
//named export
export const add1 = (a, b) => a + b;
export const sub = (a, b) => a - b;


//default export
export default function(a, b) {
  return a * b;
}

export const pi=3.14

export function div(a,b){
    return console.log(a/b);
}

export function getArea(radius){
    return pi*radius*radius
    
}