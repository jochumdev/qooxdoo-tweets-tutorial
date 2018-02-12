"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.ui.basic.Atom": {
        "load": true,
        "construct": true
      },
      "qx.ui.form.IModel": {
        "load": true
      },
      "qx.ui.form.MModelProperty": {
        "load": true
      }
    },
    "extends": "qx.ui.basic.Atom",
    "include": ["qx.ui.form.MModelProperty"],
    "implement": ["qx.ui.form.IModel"],
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.ui.form.ListItem", {
    extend: qx.ui.basic.Atom,
    implement: [qx.ui.form.IModel],
    include: [qx.ui.form.MModelProperty],

    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

    /**
     * @param label {String} Label to use
     * @param icon {String?null} Icon to use
     * @param model {String?null} The items value
     */
    construct: function construct(label, icon, model) {
      qx.ui.basic.Atom.constructor.call(this, label, icon);

      if (model != null) {
        this.setModel(model);
      }

      this.addListener("pointerover", this._onPointerOver, this);
      this.addListener("pointerout", this._onPointerOut, this);
    },

    /*
    *****************************************************************************
       EVENTS
    *****************************************************************************
    */

    events: {
      /** (Fired by {@link qx.ui.form.List}) */
      "action": "qx.event.type.Event"
    },

    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */

    properties: {
      appearance: {
        refine: true,
        init: "listitem"
      }
    },

    members: {
      // overridden
      /**
       * @lint ignoreReferenceField(_forwardStates)
       */
      _forwardStates: {
        focused: true,
        hovered: true,
        selected: true,
        dragover: true
      },

      /**
       * Event handler for the pointer over event.
       */
      _onPointerOver: function _onPointerOver() {
        this.addState("hovered");
      },

      /**
       * Event handler for the pointer out event.
       */
      _onPointerOut: function _onPointerOut() {
        this.removeState("hovered");
      }
    },

    destruct: function destruct() {
      this.removeListener("pointerover", this._onPointerOver, this);
      this.removeListener("pointerout", this._onPointerOut, this);
    }
  });
  qx.ui.form.ListItem.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=ListItem.js.map