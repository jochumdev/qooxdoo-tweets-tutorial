"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.theme.simple.Appearance": {
        "load": true
      }
    },
    "extends": "qx.theme.simple.Appearance",
    "include": [],
    "implement": [],
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Theme.define("tweets.theme.Appearance", {
    extend: qx.theme.simple.Appearance,

    appearances: {
      "tweet-view": {},

      "tweet-view/time": {
        style: function style() {
          return {
            textColor: "#E0E0E0"
          };
        }
      },

      "toolbar": {
        style: function style() {
          return {
            backgroundColor: "window-border-inner"
          };
        }
      }
    }
  });
  tweets.theme.Appearance.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Appearance.js.map