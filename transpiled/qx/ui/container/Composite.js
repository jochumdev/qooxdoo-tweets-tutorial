"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.ui.core.Widget": {
        "load": true,
        "construct": true
      },
      "qx.ui.core.MChildrenHandling": {
        "load": true,
        "defer": "runtime"
      },
      "qx.ui.core.MLayoutHandling": {
        "load": true,
        "defer": "runtime"
      },
      "qx.event.type.Data": {}
    },
    "extends": "qx.ui.core.Widget",
    "include": ["qx.ui.core.MChildrenHandling", "qx.ui.core.MLayoutHandling"],
    "implement": [],
    "hasDefer": true
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.ui.container.Composite", {
    extend: qx.ui.core.Widget,
    include: [qx.ui.core.MChildrenHandling, qx.ui.core.MLayoutHandling],

    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

    /**
     * @param layout {qx.ui.layout.Abstract} A layout instance to use to
     *   place widgets on the screen.
     */
    construct: function construct(layout) {
      qx.ui.core.Widget.constructor.call(this);

      if (layout != null) {
        this._setLayout(layout);
      }
    },

    /*
    *****************************************************************************
       EVENTS
    *****************************************************************************
    */

    events: {
      /**
       * This event is fired after a child widget was added to this widget. The
       * {@link qx.event.type.Data#getData} method of the event returns the
       * added child.
       */
      addChildWidget: "qx.event.type.Data",

      /**
       * This event is fired after a child widget has been removed from this widget.
       * The {@link qx.event.type.Data#getData} method of the event returns the
       * removed child.
       */
      removeChildWidget: "qx.event.type.Data"
    },

    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      // overridden
      _afterAddChild: function _afterAddChild(child) {
        this.fireNonBubblingEvent("addChildWidget", qx.event.type.Data, [child]);
      },

      // overridden
      _afterRemoveChild: function _afterRemoveChild(child) {
        this.fireNonBubblingEvent("removeChildWidget", qx.event.type.Data, [child]);
      }
    },

    /*
    *****************************************************************************
       DEFER
    *****************************************************************************
    */

    defer: function defer(statics, members) {
      qx.ui.core.MChildrenHandling.remap(members);
      qx.ui.core.MLayoutHandling.remap(members);
    }
  });
  qx.ui.container.Composite.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Composite.js.map