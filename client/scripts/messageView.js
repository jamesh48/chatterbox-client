var MessageView = {
  render: _.template(
    `<div class='chat'>
      <a href='#' onclick='Friends.toggleStatus(event)' class = 'username'> <%- username %> </a>
      <h4 class = 'message'> <%- text %> </h4>
      <h6 class = 'roomname'> <%- roomname %> </h6>
      <h6 class = 'created-at'> <%- createdAt %> </h6>
    </div>`),

  renderFriend: _.template(
    `<div class='chat'>
      <a href='#' onclick='Friends.toggleStatus(event)' class = 'friend'> <%- username %> </a>
      <h4 class = 'message'> <%- text %> </h4>
      <h6 class = 'roomname'> <%- roomname %> </h6>
      <h6 class = 'created-at'> <%- createdAt %> </h6>
    </div>`)
};