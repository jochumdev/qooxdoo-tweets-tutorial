"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.theme.simple.Color": {
        "load": true
      }
    },
    "extends": "qx.theme.simple.Color",
    "include": [],
    "implement": [],
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Theme.define("tweets.theme.Color", {
    extend: qx.theme.simple.Color,

    colors: {
      "tweet-time": "#E0E0E0"
    }
  });
  tweets.theme.Color.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Color.js.map