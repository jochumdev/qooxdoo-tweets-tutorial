"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.ui.core.Widget": {
        "load": true
      }
    },
    "extends": "qx.ui.core.Widget",
    "include": [],
    "implement": [],
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.ui.toolbar.Separator", {
    extend: qx.ui.core.Widget,

    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */

    properties: {
      // overridden
      appearance: {
        refine: true,
        init: "toolbar-separator"
      },

      // overridden
      anonymous: {
        refine: true,
        init: true
      },

      // overridden
      width: {
        refine: true,
        init: 0
      },

      // overridden
      height: {
        refine: true,
        init: 0
      }
    }
  });
  qx.ui.toolbar.Separator.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Separator.js.map