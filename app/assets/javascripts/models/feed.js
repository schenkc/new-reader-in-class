NR.Models.Feed = Backbone.Model.extend({

  urlRoot: "/feeds",
  //this doesn't work
  entries: function () {
    if (!this._entries) {
      this._entries = new NR.Collections.FeedEntries();
    }
    return this._entries;
  },

  parse: function(jsonResp) {
    if (jsonResp.entries) {
      this.entries().set(jsonResp.entries);
      delete jsonResp.entries;
    }

    return jsonResp;
  }

});
