"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.core.Object": {
        "load": true,
        "construct": true
      },
      "qxc.require.Init": {
        "construct": true
      }
    },
    "extends": "qx.core.Object",
    "include": [],
    "implement": [],
    "hasDefer": null,
    "assets": ["qxc.restful/*"]
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qxc.restful.Init", {
    type: "singleton",
    extend: qx.core.Object,

    construct: function construct() {
      qx.core.Object.constructor.call(this);

      this.resourceLoader = qxc.require.Init.require(["restful"]).catch(function (e) {
        throw e;
      }).spread(function (restful) {
        this.setRestful(restful);

        return [restful];
      }.bind(this));
    },

    statics: {
      getApi: function getApi(url) {
        var loader = qxc.restful.Init.getInstance().resourceLoader;
        return loader.catch(function (e) {
          throw e;
        }).spread(function (restful) {
          return restful(url);
        });
      }
    },

    properties: {
      restful: {
        event: "change:restful",
        nullable: true
      }
    },

    members: {
      resourceLoader: null,

      init: function init() {
        var r = qxc.require.Init.getInstance();
        r.addResourceManagerPath("restful", "qxc.restful/js/restful.min.js");
      },

      initPretty: function initPretty() {
        var r = qxc.require.Init.getInstance();

        r.addResourceManagerPath("restful", "qxc.restful/js/restful.js");
      }
    }
  });
  qxc.restful.Init.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Init.js.map