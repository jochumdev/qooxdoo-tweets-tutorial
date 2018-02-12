"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.core.Object": {
        "load": true
      }
    },
    "extends": "qx.core.Object",
    "include": [],
    "implement": [],
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.util.LibraryManager", {

    extend: qx.core.Object,

    type: "singleton",

    statics: {
      /** @type {Map} The libraries used by this application */
      __libs: qx.$$libraries || {}
    },

    members: {
      /**
       * Checks whether the library with the given namespace is known to the
       * application.
       * @param namespace {String} The library's namespace
       * @return {Boolean} <code>true</code> if the given library is known
       */
      has: function has(namespace) {
        return !!qx.util.LibraryManager.__libs[namespace];
      },

      /**
       * Returns the value of an attribute of the given library
       * @param namespace {String} The library's namespace
       * @param key {String} Name of the attribute
       * @return {var|null} The attribute's value or <code>null</code> if it's not defined
       */
      get: function get(namespace, key) {
        return qx.util.LibraryManager.__libs[namespace][key] ? qx.util.LibraryManager.__libs[namespace][key] : null;
      },

      /**
       * Sets an attribute on the given library.
       *
       * @param namespace {String} The library's namespace
       * @param key {String} Name of the attribute
       * @param value {var} Value of the attribute
       */
      set: function set(namespace, key, value) {
        qx.util.LibraryManager.__libs[namespace][key] = value;
      }
    }
  });
  qx.util.LibraryManager.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=LibraryManager.js.map