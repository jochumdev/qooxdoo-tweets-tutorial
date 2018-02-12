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
      "qx.util.AliasManager": {}
    },
    "extends": "qx.core.Object",
    "include": [],
    "implement": [],
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.theme.manager.Icon", {
    type: "singleton",
    extend: qx.core.Object,

    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */

    properties: {
      /** currently used icon theme */
      theme: {
        check: "Theme",
        nullable: true,
        apply: "_applyTheme",
        event: "changeTheme"
      }
    },

    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      // property apply
      _applyTheme: function _applyTheme(value, old) {
        var aliasManager = qx.util.AliasManager.getInstance();

        if (old) {
          for (var alias in old.aliases) {
            aliasManager.remove(alias);
          }
        }

        if (value) {
          for (var alias in value.aliases) {
            aliasManager.add(alias, value.aliases[alias]);
          }
        }
      }
    }
  });
  qx.theme.manager.Icon.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Icon.js.map