"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.core.Object": {
        "load": true,
        "construct": true
      },
      "qx.ui.core.MDragDropScrolling": {
        "load": true
      },
      "qx.core.Init": {}
    },
    "extends": "qx.core.Object",
    "include": ["qx.ui.core.MDragDropScrolling"],
    "implement": [],
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.ui.core.DragDropScrolling", {
    extend: qx.core.Object,

    include: [qx.ui.core.MDragDropScrolling],

    construct: function construct(widget) {
      qx.core.Object.constructor.call(this);

      this._widget = widget;
    },

    members: {
      _widget: null,

      /**
       * Returns the root widget whose children will have scroll on drag session
       * behavior. Widget was set on constructor or will be application root by
       * default.
       *
       * @return {qx.ui.core.Widget} The root widget whose children will have
       * scroll on drag session
       */
      _getWidget: function _getWidget() {
        return this._widget || qx.core.Init.getApplication().getRoot();
      }
    }
  });
  qx.ui.core.DragDropScrolling.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=DragDropScrolling.js.map