$(document).ready(function () {


  console.log("Doc is ready")

  $("#tweet-text").on('input', function() {
    //Logs The current Input (on input changes of anykind)
    const inputTextLength =$(this).val().length;
    let remainingChars = 140-inputTextLength;

    
    if (remainingChars < 0){
      $("output").css('color','red');
    } else {
      $("output").css('color','#545149');
    }
    //re-writes the char counter 
    $("output").val(remainingChars);
  })

 

  // $('form button').on('keypress', () => {
  //   console.log(this);
  // })







});

