var FormView = {

  $form: $('.messageform'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var message = {
      username: App.username,
      text: $('#message').val(),
      roomname: $('.drop-down').val()
    };
    // console.log($('.drop-down').val());
    console.log(message);
    // console.log(data);
    MessagesView.renderMessage(message);
    console.log('click!');

    Parse.create(message);
    // $('#chats').empty();

    App.startSpinner();
    // App.fetch(App.stopSpinner);
    App.fetch(message.roomname, App.stopSpinner);

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};