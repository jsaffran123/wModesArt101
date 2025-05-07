// index.js - Lab 7 JS
// Author: Jonah Saffran
// Date: 5/4/25

// function that takes a users name and sorts the letters of it
function sortName() {
    var userName = window.prompt("Please enter your name");
    console.log("userName =", userName);
    // split string to an array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // sort array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    // revert back
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);

    return nameSorted;
}

// output
document.writeln("Here's your new name: ", 
    sortName(), "</br>");