//Best practice to keep styles in CSS
//Access animations with jQuery Effect Methods

//(4,5) should not be done. (7,8) uses classes to adjust.
$("button").css("background-color", "green");
$("button").css("color", "white");

$("h1").addClass("big-title");
$("button").addClass("margin-50");

//hasClass
if ($("h1").hasClass("big-title")) {
  $("h1").css("color", "blue");
}


//-- Manipulating text with jquery
$("h1").text("Hello!");
$("button").html("<em>click</em>");


//-- Manipulating attributes with jQuery
$("a").attr("href", "https://www.bing.com");


//-- Adding eventListeners with jQuery
$("h1").click(function() {
  $("h1").css("color", "purple");
});
  //Multi-object eventListeners
$("button").click(function() {
  //fadeIn,out,toggle. slideIn,Out,Toggle. .animate
  $("h1").slideUp().slideDown().animate({opacity: 0.5, margin: 0});
});


//-- Adding keypress listener
$("input").keypress(function(event) {
  console.log(event.key);
});
$(document).keypress(function(event) {
  $("h1").text(event.key);
});
//Adding listeners with .on
//See MDN Event reference documentation
$("h1").on("mouseover", function() {
  $("button").css("background-color", "blue");
});
