NR.Views.FeedShowView = Backbone.View.extend({

  template: JST['feeds/show'],


  render: function () {

    this.$el.html("");
    var renderedContent = this.template({
      // feed: this.model
    });

    this.$el.html(renderedContent);
    return this;
  }

});