NR.Routers.NRRouter = Backbone.Router.extend({
  routes: {
    '': 'feedIndex',
    'feed/:id': 'feedShow'
  },

  initialize: function (rootEl) {
    //this.feeds = new NR.Collections.Feeds();
    this.rootEl = rootEl;
  },

  feedIndex: function () {
    var view = this;
    var indexView = new NR.Views.FeedIndexView({
      // collection: view.feeds
    });

    $(this.rootEl).html(indexView.render().$el);
  },

  feedShow: function (id) {
    // var feed = this.feeds.get(id);
    var view = this;
    var showView = new NR.Views.FeedShowView({
      // model: feed;
    });

    $(this.rootEl).html(showView.render().$el);
  }
});