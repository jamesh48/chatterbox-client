var Rooms = {
  // Parse.readAll(roomdata);
  add: function(event) {
    if (event.target.value === 'New Room') {
      var newRoom = prompt('Please new room name', '');
      RoomsView.renderRoom(newRoom);
    } else if (event.target.value === 'lobby') {
      App.fetch('lobby');
    } else {
      App.fetch(event.target.value);
    }
  }
};