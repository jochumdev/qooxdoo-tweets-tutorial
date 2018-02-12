"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.ui.menu.AbstractButton": {
        "load": true,
        "construct": true
      }
    },
    "extends": "qx.ui.menu.AbstractButton",
    "include": [],
    "implement": [],
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.ui.menu.Button", {
    extend: qx.ui.menu.AbstractButton,

    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

    /**
     * @param label {String} Initial label
     * @param icon {String} Initial icon
     * @param command {qx.ui.command.Command} Initial command (shortcut)
     * @param menu {qx.ui.menu.Menu} Initial sub menu
     */
    construct: function construct(label, icon, command, menu) {
      qx.ui.menu.AbstractButton.constructor.call(this);

      // Initialize with incoming arguments
      if (label != null) {
        this.setLabel(label);
      }

      if (icon != null) {
        this.setIcon(icon);
      }

      if (command != null) {
        this.setCommand(command);
      }

      if (menu != null) {
        this.setMenu(menu);
      }
    },

    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */

    properties: {
      // overridden
      appearance: {
        refine: true,
        init: "menu-button"
      }
    },

    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      /*
      ---------------------------------------------------------------------------
        EVENT HANDLER
      ---------------------------------------------------------------------------
      */

      // overridden
      _onTap: function _onTap(e) {
        if (e.isLeftPressed() && this.getMenu()) {
          this.execute();
          // don't close menus if the button is a sub menu button
          this.getMenu().open();
          return;
        }

        qx.ui.menu.Button.prototype._onTap.base.call(this, e);
      }
    }
  });
  qx.ui.menu.Button.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Button.js.map