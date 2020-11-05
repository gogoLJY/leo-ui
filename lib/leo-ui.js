!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
      ? define('LeoUI', [], t)
      : 'object' == typeof exports
        ? (exports.LeoUI = t())
        : (e.LeoUI = t());
})(window, function () {
  return (function (e) {
    var t = {};
    function n(o) {
      if (t[o]) return t[o].exports;
      var i = (t[o] = { i: o, l: !1, exports: {} });
      return e[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (
          (n.r(o),
          Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var i in e)
            n.d(
              o,
              i,
              function (t) {
                return e[t];
              }.bind(null, i)
            );
        return o;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
              return e.default;
            }
            : function () {
              return e;
            };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      n((n.s = 0))
    );
  })([
    function (e, t, n) {
      'use strict';
      n.r(t);
      var o = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          'button',
          {
            class: e.classes,
            attrs: { disabled: e.disabled },
            on: { click: e.handleClick },
          },
          [
            e.loading ? n('i', { staticClass: 'leo-icon-loading' }) : e._e(),
            e.icon && !e.loading ? n('i', { class: e.icon }) : e._e(),
            e.$slots.default ? n('span', [e._t('default')], 2) : e._e(),
          ]
        );
      };
      o._withStripped = !0;
      var i = (function (e, t, n, o, i, r, s, l) {
        var a,
          u = 'function' == typeof e ? e.options : e;
        if (
          (t && ((u.render = t), (u.staticRenderFns = n), (u._compiled = !0)),
          o && (u.functional = !0),
          r && (u._scopeId = 'data-v-' + r),
          s
            ? ((a = function (e) {
              (e =
                  e ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (e = __VUE_SSR_CONTEXT__),
              i && i.call(this, e),
              e &&
                    e._registeredComponents &&
                    e._registeredComponents.add(s);
            }),
            (u._ssrRegister = a))
            : i &&
              (a = l
                ? function () {
                  i.call(
                    this,
                    (u.functional ? this.parent : this).$root.$options
                      .shadowRoot
                  );
                }
                : i),
          a)
        )
          if (u.functional) {
            u._injectStyles = a;
            var d = u.render;
            u.render = function (e, t) {
              return a.call(t), d(e, t);
            };
          } else {
            var c = u.beforeCreate;
            u.beforeCreate = c ? [].concat(c, a) : [a];
          }
        return { exports: e, options: u };
      })(
        {
          name: 'LeoCard',
          props: {
            type: { type: String, default: 'default' },
            size: { type: String, default: 'default' },
            icon: { type: String, default: '' },
            loading: Boolean,
            disabled: Boolean,
            round: Boolean,
            circle: Boolean,
          },
          data: () => ({}),
          computed: {
            classes() {
              return [
                'leo-btn',
                this.type ? 'leo-btn-' + this.type : '',
                this.size ? 'leo-btn-' + this.size : '',
                {
                  'is-disabled': this.disabled,
                  'is-loading': this.loading,
                  'is-round': round,
                  'is-circle': circle,
                },
              ];
            },
          },
          methods: {
            handleClick(e) {
              this.$emit('click', e);
            },
          },
        },
        o,
        [],
        !1,
        null,
        null,
        null
      );
      i.options.__file = 'src/components/button/button.vue';
      const r = { Button: i.exports },
        s = function (e, t = {}) {
          Object.keys(r).forEach((t) => {
            e.component(t, r[t]);
          });
        };
      'undefined' != typeof window && window.Vue && s(window.Vue);
      t.default = { install: s, ...r };
    },
  ]).default;
});
