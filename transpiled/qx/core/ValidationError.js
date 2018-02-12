"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.type.BaseError": {
        "load": true
      }
    },
    "extends": "qx.type.BaseError",
    "include": [],
    "implement": [],
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.core.ValidationError", {
    extend: qx.type.BaseError
  });
  qx.core.ValidationError.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=ValidationError.js.map