/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Jonah Saffran-Johnson
   Date: 2025
*/

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // Convert the string to an array, sort it, then convert it back to a string
    return inputString.split('').sort().join('');
  }
  
  // Click listener for the submit button
  $("#submit").click(function() {
    // Get value of input field
    const userName = $("#user-name").val();
  
    // Sort the input string
    const userNameSorted = sortString(userName);
  
    // Append the sorted name to the output div
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
  });
  