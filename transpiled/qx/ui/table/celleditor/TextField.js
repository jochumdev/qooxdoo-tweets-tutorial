"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.ui.table.celleditor.AbstractField": {
        "load": true
      },
      "qx.ui.form.TextField": {}
    },
    "extends": "qx.ui.table.celleditor.AbstractField",
    "include": [],
    "implement": [],
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.ui.table.celleditor.TextField", {
    extend: qx.ui.table.celleditor.AbstractField,

    members: {
      // overridden
      getCellEditorValue: function getCellEditorValue(cellEditor) {
        var value = cellEditor.getValue();

        // validation function will be called with new and old value
        var validationFunc = this.getValidationFunction();
        if (validationFunc) {
          value = validationFunc(value, cellEditor.originalValue);
        }

        if (typeof cellEditor.originalValue == "number") {
          // Correct problem of NaN displaying when value is null string.
          //if (value != null) {
          if (value != null && value != '') {
            value = parseFloat(value);
          }
        }
        return value;
      },

      _createEditor: function _createEditor() {
        var cellEditor = new qx.ui.form.TextField();
        cellEditor.setAppearance("table-editor-textfield");
        return cellEditor;
      }
    }
  });
  qx.ui.table.celleditor.TextField.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=TextField.js.map