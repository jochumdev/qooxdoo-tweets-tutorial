"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.core.Object": {
        "load": true
      },
      "qx.event.IEventDispatcher": {
        "load": true
      },
      "qx.event.type.Event": {},
      "qx.core.Environment": {}
    },
    "extends": "qx.core.Object",
    "include": [],
    "implement": ["qx.event.IEventDispatcher"],
    "environment": {
      "provided": [],
      "required": {
        "qx.debug": {}
      }
    },
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.event.dispatch.AbstractBubbling", {
    extend: qx.core.Object,
    implement: qx.event.IEventDispatcher,
    type: "abstract",

    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

    /**
     * Create a new instance
     *
     * @param manager {qx.event.Manager} Event manager for the window to use
     */
    construct: function construct(manager) {
      this._manager = manager;
    },

    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      /*
      ---------------------------------------------------------------------------
        EVENT DISPATCHER HELPER
      ---------------------------------------------------------------------------
      */

      /**
       * Returns the parent of the given target
       *
       * @abstract
       * @param target {var} The target which parent should be found
       * @return {var} The parent of the given target
       */
      _getParent: function _getParent(target) {
        throw new Error("Missing implementation");
      },

      /*
      ---------------------------------------------------------------------------
        EVENT DISPATCHER INTERFACE
      ---------------------------------------------------------------------------
      */

      // interface implementation
      canDispatchEvent: function canDispatchEvent(target, event, type) {
        return event.getBubbles();
      },

      // interface implementation
      dispatchEvent: function dispatchEvent(target, event, type) {
        var parent = target;
        var manager = this._manager;
        var captureListeners, bubbleListeners;
        var localList;
        var listener, context;
        var currentTarget;

        // Cache list for AT_TARGET
        var targetList = [];

        captureListeners = manager.getListeners(target, type, true);
        bubbleListeners = manager.getListeners(target, type, false);

        if (captureListeners) {
          targetList.push(captureListeners);
        }

        if (bubbleListeners) {
          targetList.push(bubbleListeners);
        }

        // Cache list for CAPTURING_PHASE and BUBBLING_PHASE
        var parent = this._getParent(target);

        var bubbleList = [];
        var bubbleTargets = [];

        var captureList = [];
        var captureTargets = [];

        // Walk up the tree and look for event listeners
        while (parent != null) {
          // Attention:
          // We do not follow the DOM2 events specifications here
          // http://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-flow-capture
          // Opera is the only browser which conforms to the spec.
          // Safari and Mozilla do it the same way like qooxdoo does
          // and add the capture events of the target to the execution list.
          captureListeners = manager.getListeners(parent, type, true);
          if (captureListeners) {
            captureList.push(captureListeners);
            captureTargets.push(parent);
          }

          bubbleListeners = manager.getListeners(parent, type, false);

          if (bubbleListeners) {
            bubbleList.push(bubbleListeners);
            bubbleTargets.push(parent);
          }

          parent = this._getParent(parent);
        }

        // capturing phase
        // loop through the hierarchy in reverted order (from root)
        event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);
        for (var i = captureList.length - 1; i >= 0; i--) {
          currentTarget = captureTargets[i];
          event.setCurrentTarget(currentTarget);

          localList = captureList[i];
          for (var j = 0, jl = localList.length; j < jl; j++) {
            listener = localList[j];
            context = listener.context || currentTarget;

            if (qx.core.Environment.get("qx.debug")) {
              // warn if the context is disposed
              if (context && context.isDisposed && context.isDisposed()) {
                this.warn("The context object '" + context + "' for the event '" + type + "' of '" + currentTarget + "'is already disposed.");
              }
            }
            if (!this._manager.isBlacklisted(listener.unique)) {
              listener.handler.call(context, event);
            }
          }

          if (event.getPropagationStopped()) {
            return;
          }
        }

        // at target
        event.setEventPhase(qx.event.type.Event.AT_TARGET);
        event.setCurrentTarget(target);
        for (var i = 0, il = targetList.length; i < il; i++) {
          localList = targetList[i];
          for (var j = 0, jl = localList.length; j < jl; j++) {
            listener = localList[j];
            context = listener.context || target;

            if (qx.core.Environment.get("qx.debug")) {
              // warn if the context is disposed
              if (context && context.isDisposed && context.isDisposed()) {
                this.warn("The context object '" + context + "' for the event '" + type + "' of '" + target + "'is already disposed.");
              }
            }

            listener.handler.call(context, event);
          }

          if (event.getPropagationStopped()) {
            return;
          }
        }

        // bubbling phase
        // loop through the hierarchy in normal order (to root)
        event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);
        for (var i = 0, il = bubbleList.length; i < il; i++) {
          currentTarget = bubbleTargets[i];
          event.setCurrentTarget(currentTarget);

          localList = bubbleList[i];
          for (var j = 0, jl = localList.length; j < jl; j++) {
            listener = localList[j];
            context = listener.context || currentTarget;

            if (qx.core.Environment.get("qx.debug")) {
              // warn if the context is disposed
              if (context && context.isDisposed && context.isDisposed()) {
                this.warn("The context object '" + context + "' for the event '" + type + "' of '" + currentTarget + "'is already disposed.");
              }
            }

            listener.handler.call(context, event);
          }

          if (event.getPropagationStopped()) {
            return;
          }
        }
      }
    }
  });
  qx.event.dispatch.AbstractBubbling.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=AbstractBubbling.js.map