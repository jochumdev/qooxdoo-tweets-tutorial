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
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Interface.define("qx.ui.form.IExecutable", {
    /*
    *****************************************************************************
       EVENTS
    *****************************************************************************
    */

    events: {
      /**
       * Fired when the widget is executed. Sets the "data" property of the
       * event to the object that issued the command.
       */
      "execute": "qx.event.type.Data"
    },

    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      /*
      ---------------------------------------------------------------------------
        COMMAND PROPERTY
      ---------------------------------------------------------------------------
      */

      /**
       * Set the command of this executable.
       *
       * @param command {qx.ui.command.Command} The command.
       */
      setCommand: function setCommand(command) {
        return arguments.length == 1;
      },

      /**
       * Return the current set command of this executable.
       *
       * @return {qx.ui.command.Command} The current set command.
       */
      getCommand: function getCommand() {},

      /**
       * Fire the "execute" event on the command.
       */
      execute: function execute() {}
    }
  });
  qx.ui.form.IExecutable.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=IExecutable.js.map