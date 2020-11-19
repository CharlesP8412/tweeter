const loadTweets = function (action) {
  //GET the latest Tweet
  $.ajax("/tweets/")
    .then(res => {
      action(res)
    });
};

const renderTweets = function (inputData) {
  // empty then in sectoin
  $('#tweets-container').empty()
  // Reverses JSON to give newest first (should be switchable)
  const revData = inputData //.reverse()
  for (post of revData) {
    createTweetElement(post);
  };
};


const createTweetElement = function (post) {
  // Got a good way of doing it, should break down into chunks

  const $tweet = $(`

<article class="tweet">
<header>
<span><img src=${post.user.avatars}><p>${post.user.name}</p></span>
<span id="handle">${post.user.handle}</span>
</header>
<p class='tweet-contents'>${escape(post.content.text)}</p>  
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

const escape = function (str) {
  let p = document.createElement('p');
  p.appendChild(document.createTextNode(str));
  return p.innerHTML;
}




const validateAndSubmit = function () {
 
  $("#inputError").hide('slow')
  input = $("#tweet-text").val()
  if (input === "") {
    // Must have something to input
        $('#inputError label').text("Womp womp, Tweets cannot be empty")
        $('#inputError').show('slow')
  } else if (input.length > 140) {
    //Max Character Exceeded
    $('#inputError label').text("Whoa now! Your tweet is more than 140 characters")
    $('#inputError').show('slow')
  } else {

    $.ajax({
      method: 'POST',
      url: "/tweets/",
      data: $('form').serialize()
    })
      .then(resetTextBox())
      .then(loadTweets(renderTweets))
    // .then(resetTextBox)
    // .then($("#inputError").hide())
  }

}


const resetTextBox = () => {
  //Clear Text Box after post and reset counter
  $('#tweet-text').val('');
  $('output.counter').val(140);
}


