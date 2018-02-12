"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Mixin": {
        "load": true,
        "usage": "dynamic"
      }
    },
    "extends": null,
    "include": [],
    "implement": [],
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Mixin.define("qx.ui.core.scroll.MRoll", {
    members: {
      _cancelRoll: null,

      /**
       * Responsible for adding the event listener needed for scroll handling.
       */
      _addRollHandling: function _addRollHandling() {
        this.addListener("roll", this._onRoll, this);
        this.addListener("pointerdown", this._onPointerDownForRoll, this);
      },

      /**
       * Responsible for removing the event listener needed for scroll handling.
       */
      _removeRollHandling: function _removeRollHandling() {
        this.removeListener("roll", this._onRoll, this);
        this.removeListener("pointerdown", this._onPointerDownForRoll, this);
      },

      /**
       * Handler for the pointerdown event which simply stops the momentum scrolling.
       *
       * @param e {qx.event.type.Pointer} pointerdown event
       */
      _onPointerDownForRoll: function _onPointerDownForRoll(e) {
        this._cancelRoll = e.getPointerId();
      },

      /**
       * Roll event handler
       *
       * @param e {qx.event.type.Roll} Roll event
       */
      _onRoll: function _onRoll(e) {
        // only wheel and touch
        if (e.getPointerType() == "mouse") {
          return;
        }

        if (this._cancelRoll && e.getMomentum()) {
          e.stopMomentum();
          this._cancelRoll = null;
          return;
        }
        this._cancelRoll = null;

        var showX = this._isChildControlVisible("scrollbar-x");
        var showY = this._isChildControlVisible("scrollbar-y");

        var scrollbarY = showY ? this.getChildControl("scrollbar-y", true) : null;
        var scrollbarX = showX ? this.getChildControl("scrollbar-x", true) : null;

        var deltaY = e.getDelta().y;
        var deltaX = e.getDelta().x;

        var endY = !showY;
        var endX = !showX;

        // y case
        if (scrollbarY) {
          if (deltaY !== 0) {
            scrollbarY.scrollBy(parseInt(deltaY, 10));
          }

          var position = scrollbarY.getPosition();
          var max = scrollbarY.getMaximum();

          // pass the event to the parent if the scrollbar is at an edge
          if (deltaY < 0 && position <= 0 || deltaY > 0 && position >= max) {
            endY = true;
          }
        }

        // x case
        if (scrollbarX) {
          if (deltaX !== 0) {
            scrollbarX.scrollBy(parseInt(deltaX, 10));
          }

          var position = scrollbarX.getPosition();
          var max = scrollbarX.getMaximum();
          // pass the event to the parent if the scrollbar is at an edge
          if (deltaX < 0 && position <= 0 || deltaX > 0 && position >= max) {
            endX = true;
          }
        }

        if (endX && endY) {
          e.stopMomentum();
        }

        // pass the event to the parent if both scrollbars are at the end
        if (!endY && deltaX === 0 || !endX && deltaY === 0 || (!endX || !endY) && deltaX !== 0 && deltaY !== 0) {
          // Stop bubbling and native event only if a scrollbar is visible
          e.stop();
        }
      }
    }
  });
  qx.ui.core.scroll.MRoll.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=MRoll.js.map