var MessagesView = {

  $chats: $('#chats'),
  $messages: $('#messages'),

  initialize: function() {
  },

  render: function() {
  },

  renderMessage: function(message) {
    var newMessage = $('<div class=message></</div>');
    $('<a href="#" onclick="Friends.toggleStatus(event)"></a>').attr('class', 'username').text(message.user).appendTo(newMessage);
    $('<p></p>').text(message.text).appendTo(newMessage);
    $('<p></p>').text(message.roomname).appendTo(newMessage);
    newMessage.appendTo(MessagesView.$chats);
    // $messages.appendTo($chats);
  },

};

