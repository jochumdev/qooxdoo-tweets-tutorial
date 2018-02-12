"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.ui.container.SlideBar": {
        "load": true,
        "construct": true
      },
      "qx.ui.form.HoverButton": {}
    },
    "extends": "qx.ui.container.SlideBar",
    "include": [],
    "implement": [],
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.ui.menu.MenuSlideBar", {
    extend: qx.ui.container.SlideBar,

    construct: function construct() {
      qx.ui.container.SlideBar.constructor.call(this, "vertical");
    },

    properties: {
      appearance: {
        refine: true,
        init: "menu-slidebar"
      }
    },

    members: {
      // overridden
      _createChildControlImpl: function _createChildControlImpl(id, hash) {
        var control;

        switch (id) {
          case "button-forward":
            control = new qx.ui.form.HoverButton();
            control.addListener("execute", this._onExecuteForward, this);
            this._addAt(control, 2);
            break;

          case "button-backward":
            control = new qx.ui.form.HoverButton();
            control.addListener("execute", this._onExecuteBackward, this);
            this._addAt(control, 0);
            break;
        }

        return control || qx.ui.menu.MenuSlideBar.prototype._createChildControlImpl.base.call(this, id);
      }
    }
  });
  qx.ui.menu.MenuSlideBar.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=MenuSlideBar.js.map