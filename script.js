// milestone1

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
    receivedMessage('Tutto ok');
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

// Search funcs Milestone 2

function addSearchLeastener(){
  var target = $("#search-input");
  target.keyup(searchKeyup);
}

function searchKeyup(){
  var input = $(this);
  var txt = input.val();

  var contacts = $(".contacts .user")
  contacts.each(function(){
    var contact = $(this);
    var name = contact.find('.user-name').text();

    if(name.toLowerCase().includes(txt.toLowerCase())){
      contact.show();
    }else {
      contact.hide();
    }

  });
}

// Add click Milestone 3
//Quando clicco sull'icona rendo visibile la classe .message-options-menu

function addTestClickListener(){
  $(document).on('click', '.message-options', function(){
    // Qui gli dico di fare qualcosa quando clicco sulla freccia
   showOptionsMenu();
   hideOptionMenu();
   console.log('click');
  });
}

function showOptionsMenu(){
  var click = $(this);
  var options = $('#sent .message-options-menu');

  if(click){
       options.show();
  }
}


// Funzioni di collegamento
function init () {
  addSendListener();
  addSearchLeastener();
  addTestClickListener();
}

$(document).ready(init);
