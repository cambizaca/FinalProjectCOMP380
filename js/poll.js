$(document).ready(function() {
    console.log("dks");
    $('#submit-button').click(onButtonClick);  

    
  });

let onButtonClick = function(){
    console.log("click")
    $('#poll-form').remove();
    $('#poll-parent').append(`<div class="bg-light" style="height:25vh; margin-top: 5vh;">
        <p class="paragraph lead" style="margin-left: 20vw; margin-top: 2.5vh; font-size: 2vw;">Thank you for filling out our poll!</p> 
    
    </div>`)
}
