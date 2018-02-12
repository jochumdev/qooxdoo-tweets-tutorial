"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.event.dispatch.AbstractBubbling": {
        "load": true
      },
      "qx.event.Registration": {
        "load": true,
        "defer": "runtime"
      }
    },
    "extends": "qx.event.dispatch.AbstractBubbling",
    "include": [],
    "implement": [],
    "hasDefer": true
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.event.dispatch.DomBubbling", {
    extend: qx.event.dispatch.AbstractBubbling,

    statics: {
      /** @type {Integer} Priority of this dispatcher */
      PRIORITY: qx.event.Registration.PRIORITY_NORMAL
    },

    members: {
      // overridden
      _getParent: function _getParent(target) {
        return target.parentNode;
      },

      // interface implementation
      canDispatchEvent: function canDispatchEvent(target, event, type) {
        return target.nodeType !== undefined && event.getBubbles();
      }
    },

    defer: function defer(statics) {
      qx.event.Registration.addDispatcher(statics);
    }
  });
  qx.event.dispatch.DomBubbling.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=DomBubbling.js.map