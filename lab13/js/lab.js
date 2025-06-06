/**
 * Lab 12 - FizzBuzz Extended
 * Author: Jonah Saffran
 * Date: 2025-05-26
 * 
 * This script loops from 1 to 200 and checks each number to see if it's divisible 
 * by 3, 5, and/or 7. Depending on the result, it prints "Fizz", "Buzz", and/or "Boom".
 * The output is displayed in the HTML output div when the button is clicked.
 */

function fizzBuzzBoom() {
    // Clear previous output
    $("#output").empty();

    // Loop from 1 to 200
    for (let i = 1; i <= 200; i++) {
        let str = "";

        // Check conditions
        if (i % 3 === 0) {
            str += "Fizz";
        }
        if (i % 5 === 0) {
            str += "Buzz";
        }
        if (i % 7 === 0) {
            str += "Boom";
        }

        // If nothing matched, just show the number
        if (str === "") {
            str = i;
        }

        // Append each item as a separate <p> element inside #output
        $("#output").append("<p>" + str + "</p>");
    }
}

// Wait for the document to be ready, then set up click listener
$(document).ready(function() {
    $("#run-fizzbuzz").click(function() {
        fizzBuzzBoom();
    });
});
