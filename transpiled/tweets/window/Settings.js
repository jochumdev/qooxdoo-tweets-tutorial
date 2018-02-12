"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.ui.window.Window": {
        "load": true,
        "construct": true
      },
      "qx.ui.layout.Basic": {
        "construct": true
      },
      "qx.ui.form.Form": {
        "construct": true
      },
      "qx.ui.form.RadioButtonGroup": {
        "construct": true
      },
      "qx.locale.Manager": {
        "construct": true
      },
      "qx.ui.form.RadioButton": {
        "construct": true
      },
      "qx.ui.form.renderer.Single": {
        "construct": true
      }
    },
    "extends": "qx.ui.window.Window",
    "include": [],
    "implement": [],
    "hasDefer": null,
    "translations": [{
      "msgid": "Preferences",
      "lineNo": 5
    }, {
      "msgid": "Language",
      "lineNo": 10
    }, {
      "msgid": "$$languagename",
      "lineNo": 39
    }]
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("tweets.window.Settings", {
    extend: qx.ui.window.Window,

    construct: function construct() {
      qx.ui.window.Window.constructor.call(this, this.tr("Preferences"));
      this.setLayout(new qx.ui.layout.Basic());

      var form = new qx.ui.form.Form();
      var radioGroup = new qx.ui.form.RadioButtonGroup();
      form.add(radioGroup, this.tr("Language"));

      var localeManager = qx.locale.Manager.getInstance();
      var locales = localeManager.getAvailableLocales();
      var currentLocale = localeManager.getLocale();

      // create a radio button for every available locale
      for (var i = 0; i < locales.length; i++) {
        var locale = locales[i];
        var languageName = localeManager.translate("$$languagename", [], locale);
        var localeButton = new qx.ui.form.RadioButton(languageName.toString());
        // save the locale as model
        localeButton.setModel(locale);
        radioGroup.add(localeButton);

        // preselect the current locale
        if (currentLocale === locale) {
          localeButton.setValue(true);
        }
      }

      // get the model selection and listen to its change
      radioGroup.getModelSelection().addListener("change", function () {
        // selection is the first item of the data array
        var newLocale = radioGroup.getModelSelection().getItem(0);
        localeManager.setLocale(newLocale);
      }, this);

      // mark this for translation (should hold the language name)
      this.marktr("$$languagename");

      var renderer = new qx.ui.form.renderer.Single(form);
      this.add(renderer);
    }
  });
  tweets.window.Settings.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Settings.js.map