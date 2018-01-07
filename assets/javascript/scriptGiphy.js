// make sure JavaScript doesn't run until the HTML has finished loading
$(document).ready(function() {

// ==================== Variables ==========================================================

// Giphy
var authKey = "in1rFgH6d3WCWcNBv1w2yNuXb8nxnNXF";

// Theme string
var themeArray = ['cheese curds', 'nachos', 'tater tots', 'onion rings', 'french fries', 'chicken wings', 'egg rolls', 'bread sticks', 'soup', 'salsa', 'frog legs', 'woton', 'salad', 'oysters', 'chicken strips', 'baked potato', 'popcorn'];



// ==================== Functions and processes ============================================

// Buttons
function displayButtons() {
    // So the buttons don't duplicate
    $("#themeBtns").empty();

    for (var i = 0; i < themeArray.length; i++) {
        var themeBtns = $('<button>');
        themeBtns.attr("data-name", themeArray[i]);
        themeBtns.addClass("themeBtns");
        themeBtns.text(themeArray[i]);

        $("#themeBtns").append(themeBtns);
    };
};

    displayButtons();

// On click functions
$(document).on("click", ".themeBtns", function() {

    // What theme button user clicks
    var userClick = $(this).html();
    console.log(userClick);

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + userClick + "&api_key=" + authKey + "&limit=10";

    $.ajax({
        url: queryURL,
        method: 'GET'
    })
     .done(function(response) {
        console.log(response);

        var results = response.data;

        // Get rid of whats there to add new stuff
        $("#gifResults").empty();

        // Used var j because it is good practice
        for (var j = 0; j < results.length; j++) {
            var gifDiv = $('<div>');
            var gifImgA = results[j].images.fixed_height.url;
            var gifImgS = results[j].images.fixed_height_still.url;

            var gifImg = $('<img>');
                gifImg.atrr("src", gifImgS);
                gifImg.attr('data-animate', gifImgA);
                gifImg.attr('data-still', gifImgS);
                gifImg.attr('data-state', 'still');

        $("#gifResults").prepend(gifImg);
        gifImg.click(animate);


        };
     });
});

// ==================== HTML ===============================================================



















});