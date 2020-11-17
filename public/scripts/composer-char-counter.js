$(document).ready(function () {


  console.log("Doc is ready")

  $("#tweet-text").on('input', function() {
    //Logs The current Input (on input changes of anykind)
    const inputTextLength =$(this).val().length
    //re-writes the char counter 
    $("output").val(inputTextLength)
  })

 

  // $('form button').on('keypress', () => {
  //   console.log(this);
  // })







});

