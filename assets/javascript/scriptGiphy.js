// make sure JavaScript doesn't run until the HTML has finished loading
$(document).ready(function() {

// ==================== Variables ==========================================================

// Giphy
var authKey = "in1rFgH6d3WCWcNBv1w2yNuXb8nxnNXF";

// Theme string
var themeArray = ['cheese curds', 'nachos', 'tater tots', 'onion rings', 'french fries', 'chicken wings', 'egg rolls', 'bread sticks', 'soup', 'salsa', 'frog legs', 'salad', 'oysters', 'chicken strips', 'baked potato', 'popcorn'];

// ==================== Functions and processes ============================================

// Buttons
function displayButtons() {
    // So the buttons don't duplicate
    $('#themeBtns').empty();

    for (var i = 0; i < themeArray.length; i++) {
        var themeBtns = $('<button>');
            themeBtns.attr('data-name', themeArray[i]);
            themeBtns.addClass('themeBtns');
            themeBtns.text(themeArray[i]);

        $('#themeBtns').append(themeBtns);
    };
};

    displayButtons();

// On click functions
$(document).on('click', '.themeBtns', function() {

    // Get rid of whats there to add new stuff
    $('#gifResults').empty();

    // What theme button user clicks
    var userClick = $(this).html();
    console.log(userClick);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userClick + "&api_key=" + authKey + "&limit=10";

    // API call
    $.ajax({
        url: queryURL,
        method: 'GET'
    })

    .done(function(response) {
        var results = response.data;

        // Used var j because it is good practice
        for (var j = 0; j < results.length; j++) {
            var gifDiv = $('<div class="gifSearchResults">');
                gifDiv.prepend(showRating);
                gifDiv.append(gifImg);

            var gifImgA = results[j].images.fixed_height.url;
            var gifImgS = results[j].images.fixed_height_still.url;

            var gifImg = $('<img>');
                gifImg.attr('src', gifImgS);
                gifImg.attr('data-still', gifImgS);
                gifImg.attr('data-animated', gifImgA);
                gifImg.attr('data-state', 'still');
                gifImg.addClass('gifImages');

            var rating = results[j].rating;
            var showRating = $('<p>').text("Rated: " + rating);

        $('#gifResults').append(gifDiv);

        };
     });

// making gifs either animated or still on click
$(document).on('click', '.gifImages', function() {
    var state = $(this).attr('data-state');

    if (state == 'still') {
        $(this).attr('src', $(this).data('animated'));
        $(this).attr('data-state', 'animated');
    }

    else {
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }
});

});

// Add user's input
$(document).on('click', '#submitBtn', function() {
        var userSearch = $('#userInput').val().trim();
        themeArray.push(userSearch);

        displayButtons();

        $('#userInput').text("");

        // Don't reload page
        return false;
});

});
