var MessageView = {
  render: _.template(
    `<div class='chat'>
      <h3 class = 'username'> <%- username %> </h3>
      <h4 class = 'message'> <%- text %> </h4>
      <h6 class = 'created-at'> <%- createdAt %> </h6>
    </div>`)
};