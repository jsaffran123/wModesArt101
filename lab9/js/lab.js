/*
 * lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
 *
 * Requirements: jQuery must be loaded for this script to work.
 *
 * Author: Jonah Saffran-Johnson
 * Created May 11, 2025
 * License: Public Domain
 */

// When the document is ready, run the following
$(document).ready(function() {
    
    // Add a button to the challenge section
    $("#challenge").append("<button id='button-challenge'>Make Special</button>");

    // Add a button to the problems section
    $("#problems").append("<button id='button-problems'>Highlight Problems</button>");

    // Add a button to the results section
    $("#results").append("<button id='button-results'>Toggle Results</button>");

    // Add a click listener to the challenge button
    $("#button-challenge").click(function(){
        // Toggle the "special" class to the challenge section
        $("#challenge").toggleClass("special");
    });

    // Add a click listener to the problems button
    $("#button-problems").click(function(){
        // Toggle the "highlight" class to the problems section
        $("#problems").toggleClass("highlight");
    });

    // Add a click listener to the results button
    $("#button-results").click(function(){
        // Toggle the "hidden" class to the results section
        $("#results").toggleClass("hidden");
    });

});
