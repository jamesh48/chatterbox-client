var Friends = {
  toggleStatus: function(event) {
    if (Friends.friendArray.includes(event.target.innerHTML.trim())) {
      Friends.friendArray.splice(Friends.friendArray.indexOf(event.target.innerHTML), 1);
    } else {
      Friends.friendArray.push(event.target.innerHTML.trim());
    }
    App.startSpinner();
    App.fetch($('.drop-down').val(), App.stopSpinner);
  },

  friendArray: []

};