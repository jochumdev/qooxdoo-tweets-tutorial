"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.log.appender.Util": {
        "require": true
      },
      "qx.bom.client.Html": {
        "require": true
      },
      "qx.Bootstrap": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.core.Environment": {},
      "qx.log.Logger": {
        "defer": "runtime"
      }
    },
    "extends": null,
    "include": [],
    "implement": [],
    "environment": {
      "provided": [],
      "required": {
        "html.console": {
          "className": "qx.bom.client.Html"
        }
      }
    },
    "hasDefer": true
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Bootstrap.define("qx.log.appender.Native", {
    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */

    statics: {
      /**
       * Processes a single log entry
       *
       * @param entry {Map} The entry to process
       */
      process: function process(entry) {
        if (qx.core.Environment.get("html.console")) {
          // Firefox 4's Web Console doesn't support "debug"
          var level = console[entry.level] ? entry.level : "log";
          if (console[level]) {
            var args = qx.log.appender.Util.toText(entry);
            console[level](args);
          }
        }
      }
    },

    /*
    *****************************************************************************
       DEFER
    *****************************************************************************
    */

    defer: function defer(statics) {
      qx.log.Logger.register(statics);
    }
  });
  qx.log.appender.Native.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Native.js.map