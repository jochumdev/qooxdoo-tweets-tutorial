"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.ui.core.Widget": {
        "load": true,
        "construct": true
      },
      "qx.ui.form.renderer.IFormRenderer": {
        "load": true
      },
      "qx.core.Environment": {
        "construct": true,
        "load": true,
        "usage": "dynamic"
      },
      "qx.locale.Manager": {
        "construct": true
      }
    },
    "extends": "qx.ui.core.Widget",
    "include": [],
    "implement": ["qx.ui.form.renderer.IFormRenderer"],
    "environment": {
      "provided": [],
      "required": {
        "qx.dynlocale": {
          "construct": true,
          "load": true
        }
      }
    },
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.ui.form.renderer.AbstractRenderer", {
    type: "abstract",
    extend: qx.ui.core.Widget,
    implement: qx.ui.form.renderer.IFormRenderer,

    /**
     * @param form {qx.ui.form.Form} The form to render.
     */
    construct: function construct(form) {
      qx.ui.core.Widget.constructor.call(this);

      this._labels = [];

      // translation support
      if (qx.core.Environment.get("qx.dynlocale")) {
        qx.locale.Manager.getInstance().addListener("changeLocale", this._onChangeLocale, this);
        this._names = [];
      }
      this._form = form;
      this._render();

      form.addListener("change", this._onFormChange, this);
    },

    members: {
      _names: null,
      _form: null,
      _labels: null,

      /**
       * Renders the form: adds the items and buttons.
       */
      _render: function _render() {
        // add the groups
        var groups = this._form.getGroups();
        for (var i = 0; i < groups.length; i++) {
          var group = groups[i];
          this.addItems(group.items, group.labels, group.title, group.options, group.headerOptions);
        }

        // add the buttons
        var buttons = this._form.getButtons();
        var buttonOptions = this._form.getButtonOptions();
        for (var i = 0; i < buttons.length; i++) {
          this.addButton(buttons[i], buttonOptions[i]);
        }
      },

      /**
       * Handler responsible for updating the rendered widget as soon as the
       * form changes.
       */
      _onFormChange: function _onFormChange() {
        this._removeAll();
        // remove all created labels
        for (var i = 0; i < this._labels.length; i++) {
          this._labels[i].dispose();
        }
        this._labels = [];

        this._render();
      },

      /**
       * Helper to bind the item's visibility to the label's visibility.
       * @param item {qx.ui.core.Widget} The form element.
       * @param label {qx.ui.basic.Label} The label for the form element.
       */
      _connectVisibility: function _connectVisibility(item, label) {
        // map the items visibility to the label
        item.bind("visibility", label, "visibility");
      },

      /**
       * Locale change event handler
       *
       * @signature function(e)
       * @param e {Event} the change event
       */
      _onChangeLocale: qx.core.Environment.select("qx.dynlocale", {
        "true": function _true(e) {
          for (var i = 0; i < this._names.length; i++) {
            var entry = this._names[i];
            if (entry.name && entry.name.translate) {
              entry.name = entry.name.translate();
            }
            var newText = this._createLabelText(entry.name, entry.item);
            entry.label.setValue(newText);
          }
        },

        "false": null
      }),

      /**
       * Creates the label text for the given form item.
       *
       * @param name {String} The content of the label without the
       *   trailing * and :
       * @param item {qx.ui.form.IForm} The item, which has the required state.
       * @return {String} The text for the given item.
       */
      _createLabelText: function _createLabelText(name, item) {
        var required = "";
        if (item.getRequired()) {
          required = " <span style='color:red'>*</span> ";
        }

        // Create the label. Append a colon only if there's text to display.
        var colon = name.length > 0 || item.getRequired() ? " :" : "";
        return name + required + colon;
      },

      // interface implementation
      addItems: function addItems(items, names, title) {
        throw new Error("Abstract method call");
      },

      // interface implementation
      addButton: function addButton(button) {
        throw new Error("Abstract method call");
      }
    },

    /*
    *****************************************************************************
       DESTRUCTOR
    *****************************************************************************
    */

    destruct: function destruct() {
      if (qx.core.Environment.get("qx.dynlocale")) {
        qx.locale.Manager.getInstance().removeListener("changeLocale", this._onChangeLocale, this);
      }
      this._names = null;

      this._form.removeListener("change", this._onFormChange, this);
      this._form = null;
    }
  });
  qx.ui.form.renderer.AbstractRenderer.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=AbstractRenderer.js.map