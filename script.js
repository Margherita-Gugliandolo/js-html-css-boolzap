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

function addClickListener(){
  $(document).on('click', '.f-right', function(){

    var click = $(this);
    var optionS = click.siblings('#sent .message-options-menu');

     if(click){
         optionS.toggle();
       }
  });

  $(document).on('click', '.f-left', function(){

    var click = $(this);
    var optionR = click.siblings('#received .message-options-menu');

     if(click){
         optionR.toggle();
       }
});

}

function addMessageDestroyListener(){
$(document).on('click', '.message-destroy', messageDestroyClick);

function messageDestroyClick(){

 var destroyOptions = $(this);
 var message = destroyOptions.closest('.message');
 message.remove();

 };
}

// Click sul contatto​ mostra la conversazione del contatto cliccato, è possibile inserire nuovi messaggi per ogni conversazione

//aggiungo la classe .active solo all'user cliccato

function addUserListener(){

  var utente = $('.contacts .user');

  utente.click(contactClick);
}

function contactClick(){

  var clickContact = $(this);
  var id = clickContact.data('id');
  var utente = $('.contacts .user');

  utente.removeClass('active');
  clickContact.addClass('active');

  console.log('id', id);

  var conversation = $('.right-messages');
  var selectedConversation = $('.right-messages[data-id=' + id +']');

  conversation.removeClass('active');
  selectedConversation.addClass('active');
}



// Funzioni di collegamento
function init () {
  addSendListener();
  addSearchLeastener();
  addClickListener();
  addMessageDestroyListener();
  addUserListener();

}

$(document).ready(init);
