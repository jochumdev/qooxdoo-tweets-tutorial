"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.ui.menu.CheckBox": {
        "load": true,
        "construct": true
      },
      "qx.ui.table.IColumnMenuItem": {
        "load": true
      }
    },
    "extends": "qx.ui.menu.CheckBox",
    "include": [],
    "implement": ["qx.ui.table.IColumnMenuItem"],
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.ui.table.columnmenu.MenuItem", {
    extend: qx.ui.menu.CheckBox,
    implement: qx.ui.table.IColumnMenuItem,

    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

    /**
     * Create a new instance of an item for insertion into the table column
     * visibility menu.
     *
     * @param text {String}
     *   Text for the menu item, most typically the name of the column in the
     *   table.
     */
    construct: function construct(text) {
      qx.ui.menu.CheckBox.constructor.call(this, text);

      // Two way binding this.columnVisible <--> this.value
      this.bind("value", this, "columnVisible");
      this.bind("columnVisible", this, "value");
    },

    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */

    properties: {
      columnVisible: {
        check: "Boolean",
        init: true,
        event: "changeColumnVisible"
      }
    }
  });
  qx.ui.table.columnmenu.MenuItem.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=MenuItem.js.map