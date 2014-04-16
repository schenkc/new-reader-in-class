NR.Collections.FeedEntries = Backbone.Collection.extend({

  model: NR.Models.FeedEntry,

  url: function () {
    return this.feed.url() + "/entries";
  },

  initialize: function (model) {
    this.feed = model;
  }

});