// make sure JavaScript doesn't run until the HTML has finished loading
$(document).ready(function() {

// ==================== Variables ==========================================================

// Giphy
var authKey = "in1rFgH6d3WCWcNBv1w2yNuXb8nxnNXF";
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + + "&api_key=" + authKey + "&limit=10";

// Theme string
var themeArray = ['cheese curds', 'nachos', 'tater tots', 'onion rings', 'french fries', 'chicken wings', 'egg rolls', 'bread sticks', 'soup', 'salsa', 'frog legs', 'woton', 'salad', 'oysters', 'chicken strips', 'baked potato', 'popcorn'];

// Button to hold input info
var userSubmit = "";

// ==================== Functions and processes ============================================

// Buttons
function displayButtons() {
    // So the buttons don't duplicate
    $("#themeBtns").empty();

    for (var i = 0; i < themeArray.length; i++) {
        var themeBtns = $("<button>");
        themeBtns.attr("data-name", themeArray[i]);
        themeBtns.addClass("themeBtns");
        themeBtns.text(themeArray[i]);

        $("#themeBtns").append(themeBtns);
    };
};

    displayButtons();


// ==================== HTML ===============================================================



















});