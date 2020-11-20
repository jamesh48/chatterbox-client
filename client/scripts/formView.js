var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // console.log(event.target.value);
    // console.log(event.target.text);
    // console.log(App.username);
    var message = {
      username: `${App.username}`,
      text: $('form').val(),
      roomname: 'lobby'
    };
    // console.log(FormView.$form.text());
    console.log(App.fetch());
    // console.log(event.target.innerHTML);
    MessagesView.renderMessage(message);
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};