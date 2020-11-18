const loadTweets = function (action) {
  console.log("LOADING ALL TWEETS")
  //GET the latest Tweet
  $.ajax("/tweets/")
    .then(res => {
      // console.log(res)
      action(res)
    });
};

const renderTweets = function (inputData) {
  console.log("Rendering (All data to indv)")
  for (post of inputData) {
    createTweetElement(post);
  };
};


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


const getLastTweet = (creationMethod) => {
  const allData = loadTweets(creationMethod)
  console.log("ALL>> ", allData)
  const lastItem = Object.values(allData).pop()

}

const createLastTweet = (post) => {
  createTweetElement(post);
}



const validateAndSubmit = function() {
  input = $("#tweet-text").val()
  if (input === "") {
    // Must have something to input
    alert("Tweets cannot be empty")

  } else if (input.length > 140) {
    console.log('Vinput', input)
    //Max Character Exceeded
    alert("Uh oh, your tweet is more than 140 characters")
  } else {
    submitTweet();
  }
   
}

const submitTweet = function(){
  console.log('SUBMITTING')
  $.ajax({
    method: 'POST',
    url: "/tweets/",
    data: $('form').serialize()
  })
  resetTextBox();
}


const resetTextBox = () => {
  //Clear Text Box after post and reset counter
  $('#tweet-text').val('');
  $('output.counter').val(140);
}