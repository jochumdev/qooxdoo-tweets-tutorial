"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "load": true,
        "usage": "dynamic"
      },
      "tweets.theme.Color": {
        "load": true
      },
      "tweets.theme.Decoration": {
        "load": true
      },
      "tweets.theme.Font": {
        "load": true
      },
      "qx.theme.icon.Oxygen": {
        "load": true
      },
      "tweets.theme.Appearance": {
        "load": true
      }
    },
    "extends": null,
    "include": [],
    "implement": [],
    "hasDefer": null,
    "themeMeta": {
      "color": "tweets.theme.Color",
      "decoration": "tweets.theme.Decoration",
      "font": "tweets.theme.Font",
      "icon": "qx.theme.icon.Oxygen",
      "appearance": "tweets.theme.Appearance"
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Theme.define("tweets.theme.Theme", {
    meta: {
      color: tweets.theme.Color,
      decoration: tweets.theme.Decoration,
      font: tweets.theme.Font,
      icon: qx.theme.icon.Oxygen,
      appearance: tweets.theme.Appearance
    }
  });
  tweets.theme.Theme.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Theme.js.map