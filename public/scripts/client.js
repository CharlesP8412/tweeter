/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

$(document).ready(function () {


  $('form button').on('click', event => {
    // Submit Post/Tweet
    event.preventDefault()
    validateAndSubmit()
  });

  //Loads All Posts on REFRESH
  const fetchAndUpdateAll = () => loadTweets(renderTweets)
  fetchAndUpdateAll()

});


