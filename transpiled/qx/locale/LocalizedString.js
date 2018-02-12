"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.type.BaseString": {
        "load": true,
        "construct": true
      },
      "qx.locale.Manager": {}
    },
    "extends": "qx.type.BaseString",
    "include": [],
    "implement": [],
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Class.define("qx.locale.LocalizedString", {
    extend: qx.type.BaseString,

    /**
     * @param translation {String} The translated message
     * @param messageId {String} The messageId to translate
     * @param args {Array} list of arguments passed used as values for format strings
     * @param localized {Boolean} True if the string uses localize instead of translate
     */
    construct: function construct(translation, messageId, args, localized) {
      qx.type.BaseString.constructor.call(this, translation);

      this.__messageId = messageId;
      this.__localized = !!localized;
      this.__args = args;
    },

    members: {
      __localized: null,
      __messageId: null,
      __args: null,

      /**
       * Get a translation of the string using the current locale.
       *
       * @return {LocalizedString} This string translated using the current
       *    locale.
       */
      translate: function translate() {
        if (this.__localized) {
          return qx.locale.Manager.getInstance().localize(this.__messageId, this.__args);
        }

        return qx.locale.Manager.getInstance().translate(this.__messageId, this.__args);
      },

      /**
       * Returns the messageId.
       *
       * @return {String} The messageId of this localized String
       */
      getMessageId: function getMessageId() {
        return this.__messageId;
      }
    }
  });
  qx.locale.LocalizedString.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=LocalizedString.js.map