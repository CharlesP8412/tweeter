/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/


$(document).ready(function () {
  /*   const data = [
      {
        "user": {
          "name": "Newton",
          "avatars": "https://i.imgur.com/73hZDYK.png"
          ,
          "handle": "@SirIsaac"
        },
        "content": {
          "text": "If I have seen further it is by standing on the shoulders of giants"
        },
        "created_at": 1461116232227
      },
      {
        "user": {
          "name": "Descartes",
          "avatars": "https://i.imgur.com/nlhLi3I.png",
          "handle": "@rd"
        },
        "content": {
          "text": "Je pense , donc je suis"
        },
        "created_at": 1461113959088
      }
    ]; */

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

  const renderTweets = function (inputData) {
    console.log("Rendering")
    for (post of inputData) {
      createTweetElement(post);
    };

  };

  // const $tweet1 = renderTweets(data);


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
    $('counter').val(140);


  });



  const loadTweets = function (action) {
    //GET the latest Tweet
    $.ajax("/tweets/")
      .then(res => {
        console.log(res)
        action(res)
      });
  };

  const fetchAndPost = () => loadTweets(renderTweets)
  fetchAndPost()

  // console.log("LOADTweets>>", loadTweets())

});


