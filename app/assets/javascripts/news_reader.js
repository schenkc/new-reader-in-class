window.NR = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new NR.Routers.NRRouter("#content");
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NR.initialize();
});
