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
      "qx.ui.decoration.IDecorator": {
        "load": true
      }
    },
    "extends": "qx.core.Object",
    "include": [],
    "implement": ["qx.ui.decoration.IDecorator"],
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.ui.decoration.Abstract", {
    extend: qx.core.Object,
    implement: [qx.ui.decoration.IDecorator],
    type: "abstract",

    members: {
      __insets: null,

      /**
       * Abstract method. Should return a map containing the default insets of
       * the decorator. This could look like this:
       * <pre>
       * return {
       *   top : 0,
       *   right : 0,
       *   bottom : 0,
       *   left : 0
       * };
       * </pre>
       * @return {Map} Map containing the insets.
       */
      _getDefaultInsets: function _getDefaultInsets() {
        throw new Error("Abstract method called.");
      },

      /**
       * Abstract method. Should return an boolean value if the decorator is
       * already initialized or not.
       * @return {Boolean} True, if the decorator is initialized.
       */
      _isInitialized: function _isInitialized() {
        throw new Error("Abstract method called.");
      },

      /**
       * Resets the insets.
       */
      _resetInsets: function _resetInsets() {
        this.__insets = null;
      },

      // interface implementation
      getInsets: function getInsets() {
        if (!this.__insets) {
          this.__insets = this._getDefaultInsets();
        }

        return this.__insets;
      }
    },

    /*
     *****************************************************************************
        DESTRUCTOR
     *****************************************************************************
     */

    destruct: function destruct() {
      this.__insets = null;
    }
  });
  qx.ui.decoration.Abstract.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Abstract.js.map