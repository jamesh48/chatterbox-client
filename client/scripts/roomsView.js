var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.renderRoom);
  },

  renderRoom: function(roomName) {
    // RoomsView.$select.append(`<option>${roomName}</option>`);
    
  }

};
