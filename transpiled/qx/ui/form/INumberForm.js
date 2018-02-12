"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Interface": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.ui.form.IField": {
        "load": true
      }
    },
    "extends": "qx.ui.form.IField",
    "include": [],
    "implement": [],
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Interface.define("qx.ui.form.INumberForm", {
    extend: qx.ui.form.IField,

    /*
    *****************************************************************************
       EVENTS
    *****************************************************************************
    */

    events: {
      /** Fired when the value was modified */
      "changeValue": "qx.event.type.Data"
    },

    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      /*
      ---------------------------------------------------------------------------
        VALUE PROPERTY
      ---------------------------------------------------------------------------
      */

      /**
       * Sets the element's value.
       *
       * @param value {Number|null} The new value of the element.
       */
      setValue: function setValue(value) {
        return arguments.length == 1;
      },

      /**
       * Resets the element's value to its initial value.
       */
      resetValue: function resetValue() {},

      /**
       * The element's user set value.
       *
       * @return {Number|null} The value.
       */
      getValue: function getValue() {}
    }
  });
  qx.ui.form.INumberForm.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=INumberForm.js.map