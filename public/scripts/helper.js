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
  // empty then in sectoin
  $('#tweets-container').empty()
  console.log("Rendering (All data to indv)")
  // Reverses JSON to give newest first (should be switchable)
  const revData = inputData //.reverse()
  for (post of revData) {
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
  $('#tweets-container').prepend($tweet);
};




const addLatestPost = (posts, creationMethod) => {
  const post = Object.values(posts).pop();
  creationMethod(post)
}





const validateAndSubmit = function() {
  input = $("#tweet-text").val()
  if (input === "") {
    // Must have something to input
    alert("Tweets cannot be empty")

  } else if (input.length > 140) {
    //Max Character Exceeded
    alert("Uh oh, your tweet is more than 140 characters")
  } else {
    submitTweet();
    const fetchAndUpdateAll = () => loadTweets(renderTweets)
    fetchAndUpdateAll()
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



   //Add LatestPost to List
    //Call
    // const createSinglePost = posts => addLatestPost(posts, createTweetElement);
    // const fetchAndUpdate = () => loadTweets(createSinglePost)
    // fetchAndUpdate()