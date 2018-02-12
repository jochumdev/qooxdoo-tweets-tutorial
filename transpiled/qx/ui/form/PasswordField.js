"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.ui.form.TextField": {
        "load": true
      },
      "qx.html.Input": {}
    },
    "extends": "qx.ui.form.TextField",
    "include": [],
    "implement": [],
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.ui.form.PasswordField", {
    extend: qx.ui.form.TextField,

    members: {
      // overridden
      _createInputElement: function _createInputElement() {
        return new qx.html.Input("password");
      }
    }
  });
  qx.ui.form.PasswordField.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=PasswordField.js.map