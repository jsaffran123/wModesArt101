// index.js - purpose and description here
// Author: Your Name
// Date:
// Define Transport Variables

myTransport = [" Subaru Crosstrek", " Electric bike", " Walking", " Bus", " Rides from friends"]

// Main Ride Object
var myMainRide = {
  make: "Subaru",
  model: "Crosstrek",
  color: "Black",
  year: 2022,

  // Here is a function to calculate the age of the Main Ride,
  // It uses the current year minus the year of the car (this.year)
  age: function() {
      return 2025 - this.year;
      }
}

// Output
document.writeln("The things I use to get around include:" + myTransport + "<br>");

document.writeln("Here is my main mode of transportation: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");