"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.theme.simple.Font": {
        "load": true
      }
    },
    "extends": "qx.theme.simple.Font",
    "include": [],
    "implement": [],
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Theme.define("tweets.theme.Font", {
    extend: qx.theme.simple.Font,

    fonts: {}
  });
  tweets.theme.Font.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Font.js.map