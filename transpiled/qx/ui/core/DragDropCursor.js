"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.ui.basic.Image": {
        "load": true,
        "construct": true
      },
      "qx.ui.core.MPlacement": {
        "load": true
      }
    },
    "extends": "qx.ui.basic.Image",
    "include": ["qx.ui.core.MPlacement"],
    "implement": [],
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.ui.core.DragDropCursor", {
    extend: qx.ui.basic.Image,
    include: qx.ui.core.MPlacement,
    type: "singleton",

    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

    construct: function construct() {
      qx.ui.basic.Image.constructor.call(this);

      // Put above other stuff
      this.setZIndex(1e8);

      // Move using DOM
      this.setDomMove(true);

      // Automatically add to root
      var root = this.getApplicationRoot();
      root.add(this, { left: -1000, top: -1000 });
    },

    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */

    properties: {
      appearance: {
        refine: true,
        init: "dragdrop-cursor"
      },

      /** The current drag&drop action */
      action: {
        check: ["alias", "copy", "move"],
        apply: "_applyAction",
        nullable: true
      }
    },

    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */

    members: {
      // property apply
      _applyAction: function _applyAction(value, old) {
        if (old) {
          this.removeState(old);
        }

        if (value) {
          this.addState(value);
        }
      }
    }
  });
  qx.ui.core.DragDropCursor.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=DragDropCursor.js.map