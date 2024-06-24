// script.js
$(document).ready(function() {
    function myFunction() {
        // Get the value of the input field with id="numb"
        let x = $("#numb").val();
        // If x is Not a Number or less than one or greater than 10
        let text;
        if (isNaN(x) || x < 1 || x > 10) {
            text = "Input not valid";
        } else {
            text = "Input OK";
        }
        $("#demo").text(text);
    }

    // Bind the function to the button click event
    $("button").on("click", myFunction);
});
