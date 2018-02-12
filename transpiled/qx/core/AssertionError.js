"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Bootstrap": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.type.BaseError": {
        "load": true,
        "construct": true
      },
      "qx.dev.StackTrace": {
        "construct": true
      }
    },
    "extends": "qx.type.BaseError",
    "include": [],
    "implement": [],
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Bootstrap.define("qx.core.AssertionError", {
    extend: qx.type.BaseError,

    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

    /**
     * @param comment {String} Comment passed to the assertion call
     * @param failMessage {String} Fail message provided by the assertion
     */
    construct: function construct(comment, failMessage) {
      qx.type.BaseError.call(this, comment, failMessage);
      this.__trace = qx.dev.StackTrace.getStackTrace();
    },

    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      __trace: null,

      /**
       * Stack trace of the error
       *
       * @return {String[]} The stack trace of the location the exception was thrown
       */
      getStackTrace: function getStackTrace() {
        return this.__trace;
      }
    }
  });
  qx.core.AssertionError.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=AssertionError.js.map