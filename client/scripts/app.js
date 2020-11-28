var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    $('.drop-down').val('lobby');
    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(null, App.stopSpinner);
  },

  storage: [],

  fetch: function(roomName, stopSpinner) {
    if (stopSpinner !== undefined) {
      stopSpinner();
    }
    $('#chats').empty();
    Parse.readAll((data) => {
      // examine the response from the server request:
      // var storage = [];
      console.log(data);

      for (var i = 0; i < data.results.length; i++) {
        //Handles for undefined messages.
        if (data.results[i].text === undefined) {
          data.results[i].text = '';
        }
        //Handles for undefined Rooms
        if (data.results[i].roomname === undefined) {
          data.results[i].roomname = '';
        }

        //Renders Rooms to Select/Dropdown
        if (data.results[i].roomname !== undefined && !App.storage.includes(data.results[i].roomname)) {
          App.storage.push(data.results[i].roomname);
          RoomsView.renderRoom(data.results[i].roomname);
        }

        //Filters Rooms
        if (roomName !== 'lobby') {
          if (data.results[i].roomname !== roomName) {
            continue;
          }
          let html = '';
          html += MessageView.render(data.results[i]);
          $('#chats').append(html);
          continue;
        }
        //Appends messages to chats
        let html = '';
        html += MessageView.render(data.results[i]);
        $('#chats').append(html);
      }
      // callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
