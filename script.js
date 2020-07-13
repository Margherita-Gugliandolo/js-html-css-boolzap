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
 var template = $('.template p').clone();

 var invioMessaggio = $('#message-content');
 template.append(contenutoMessaggio);

  invioMessaggio.append(template);
}
});
