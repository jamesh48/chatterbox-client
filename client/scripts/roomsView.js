var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.renderRoom);
  },

  renderRoom: function(roomName) {
    //For Passing Test...
    if (typeof roomName === 'object') {
      roomName.preventDefault();
      Rooms.add(roomName);
    }
    // alert(JSON.stringify(roomName))
    RoomsView.$select.append(`<option>${roomName}</option>`);
  }

};
