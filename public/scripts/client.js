/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

$(document).ready(function () {
  //Hide New Tweet area and Input Error Message
  $("#inputError").hide()
  $(".new-tweet").hide()

  //Loads All Posts on REFRESH
  const fetchAndUpdateAll = () => loadTweets(renderTweets)
  fetchAndUpdateAll()

  $('form button').on('click', event => {
    // Submit Post/Tweet
    event.preventDefault()
    validateAndSubmit()
  });


  //Toggle Input Box
  $('.navbutton').on('click', () => {
    $(".new-tweet").animate({
      height: "toggle",
      opacity: "toggle"
    }, {
      duration: "slow"
    });
    $('textarea').focus()
  })

  //Rtn to Top Button 
  // Show Button on scroll 
  $(window).scroll( function(){
    $("#topButton").show("slow")
  
  })
  //Rtn to Top on Click
  $('#topButton').on('click', () => {
    $('html, body').animate({scrollTop:0}, '300');
  })



});


