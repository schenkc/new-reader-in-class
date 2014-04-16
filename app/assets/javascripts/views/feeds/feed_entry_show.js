NR.Views.FeedEntryShow = Backbone.View.extend({

  template: JST['feeds/show'],

  events: {
    "click button.refresh": "refresh",
    "click button.back": "goBack"
  },

  render: function () {
    this.$el.html("");
    var renderedContent = this.template({
      feedEntries: this.collection
    });

    this.$el.html(renderedContent);
    return this;
  },

  refresh: function () {
    var path = "#/feeds/" + this.model.id
    Backbone.history.navigate(path)
  },

  goBack: function () {
    Backbone.history.navigate("#/")

  }


});