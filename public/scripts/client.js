/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

$(document).ready(function () {
  //Hide New Tweet area and Input Error Message
  $("#inputError").hide();
  $(".new-tweet").hide();

  fetchAndUpdateAll();

  postTweetClick()

  toggleTweetInputClick();

  rtnToTopTrigger();

  rtnToTopClick();

  closeTweetInputScroll();
  

});


