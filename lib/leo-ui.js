module.exports = (function (t) {
  var e = {};
  function n(o) {
    if (e[o]) return e[o].exports;
    var r = (e[o] = { i: o, l: !1, exports: {} });
    return t[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  return (
    (n.m = t),
    (n.c = e),
    (n.d = function (t, e, o) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
    }),
    (n.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
      Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var r in t)
          n.d(
            o,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return o;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
            return t.default;
          }
          : function () {
            return t;
          };
      return n.d(e, 'a', e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ''),
    n((n.s = 0))
  );
})([
  function (t, e, n) {
    'use strict';
    n.r(e);
    var o = function () {
      var t = this.$createElement,
        e = this._self._c || t;
      return e(
        'button',
        {
          class: this.classes,
          attrs: { disabled: this.disabled },
          on: { click: this.handleClick },
        },
        [this.$slots.default ? e('span', [this._t('default')], 2) : this._e()]
      );
    };
    o._withStripped = !0;
    var r = (function (t, e, n, o, r, i, s, l) {
      var u,
        a = 'function' == typeof t ? t.options : t;
      if (
        (e && ((a.render = e), (a.staticRenderFns = n), (a._compiled = !0)),
        o && (a.functional = !0),
        i && (a._scopeId = 'data-v-' + i),
        s
          ? ((u = function (t) {
            (t =
                t ||
                (this.$vnode && this.$vnode.ssrContext) ||
                (this.parent &&
                  this.parent.$vnode &&
                  this.parent.$vnode.ssrContext)) ||
                'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                (t = __VUE_SSR_CONTEXT__),
            r && r.call(this, t),
            t && t._registeredComponents && t._registeredComponents.add(s);
          }),
          (a._ssrRegister = u))
          : r &&
            (u = l
              ? function () {
                r.call(
                  this,
                  (a.functional ? this.parent : this).$root.$options
                    .shadowRoot
                );
              }
              : r),
        u)
      )
        if (a.functional) {
          a._injectStyles = u;
          var d = a.render;
          a.render = function (t, e) {
            return u.call(e), d(t, e);
          };
        } else {
          var c = a.beforeCreate;
          a.beforeCreate = c ? [].concat(c, u) : [u];
        }
      return { exports: t, options: a };
    })(
      {
        name: 'Button',
        props: {
          type: { type: String, default: 'default' },
          disabled: Boolean,
          round: Boolean,
        },
        data: () => ({}),
        computed: {
          classes() {
            return [
              'leo-btn',
              this.type ? 'leo-btn-' + this.type : '',
              this.size ? 'leo-btn-' + this.size : '',
              { 'is-disabled': this.disabled, 'is-round': this.round },
            ];
          },
        },
        methods: {
          handleClick(t) {
            this.$emit('on-click', t);
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
    r.options.__file = 'src/components/button/button.vue';
    var i = r.exports;
    i.install = function (t) {
      t.component(i.name, i);
    };
    const s = { Button: i },
      l = function (t, e = {}) {
        Object.keys(s).forEach((e) => {
          t.component(e, s[e]);
        });
      };
    'undefined' != typeof window && window.Vue && l(window.Vue);
    e.default = { install: l, ...s };
  },
]).default;
