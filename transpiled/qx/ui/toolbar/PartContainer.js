"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.ui.container.Composite": {
        "load": true,
        "construct": true
      },
      "qx.ui.layout.HBox": {
        "construct": true
      }
    },
    "extends": "qx.ui.container.Composite",
    "include": [],
    "implement": [],
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.ui.toolbar.PartContainer", {
    extend: qx.ui.container.Composite,

    construct: function construct() {
      qx.ui.container.Composite.constructor.call(this);
      this._setLayout(new qx.ui.layout.HBox());
    },

    events: {
      /** Fired if a child has been added or removed */
      changeChildren: "qx.event.type.Event"
    },

    properties: {
      appearance: {
        refine: true,
        init: "toolbar/part/container"
      },

      /** Whether icons, labels, both or none should be shown. */
      show: {
        init: "both",
        check: ["both", "label", "icon"],
        inheritable: true,
        event: "changeShow"
      }
    },

    members: {
      // overridden
      _afterAddChild: function _afterAddChild(child) {
        this.fireEvent("changeChildren");
      },

      // overridden
      _afterRemoveChild: function _afterRemoveChild(child) {
        this.fireEvent("changeChildren");
      }
    }
  });
  qx.ui.toolbar.PartContainer.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=PartContainer.js.map