/**
 * Lab 12 - Sorting Hat
 * Author: Jonah Saffran
 * Date: 2025-05-26
 */

function sortingHat(str) {
    let length = str.length;
    let mod = length % 4;
    if (mod === 0) return "Gryffindor";
    else if (mod === 1) return "Ravenclaw";
    else if (mod === 2) return "Hufflepuff";
    else return "Slytherin";
}

$(document).ready(function() {
    $("#submit").click(function() {
        let name = $("#user-name").val().trim();
        if (name.length === 0) {
            $("#output").html("<p>Please enter your name!</p>");
            return;
        }
        let house = sortingHat(name);
        $("#output").html("<p>The Sorting Hat has sorted you into <strong>" + house + "</strong>!</p>");
    });
});
