/*
  lab15.js - Lab 15 using the Dog CEO API

  Author: Jonah Saffran
  Date: 2025-06-05
*/

$(document).ready(function () {
    $("#activate").click(function () {
      console.log("Button clicked");
  
      $.ajax({
        url: "https://dog.ceo/api/breeds/image/random",
        type: "GET",
        dataType: "json",
        success: function (data) {
          console.log("API response:", data);
  
          // Replace output content with new dog image
          $("#output").html(`
            <div class="dog-image">
              <img src="${data.message}" alt="Random dog" />
            </div>
          `);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.error("Error:", textStatus, errorThrown);
          $("#output").html("<p>Could not load a dog image. Try again!</p>");
        }
      });
    });
  });
  