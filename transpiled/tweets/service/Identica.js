"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.core.Object": {
        "load": true
      },
      "qx.util.ResourceManager": {},
      "qx.data.store.Jsonp": {}
    },
    "extends": "qx.core.Object",
    "include": [],
    "implement": [],
    "hasDefer": null,
    "assets": ["tweets/service.js"]
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("tweets.service.Identica", {
    extend: qx.core.Object,

    properties: {
      tweets: {
        nullable: true,
        event: "changeTweets"
      }
    },

    members: {
      __store: null,

      fetchTweets: function fetchTweets() {
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
  tweets.service.Identica.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Identica.js.map