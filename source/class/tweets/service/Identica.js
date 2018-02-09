/**
 * @asset(tweets/service.js)
 */
qx.Class.define("tweets.service.Identica", {
  extend: qx.core.Object,

  properties: {
    tweets: {
      nullable: true,
      event: "changeTweets"
    }
  },

  members: {
    __store: null,

    fetchTweets: function() {
      if (this.__store === null) {
        var url = qx.util.ResourceManager.getInstance().toUri("tweets/service.js");
        this.__store = new qx.data.store.Jsonp();
        this.__store.setCallbackName("callback");
        this.__store.setUrl(url);
        this.__store.bind("model", this, "tweets");
      } else {
        this.__store.reload();
      }
    }
  }
});
