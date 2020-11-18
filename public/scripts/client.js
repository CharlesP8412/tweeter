/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

$(document).ready(function () {

  $('form button').on('click', event => {
    // Submit Post/Tweet
    event.preventDefault()
    $.ajax({
      method: 'POST',
      url: "/tweets/",
      data: $('form').serialize()
    })
    //Clear Text Box after post and reset counter
    $('#tweet-text').val('');
    $('ouput.counter').val(140);
  
    //Add LatestPost to List
  });


  const createTweetElement = function (post) {
    // Got a good way of doing it, should break down into chunks
    console.log("Creating Tweet", post)


    const $tweet = $(`
  
  <article class="tweet">
  <header>
  <span><img src=${post.user.avatars}><p>${post.user.name}</p></span>
  <span id="handle">${post.user.handle}</span>
  </header>
  <p class='tweet-contents'>${post.content.text}</p>
  <footer>
  <span>${post.created_at} days ago</span>
  <span class="icons">
    <i class="fas fa-flag" title="Flag Inappropriate"></i>
    <i class="fas fa-retweet" title="Re-Twit"></i>
    <i class="fas fa-heart" title="Heart it Up"></i>
  </span>
  </footer>
  </article>
  `);

    // return $tweet;
    $('#tweets-container').append($tweet);
  };

  const renderTweets = function (inputData, createMethod) {
    console.log("Rendering (All data to indv)")
    for (post of inputData) {
      createTweetElement(post);
    };
  };






  const loadTweets = function (action) {
    console.log("LOADING TWEETS")
    //GET the latest Tweet
    $.ajax("/tweets/")
      .then(res => {
        console.log(res)
        action(res)
      });
  };

  //Loads All Posts on REFRESH
  const fetchAndUpdateAll = () => loadTweets(renderTweets)
  fetchAndUpdateAll()


});


