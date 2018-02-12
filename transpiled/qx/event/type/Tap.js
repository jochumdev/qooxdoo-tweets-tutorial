"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.event.type.Pointer": {
        "load": true
      }
    },
    "extends": "qx.event.type.Pointer",
    "include": [],
    "implement": [],
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.event.type.Tap", {
    extend: qx.event.type.Pointer
  });
  qx.event.type.Tap.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Tap.js.map