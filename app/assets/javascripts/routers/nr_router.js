NR.Routers.NRRouter = Backbone.Router.extend({
  routes: {
    '': 'feedIndex',
    'feeds/:id': 'feedShow'
  },

  initialize: function (rootEl) {
    this.feeds = new NR.Collections.Feeds();
    this.rootEl = rootEl;
  },

  feedIndex: function () {
    var view = this;
    this.feeds.fetch({
      success: function () {
        var indexView = new NR.Views.FeedIndexView({
          collection: view.feeds
        });
        $(view.rootEl).html(indexView.render().$el);
      }
    })
  },

  feedShow: function (id) {
    var feed = this.feeds.get(id);
    var feedEntries = new NR.Collections.FeedEntries(feed);
    var view = this;
    feedEntries.fetch({
      success: function () {
        var showView = new NR.Views.FeedEntryShow({
          collection: feedEntries
        });

        $(view.rootEl).html(showView.render().$el);
      }
    })
  }
});