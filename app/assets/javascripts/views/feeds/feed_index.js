NR.Views.FeedIndexView = Backbone.View.extend({

  template: JST['feeds/index'],


  render: function () {

    this.$el.html("");
    console.log(this.template);
    var renderedContent = this.template({
      // feeds: this.collection
    });

    this.$el.html(renderedContent);
    return this;
  }

});