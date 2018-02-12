"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.theme.simple.Decoration": {
        "load": true
      }
    },
    "extends": "qx.theme.simple.Decoration",
    "include": [],
    "implement": [],
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Theme.define("tweets.theme.Decoration", {
    extend: qx.theme.simple.Decoration,

    decorations: {}
  });
  tweets.theme.Decoration.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Decoration.js.map