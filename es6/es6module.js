
// ES6 Modules in JavaScript allow you to split code into separate files and reuse them using export and import.
//  This helps keep code organized, reusable, and maintainable


import mul,{add1,sub, pi, getArea } from './math.js'

console.log(add1(2, 3));
console.log(sub(6,2));

console.log(mul(5,2));


console.log(pi);

const area = getArea(6)
console.log(`${area.toFixed(2)}cm`);
