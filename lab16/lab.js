/*
 lab16.js - Fetch and display XKCD comic JSON data using jQuery AJAX
*/

$(document).ready(function() {
    $.ajax({
        // Use a CORS proxy to avoid cross-origin issues
        url: "https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json",
        type: "GET",
        dataType: "json",
        success: function(comicObj) {
            console.log("Success:", comicObj);
            let comicHTML = `
                <h3>${comicObj.title}</h3>
                <img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}" />
                <p>${comicObj.alt}</p>
            `;
            $('#output').html(comicHTML);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Error fetching comic:", textStatus, errorThrown);
            $('#output').html('<p>Sorry, something went wrong and the comic could not be loaded.</p>');
        }
    });
});
