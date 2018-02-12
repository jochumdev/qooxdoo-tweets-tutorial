"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.ui.form.Button": {
        "load": true,
        "construct": true
      },
      "qx.ui.toolbar.PartContainer": {},
      "qx.ui.core.queue.Appearance": {}
    },
    "extends": "qx.ui.form.Button",
    "include": [],
    "implement": [],
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.ui.toolbar.Button", {
    extend: qx.ui.form.Button,

    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

    construct: function construct(label, icon, command) {
      qx.ui.form.Button.constructor.call(this, label, icon, command);

      // Toolbar buttons should not support the keyboard events
      this.removeListener("keydown", this._onKeyDown);
      this.removeListener("keyup", this._onKeyUp);
    },

    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */

    properties: {
      appearance: {
        refine: true,
        init: "toolbar-button"
      },

      show: {
        refine: true,
        init: "inherit"
      },

      focusable: {
        refine: true,
        init: false
      }
    },

    members: {
      // overridden
      _applyVisibility: function _applyVisibility(value, old) {
        qx.ui.toolbar.Button.prototype._applyVisibility.base.call(this, value, old);
        // trigger a appearance recalculation of the parent
        var parent = this.getLayoutParent();
        if (parent && parent instanceof qx.ui.toolbar.PartContainer) {
          qx.ui.core.queue.Appearance.add(parent);
        }
      }
    }
  });
  qx.ui.toolbar.Button.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Button.js.map