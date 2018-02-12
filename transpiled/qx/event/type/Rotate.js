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
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.event.type.Rotate", {
    extend: qx.event.type.Pointer,

    members: {

      // overridden
      _cloneNativeEvent: function _cloneNativeEvent(nativeEvent, clone) {
        var clone = qx.event.type.Rotate.prototype._cloneNativeEvent.base.call(this, nativeEvent, clone);

        clone.angle = nativeEvent.angle;

        return clone;
      },

      /**
       * Returns a number with the current calculated angle between the primary and secondary active pointers.
       *
       * @return {Number} the angle of the two active pointers.
       */
      getAngle: function getAngle() {
        return this._native.angle;
      }
    }
  });
  qx.event.type.Rotate.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Rotate.js.map