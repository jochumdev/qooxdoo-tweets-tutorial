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
      "qx.ui.layout.Grid": {
        "construct": true
      },
      "qx.ui.toolbar.ToolBar": {
        "construct": true
      },
      "qx.ui.toolbar.Button": {
        "construct": true
      },
      "tweets.window.Settings": {
        "construct": true
      },
      "qx.ui.list.List": {
        "construct": true
      },
      "qx.ui.form.TextArea": {
        "construct": true
      },
      "qx.ui.form.Button": {
        "construct": true
      }
    },
    "extends": "qx.ui.window.Window",
    "include": [],
    "implement": [],
    "hasDefer": null,
    "assets": ["tweets/logo.png"],
    "translations": [{
      "msgid": "Preferences",
      "lineNo": 48
    }, {
      "msgid": "Change the applications settings.",
      "lineNo": 50
    }, {
      "msgid": "Reload",
      "lineNo": 60
    }, {
      "msgid": "Reload the tweets.",
      "lineNo": 61
    }, {
      "msgid": "Post",
      "lineNo": 73
    }, {
      "msgid": "Post this message on identi.ca",
      "lineNo": 74
    }, {
      "msgid": "Enter your message here...",
      "lineNo": 82
    }]
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("tweets.window.Main", {
    extend: qx.ui.window.Window,

    events: {
      reload: "qx.event.type.Event",
      post: "qx.event.type.Data"
    },

    members: {
      __list: null,

      getList: function getList() {
        return this.__list;
      }
    },

    construct: function construct() {
      qx.ui.window.Window.constructor.call(this, "tweets", "tweets/logo.png");

      // Hide buttons
      this.setShowClose(false);
      this.setShowMaximize(false);
      this.setShowMinimize(false);

      // adjust size
      this.setWidth(250);
      this.setHeight(300);

      // add the layout
      var layout = new qx.ui.layout.Grid(0, 0);
      layout.setRowFlex(1, 1);
      layout.setColumnFlex(0, 1);
      this.setLayout(layout);
      this.setContentPadding(0);

      // toolbar
      var toolbar = new qx.ui.toolbar.ToolBar();
      this.add(toolbar, { row: 0, column: 0, colSpan: 2 });

      // spacer
      toolbar.addSpacer();

      // settings button
      var settingsWindow = null;
      var settingsButton = new qx.ui.toolbar.Button(this.tr("Preferences"));
      toolbar.add(settingsButton);
      settingsButton.setToolTipText(this.tr("Change the applications settings."));
      settingsButton.addListener("execute", function () {
        if (!settingsWindow) {
          settingsWindow = new tweets.window.Settings();
          settingsWindow.moveTo(320, 30);
        }
        settingsWindow.open();
      }, this);

      // reload button
      var reloadButton = new qx.ui.toolbar.Button(this.tr("Reload"));
      reloadButton.setToolTipText(this.tr("Reload the tweets."));
      reloadButton.addListener("execute", function () {
        this.fireEvent("reload");
      }, this);
      toolbar.add(reloadButton);

      // list
      this.__list = new qx.ui.list.List();
      this.add(this.__list, { row: 1, column: 0, colSpan: 2 });

      // post button
      var textarea = new qx.ui.form.TextArea();
      var postButton = new qx.ui.form.Button(this.tr("Post"));
      postButton.setToolTipText(this.tr("Post this message on identi.ca"));
      postButton.setWidth(60);
      postButton.setEnabled(false);
      postButton.addListener("execute", function () {
        this.fireDataEvent("post", textarea.getValue());
      }, this);

      // textarea
      textarea.setPlaceholder(this.tr("Enter your message here..."));
      textarea.addListener("input", function (e) {
        var value = e.getData();
        postButton.setEnabled(value.length <= 140 && value.length > 0);
      }, this);

      this.add(textarea, { row: 2, column: 0 });
      this.add(postButton, { row: 2, column: 1 });
    }
  });
  tweets.window.Main.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Main.js.map