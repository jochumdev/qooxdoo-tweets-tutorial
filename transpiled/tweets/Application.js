"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.application.Standalone": {
        "load": true
      },
      "qx.core.Environment": {},
      "qx.log.appender.Native": {},
      "qx.log.appender.Console": {},
      "qxc.restful.Init": {},
      "qxc.require.Init": {},
      "tweets.service.Identica": {},
      "qx.dev.Debug": {},
      "tweets.window.Main": {},
      "tweets.widget.Tweet": {},
      "qx.data.Array": {},
      "tweets.window.Login": {},
      "qxc.restful.widget.table.model.Simple": {},
      "qx.ui.table.Table": {},
      "qx.ui.window.Window": {},
      "qx.ui.layout.Grow": {}
    },
    "extends": "qx.application.Standalone",
    "include": [],
    "implement": [],
    "environment": {
      "provided": [],
      "required": {
        "qx.debug": {}
      }
    },
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("tweets.Application", {
    extend: qx.application.Standalone,

    /*
    *****************************************************************************
     MEMBERS
    *****************************************************************************
    */

    members: {
      __loginWindow: null,

      /**
       * This method contains the initial application code and gets called
       * during startup of the application
       *
       * @lint ignoreDeprecated(alert)
       */
      main: function main() {
        var _this = this;

        // Call super class
        tweets.Application.prototype.main.base.call(this);

        // Enable logging in debug variant
        if (qx.core.Environment.get("qx.debug")) {
          /* eslint-disable no-unused-expressions */
          // support native logging capabilities, e.g. Firebug for Firefox
          qx.log.appender.Native;
          // support additional cross-browser console. Press F7 to toggle visibility
          qx.log.appender.Console;
          /* eslint-enable no-unused-expressions */
        }

        qxc.restful.Init.getInstance().initPretty();
        // Must be last
        qxc.require.Init.getInstance().init();

        var service = new tweets.service.Identica();
        service.addListener("changeTweets", function (e) {
          this.debug(qx.dev.Debug.debugProperties(e.getData()));
        }, this);

        var main = new tweets.window.Main();
        main.moveTo(50, 30);

        main.addListener("reload", function () {
          service.fetchTweets();
        }, this);

        main.addListener("post", function (e) {
          this.debug("post: " + e.getData());
        }, this);

        // setup list binding
        var list = main.getList();
        list.setItemHeight(68);
        list.setLabelPath("text");
        list.setIconPath("user.profile_image_url");
        list.setDelegate({
          createItem: function createItem() {
            return new tweets.widget.Tweet();
          },

          bindItem: function bindItem(controller, item, id) {
            controller.bindProperty("text", "post", null, item, id);
            controller.bindProperty("user.profile_image_url", "icon", null, item, id);
            controller.bindProperty("created_at", "time", {
              converter: function converter(data) {
                return new Date(data);
              }
            }, item, id);
          },

          configureItem: function configureItem(item) {
            item.getChildControl("icon").setWidth(48);
            item.getChildControl("icon").setHeight(48);
            item.getChildControl("icon").setScale(true);
            item.setMinHeight(52);
          }
        });

        service.bind("tweets", list, "model", {
          converter: function converter(value) {
            return value || new qx.data.Array();
          }
        });

        this.__loginWindow = new tweets.window.Login();
        this.__loginWindow.moveTo(320, 30);
        this.__loginWindow.open();

        this.__loginWindow.addListener("changeLoginData", function (ev) {
          var loginData = ev.getData();
          service.fetchTweets(loginData.username, loginData.password);
          main.open();

          _this.addPromiseTable();
        });
      },

      addPromiseTable: function addPromiseTable() {
        var apiLoader = qxc.restful.Init.getApi("https://jsonplaceholder.typicode.com");
        var postApiPromise = apiLoader.then(function (api) {
          return api.all("photos");
        });
        var tableModel = new qxc.restful.widget.table.model.Simple(postApiPromise, [{
          field: "id",
          name: "ID",
          sortable: true,
          editable: false
        }, {
          field: "albumId",
          name: "Album ID",
          sortable: true,
          editable: false
        }, {
          field: "title",
          name: "Title",
          sortable: true,
          editable: true
        }, {
          field: "url",
          name: "Url",
          sortable: true,
          editable: false
        }, {
          field: "thumbnailUrl",
          name: "Thumbnail URL",
          sortable: true,
          editable: false
        }], "id");
        var table = new qx.ui.table.Table(tableModel);
        var win = new qx.ui.window.Window("QxC.Restful Demo");
        win.setLayout(new qx.ui.layout.Grow());
        win.add(table);
        win.moveTo(800, 30);
        win.open();
      }
    }
  });
  tweets.Application.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Application.js.map