//=============Tweet Handling =====================================================
const loadTweets = function(action) {
  //GET the latest Tweet
  $.ajax("/tweets/")
    .then(res => {
      action(res);
    });
};

const createTweetElement = function(post) {
  // Not a good way of doing it, should break down into chunks

  const $tweet = $(`
<article class="tweet">
<header>
<span><img src=${post.user.avatars}><p>${post.user.name}</p></span>
<span id="handle">${post.user.handle}</span>
</header>
<p class='tweet-contents'>${escapeStr(post.content.text)}</p>
<footer>
<span>${moment(post.created_at).fromNow()}</span>
<span class="icons">
  <i class="fas fa-flag" title="Flag Inappropriate"></i>
  <i class="fas fa-retweet" title="Re-Twit"></i>
  <i class="fas fa-heart" title="Heart it Up"></i>
</span>
</footer>
</article>
`);

  $('#tweets-container').prepend($tweet);
};

const renderTweets = function(inputData) {
  // empty then in sectoin
  $('#tweets-container').empty();
  // Reverses JSON to give newest first (should be switchable)
  const revData = inputData; //.reverse()
  for (post of revData) {
    createTweetElement(post);
  }
};

const fetchAndUpdateAll = () => loadTweets(renderTweets);

const validateAndSubmit = function() {

  $("#inputError").hide('slow');
  const input = $("#tweet-text").val();

  //Validate Before Submission
  if (input === "") {
    // Must have something to input
    $('#inputError label').text("Womp womp, Tweets cannot be empty");
    $('#inputError').show('slow');
  } else if (input.length > 140) {
    //Max Character Exceeded
    $('#inputError label').text("Whoa now! Try keep it to 140 characters or less");
    $('#inputError').show('slow');
  } else {
    //POST and Tidy Up
    $.ajax({
      method: 'POST',
      url: "/tweets/",
      data: $('form').serialize()
    })
      .then(resetTextBox())
      .then(() => loadTweets(renderTweets));
  }
};

const escapeStr = function(str) {
  let p = document.createElement('p');
  p.appendChild(document.createTextNode(str));
  return p.innerHTML;
};

//==================== Page Handling ==========================================
const resetTextBox = () => {
  //Clear Text Box after post and reset counter
  $('#tweet-text').val('');
  $('output.counter').val(140);
};


const toggleTweetInputClick = function() {
  $('.navbutton').on('click', () => {
    $(".new-tweet").animate({
      height: "toggle",
      opacity: "toggle"
    }, {
      duration: "slow"
    });
    $('textarea').focus();
  });
}

const postTweetClick = function() {
  $('form button').on('click', event => {
    event.preventDefault();
    validateAndSubmit();
  });
}

const rtnToTopClick = function() {
  //Rtn to Top on Click
  $('#topButton').on('click', () => {
    $('html, body').animate({ scrollTop: 0 }, '300');
  });
}

const rtnToTopTrigger = function() {
  // Show/Hide Button on scroll Button
  $(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
      $("#topButton").show("slow");
    } else {
      $("#topButton").hide("slow");
    }
  });
}