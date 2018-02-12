"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.event.type.Pointer": {
        "load": true
      }
    },
    "extends": "qx.event.type.Pointer",
    "include": [],
    "implement": [],
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.event.type.Pinch", {
    extend: qx.event.type.Pointer,

    members: {

      // overridden
      _cloneNativeEvent: function _cloneNativeEvent(nativeEvent, clone) {
        var clone = qx.event.type.Pinch.prototype._cloneNativeEvent.base.call(this, nativeEvent, clone);

        clone.scale = nativeEvent.scale;

        return clone;
      },

      /**
       * Returns the calculated scale of this event.
       *
       * @return {Float} the scale value of this event.
       */
      getScale: function getScale() {
        return this._native.scale;
      }
    }
  });
  qx.event.type.Pinch.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Pinch.js.map