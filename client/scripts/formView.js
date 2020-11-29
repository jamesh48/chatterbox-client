var FormView = {

  $form: $('.messageform'),
  $testForm: $('form .submit'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    //For Tests...
    FormView.$testForm.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    if ($('.drop-down').val() === 'Select Room') {
      alert('Please Select a Room');
      return;
    }

    var message = {
      username: App.username,
      text: $('#message').val(),
      roomname: $('.drop-down').val()
    };
    MessagesView.renderMessage(message);
    console.log('click!');

    Parse.create(message);

    App.startSpinner();
    App.fetch(message.roomname, App.stopSpinner);

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};