/*
 * Author: Jonah Saffran-Johnson 
 * Created May 11, 2025
 * Lisence Public Domain
 */

// Define an array of numbers
let numbers = [2, 4, 6, 8, 10];

// Use map with an anonymous function to divide each number by 2
let halfNumbers = numbers.map(function(num) {
    return num / 2;
});

// Output the result to the console
console.log("Original numbers:", numbers);
console.log("Half of each number:", halfNumbers);