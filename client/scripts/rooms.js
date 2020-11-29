var Rooms = {
  // Parse.readAll(roomdata);
  add: function(event) {
    if (event.type === 'click') {
      var newRoom = prompt('Please enter new room name', '');
      if (newRoom === '') {
        return;
      }
      RoomsView.renderRoom(newRoom);
      return;
    } else if (event.target.value === 'New Room') {
      var newRoom = prompt('Please enter new room name', '');
      if (newRoom === '') {
        return;
      }
      RoomsView.renderRoom(newRoom);
    } else if (event.target.value === 'lobby') {
      App.fetch('lobby');
    } else {
      App.fetch(event.target.value, App.stopSpinner);
    }
  }
};