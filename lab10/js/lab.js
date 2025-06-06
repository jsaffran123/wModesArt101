/*
   lab.js - This script appends a random message that includes the user's name

   Requirements: jQuery must be loaded for this script to work.

   Author: Jonah Saffran
   Date: [Today's Date]
*/

// Function to generate a random message including the user's name
function generateRandomText(name) {
  const messages = [
    `Hey ${name}, you're doing great!`,
    `${name}, keep pushing forward!`,
    `Nice to see you, ${name}!`,
    `${name}, let’s build something amazing!`,
    `What's up, ${name}?`,
    `${name}, you’re a coding wizard!`,
    `Stay creative, ${name}.`,
    `The world needs your ideas, ${name}.`,
    `Go crush it today, ${name}!`,
    `Awesome work, ${name}!`
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

// Click listener for "Say Something" button
$("#make-convo").click(function () {
  const name = $("#user-name").val().trim();

  // If the user hasn't typed anything, don't proceed
  if (name === "") {
    alert("Please enter your name first.");
    return;
  }

  const newText = generateRandomText(name);
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});
