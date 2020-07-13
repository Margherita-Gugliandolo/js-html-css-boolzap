$(document).ready (function(){

// uso del tasto invio
$('input').keydown(function(event){
   if(event.which==13 || event.keyCode==13){
   sendMessage();
 }
});

// Funzioni

function sendMessage (){
 var contenutoMessaggio = $('.container-msg > input').val();
 console.log(contenutoMessaggio);
 var transform = $(contenutoMessaggio).clone();
 var oneChat = $(this);
 var invioMessaggio = $('#message-content');

  invioMessaggio.append(contenutoMessaggio);
}
});
