$(document).ready(function () {

  console.log("Doc is ready")

  $('form textarea').on('input', () => {
    //Logs The current Input (on input changes of anykind)
    const inputTextLength =$('form textarea').val().length
    // <output name="counter" class="counter" for="tweet-text">140</output>
    //re-writes the char counter 
    // const counter = $('form output').val('howdy')
    $('form output').val(inputTextLength)
    // console.log(inputTextLength);
    // console.log(counter)


  })

  $('form button').on('keypress', () => {
    console.log(this);
  })











});
