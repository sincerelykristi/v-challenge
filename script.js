$(function() {
    console.log( "All systems go!" );

var movieIndex = 0;
var movies = [
    {title: "Frances Ha", poster: "./images/frances.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", buttonColor: "#c4319f", },
    {title: "Side Effects", poster: "./images/side.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", buttonColor: "#7a0e0e" },
    {title: "Blue is the Warmest Color", poster: "./images/blue.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", buttonColor: "#7095ea" }
];


var $left = $("#left");
var $right = $("#right");
var $poster = $("#poster");
var $title = $("#movie-title");
var $description = $("#movie-description");
var $button = $("#buy-button");
var $background = $(".background-image");
var $container = $(".movie-container");



// Click Event Listener for the 'Back' or left button of the carousel, calls getMovie function with parameter back.
$left.click(function(){
  console.log("left click!");
  getMovie("back");
});

// Click Event Listener for the 'Next' or right button of the carousel, calls getMovie function with parameter next.
$right.click(function(){
  console.log("right click!")
  getMovie("next")
});

function getMovie(direction){

  if (direction === "back")
    movieIndex-=1;
  else if (direction === "next")
    movieIndex++;
  if (movieIndex < 0 || movieIndex > movies.length-1)
    movieIndex = 0;

  $poster.attr('src', movies[movieIndex].poster);
  $title.text(movies[movieIndex].title);
  $description.text(movies[movieIndex].description);
  $button.css({"background": movies[movieIndex].buttonColor});
  $background.css({"background-image": "url(' " + movies[movieIndex].poster + " ')"});
  console.log(movieIndex);
}


























// document closing brackets
});
