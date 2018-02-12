"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Bootstrap": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.core.Environment": {
        "defer": "runtime"
      }
    },
    "extends": null,
    "include": [],
    "implement": [],
    "environment": {
      "provided": [],
      "required": {
        "ecmascript.number.EPSILON": {
          "defer": true
        }
      }
    },
    "hasDefer": true
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Bootstrap.define("qx.lang.normalize.Number", {

    statics: {
      EPSILON: 2e-52
    },

    defer: function defer(statics) {
      if (!qx.core.Environment.get("ecmascript.number.EPSILON")) {
        Number.prototype.EPSILON = statics.EPSILON;
      }
    }
  });
  qx.lang.normalize.Number.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Number.js.map