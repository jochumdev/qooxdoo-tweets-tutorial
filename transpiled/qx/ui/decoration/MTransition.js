"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Mixin": {
        "load": true,
        "usage": "dynamic"
      },
      "qx.core.Environment": {},
      "qx.bom.client.CssTransition": {},
      "qx.bom.Style": {}
    },
    "extends": null,
    "include": [],
    "implement": [],
    "environment": {
      "provided": [],
      "required": {
        "css.transition": {
          "className": "qx.bom.client.CssTransition"
        },
        "qx.debug": {}
      }
    },
    "hasDefer": null
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Mixin.define("qx.ui.decoration.MTransition", {
    properties: {
      /** transition property */
      transitionProperty: {
        nullable: true,
        apply: "_applyTransition"
      },
      /** transition duration */
      transitionDuration: {
        nullable: true,
        apply: "_applyTransition"
      },
      /** transition delay */
      transitionTimingFunction: {
        nullable: true,
        apply: "_applyTransition"
      },
      /** transition delay */
      transitionDelay: {
        nullable: true,
        apply: "_applyTransition"
      }
    },

    members: {

      /**
       * Takes a styles map and adds the box shadow styles in place to the
       * given map. This is the needed behavior for
       * {@link qx.ui.decoration.Decorator}.
       *
       * @param styles {Map} A map to add the styles.
       */
      _styleTransition: function _styleTransition(styles) {
        var propName = qx.core.Environment.get("css.transition");
        if (!propName || this.getTransitionDuration() == null) {
          return;
        }

        propName = qx.bom.Style.getCssName(propName.name);

        var transitionProperties = ["transitionProperty", "transitionDuration", "transitionTimingFunction", "transitionDelay"];

        (function (tPros, tDurs, tTims, tDels) {
          for (var i = 0; i < tPros.length; i++) {
            var tPro = tPros[i] || 'all';
            var tDur = tDurs[i] || '0s';
            var tTim = tTims[i] || 'ease';
            var tDel = tDels[i] || '0s';

            var value = tPro + ' ' + tDur + ' ' + tTim + ' ' + tDel;
            if (!styles[propName]) {
              styles[propName] = value;
            } else {
              styles[propName] += "," + value;
            }
          }
        }).apply(this, this._getExtendedPropertyValueArrays(transitionProperties));
      },

      // property apply
      _applyTransition: function _applyTransition() {
        if (qx.core.Environment.get("qx.debug")) {
          if (this._isInitialized()) {
            throw new Error("This decorator is already in-use. Modification is not possible anymore!");
          }
        }
      }
    }
  });
  qx.ui.decoration.MTransition.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=MTransition.js.map