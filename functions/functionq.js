
//function to check even or odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    }
    return "Odd";
}

console.log(checkEvenOdd(10));

//function to find largest of two numbers
function largest(a, b) {
    return a > b ? a : b;
}
console.log(largest(20, 15));

//count digits in a number
function countDigits(num) {
    return num.toString().length;
}

console.log(countDigits(12345));

//sum of digits
function sumOfDigits(num) {
    let sum = 0;

    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    return sum;
}

console.log(sumOfDigits(1234));

//armstrong number
function isArmstrong(num) {
    let sum = 0;
    let temp = num;

    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** 3;
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}

console.log(isArmstrong(153));