$(document).ready(function() {
    function myFunction() {
        // Get the value of the input field with id="numb"
        let x = $("#numb").val();
        // Set the text of the element with id="demo" to the value of the input field
        $("#demo").text(x);
    }

    // Bind the function to the button click event
    $("button").on("click", myFunction);
});
