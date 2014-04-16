NR.Views.FeedEntryShow = Backbone.View.extend({

  template: JST['feeds/show'],

  render: function () {

    this.$el.html("");
    var renderedContent = this.template({
      feedEntries: this.collection
    });

    this.$el.html(renderedContent);
    return this;
  }

});