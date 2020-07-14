function addSendListener (){

var target = $('#message-input')
target.keyup(sendKeyup);

}
// funzione 1
function sendKeyup(event){

  var key = event.which;
  var input = $(this);
  var txt = input.val();


  if(key === 13 && txt.length>0){

    input.val('');

    sendMessage(txt);

    setTimeout(function() {
    // tempo due secondi in cui deve partire la risposta
    receivedMessage('Come dice Giovanni: "sono contentino.."');
   },2000);
  }
}
// funzione 2
function sendMessage(txt){
  var template = $('#sent').clone();
  var target = $('#right-messages');


  template.find('#msg-text').text(txt);
  template.find('#msg-time').text(getActualHour());


  target.append(template);
}
// funzione 3
function getActualHour(){
  var date = new Date();
  return date.getHours() + ':' + date.getMinutes();
}

// funzione 4
function receivedMessage(txt){
  var template = $('#received').clone();
  var target = $('#right-messages');


  template.find('#msg-text-received').text(txt);
  template.find('#msg-time-received').text(getActualHour());


  target.append(template);
}



// Funzioni di collegamento
function init () {
  addSendListener();
}

$(document).ready(init);
