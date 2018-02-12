"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.ui.form.Button": {
        "load": true,
        "construct": true
      },
      "qx.ui.form.MForm": {
        "load": true
      },
      "qx.ui.form.MModelProperty": {
        "load": true
      },
      "qx.ui.form.IRadioItem": {
        "load": true
      },
      "qx.ui.form.IForm": {
        "load": true
      },
      "qx.ui.form.IBooleanForm": {
        "load": true
      },
      "qx.ui.form.IModel": {
        "load": true
      },
      "qx.core.Environment": {
        "construct": true
      }
    },
    "extends": "qx.ui.form.Button",
    "include": ["qx.ui.form.MForm", "qx.ui.form.MModelProperty"],
    "implement": ["qx.ui.form.IRadioItem", "qx.ui.form.IForm", "qx.ui.form.IBooleanForm", "qx.ui.form.IModel"],
    "environment": {
      "provided": [],
      "required": {
        "qx.debug": {
          "construct": true
        }
      }
    },
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.ui.form.RadioButton", {
    extend: qx.ui.form.Button,
    include: [qx.ui.form.MForm, qx.ui.form.MModelProperty],
    implement: [qx.ui.form.IRadioItem, qx.ui.form.IForm, qx.ui.form.IBooleanForm, qx.ui.form.IModel],

    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

    /**
     * @param label {String?null} An optional label for the radio button.
     */
    construct: function construct(label) {
      if (qx.core.Environment.get("qx.debug")) {
        this.assertArgumentsCount(arguments, 0, 1);
      }

      qx.ui.form.Button.constructor.call(this, label);

      // Add listeners
      this.addListener("execute", this._onExecute);
      this.addListener("keypress", this._onKeyPress);
    },

    /*
    *****************************************************************************
       PROPERTIES
    *****************************************************************************
    */

    properties: {
      /** The assigned qx.ui.form.RadioGroup which handles the switching between registered buttons */
      group: {
        check: "qx.ui.form.RadioGroup",
        nullable: true,
        apply: "_applyGroup"
      },

      /** The value of the widget. True, if the widget is checked. */
      value: {
        check: "Boolean",
        nullable: true,
        event: "changeValue",
        apply: "_applyValue",
        init: false
      },

      // overridden
      appearance: {
        refine: true,
        init: "radiobutton"
      },

      // overridden
      allowGrowX: {
        refine: true,
        init: false
      }
    },

    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */

    members: {
      // overridden
      /**
       * @lint ignoreReferenceField(_forwardStates)
       */
      _forwardStates: {
        checked: true,
        focused: true,
        invalid: true,
        hovered: true
      },

      // overridden (from MExecutable to keep the icon out of the binding)
      /**
       * @lint ignoreReferenceField(_bindableProperties)
       */
      _bindableProperties: ["enabled", "label", "toolTipText", "value", "menu"],

      /*
      ---------------------------------------------------------------------------
        APPLY ROUTINES
      ---------------------------------------------------------------------------
      */

      // property apply
      _applyValue: function _applyValue(value, old) {
        value ? this.addState("checked") : this.removeState("checked");
      },

      /** The assigned {@link qx.ui.form.RadioGroup} which handles the switching between registered buttons */
      _applyGroup: function _applyGroup(value, old) {
        if (old) {
          old.remove(this);
        }

        if (value) {
          value.add(this);
        }
      },

      /*
      ---------------------------------------------------------------------------
        EVENT-HANDLER
      ---------------------------------------------------------------------------
      */

      /**
       * Event listener for the "execute" event.
       *
       * Sets the property "checked" to true.
       *
       * @param e {qx.event.type.Event} execute event
       */
      _onExecute: function _onExecute(e) {
        var grp = this.getGroup();
        if (grp && grp.getAllowEmptySelection()) {
          this.toggleValue();
        } else {
          this.setValue(true);
        }
      },

      /**
       * Event listener for the "keyPress" event.
       *
       * Selects the previous RadioButton when pressing "Left" or "Up" and
       * Selects the next RadioButton when pressing "Right" and "Down"
       *
       * @param e {qx.event.type.KeySequence} KeyPress event
       */
      _onKeyPress: function _onKeyPress(e) {

        var grp = this.getGroup();
        if (!grp) {
          return;
        }

        switch (e.getKeyIdentifier()) {
          case "Left":
          case "Up":
            grp.selectPrevious();
            break;

          case "Right":
          case "Down":
            grp.selectNext();
            break;
        }
      }
    }
  });
  qx.ui.form.RadioButton.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=RadioButton.js.map