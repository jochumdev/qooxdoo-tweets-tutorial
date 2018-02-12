"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Interface": {
        "load": true,
        "usage": "dynamic"
      }
    },
    "extends": null,
    "include": [],
    "implement": [],
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Interface.define("qx.ui.form.IModelSelection", {

    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      /**
       * Tries to set the selection using the given array containing the
       * representative models for the selectables.
       *
       * @param value {Array} An array of models.
       */
      setModelSelection: function setModelSelection(value) {},

      /**
       * Returns an array of the selected models.
       *
       * @return {Array} An array containing the models of the currently selected
       *   items.
       */
      getModelSelection: function getModelSelection() {}
    }
  });
  qx.ui.form.IModelSelection.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=IModelSelection.js.map