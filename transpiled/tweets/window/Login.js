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
      "qx.ui.layout.VBox": {
        "construct": true
      },
      "qx.ui.basic.Label": {
        "construct": true
      },
      "qx.ui.form.Form": {
        "construct": true
      },
      "qx.ui.form.TextField": {
        "construct": true
      },
      "qx.ui.form.PasswordField": {
        "construct": true
      },
      "qx.data.controller.Form": {
        "construct": true
      },
      "qx.ui.form.Button": {
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
    "assets": ["tweets/logo.png"],
    "translations": [{
      "msgid": "Login",
      "lineNo": 12
    }, {
      "msgid": "Username",
      "lineNo": 28
    }, {
      "msgid": "Password",
      "lineNo": 32
    }, {
      "msgid": "Login",
      "lineNo": 37
    }, {
      "msgid": "Cancel",
      "lineNo": 50
    }]
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("tweets.window.Login", {
    extend: qx.ui.window.Window,

    events: {
      changeLoginData: "qx.event.type.Data"
    },

    construct: function construct() {
      qx.ui.window.Window.constructor.call(this, this.tr("Login"), "tweets/logo.png");

      var layout = new qx.ui.layout.VBox();
      layout.setSpacing(4);
      this.setLayout(layout);
      this.setModal(true);

      this.add(new qx.ui.basic.Label().set({
        value: 'Any login will work.',
        rich: false
      }));

      var form = new qx.ui.form.Form();

      var username = new qx.ui.form.TextField();
      username.setRequired(true);
      form.add(username, this.tr("Username"), null, "username");

      var password = new qx.ui.form.PasswordField();
      password.setRequired(true);
      form.add(password, this.tr("Password"), null, "password");

      var controller = new qx.data.controller.Form(null, form);
      controller.createModel();

      var loginbutton = new qx.ui.form.Button(this.tr("Login"));
      loginbutton.addListener("execute", function () {
        if (form.validate()) {
          var loginData = {
            username: controller.getModel().getUsername(),
            password: controller.getModel().getPassword()
          };
          this.fireDataEvent("changeLoginData", loginData);
          this.close();
        }
      }, this);
      form.addButton(loginbutton);

      var cancelbutton = new qx.ui.form.Button(this.tr("Cancel"));
      form.addButton(cancelbutton);
      cancelbutton.addListener("execute", function () {
        this.close();
      }, this);

      var renderer = new qx.ui.form.renderer.Single(form);
      this.add(renderer);
    }
  });
  tweets.window.Login.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Login.js.map