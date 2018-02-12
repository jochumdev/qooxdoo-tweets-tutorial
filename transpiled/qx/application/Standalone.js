"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Init": {
        "require": true
      },
      "qx.Class": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.application.AbstractGui": {
        "load": true
      },
      "qx.ui.root.Application": {}
    },
    "extends": "qx.application.AbstractGui",
    "include": [],
    "implement": [],
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.application.Standalone", {
    extend: qx.application.AbstractGui,

    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      _createRootWidget: function _createRootWidget() {
        return new qx.ui.root.Application(document);
      }
    }
  });
  qx.application.Standalone.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Standalone.js.map