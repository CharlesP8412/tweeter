/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

const createTweetElement = function (tweetData) {
  console.log(tweetData.user.name)
  const $tweet = $(`<article class="tweet">
  <header>
  <!-- Picture, Full name, @Handle -->
  <span><img src=${tweetData.user.avatars}><p>${tweetData.user.name}</p></span>
  <span id="hande">${tweetData.user.handle}</span>
  </header>
  <p class='tweet'>${tweetData.content.text}</p>
  <footer>
  <!-- Time and icons/ buttons -->
  <span>${tweetData.created_at} days ago</span>
  <span class="icons">
    <i class="fas fa-flag" title="Flag Inappropriate"></i>
    <i class="fas fa-retweet" title="Re-Twit"></i>
    <i class="fas fa-heart" title="Heart it Up"></i>
  </span>
  </footer>
  </article>`);
  return $tweet;
}

const $tweet1 = createTweetElement(tweetData);
// Test / driver code (temporary)
console.log("TWEET1",$tweet1); // to see what it looks like
$('#tweets-container').html("<p>TEST</p>"); 
// to add it to the page so we can make sure it's got all the right elements, classes, etc.