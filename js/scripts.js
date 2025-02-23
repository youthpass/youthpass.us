<script type="text/javascript" src="js/scripts.js"></script>
<script type="text/javascript" src="js/embed.js"></script>
/*! For license information please see scripts.js.LICENSE.txt */
(function() {
    var __webpack_modules__ = {
            154: function() {
                function t(t, i) {
                    var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (!n) {
                        if (Array.isArray(t) || (n = function(t, i) {
                                if (t) {
                                    if ("string" == typeof t) return e(t, i);
                                    var n = Object.prototype.toString.call(t).slice(8, -1);
                                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? e(t, i) : void 0
                                }
                            }(t)) || i && t && "number" == typeof t.length) {
                            n && (t = n);
                            var o = 0,
                                r = function() {};
                            return {
                                s: r,
                                n: function() {
                                    return o >= t.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t[o++]
                                    }
                                },
                                e: function(t) {
                                    throw t
                                },
                                f: r
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var s, a = !0,
                        l = !1;
                    return {
                        s: function() {
                            n = n.call(t)
                        },
                        n: function() {
                            var t = n.next();
                            return a = t.done, t
                        },
                        e: function(t) {
                            l = !0, s = t
                        },
                        f: function() {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw s
                            }
                        }
                    }
                }

                function e(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                    return n
                }

                function i(t) {
                    var e = "function" == typeof Map ? new Map : void 0;
                    return i = function(t) {
                        if (null === t || (i = t, -1 === Function.toString.call(i).indexOf("[native code]"))) return t;
                        var i;
                        if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== e) {
                            if (e.has(t)) return e.get(t);
                            e.set(t, o)
                        }

                        function o() {
                            return n(t, arguments, s(this).constructor)
                        }
                        return o.prototype = Object.create(t.prototype, {
                            constructor: {
                                value: o,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), r(o, t)
                    }, i(t)
                }

                function n(t, e, i) {
                    return n = o() ? Reflect.construct.bind() : function(t, e, i) {
                        var n = [null];
                        n.push.apply(n, e);
                        var o = new(Function.bind.apply(t, n));
                        return i && r(o, i.prototype), o
                    }, n.apply(null, arguments)
                }

                function o() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }

                function r(t, e) {
                    return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                        return t.__proto__ = e, t
                    }, r(t, e)
                }

                function s(t) {
                    return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    }, s(t)
                }

                function a(t) {
                    return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, a(t)
                }

                function l(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function u(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (void 0, o = function(t) {
                            if ("object" !== a(t) || null === t) return t;
                            var e = t[Symbol.toPrimitive];
                            if (void 0 !== e) {
                                var i = e.call(t, "string");
                                if ("object" !== a(i)) return i;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(t)
                        }(n.key), "symbol" === a(o) ? o : String(o)), n)
                    }
                    var o
                }

                function c(t, e, i) {
                    return e && u(t.prototype, e), i && u(t, i), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), t
                }
                var d = function() {
                        function t(e) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            l(this, t), this.options = Object.assign({
                                closeClickOutside: !1,
                                forceStateClose: !1,
                                forceStateOpen: !1,
                                closeEsc: !1,
                                forceStateRestore: !0
                            }, i), this.detail = e, this.summary = e.querySelector(":scope > summary"), this._previousStates = {}
                        }
                        return c(t, [{
                            key: "getMatchMedia",
                            value: function(t, e) {
                                if (t) return e && !0 === e ? {
                                    matches: !0
                                } : e && "matchMedia" in window ? window.matchMedia(e) : void 0
                            }
                        }, {
                            key: "init",
                            value: function() {
                                var t = this.getMatchMedia(this.detail, this.options.forceStateOpen),
                                    e = this.getMatchMedia(this.detail, this.options.forceStateClose);
                                t && t.matches && e && e.matches ? this.setState(!this.detail.open) : (t && t.matches && this.setState(!0), e && e.matches && this.setState(!1)), this.addListener(t, "for-open"), this.addListener(e, "for-close")
                            }
                        }, {
                            key: "addListener",
                            value: function(t, e) {
                                var i = this;
                                t && "addListener" in t && t.addListener((function(t) {
                                    t.matches ? (i._previousStates[e] = i.detail.open, i.detail.open !== ("for-open" === e) && i.setState("for-open" === e)) : i.options.forceStateRestore && void 0 !== i._previousStates[e] && i.detail.open !== i._previousStates[e] && i.setState(i._previousStates[e])
                                }))
                            }
                        }, {
                            key: "toggle",
                            value: function() {
                                var t = new MouseEvent("click", {
                                    view: window,
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                this.summary.dispatchEvent(t)
                            }
                        }, {
                            key: "triggerClickToClose",
                            value: function() {
                                this.summary && this.options.closeClickOutside && this.toggle()
                            }
                        }, {
                            key: "setState",
                            value: function(t) {
                                t ? this.detail.setAttribute("open", "open") : this.detail.removeAttribute("open")
                            }
                        }]), t
                    }(),
                    h = function() {
                        function t(e) {
                            l(this, t), this.duration = {
                                open: 200,
                                close: 150
                            }, this.detail = e, this.summary = this.detail.querySelector(":scope > summary");
                            var i = this.detail.getAttribute("data-du-animate-target");
                            if (i && (this.content = this.detail.closest(i)), this.content || (this.content = this.summary.nextElementSibling), !this.content) throw new Error("For now <details-utils> requires a child element for animation.");
                            this.summary.addEventListener("click", this.onclick.bind(this))
                        }
                        return c(t, [{
                            key: "parseAnimationFrames",
                            value: function(t) {
                                for (var e = [], i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
                                for (var r = 0, s = n; r < s.length; r++) {
                                    var a = s[r],
                                        l = {};
                                    l[t] = a, e.push(l)
                                }
                                return e
                            }
                        }, {
                            key: "getKeyframes",
                            value: function(t) {
                                var e = this.parseAnimationFrames("maxHeight", "0px", "".concat(this.getContentHeight(), "px"));
                                return t ? e : e.filter((function() {
                                    return !0
                                })).reverse()
                            }
                        }, {
                            key: "getContentHeight",
                            value: function() {
                                return this.contentHeight ? this.contentHeight : this.detail.open ? (this.contentHeight = this.content.offsetHeight, this.contentHeight) : void 0
                            }
                        }, {
                            key: "animate",
                            value: function(t, e) {
                                var i = this;
                                this.isPending = !0;
                                var n = this.getKeyframes(t);
                                this.animation = this.content.animate(n, {
                                    duration: e,
                                    easing: "ease-out"
                                }), this.detail.classList.add("details-animating"), this.animation.finished.catch((function(t) {})).finally((function() {
                                    i.isPending = !1, i.detail.classList.remove("details-animating")
                                })), t || this.animation.finished.catch((function(t) {})).finally((function() {
                                    i.detail.removeAttribute("open")
                                }))
                            }
                        }, {
                            key: "open",
                            value: function() {
                                var t = this;
                                this.contentHeight ? this.animate(!0, this.duration.open) : requestAnimationFrame((function() {
                                    return t.animate(!0, t.duration.open)
                                }))
                            }
                        }, {
                            key: "close",
                            value: function() {
                                this.animate(!1, this.duration.close)
                            }
                        }, {
                            key: "useAnimation",
                            value: function() {
                                return "matchMedia" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches
                            }
                        }, {
                            key: "onclick",
                            value: function(t) {
                                !t.target.closest("a[href]") && this.useAnimation() && (this.isPending ? this.animation && this.animation.cancel() : this.detail.open ? (t.preventDefault(), this.close()) : this.open())
                            }
                        }]), t
                    }(),
                    f = function(e) {
                        ! function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(t, "prototype", {
                                writable: !1
                            }), e && r(t, e)
                        }(f, e);
                        var i, n, u = (i = f, n = o(), function() {
                            var t, e = s(i);
                            if (n) {
                                var o = s(this).constructor;
                                t = Reflect.construct(e, arguments, o)
                            } else t = e.apply(this, arguments);
                            return function(t, e) {
                                if (e && ("object" === a(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t
                                }(t)
                            }(this, t)
                        });

                        function f() {
                            var t;
                            return l(this, f), (t = u.call(this)).attrs = {
                                animate: "animate",
                                closeEsc: "close-esc",
                                closeClickOutside: "close-click-outside",
                                forceStateClose: "force-close",
                                forceStateOpen: "force-open",
                                forceStateRestore: "force-restore",
                                toggleDocumentClass: "toggle-document-class",
                                closeClickOutsideButton: "data-du-close-click"
                            }, t.options = {}, t._connect(), t
                        }
                        return c(f, [{
                            key: "getAttributeValue",
                            value: function(t) {
                                var e = this.getAttribute(t);
                                return void 0 === e || "" === e || e || !1
                            }
                        }, {
                            key: "connectedCallback",
                            value: function() {
                                this._connect()
                            }
                        }, {
                            key: "_connect",
                            value: function() {
                                this.children.length ? this._init() : (this._observer = new MutationObserver(this._init.bind(this)), this._observer.observe(this, {
                                    childList: !0
                                }))
                            }
                        }, {
                            key: "_init",
                            value: function() {
                                if (!this.initialized) {
                                    this.initialized = !0, this.options.closeClickOutside = this.getAttributeValue(this.attrs.closeClickOutside), this.options.closeEsc = this.getAttributeValue(this.attrs.closeEsc), this.options.forceStateClose = this.getAttributeValue(this.attrs.forceStateClose), this.options.forceStateOpen = this.getAttributeValue(this.attrs.forceStateOpen), this.options.forceStateRestore = this.getAttributeValue(this.attrs.forceStateRestore);
                                    for (var t = Array.from(this.querySelectorAll(":scope details")), e = 0, i = t; e < i.length; e++) {
                                        var n = i[e];
                                        new d(n, this.options).init(), this.hasAttribute(this.attrs.animate) && new h(n)
                                    }
                                    this.bindCloseOnEsc(t), this.bindClickoutToClose(t), this.toggleDocumentClassName = this.getAttribute(this.attrs.toggleDocumentClass), this.toggleDocumentClassName && this.bindToggleDocumentClass(t)
                                }
                            }
                        }, {
                            key: "bindCloseOnEsc",
                            value: function(e) {
                                var i = this;
                                this.options.closeEsc && document.documentElement.addEventListener("keydown", (function(n) {
                                    if (27 === n.keyCode) {
                                        var o, r = t(e);
                                        try {
                                            for (r.s(); !(o = r.n()).done;) {
                                                var s = o.value;
                                                if (s.open) {
                                                    var a = new d(s, i.options),
                                                        l = a.getMatchMedia(s, i.options.closeEsc);
                                                    (!l || l && l.matches) && a.toggle()
                                                }
                                            }
                                        } catch (t) {
                                            r.e(t)
                                        } finally {
                                            r.f()
                                        }
                                    }
                                }), !1)
                            }
                        }, {
                            key: "isChildOfParent",
                            value: function(t, e) {
                                for (; t && t.parentNode;) {
                                    if (t.parentNode === e) return !0;
                                    t = t.parentNode
                                }
                                return !1
                            }
                        }, {
                            key: "onClickoutToClose",
                            value: function(t, e) {
                                var i = new d(t, this.options),
                                    n = i.getMatchMedia(t, this.options.closeClickOutside);
                                n && !n.matches || !e.target.hasAttribute(this.attrs.closeClickOutsideButton) && this.isChildOfParent(e.target, t) || !t.open || i.triggerClickToClose(t)
                            }
                        }, {
                            key: "bindClickoutToClose",
                            value: function(e) {
                                var i = this;
                                document.documentElement.addEventListener("mousedown", (function(n) {
                                    var o, r = t(e);
                                    try {
                                        for (r.s(); !(o = r.n()).done;) {
                                            var s = o.value;
                                            i.onClickoutToClose(s, n)
                                        }
                                    } catch (t) {
                                        r.e(t)
                                    } finally {
                                        r.f()
                                    }
                                }), !1), this.addEventListener("keypress", (function(n) {
                                    if (13 === n.which || 32 === n.which) {
                                        var o, r = t(e);
                                        try {
                                            for (r.s(); !(o = r.n()).done;) {
                                                var s = o.value;
                                                i.onClickoutToClose(s, n)
                                            }
                                        } catch (t) {
                                            r.e(t)
                                        } finally {
                                            r.f()
                                        }
                                    }
                                }), !1)
                            }
                        }, {
                            key: "bindToggleDocumentClass",
                            value: function(e) {
                                var i, n = this,
                                    o = t(e);
                                try {
                                    for (o.s(); !(i = o.n()).done;) i.value.addEventListener("toggle", (function(t) {
                                        document.documentElement.classList.toggle(n.toggleDocumentClassName, t.target.open)
                                    }))
                                } catch (t) {
                                    o.e(t)
                                } finally {
                                    o.f()
                                }
                            }
                        }]), f
                    }(i(HTMLElement));
                "undefined" != typeof window && "customElements" in window && window.customElements.define("details-utils", f)
            },
            845: function() {
                "use strict";
                if ("function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
                        value: function(t, e) {
                            if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                            for (var i = Object(t), n = 1; n < arguments.length; n++) {
                                var o = arguments[n];
                                if (null != o)
                                    for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (i[r] = o[r])
                            }
                            return i
                        },
                        writable: !0,
                        configurable: !0
                    }), Element && !Element.prototype.matches) {
                    var t = Element.prototype;
                    t.matches = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector
                }
                var e, i, n, o = {
                    keyCodes: {
                        UP: 38,
                        DOWN: 40,
                        LEFT: 37,
                        RIGHT: 39,
                        HOME: 36,
                        END: 35,
                        ENTER: 13,
                        SPACE: 32,
                        DELETE: 46,
                        TAB: 9
                    },
                    generateID: function(t) {
                        return t + Math.floor(999 * Math.random())
                    },
                    getDirectChildren: function(t, e) {
                        return Array.prototype.filter.call(t.children, (function(t) {
                            return t.matches(e)
                        }))
                    },
                    getUrlHash: function() {
                        return window.location.hash.replace("#", "")
                    },
                    setUrlHash: function(t) {
                        history.replaceState ? history.replaceState(null, "", "#" + t) : location.hash = t
                    },
                    preventFocus: function(t) {
                        t.preventDefault();
                        var e = t.currentTarget,
                            i = t.relatedTarget;
                        e && "function" == typeof e.blur && e.blur(), i && "function" == typeof i.focus && t.relatedTarget.focus()
                    }
                };
                e = window, i = document, n = {
                    baseID: "atab_",
                    defaultTabLabel: "Tab ",
                    elClass: "atabs",
                    customTabClassAttribute: "data-atabs-tab-class",
                    tabLabelAttribute: "data-atabs-tab-label",
                    headingAttribute: "data-atabs-heading",
                    defaultOrientation: "horizontal",
                    orientationAttribute: "data-atabs-orientation",
                    panelWrapper: "data-atabs-panel-wrap",
                    disabledAttribute: "data-atabs-disabled",
                    panelClass: "atabs__panel",
                    panelSelector: "[data-atabs-panel]",
                    tabClass: "atabs__list__tab",
                    tabListClass: "atabs__list",
                    tablistSelector: "[data-atabs-list]",
                    manualAttribute: "data-atabs-manual",
                    manual: !1
                }, e.ARIAtabs = function(t, e) {
                    var r, s, a = Object.assign(n, e),
                        l = a.defaultOrientation,
                        u = [],
                        c = 0,
                        d = 0,
                        h = c,
                        f = t,
                        p = f.querySelector("[" + a.panelWrapper + "]"),
                        g = "[" + a.headingAttribute + "]";
                    this.addTab = function(t, e, n) {
                        n = n || t.getAttribute(a.customTabClassAttribute);
                        var l = t.hasAttribute(a.disabledAttribute),
                            h = t,
                            p = u.length;
                        if (h) {
                            var m = h.querySelector(g),
                                v = [e, h.getAttribute(a.tabLabelAttribute), m && m.textContent, a.defaultTabLabel + (p + 1)].filter((function(t) {
                                    return t && "" !== t
                                }))[0],
                                C = h.id || s + "_panel_" + p,
                                k = function(t, e, n, r) {
                                    var u = i.createElement("span");
                                    return u.id = s + "_tab_" + t, u.tabIndex = -1, u.setAttribute("role", "tab"), u.setAttribute("aria-selected", c === t), c === t && u.setAttribute("aria-controls", e), u.setAttribute("data-controls", e), u.innerHTML = n, u.classList.add(a.tabClass), r && u.classList.add(r), l ? (u.setAttribute("aria-disabled", !0), u.addEventListener("focus", o.preventFocus.bind(this))) : (u.addEventListener("click", (function() {
                                        y.call(this, t), this.focus(), _()
                                    }), !1), u.addEventListener("keydown", x.bind(this), !1)), u
                                }(p, C, v, n);
                            r.appendChild(k), h.id = C, h.setAttribute("role", "tabpanel"), h.setAttribute("aria-labelledby", s + "_tab_" + p), h.classList.add(a.panelClass), h.hidden = !0, f.contains(t) || f.appendChild(t), h.getAttribute("id") === o.getUrlHash() ? c = p : 0 === d && "default" === h.getAttribute("data-atabs-panel") && (d = c = p), m && "keep" !== m.getAttribute(a.headingAttribute) && m.parentNode.removeChild(m), l || (h.addEventListener("keydown", b.bind(this), !1), h.addEventListener("blur", w, !1), u.push({
                                tab: k,
                                panel: h
                            }))
                        }
                    };
                    var m = function() {
                            var t;
                            t = p ? o.getDirectChildren(p, a.panelSelector) : o.getDirectChildren(f, a.panelSelector);
                            for (var e = 0; e < t.length; e++) this.addTab(t[e])
                        },
                        v = function() {
                            u[c].tab.focus()
                        },
                        y = function(t) {
                            c = t, C()
                        },
                        b = function(t) {
                            (t.keyCode || t.which) === o.keyCodes.TAB && w()
                        },
                        w = function() {
                            u[c].panel.removeAttribute("tabindex")
                        },
                        x = function(t) {
                            switch (t.keyCode || t.which) {
                                case o.keyCodes.TAB:
                                    u[h].panel.tabIndex = 0, c = h;
                                    break;
                                case o.keyCodes.ENTER:
                                case o.keyCodes.SPACE:
                                    t.preventDefault(), C(), _();
                                    break;
                                case o.keyCodes.LEFT:
                                case o.keyCodes.UP:
                                    ! function(t) {
                                        t.preventDefault(), c > 0 ? --c : c = u.length - 1, v(), a.manual || (C(), _())
                                    }(t);
                                    break;
                                case o.keyCodes.RIGHT:
                                case o.keyCodes.DOWN:
                                    ! function(t) {
                                        t.preventDefault(), c < u.length - 1 ? ++c : c = 0, v(), a.manual || (C(), _())
                                    }(t);
                                    break;
                                case o.keyCodes.END:
                                    t.preventDefault(), c = u.length - 1, v(), a.manual || (C(), _());
                                    break;
                                case o.keyCodes.HOME:
                                    t.preventDefault(), c = 0, v(), a.manual || (C(), _());
                                    break;
                                case o.keyCodes.DELETE:
                                    u.length > 1 && canRemove && (t.preventDefault(), removeTabAndPanel(c), v())
                            }
                        },
                        C = function() {
                            var t = u[c] || u[0];
                            return function() {
                                for (var t = 0; t < u.length; t++) u[e = t].panel.hidden = !0, u[e].tab.tabIndex = -1, u[e].tab.setAttribute("aria-selected", !1), u[e].tab.removeAttribute("aria-controls");
                                var e
                            }(), t.tab.setAttribute("aria-controls", t.tab.getAttribute("data-controls")), t.tab.setAttribute("aria-selected", !0), t.tab.tabIndex = 0, t.panel.hasAttribute(a.disabledAttribute) || (t.panel.hidden = !1), h = c
                        },
                        _ = function() {
                            var t = u[c];
                            o.setUrlHash(t.tab.getAttribute("data-controls"))
                        };
                    return function() {
                        var t;
                        s = f.id || o.generateID(a.baseID), "vertical" === f.getAttribute(a.orientationAttribute) && (l = "vertical"), f.hasAttribute(a.manualAttribute) && (a.manual = !0), f.classList.add(a.elClass), (t = f.querySelector(a.tablistSelector) || i.createElement("div")).setAttribute("role", "tablist"), t.classList.add(a.tabListClass), t.id = s + "_list", t.innerHTML = "", "vertical" === l && t.setAttribute("aria-orientation", l), f.insertBefore(t, f.querySelector(":first-child")), r = t, m.call(this),
                            function() {
                                if (f.getAttribute("data-atabs-toc")) {
                                    var t = i.getElementById(f.getAttribute("data-atabs-toc"));
                                    t && t.parentNode.removeChild(t)
                                }
                            }(), c > -1 && C()
                    }.call(this), this
                }
            },
            305: function(t, e, i) {
                var n = i(692);

                function o(t) {
                    return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, o(t)
                }(function() {
                    var t, e, i, r, s, a, l, u, c, d, h, f, p, g, m = [].slice;
                    t = /^\(?([^)]*)\)?(?:(.)(d+))?$/, e = 1e3 / 30, c = document.createElement("div").style, r = null != c.transition || null != c.webkitTransition || null != c.mozTransition || null != c.oTransition, u = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, a = function(t) {
                        var e;
                        return (e = document.createElement("div")).innerHTML = t, e.children[0]
                    }, l = function() {
                        var t, e;
                        return null != (t = null != (e = window.performance) && "function" == typeof e.now ? e.now() : void 0) ? t : +new Date
                    }, h = !1, (d = function() {
                        var t, e, i, n, o;
                        if (!h && null != window.jQuery) {
                            for (h = !0, o = [], e = 0, i = (n = ["html", "text"]).length; e < i; e++) t = n[e], o.push(function(t) {
                                var e;
                                return e = window.jQuery.fn[t], window.jQuery.fn[t] = function(t) {
                                    var i;
                                    return null == t || null == (null != (i = this[0]) ? i.odometer : void 0) ? e.apply(this, arguments) : this[0].odometer.update(t)
                                }
                            }(t));
                            return o
                        }
                    })(), setTimeout(d, 0), s = function() {
                        function s(t) {
                            var i, o, r, a, l, u, c, d, h, f, p, g, m = this;
                            this.options = t;
                            try {
                                if (this.el = this.options.el, null != this.el.odometer) return this.el.odometer;
                                for (this.el.odometer = this, h = s.options, o = l = 0, c = h.length; l < c; o = ++l) i = h[o], null == this.options[i] && (this.options[i] = o);
                                null == (r = this.options).duration && (r.duration = 2e3), this.options.valuesIndex = 0, this.options.values = this.cleanArray(), this.MAX_VALUES = this.options.duration / e / 2 | 0, this.resetFormat(), this.value = this.cleanValue(null != (f = this.options.values[0]) ? f : ""), this.renderInside(), this.render();
                                try {
                                    for (a = function(t) {
                                            return Object.defineProperty(m.el, "inner" + t, {
                                                get: function() {
                                                    return m.inside["outer" + t]
                                                },
                                                set: function(t) {
                                                    return m.update(t)
                                                }
                                            })
                                        }, u = 0, d = (p = ["HTML", "Text"]).length; u < d; u++) a(p[u])
                                } catch (t) {
                                    this.watchForMutations()
                                }
                                setInterval((function() {
                                    var t, e;
                                    try {
                                        if (null == (e = m.options.loop) || e) return m.options.valuesIndex >= m.options.values.length - 1 ? m.options.valuesIndex = 0 : m.options.valuesIndex++, t = m.options.values[m.options.valuesIndex], n(m.el).html(t);
                                        if (m.options.valuesIndex < m.options.values.length - 1) return m.options.valuesIndex++, t = m.options.values[m.options.valuesIndex], n(m.el).html(t)
                                    } catch (t) {
                                        return t
                                    }
                                }), null != (g = this.options.delay) ? g : 3e3)
                            } catch (t) {}
                        }
                        return s.prototype.cleanArray = function() {
                            var t, e, i, n, o, r, s, a, l, u;
                            for (n = this.maxLength(this.options.values), i = r = 0, a = (l = this.options.values).length; r < a; i = ++r) {
                                if (o = (e = l[i]).split(""), (t = null != (u = (n - e.length) / 2) ? u : 0) > 0)
                                    for (s = 1; 1 <= t ? s <= t : s >= t; 1 <= t ? ++s : --s) "left" === this.options.align ? o.push("  ") : "right" === this.options.align ? o.unshift("  ") : (o.push(" "), o.unshift(" "));
                                this.options.values[i] = o.join("")
                            }
                            return this.options.values
                        }, s.prototype.maxLength = function(t) {
                            var e, i, n, o;
                            for (i = 0, n = 0, o = t.length; n < o; n++)(e = t[n]).length > i && (i = e.length);
                            return i
                        }, s.prototype.renderInside = function() {
                            return this.inside = document.createElement("div"), this.inside.className = "odometer-inside", this.el.innerHTML = "", this.el.appendChild(this.inside)
                        }, s.prototype.watchForMutations = function() {
                            var t = this;
                            if (null != i) try {
                                return null == this.observer && (this.observer = new i((function(e) {
                                    var i;
                                    return i = t.el.innerText, t.renderInside(), t.render(t.value), t.update(i)
                                }))), this.watchMutations = !0, this.startWatchingMutations()
                            } catch (t) {}
                        }, s.prototype.startWatchingMutations = function() {
                            if (this.watchMutations) return this.observer.observe(this.el, {
                                childList: !0
                            })
                        }, s.prototype.stopWatchingMutations = function() {
                            var t;
                            return null != (t = this.observer) ? t.disconnect() : void 0
                        }, s.prototype.intToChar = function(t) {
                            return String.fromCharCode(t + 32)
                        }, s.prototype.cleanValue = function(t) {
                            var e;
                            return "string" == typeof t ? (t = t.split(""), t = function() {
                                var i, n, o;
                                for (o = [], i = 0, n = t.length; i < n; i++) e = t[i], o.push(e.charCodeAt(0) - 32);
                                return o
                            }()) : "object" === o(t) && (t = function() {
                                var i, n, o;
                                for (o = [], i = 0, n = t.length; i < n; i++) e = t[i], o.push(e.charCodeAt(0) - 32);
                                return o
                            }()), t
                        }, s.prototype.bindTransitionEnd = function() {
                            var t, e, i, n, o, r, s = this;
                            if (!this.transitionEndBound) {
                                for (this.transitionEndBound = !0, e = !1, r = [], i = 0, n = (o = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd".split(" ")).length; i < n; i++) t = o[i], r.push(this.el.addEventListener(t, (function() {
                                    return e || (e = !0, setTimeout((function() {
                                        return s.render(), e = !1
                                    }), 0)), !0
                                }), !1));
                                return r
                            }
                        }, s.prototype.resetFormat = function() {
                            var e, i, n, o, r, s, a, l;
                            if ((e = null != (a = this.options.format) ? a : "d") || (e = "d"), !(n = t.exec(e))) throw new Error("TextRoller: Unparsable digit format");
                            return s = (l = n.slice(1, 4))[0], r = l[1], o = (null != (i = l[2]) ? i.length : void 0) || 0, this.format = {
                                repeating: s,
                                radix: r,
                                precision: o
                            }
                        }, s.prototype.render = function(t) {
                            var e, i, n, o, s, a, l, u, c, d, h, f;
                            for (null == t && (t = this.value), this.stopWatchingMutations(), this.resetFormat(), this.inside.innerHTML = "", a = this.options.theme, s = [], u = 0, d = (e = this.el.className.split(" ")).length; u < d; u++)(i = e[u]).length && ((o = /^odometer-theme-(.+)$/.exec(i)) ? a = o[1] : /^odometer(-|$)/.test(i) || s.push(i));
                            for (s.push("odometer"), r || s.push("odometer-no-transitions"), a ? s.push("odometer-theme-" + a) : s.push("odometer-auto-theme"), this.el.className = s.join(" "), this.ribbons = {}, this.digits = [], l = !this.format.precision || !0, c = 0, h = (f = t.reverse()).length; c < h; c++) n = f[c], this.intToChar(n === this.format.radix) && (l = !0), this.addDigit(n, l);
                            return this.startWatchingMutations()
                        }, s.prototype.update = function(t) {
                            var e = this;
                            if ((t = this.cleanValue(t)) !== this.value) return t > this.value ? this.el.className += " odometer-animating-up" : this.el.className += " odometer-animating-down", this.stopWatchingMutations(), this.animate(t), this.startWatchingMutations(), setTimeout((function() {
                                return e.el.offsetHeight, e.el.className += " odometer-animating"
                            }), 0), this.value = t
                        }, s.prototype.renderDigit = function() {
                            return a('<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value"></span></span></span></span></span>')
                        }, s.prototype.insertDigit = function(t, e) {
                            return null != e ? this.inside.insertBefore(t, e) : this.inside.children.length ? this.inside.insertBefore(t, this.inside.children[0]) : this.inside.appendChild(t)
                        }, s.prototype.addSpacer = function(t, e, i) {
                            var n;
                            return (n = a('<span class="odometer-formatting-mark"></span>')).innerHTML = t, i && (n.className += " " + i), this.insertDigit(n, e)
                        }, s.prototype.addDigit = function(t, e) {
                            var i, n, o;
                            if (null == e && (e = !0), "-" === t) return this.addSpacer(t, null, "odometer-negation-mark");
                            if (t === this.format.radix) return this.addSpacer(t, null, "odometer-radix-mark");
                            if (e)
                                for (o = !1;;) {
                                    if (!this.format.repeating.length) {
                                        if (o) throw new Error("Bad odometer format without digits");
                                        this.resetFormat(), o = !0
                                    }
                                    if (i = this.format.repeating[this.format.repeating.length - 1], this.format.repeating = this.format.repeating.substring(0, this.format.repeating.length - 1), "d" === i) break;
                                    this.addSpacer(i)
                                }
                            return (n = this.renderDigit()).querySelector(".odometer-value").innerHTML = this.intToChar(t), this.digits.push(n), this.insertDigit(n)
                        }, s.prototype.animate = function(t) {
                            return r && "count" !== this.options.animation ? this.animateSlide(t) : this.animateCount(t)
                        }, s.prototype.valDiff = function(t, e) {
                            var i, n, o, r;
                            for (i = [], n = o = 0, r = Math.max(e.length, t.length) - 1; 0 <= r ? o <= r : o >= r; n = 0 <= r ? ++o : --o) i[n] = (e[n] || 0) - (t[n] || 0);
                            return i
                        }, s.prototype.noChanges = function(t) {
                            var e, i;
                            for (e = 0, i = t.length; e < i; e++)
                                if (!1 !== t[e]) return !0;
                            return !1
                        }, s.prototype.animateCount = function(t) {
                            var e, i, n, o, r, s = this;
                            if (i = +t - this.value) return o = n = l(), e = this.value, (r = function() {
                                var a, c;
                                return l() - o > s.options.duration ? (s.value = t, void s.render()) : ((a = l() - n) > 50 && (n = l(), c = a / s.options.duration, e += i * c, s.render(Math.round(e))), null != u ? u(r) : setTimeout(r, 50))
                            })()
                        }, s.prototype.getDigitCount = function() {
                            var t, e, i, n, o, r, s;
                            for (t = 0, e = r = 0, s = (o = 1 <= arguments.length ? m.call(arguments, 0) : []).length; r < s; e = ++r)(n = o[e]).length > t && (t = n.length), o[e] = Math.abs(n);
                            return i = Math.max.apply(Math, o), Math.ceil(Math.log(i + 1) / Math.log(10)), t
                        }, s.prototype.getFractionalDigitCount = function() {
                            var t, e, i, n, o, r, s;
                            for (e = /^\d*\.(\d*?)0*$/, t = r = 0, s = (o = 1 <= arguments.length ? m.call(arguments, 0) : []).length; r < s; t = ++r) n = o[t], o[t] = n.toString(), i = e.exec(o[t]), o[t] = null == i ? 0 : i[1].length;
                            return Math.max.apply(Math, o)
                        }, s.prototype.resetDigits = function() {
                            return this.digits = [], this.ribbons = [], this.inside.innerHTML = "", this.resetFormat()
                        }, s.prototype.animateSlide = function(t) {
                            var e, i, n, o, r, s, a, l, u, c, d, h, f, p, g, m, v, y, b, w, x, C, _, k, T, S, E, A, F, O, D;
                            if (m = this.value, n = this.valDiff(t, this.value), this.noChanges(n)) {
                                for (this.bindTransitionEnd(), r = [], e = 0, c = w = A = (o = this.getDigitCount(m, t)) - 1; A <= 0 ? w <= 0 : w >= 0; c = A <= 0 ? ++w : --w) {
                                    if (v = Math.floor(m[c]), s = (a = Math.floor(t[o - 1 - c])) - v, Math.abs(s) > this.MAX_VALUES) {
                                        for (u = [], d = s / (this.MAX_VALUES + this.MAX_VALUES * e * .5), i = v; s > 0 && i < a || s < 0 && i > a;) u.push(Math.round(i)), i += d;
                                        u[u.length - 1] !== a && u.push(a), e++
                                    } else u = function() {
                                        D = [];
                                        for (var t = v; v <= a ? t <= a : t >= a; v <= a ? t++ : t--) D.push(t);
                                        return D
                                    }.apply(this);
                                    for (c = x = 0, _ = u.length; x < _; c = ++x) l = u[c], u[c] = Math.abs(l % 91);
                                    r.push(u)
                                }
                                for (this.resetDigits(), c = C = 0, k = (F = r.reverse()).length; C < k; c = ++C) {
                                    for (u = F[c], this.digits[c] || this.addDigit(" ", !1), null == (b = this.ribbons)[c] && (b[c] = this.digits[c].querySelector(".odometer-ribbon-inner")), this.ribbons[c].innerHTML = "", p = [], y = S = 0, O = o - 1; 0 <= O ? S <= O : S >= O; y = 0 <= O ? ++S : --S) p[y] = 0;
                                    for (n > p && (u = u.reverse()), h = E = 0, T = u.length; E < T; h = ++E) l = u[h], (g = document.createElement("div")).className = "odometer-value", g.innerHTML = this.intToChar(l), this.ribbons[c].appendChild(g), h === u.length - 1 && (g.className += " odometer-last-value"), 0 === h && (g.className += " odometer-first-value")
                                }
                                null != (f = this.inside.querySelector(".odometer-radix-mark")) && f.parent.removeChild(f)
                            }
                        }, s
                    }(), s.options = null != (p = window.odometerOptions) ? p : {}, setTimeout((function() {
                        var t, e, i, n, o;
                        if (window.odometerOptions) {
                            for (t in o = [], n = window.odometerOptions) e = n[t], o.push(null != (i = s.options)[t] ? (i = s.options)[t] : i[t] = e);
                            return o
                        }
                    }), 0), s.init = function() {
                        var t, e, i, n, o;
                        if (null != document.querySelectorAll) {
                            for (o = [], i = 0, n = (e = document.querySelectorAll(s.options.selector || ".odometer")).length; i < n; i++) t = e[i], o.push(t.odometer = new s({
                                el: t,
                                values: [t.innerText, "coucou", "bonjour", "salut"]
                            }));
                            return o
                        }
                    }, null != (null != (g = document.documentElement) ? g.doScroll : void 0) && null != document.createEventObject ? (f = document.onreadystatechange, document.onreadystatechange = function() {
                        return "complete" === document.readyState && !1 !== s.options.auto && s.init(), null != f ? f.apply(this, arguments) : void 0
                    }) : document.addEventListener("DOMContentLoaded", (function() {
                        if (!1 !== s.options.auto) return s.init()
                    }), !1), window.TextRoller = s
                }).call(this)
            },
            439: function(t, e, i) {
                var n = i(692),
                    o = i(692);
                Array.prototype.contains = function(t) {
                    for (var e = 0; e < this.length; e++)
                        if (this[e] == t) return !0;
                    return !1
                }, n.prototype.meta = function(t) {
                    for (var e = n(this).attr("class").split(" "), i = new Array, o = 0; o < e.length; o++) e[o].substring(0, t.length) == t && (i[i.length] = e[o].substring(t.length + 1, e[o].length));
                    return i
                }, Function.prototype.calledOn = function(t) {
                    var e = this;
                    return function() {
                        return e.apply(t, arguments)
                    }
                }, o(document).ready((function() {
                    o("body").removeClass("no-fx").addClass("fx"), o("div.helptext a").on("click", (function() {
                        var t = o(this),
                            e = t.attr("title"),
                            i = o('<div><img alt="Loading..." src="/static/common/img/spinner.gif" /></div>').css("maxHeight", .8 * o(window).height() + "px");
                        return o(".ui-widget-overlay").live("click", o.proxy((function() {
                            this.dialog("close")
                        }), i)), i.dialog({
                            modal: !0,
                            width: 750,
                            title: e,
                            buttons: {
                                Close: function() {
                                    i.dialog("close")
                                }
                            },
                            position: ["center", 10],
                            close: function() {
                                o(".ui-widget-overlay").die("click")
                            }
                        }), i.load(t.attr("href")), !1
                    }))
                }))
            },
            839: function(t, e, i) {
                var n, o = i(692);
                (n = o)(document).ready((function() {
                    var t = n("#footer").outerHeight(!0),
                        e = n("#page");
                    e.css("margin-bottom", -t), e.append('<div class="footer-helper">'), n(".footer-helper").css("height", t), n("a.button").on("click", (function(t) {
                        n(this).hasClass("disabled") && t.preventDefault()
                    })), n(".fx-active input:checked").on("click", (function() {
                        var t = !1,
                            e = n(".language-flash-container");
                        n(".fx-active > input").each((function() {
                            n(this).is(":checked") || (t = !0, n(this).parent().addClass("fx-not-active"))
                        })), t ? e.show() : e.hide()
                    })), n(".batch-operations-form textarea").wrap('<div class="field"></div>')
                }))
            },
            934: function() {
                ! function(t) {
                    "use strict";
                    t.navigator.userAgent.match(/(MSIE|Trident)/) && t.addEventListener("load", (function() {
                        ! function() {
                            for (var e = document.querySelectorAll(".js-flexbug-75"), i = 0; i < e.length; ++i) {
                                var n = e[i],
                                    o = parseInt(t.getComputedStyle(n).height, 10),
                                    r = parseInt(t.getComputedStyle(n).width, 10);
                                r > 0 && (n.style.height = o + "px", n.style.width = r + "px")
                            }
                        }()
                    }))
                }(window)
            },
            740: function(t, e, i) {
                var n = i(692);
                n(window).on("load", (function() {
                    "use strict";
                    var t = n(".js-override-checkbox-fieldset");
                    if (t.length) {
                        var e = function(t) {
                            var e = this;
                            this.$fieldset = n(t), this.$overrideCheckbox = this.$fieldset.find(".override-checkbox__checkbox"), this.$fieldsetFieldContainer = this.$fieldset.find(".override-checkbox-fieldset__field"), this.$formFields = this.$fieldsetFieldContainer.find("input, select, textarea"), this.formFieldsDisabledClass = "override-checkbox-fieldset--fields-disabled", this.init = function() {
                                e.toggleDisabledAttrFormFields(), e.toggleDisabledClass(), e.triggerCheckboxHasChangedEvent()
                            }, this.isOverrideCheckboxNotChecked = function() {
                                return !e.$overrideCheckbox[0].checked
                            }, this.toggleDisabledClass = function() {
                                e.$fieldset.toggleClass(e.formFieldsDisabledClass, e.isOverrideCheckboxNotChecked())
                            }, this.toggleDisabledAttrFormFields = function() {
                                e.$formFields.each((function(t, i) {
                                    n(i).attr("disabled", e.isOverrideCheckboxNotChecked())
                                }))
                            }, this.triggerCheckboxHasChangedEvent = function() {
                                e.$fieldset.trigger("overrideCheckboxChanged", {
                                    checked: e.isOverrideCheckboxNotChecked()
                                })
                            }, this.$overrideCheckbox.on("change", (function() {
                                e.toggleDisabledAttrFormFields(), e.toggleDisabledClass(), e.triggerCheckboxHasChangedEvent()
                            })), this.$fieldset.on("change", (function() {
                                e.isOverrideCheckboxNotChecked() || e.$formFields.first().trigger("focus")
                            })), this.init()
                        };
                        window.formFelderMitOverride = window.formFelderMitOverride || new function() {
                            this.felder = n.map(t, (function(t) {
                                return new e(t)
                            }))
                        }
                    }
                }))
            },
            999: function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
                var $ = __webpack_require__(692),
                    jQuery = __webpack_require__(692),
                    FormFieldRegistry = new Array;

                function FormField(t) {
                    this.init(t)
                }

                function CollapsingFormField(t) {
                    this.init(t)
                }

                function TextareaField(t) {
                    this.init(t), this.fieldHideFunction = jQuery.prototype.slideUp
                }

                function SelectField(t) {
                    this.init(t)
                }

                function LanguageSelectField(t) {
                    this.init(t)
                }
                $(document).ready((function() {
                    $("form div.row").each((function(index) {
                        try {
                            $(this).meta("fieldtype")[0] && eval("FormFieldRegistry[index] = new " + $(this).meta("fieldtype")[0] + '($(this).meta("fieldname")[0]);')
                        } catch (t) {}
                    })), $('div.row[class*="validator-maxLength-"] textarea').each((function() {
                        var t = $(this).parents("div.row").meta("validator-maxLength")[0];
                        new MaxLengthHelper($(this).attr("name"), t, TextareaField.prototype.maxLengthHelperMessage)
                    })), $('div.row[class*="fieldname-certificate_variables__use_alternative_signer_description"] input').on("change", (function() {
                        var t = $(this).parents("form").find('div.row[class*="fieldname-certificate_variables_ld__signer_description"]');
                        this.checked ? t.show() : t.hide()
                    })).trigger("change"), $('div.row[class*="fieldname-certificate_variables__signed_electronically"] input').on("change", (function() {
                        var t = $(this).parents("form").find('div.row[class*="fieldname-certificate_variables__signature_file"]');
                        this.checked ? t.show() : t.hide()
                    })).trigger("change"), $('div.row[class*="fieldname-certificate_variables__signed_electronically"] input').on("change", (function() {
                        var t = $(this).parents("form").find('div.row[class*="fieldname-certificate_variables__certificates_available_for_learners"]');
                        this.checked ? t.show() : t.hide()
                    })).trigger("change"), $("form.autosave").each((function() {
                        var t = $(this);
                        window.setInterval((function() {
                            $.post("./?autosave=true", t.serialize(), (function(t) {
                                (t = parseInt(t)) && $('input[name="_contextSerial"]').val(t)
                            }))
                        }), 6e4)
                    })), $("form").each((function() {
                        var t = $(this);
                        if (t.data("fieldname-of-partner-role-select-field")) {
                            var e = $('div.row[class*="fieldname-' + t.data("fieldname-of-partner-role-select-field") + '"] select'),
                                i = t.data("id-of-other-option-in-partner-role-select-field");
                            e.on("change", (function() {
                                var e = $(this),
                                    n = t.find('div.row[class*="partner_description"]');
                                e.find("option:selected").val() == i ? n.show() : n.hide()
                            })).trigger("change")
                        }
                    })), $('div.row[class*="fieldname-participant_"][class*="__mutual_process"] input').on("change", (function() {
                        var t = $(this),
                            e = $(this).parents("form").find('div.row[class*="dialog_partner"]');
                        t.is(":checked") ? (e.show(), dialogPartnerSelect.trigger("change")) : e.hide()
                    })).trigger("change"), $("div.changes").each((function() {
                        var t = $(this).find("div.helptext");
                        t.before('<img height="16px" width="16px" src="' + WFD_STATIC_COMMON + 'img/icon-info-small.png" />'), t.prev().css({
                            height: "16px",
                            width: "16px",
                            verticalAlign: "middle"
                        })
                    }))
                })), FormField.prototype = {
                    init: function(t) {
                        this.name = t, this.row = $("div.row.fieldname-" + this.name), this.compactMode = this.row.parents("form").is(".compact"), this.overrideValueCheckboxContainer = this.row.find(".js-override-checkbox-container"), this.overrideValueCheckbox = this.row.find(".js-override-checkbox"), this.overrideValueFieldsDisabledClass = "override-checkbox-fieldset--fields-disabled", this.fieldContainer = this.row.find("div.field"), this.field = this.findField(), this.fieldInner = this.findFieldInner(), this.helptext = this.row.find("div.helptext"), this.helptext.visible = !1, this.editLink = null, this.fieldHideFunction = jQuery.prototype.hide, this.initField(), this.initHelpText()
                    },
                    findField: function() {
                        return this.fieldContainer.find("input").not(this.overrideValueCheckbox)
                    },
                    findFieldInner: function() {
                        return this.findField()
                    },
                    buildEditLink: function() {
                        var t = $('<a href="#" class="edit-link" title="Click here to edit"><span class="singlelang-input standard">' + this.getEditLinkText() + "</span></a>");
                        return t.appendTo(this.fieldContainer), t
                    },
                    initField: function() {
                        this.field && (this.field.on("focus", this.onFocus.calledOn(this)), this.field.on("blur", this.onBlur.calledOn(this)))
                    },
                    initHelpText: function() {
                        this.helptext.hide().find("a").attr("tabindex", 99999)
                    },
                    onFocus: function() {
                        this.showHelptext()
                    },
                    scheduleFieldFocus: function(t) {
                        window.setTimeout($.proxy((function() {
                            $(t).eq(0).trigger("focus")
                        }), this), 0)
                    },
                    onBlur: function(t) {
                        this.hideHelptext()
                    },
                    showHelptext: function() {
                        for (var t in FormFieldRegistry) FormFieldRegistry[t] && FormFieldRegistry[t].helptext && FormFieldRegistry[t].helptext.visible && FormFieldRegistry[t].hideHelptext();
                        0 == this.helptext.visible && (this.helptext.fadeIn(200), this.helptext.visible = !0)
                    },
                    hideHelptext: function() {
                        this.helptext.visible && this.helptext.fadeOut(500), this.helptext.visible = !1
                    },
                    getTextValue: function() {
                        return this.field.attr("value")
                    },
                    getEditLinkText: function() {
                        return v = this.getTextValue(), !v || v.match(/^ +$/) ? v = this.getEmptyEditLinkHTML() : v.length > 52 && (v = v.substring(0, 50) + " ..."), v
                    },
                    getEmptyEditLinkHTML: function() {
                        return ""
                    }
                }, CollapsingFormField.prototype = new FormField, CollapsingFormField.prototype.initField = function() {
                    this.compactMode ? (this.editLink = this.buildEditLink(), this.editLink.on("focus", this.onFocus.calledOn(this)), this.editLink.on("click", this.onFocus.calledOn(this)), this.editLink.on("click", (function() {
                        return !1
                    })), this.field && (this.field.on("blur", this.onBlur.calledOn(this)), this.fieldInner.hide())) : FormField.prototype.initField.calledOn(this)
                }, CollapsingFormField.prototype.onFocus = function() {
                    if (this.compactMode) {
                        if (this.row.hasClass(this.overrideValueFieldsDisabledClass)) return;
                        this.editLink.hide(), this.fieldInner.show() && this.scheduleFieldFocus(this.field)
                    }
                    FormField.prototype.onFocus.calledOn(this)
                }, CollapsingFormField.prototype.onBlur = function() {
                    this.compactMode && (this.fieldHideFunction.calledOn(this.fieldInner)(), this.editLink.html('<span class="singlelang-input onblur">' + this.getEditLinkText() + "</span>"), this.editLink.show()), FormField.prototype.onBlur.calledOn(this)
                }, TextField = FormField, PasswordField = FormField, FileUploadField = FormField, ImageResizeField = FormField, DateField = SelectField, RadioField = FormField, TextareaField.prototype = new CollapsingFormField, TextareaField.prototype.findField = function() {
                    return this.fieldContainer.find("textarea")
                }, SelectField.prototype = new FormField, SelectField.prototype.findField = function() {
                    return this.fieldContainer.find("select")
                }, SelectField.prototype.getTextValue = function() {
                    return this.field.get(0).options[this.field.get(0).selectedIndex].text
                }, SelectField.prototype.getEditLinkText = function() {
                    return this.field.val() ? FormField.prototype.getEditLinkText.calledOn(this)() : this.getEmptyEditLinkHTML()
                }, CountrySelectField = SelectField, StatisticsYearField = SelectField, StatisticsProjectCountryField = SelectField, StatisticsCountryOfResidenceField = SelectField, StatisticsActivityTypeField = SelectField, UserLanguageSelectField = SelectField, DomainObjectSelectField = SelectField, TrainingAndNetworkingProjectTypeSelectField = SelectField, LanguageSelectField.prototype = new SelectField;
                var initialLanguageSelection = new Array;

                function Button(t) {
                    this.init(t)
                }

                function ReadonlyField(t) {
                    this.init(t)
                }

                function CheckboxField(t) {
                    this.init(t)
                }

                function MultilingualFormField(t) {
                    this.init(t), this.blurTimeOut = null
                }

                function MultilingualTextField(t) {
                    this.init(t), this.blurTimeOut = null
                }

                function MultilingualTextareaField(t) {
                    this.init(t), this.blurTimeOut = null
                }

                function ReferenceField(t) {
                    this.init(t), this.overFieldInner = !1, this.blurTimeOut = null
                }

                function MaxLengthHelper(t, e, i) {
                    this.field = $('textarea[name="' + t + '"]'), this.field.after('<div class="maxLengthDisplay"></div>'), this.display = this.field.parent().find("div.maxLengthDisplay"), this.domField = this.field.get(0), this.maxLength = e, this.message = i, this.field.on("keyup", this.keyup.calledOn(this)), this.keyup()
                }

                function MultipleSelectField(t) {
                    this.init(t)
                }

                function MultipleCheckboxField(t) {
                    this.init(t)
                }

                function RadioField(t) {
                    this.init(t)
                }
                LanguageSelectField.prototype.initField = function() {
                    this.fieldContainer.find("select").each((function(t) {
                        t > 0 && !this.value && $(this).hide(), $(this).on("change", (function(t) {
                            var e = new Array;
                            $(this).parent().children("select").each((function() {
                                this.value && e.push(this.value)
                            }));
                            for (var i = new Array, n = 0; n < initialLanguageSelection.length; n++)
                                if (!e.contains(initialLanguageSelection[n]))
                                    for (var o = $(this).parent().children("select").get(0).options, r = 0; r < o.length; r++)
                                        if (o[r].value == initialLanguageSelection[n]) {
                                            i.push(o[r].text);
                                            break
                                        }
                            var s = $(this).parents("div.field");
                            if (s.find(".deleted-languages").remove(), i.length) {
                                var a = '<div class="flash info deleted-languages">' + LanguageSelectField.prototype.deletedLanguagesMessage + "<ul>";
                                for (n = 0; n < i.length; n++) a += "<li>" + i[n] + "</li>";
                                a += "</ul></div>", s.append(a)
                            }
                        })), this.value && initialLanguageSelection.push(this.value)
                    })), this.fieldContainer.append('<a href="#' + this.name + '" class="add-language button primary-btn" onclick="var nextSelect = $(\'div.fieldname-' + this.name + " div.field select:visible').next(); nextSelect.show(); if ($('div.fieldname-" + this.name + " div.field select:hidden').length == 0) $(this).remove(); return false;\">" + LanguageSelectField.prototype.addAnotherLanguageMessage + "</a>")
                }, Button.prototype = new FormField, Button.prototype.initField = function() {}, ReadonlyField.prototype = new FormField, ReadonlyField.prototype.findField = function() {
                    return null
                }, CheckboxField.prototype = new FormField, CheckboxField.prototype.initField = function() {}, MultilingualFormField.prototype = new CollapsingFormField, MultilingualFormField.prototype.onFocus = function() {
                    if (this.compactMode) {
                        if (this.row.hasClass(this.overrideValueFieldsDisabledClass)) return;
                        if (this.blurTimeOut && window.clearTimeout(this.blurTimeOut), this.editLink.hide(), this.getRepresentativeInputElement().is(":hidden")) {
                            if (this.isOneForAll() && 1 != this.numberOfLanguages) {
                                var t = this.getRepresentativeInputElement().parents(".ld-field");
                                this.languageLabels.hide()
                            } else t = this.fieldInner.add(this.languageLabels);
                            t.show(), this.showHelptext(), this.scheduleFieldFocus(this.field.filter(t.find("*")))
                        }
                    } else this.showHelptext()
                }, MultilingualFormField.prototype.parentInit = MultilingualFormField.prototype.init, MultilingualFormField.prototype.init = function(t) {
                    if (this.parentInit(t), this.languageLabels = this.fieldContainer.find("label.lang"), this.numberOfLanguages = this.languageLabels.length, this.hasOneForAllOption()) {
                        if (this.oneForAllCheckboxContainer = $('<div class="one-for-all-container"><label for="one-for-all-' + t + '">' + this.oneValueForAllLanguagesMessage + "</label></div>").prependTo(this.fieldContainer), this.oneForAllCheckbox = $('<input type="checkbox" id="one-for-all-' + t + '" value="one-for-all" class="fx-one-for-all-checkbox">').prependTo(this.oneForAllCheckboxContainer).on("change", $.proxy(this.onOneForAllCheckboxChange, this)), this.overrideValueCheckbox.length > 0) {
                            var e = this;
                            this.overrideValueCheckboxContainer.prependTo(this.fieldContainer), this.row.on("overrideCheckboxChanged", (function(t, i) {
                                e.oneForAllCheckbox.attr("disabled", i.checked)
                            }))
                        }
                        1 == this.field.length && this.oneForAllCheckboxContainer.hide();
                        var i = !0,
                            n = null;
                        this.field.each((function(t, e) {
                            var o = $(e).val();
                            return !!("" == $.trim(o) || n == o || null == n && (n = o)) || (i = !1, !1)
                        })), i && this.oneForAllCheckbox.attr("checked", "checked"), $(".one-for-all-container").is(":visible") && this.fieldContainer.addClass("one-for-all")
                    }
                    this.onBlur(), this.fieldContainer.parents("form").on("submit", $.proxy(this.onSubmit, this))
                }, MultilingualFormField.prototype.onSubmit = function() {
                    if (this.isOneForAll()) {
                        var t = this.getRepresentativeInputElement().val();
                        this.field.val(t)
                    }
                }, MultilingualFormField.prototype.getRepresentativeInputElement = function() {
                    var t = this.field.eq(0);
                    return this.isOneForAll() && this.field.each((function(e, i) {
                        if (i = $(i), "" != $.trim(i.val())) return t = i, !1
                    })), t
                }, MultilingualFormField.prototype.isOneForAll = function() {
                    return this.hasOneForAllOption() && Boolean(this.oneForAllCheckbox) && this.oneForAllCheckbox.is(":checked")
                }, MultilingualFormField.prototype.hasOneForAllOption = function() {
                    return this.fieldHasOneForAllOption[this.name]
                }, MultilingualFormField.prototype.fieldHasOneForAllOption = {}, MultilingualFormField.prototype.onOneForAllCheckboxChange = function() {
                    this.isOneForAll() ? (this.fieldContainer.addClass("one-for-all"), this.getRepresentativeInputElement().parents(".ld-field")) : this.fieldContainer.removeClass("one-for-all"), this.onBlur()
                }, MultilingualFormField.prototype.onBlur = function() {
                    this.compactMode ? this.blurTimeOut = window.setTimeout(function(t) {
                        this.fieldInner.hide(), this.editLink.html(this.getEditLinkText()), this.editLink.show(), this.hideHelptext()
                    }.calledOn(this), 100) : this.hideHelptext()
                }, MultilingualFormField.prototype.getTextValue = function() {
                    var t = this.field;
                    this.isOneForAll() && (t = [this.getRepresentativeInputElement()]);
                    for (var e = [], i = 0; i < t.length; i++) e.push({
                        lang: $(t[i]).attr("lang"),
                        description: $(t[i]).siblings("label").text(),
                        value: $(t[i]).val(),
                        src: $(t[i]).siblings("label").find("span.flag-icon").attr("class")
                    });
                    return e
                }, MultilingualFormField.prototype.getEditLinkText = function() {
                    var t = this.getTextValue(),
                        e = "";
                    if (t && t.length)
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i].value;
                            !n || n.match(/^ +$/) ? n = this.getEmptyEditLinkHTML() : n.length > 49 && (n = n.substring(0, 47) + " ..."), this.isOneForAll() && 1 != this.numberOfLanguages ? e += '<span class="singlelang-input ml-form-field">' + n + "</span>" : (e += '<div class="lang-container"><span class="' + t[i].src + '"></span><span class="multilang-input"> ', e += n + "</span></div>")
                        } else t = this.getEmptyEditLinkHTML();
                    return e
                }, MultilingualFormField.prototype.findFieldInner = function() {
                    return this.fieldContainer.find("div.ld-field")
                }, MultilingualTextField.prototype = new MultilingualFormField, MultilingualTextField.prototype.initField = function() {
                    CollapsingFormField.prototype.initField.calledOn(this)(), this.compactMode && (this.field.on("focus", this.onFocus.calledOn(this)), this.fieldContainer.find("label.lang").hide())
                }, MultilingualTextareaField.prototype = new MultilingualFormField, MultilingualTextareaField.prototype.findField = function() {
                    return this.fieldContainer.find("textarea")
                }, MultilingualTextareaField.prototype.initField = function() {
                    CollapsingFormField.prototype.initField.calledOn(this)(), this.compactMode && (this.field.on("focus", this.onFocus.calledOn(this)), this.fieldContainer.find("label.lang").hide())
                }, ReferenceField.prototype = new CollapsingFormField, ReferenceField.prototype.findField = function() {
                    return this.fieldContainer.find("select:not(.originalSelectField), button")
                }, ReferenceField.prototype.findFieldInner = function() {
                    return this.fieldContainer.find(".ITReferenceUserInterface")
                }, ReferenceField.prototype.initField = function() {
                    CollapsingFormField.prototype.initField.calledOn(this)(), this.compactMode && (this.fieldInner.on("mouseover", function() {
                        this.overFieldInner = !0
                    }.calledOn(this)), this.fieldInner.on("mouseout", function() {
                        this.overFieldInner = !1, this.field[0].trigger("focus")
                    }.calledOn(this)), this.field.on("focus", this.onFocus.calledOn(this)))
                }, ReferenceField.prototype.getTextValue = function() {
                    for (var t = this.fieldContainer.find(".originalSelectField").find("option"), e = new Array, i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.selected && e.push(n.text)
                    }
                    return e.join(", ")
                }, ReferenceField.prototype.onFocus = function() {
                    this.compactMode ? (this.blurTimeOut && window.clearTimeout(this.blurTimeOut), this.editLink.hide(), "none" == $(this.fieldInner).css("display") && (this.fieldInner.show(), this.showHelptext(), this.scheduleFieldFocus(this.field[0]))) : this.showHelptext()
                }, ReferenceField.prototype.onBlur = function() {
                    if (this.compactMode) {
                        if (this.overFieldInner) return;
                        this.blurTimeOut = window.setTimeout(function(t) {
                            this.fieldInner.hide(), this.editLink.html('<span class="singlelang-input referencefield">' + this.getEditLinkText() + "</span>"), this.editLink.show(), this.hideHelptext()
                        }.calledOn(this), 100)
                    } else this.hideHelptext()
                }, CountryReferenceField = ReferenceField, MaxLengthHelper.prototype = {
                    keyup: function() {
                        var t = this.message,
                            e = this.domField.value.replace(/(\r\n|\n|\r)/g, "\r\n").length;
                        t = (t = t.replace(/\$\{currentLength\}/, e)).replace(/\$\{maxLength\}/, this.maxLength), this.display.html(t), e > this.maxLength ? this.display.addClass("error") : this.display.removeClass("error")
                    }
                }, MultipleSelectField.prototype = new SelectField, MultipleCheckboxField.prototype = new SelectField, MultipleCheckboxField.prototype.findField = function() {
                    return this.fieldContainer.find("input")
                }, RadioField.prototype = new SelectField, RadioField.prototype.findField = function() {
                    return this.fieldContainer.find("input")
                }, window.TextareaField = TextareaField, window.MultilingualFormField = MultilingualFormField, $((function() {
                    for (var t = [];;) {
                        var e = t.length + 1,
                            i = $(".fieldname-location_ld_" + e + "__town, .fieldname-location_" + e + "__country_id");
                        if (!i.length) break;
                        i = i.add(".fieldname-project_location_" + e), t.push(i)
                    }
                    if (t.length) {
                        var n = t.length,
                            o = $('<a class="add-link">' + message__button__add_another_location + "</a>").on("click", (function() {
                                t[n++].show(), l()
                            })),
                            r = $('<a class="remove-link">' + message__button__remove_last_location + "</a>").on("click", a);
                        for ($('<div class="field">').append(o.add(r)).appendTo($('<div class="row">').insertAfter(t[t.length - 1].last())), e = n - 1; e >= 0; e--) {
                            var s = !1;
                            if (t[e].find("input, select").not(".fx-one-for-all-checkbox").each((function(t, e) {
                                    $(e).val() && (s = !0)
                                })), s) break;
                            a()
                        }
                    }

                    function a() {
                        t[--n].hide().find("input, select").val("").trigger("change").trigger("blur"), l()
                    }

                    function l() {
                        n < t.length ? o.show() : o.hide(), n > 0 ? r.show() : r.hide()
                    }
                }))
            },
            646: function(t, e, i) {
                var n, o, r;
                ! function() {
                    "use strict";
                    o = [i(692)], n = function(t) {
                        t.ui = t.ui || {}, t.ui.version = "1.13.1";
                        var e, i = 0,
                            n = Array.prototype.hasOwnProperty,
                            o = Array.prototype.slice;
                        t.cleanData = (e = t.cleanData, function(i) {
                            var n, o, r;
                            for (r = 0; null != (o = i[r]); r++)(n = t._data(o, "events")) && n.remove && t(o).triggerHandler("remove");
                            e(i)
                        }), t.widget = function(e, i, n) {
                            var o, r, s, a = {},
                                l = e.split(".")[0],
                                u = l + "-" + (e = e.split(".")[1]);
                            return n || (n = i, i = t.Widget), Array.isArray(n) && (n = t.extend.apply(null, [{}].concat(n))), t.expr.pseudos[u.toLowerCase()] = function(e) {
                                return !!t.data(e, u)
                            }, t[l] = t[l] || {}, o = t[l][e], r = t[l][e] = function(t, e) {
                                if (!this || !this._createWidget) return new r(t, e);
                                arguments.length && this._createWidget(t, e)
                            }, t.extend(r, o, {
                                version: n.version,
                                _proto: t.extend({}, n),
                                _childConstructors: []
                            }), (s = new i).options = t.widget.extend({}, s.options), t.each(n, (function(t, e) {
                                a[t] = "function" == typeof e ? function() {
                                    function n() {
                                        return i.prototype[t].apply(this, arguments)
                                    }

                                    function o(e) {
                                        return i.prototype[t].apply(this, e)
                                    }
                                    return function() {
                                        var t, i = this._super,
                                            r = this._superApply;
                                        return this._super = n, this._superApply = o, t = e.apply(this, arguments), this._super = i, this._superApply = r, t
                                    }
                                }() : e
                            })), r.prototype = t.widget.extend(s, {
                                widgetEventPrefix: o && s.widgetEventPrefix || e
                            }, a, {
                                constructor: r,
                                namespace: l,
                                widgetName: e,
                                widgetFullName: u
                            }), o ? (t.each(o._childConstructors, (function(e, i) {
                                var n = i.prototype;
                                t.widget(n.namespace + "." + n.widgetName, r, i._proto)
                            })), delete o._childConstructors) : i._childConstructors.push(r), t.widget.bridge(e, r), r
                        }, t.widget.extend = function(e) {
                            for (var i, r, s = o.call(arguments, 1), a = 0, l = s.length; a < l; a++)
                                for (i in s[a]) r = s[a][i], n.call(s[a], i) && void 0 !== r && (t.isPlainObject(r) ? e[i] = t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], r) : t.widget.extend({}, r) : e[i] = r);
                            return e
                        }, t.widget.bridge = function(e, i) {
                            var n = i.prototype.widgetFullName || e;
                            t.fn[e] = function(r) {
                                var s = "string" == typeof r,
                                    a = o.call(arguments, 1),
                                    l = this;
                                return s ? this.length || "instance" !== r ? this.each((function() {
                                    var i, o = t.data(this, n);
                                    return "instance" === r ? (l = o, !1) : o ? "function" != typeof o[r] || "_" === r.charAt(0) ? t.error("no such method '" + r + "' for " + e + " widget instance") : (i = o[r].apply(o, a)) !== o && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0 : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + r + "'")
                                })) : l = void 0 : (a.length && (r = t.widget.extend.apply(null, [r].concat(a))), this.each((function() {
                                    var e = t.data(this, n);
                                    e ? (e.option(r || {}), e._init && e._init()) : t.data(this, n, new i(r, this))
                                }))), l
                            }
                        }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
                            widgetName: "widget",
                            widgetEventPrefix: "",
                            defaultElement: "<div>",
                            options: {
                                classes: {},
                                disabled: !1,
                                create: null
                            },
                            _createWidget: function(e, n) {
                                n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                                    remove: function(t) {
                                        t.target === n && this.destroy()
                                    }
                                }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
                            },
                            _getCreateOptions: function() {
                                return {}
                            },
                            _getCreateEventData: t.noop,
                            _create: t.noop,
                            _init: t.noop,
                            destroy: function() {
                                var e = this;
                                this._destroy(), t.each(this.classesElementLookup, (function(t, i) {
                                    e._removeClass(i, t)
                                })), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
                            },
                            _destroy: t.noop,
                            widget: function() {
                                return this.element
                            },
                            option: function(e, i) {
                                var n, o, r, s = e;
                                if (0 === arguments.length) return t.widget.extend({}, this.options);
                                if ("string" == typeof e)
                                    if (s = {}, n = e.split("."), e = n.shift(), n.length) {
                                        for (o = s[e] = t.widget.extend({}, this.options[e]), r = 0; r < n.length - 1; r++) o[n[r]] = o[n[r]] || {}, o = o[n[r]];
                                        if (e = n.pop(), 1 === arguments.length) return void 0 === o[e] ? null : o[e];
                                        o[e] = i
                                    } else {
                                        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                                        s[e] = i
                                    }
                                return this._setOptions(s), this
                            },
                            _setOptions: function(t) {
                                var e;
                                for (e in t) this._setOption(e, t[e]);
                                return this
                            },
                            _setOption: function(t, e) {
                                return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
                            },
                            _setOptionClasses: function(e) {
                                var i, n, o;
                                for (i in e) o = this.classesElementLookup[i], e[i] !== this.options.classes[i] && o && o.length && (n = t(o.get()), this._removeClass(o, i), n.addClass(this._classes({
                                    element: n,
                                    keys: i,
                                    classes: e,
                                    add: !0
                                })))
                            },
                            _setOptionDisabled: function(t) {
                                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
                            },
                            enable: function() {
                                return this._setOptions({
                                    disabled: !1
                                })
                            },
                            disable: function() {
                                return this._setOptions({
                                    disabled: !0
                                })
                            },
                            _classes: function(e) {
                                var i = [],
                                    n = this;

                                function o() {
                                    var i = [];
                                    e.element.each((function(e, o) {
                                        t.map(n.classesElementLookup, (function(t) {
                                            return t
                                        })).some((function(t) {
                                            return t.is(o)
                                        })) || i.push(o)
                                    })), n._on(t(i), {
                                        remove: "_untrackClassesElement"
                                    })
                                }

                                function r(r, s) {
                                    var a, l;
                                    for (l = 0; l < r.length; l++) a = n.classesElementLookup[r[l]] || t(), e.add ? (o(), a = t(t.uniqueSort(a.get().concat(e.element.get())))) : a = t(a.not(e.element).get()), n.classesElementLookup[r[l]] = a, i.push(r[l]), s && e.classes[r[l]] && i.push(e.classes[r[l]])
                                }
                                return (e = t.extend({
                                    element: this.element,
                                    classes: this.options.classes || {}
                                }, e)).keys && r(e.keys.match(/\S+/g) || [], !0), e.extra && r(e.extra.match(/\S+/g) || []), i.join(" ")
                            },
                            _untrackClassesElement: function(e) {
                                var i = this;
                                t.each(i.classesElementLookup, (function(n, o) {
                                    -1 !== t.inArray(e.target, o) && (i.classesElementLookup[n] = t(o.not(e.target).get()))
                                })), this._off(t(e.target))
                            },
                            _removeClass: function(t, e, i) {
                                return this._toggleClass(t, e, i, !1)
                            },
                            _addClass: function(t, e, i) {
                                return this._toggleClass(t, e, i, !0)
                            },
                            _toggleClass: function(t, e, i, n) {
                                n = "boolean" == typeof n ? n : i;
                                var o = "string" == typeof t || null === t,
                                    r = {
                                        extra: o ? e : i,
                                        keys: o ? t : e,
                                        element: o ? this.element : t,
                                        add: n
                                    };
                                return r.element.toggleClass(this._classes(r), n), this
                            },
                            _on: function(e, i, n) {
                                var o, r = this;
                                "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = o = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, o = this.widget()), t.each(n, (function(n, s) {
                                    function a() {
                                        if (e || !0 !== r.options.disabled && !t(this).hasClass("ui-state-disabled")) return ("string" == typeof s ? r[s] : s).apply(r, arguments)
                                    }
                                    "string" != typeof s && (a.guid = s.guid = s.guid || a.guid || t.guid++);
                                    var l = n.match(/^([\w:-]*)\s*(.*)$/),
                                        u = l[1] + r.eventNamespace,
                                        c = l[2];
                                    c ? o.on(u, c, a) : i.on(u, a)
                                }))
                            },
                            _off: function(e, i) {
                                i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
                            },
                            _delay: function(t, e) {
                                var i = this;
                                return setTimeout((function() {
                                    return ("string" == typeof t ? i[t] : t).apply(i, arguments)
                                }), e || 0)
                            },
                            _hoverable: function(e) {
                                this.hoverable = this.hoverable.add(e), this._on(e, {
                                    mouseenter: function(e) {
                                        this._addClass(t(e.currentTarget), null, "ui-state-hover")
                                    },
                                    mouseleave: function(e) {
                                        this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                                    }
                                })
                            },
                            _focusable: function(e) {
                                this.focusable = this.focusable.add(e), this._on(e, {
                                    focusin: function(e) {
                                        this._addClass(t(e.currentTarget), null, "ui-state-focus")
                                    },
                                    focusout: function(e) {
                                        this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                                    }
                                })
                            },
                            _trigger: function(e, i, n) {
                                var o, r, s = this.options[e];
                                if (n = n || {}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], r = i.originalEvent)
                                    for (o in r) o in i || (i[o] = r[o]);
                                return this.element.trigger(i, n), !("function" == typeof s && !1 === s.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented())
                            }
                        }, t.each({
                            show: "fadeIn",
                            hide: "fadeOut"
                        }, (function(e, i) {
                            t.Widget.prototype["_" + e] = function(n, o, r) {
                                var s;
                                "string" == typeof o && (o = {
                                    effect: o
                                });
                                var a = o ? !0 === o || "number" == typeof o ? i : o.effect || i : e;
                                "number" == typeof(o = o || {}) ? o = {
                                    duration: o
                                }: !0 === o && (o = {}), s = !t.isEmptyObject(o), o.complete = r, o.delay && n.delay(o.delay), s && t.effects && t.effects.effect[a] ? n[e](o) : a !== e && n[a] ? n[a](o.duration, o.easing, r) : n.queue((function(i) {
                                    t(this)[e](), r && r.call(n[0]), i()
                                }))
                            }
                        })), t.widget, t.ui.keyCode = {
                            BACKSPACE: 8,
                            COMMA: 188,
                            DELETE: 46,
                            DOWN: 40,
                            END: 35,
                            ENTER: 13,
                            ESCAPE: 27,
                            HOME: 36,
                            LEFT: 37,
                            PAGE_DOWN: 34,
                            PAGE_UP: 33,
                            PERIOD: 190,
                            RIGHT: 39,
                            SPACE: 32,
                            TAB: 9,
                            UP: 38
                        }, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
                        var r = !1;
                        t(document).on("mouseup", (function() {
                            r = !1
                        })), t.widget("ui.mouse", {
                            version: "1.13.1",
                            options: {
                                cancel: "input, textarea, button, select, option",
                                distance: 1,
                                delay: 0
                            },
                            _mouseInit: function() {
                                var e = this;
                                this.element.on("mousedown." + this.widgetName, (function(t) {
                                    return e._mouseDown(t)
                                })).on("click." + this.widgetName, (function(i) {
                                    if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent")) return t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
                                })), this.started = !1
                            },
                            _mouseDestroy: function() {
                                this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
                            },
                            _mouseDown: function(e) {
                                if (!r) {
                                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                                    var i = this,
                                        n = 1 === e.which,
                                        o = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                                    return !(n && !o && this._mouseCapture(e) && (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout((function() {
                                        i.mouseDelayMet = !0
                                    }), this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), 0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                                        return i._mouseMove(t)
                                    }, this._mouseUpDelegate = function(t) {
                                        return i._mouseUp(t)
                                    }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), r = !0, 0)))
                                }
                            },
                            _mouseMove: function(e) {
                                if (this._mouseMoved) {
                                    if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
                                    if (!e.which)
                                        if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                                        else if (!this.ignoreMissingWhich) return this._mouseUp(e)
                                }
                                return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
                            },
                            _mouseUp: function(e) {
                                this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, r = !1, e.preventDefault()
                            },
                            _mouseDistanceMet: function(t) {
                                return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
                            },
                            _mouseDelayMet: function() {
                                return this.mouseDelayMet
                            },
                            _mouseStart: function() {},
                            _mouseDrag: function() {},
                            _mouseStop: function() {},
                            _mouseCapture: function() {
                                return !0
                            }
                        }), t.widget("ui.slider", t.ui.mouse, {
                            version: "1.13.1",
                            widgetEventPrefix: "slide",
                            options: {
                                animate: !1,
                                classes: {
                                    "ui-slider": "ui-corner-all",
                                    "ui-slider-handle": "ui-corner-all",
                                    "ui-slider-range": "ui-corner-all ui-widget-header"
                                },
                                distance: 0,
                                max: 100,
                                min: 0,
                                orientation: "horizontal",
                                range: !1,
                                step: 1,
                                value: 0,
                                values: null,
                                change: null,
                                slide: null,
                                start: null,
                                stop: null
                            },
                            numPages: 5,
                            _create: function() {
                                this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
                            },
                            _refresh: function() {
                                this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
                            },
                            _createHandles: function() {
                                var e, i, n = this.options,
                                    o = this.element.find(".ui-slider-handle"),
                                    r = [];
                                for (i = n.values && n.values.length || 1, o.length > i && (o.slice(i).remove(), o = o.slice(0, i)), e = o.length; e < i; e++) r.push("<span tabindex='0'></span>");
                                this.handles = o.add(t(r.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each((function(e) {
                                    t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
                                }))
                            },
                            _createRange: function() {
                                var e = this.options;
                                e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : Array.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                                    left: "",
                                    bottom: ""
                                })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), "min" !== e.range && "max" !== e.range || this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
                            },
                            _setupEvents: function() {
                                this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
                            },
                            _destroy: function() {
                                this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
                            },
                            _mouseCapture: function(e) {
                                var i, n, o, r, s, a, l, u = this,
                                    c = this.options;
                                return !c.disabled && (this.elementSize = {
                                    width: this.element.outerWidth(),
                                    height: this.element.outerHeight()
                                }, this.elementOffset = this.element.offset(), i = {
                                    x: e.pageX,
                                    y: e.pageY
                                }, n = this._normValueFromMouse(i), o = this._valueMax() - this._valueMin() + 1, this.handles.each((function(e) {
                                    var i = Math.abs(n - u.values(e));
                                    (o > i || o === i && (e === u._lastChangedValue || u.values(e) === c.min)) && (o = i, r = t(this), s = e)
                                })), !1 !== this._start(e, s) && (this._mouseSliding = !0, this._handleIndex = s, this._addClass(r, null, "ui-state-active"), r.trigger("focus"), a = r.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                                    left: 0,
                                    top: 0
                                } : {
                                    left: e.pageX - a.left - r.width() / 2,
                                    top: e.pageY - a.top - r.height() / 2 - (parseInt(r.css("borderTopWidth"), 10) || 0) - (parseInt(r.css("borderBottomWidth"), 10) || 0) + (parseInt(r.css("marginTop"), 10) || 0)
                                }, this.handles.hasClass("ui-state-hover") || this._slide(e, s, n), this._animateOff = !0, !0))
                            },
                            _mouseStart: function() {
                                return !0
                            },
                            _mouseDrag: function(t) {
                                var e = {
                                        x: t.pageX,
                                        y: t.pageY
                                    },
                                    i = this._normValueFromMouse(e);
                                return this._slide(t, this._handleIndex, i), !1
                            },
                            _mouseStop: function(t) {
                                return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
                            },
                            _detectOrientation: function() {
                                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
                            },
                            _normValueFromMouse: function(t) {
                                var e, i, n, o, r;
                                return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (n = i / e) > 1 && (n = 1), n < 0 && (n = 0), "vertical" === this.orientation && (n = 1 - n), o = this._valueMax() - this._valueMin(), r = this._valueMin() + n * o, this._trimAlignValue(r)
                            },
                            _uiHash: function(t, e, i) {
                                var n = {
                                    handle: this.handles[t],
                                    handleIndex: t,
                                    value: void 0 !== e ? e : this.value()
                                };
                                return this._hasMultipleValues() && (n.value = void 0 !== e ? e : this.values(t), n.values = i || this.values()), n
                            },
                            _hasMultipleValues: function() {
                                return this.options.values && this.options.values.length
                            },
                            _start: function(t, e) {
                                return this._trigger("start", t, this._uiHash(e))
                            },
                            _slide: function(t, e, i) {
                                var n, o = this.value(),
                                    r = this.values();
                                this._hasMultipleValues() && (n = this.values(e ? 0 : 1), o = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), r[e] = i), i !== o && !1 !== this._trigger("slide", t, this._uiHash(e, i, r)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i))
                            },
                            _stop: function(t, e) {
                                this._trigger("stop", t, this._uiHash(e))
                            },
                            _change: function(t, e) {
                                this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
                            },
                            value: function(t) {
                                return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
                            },
                            values: function(t, e) {
                                var i, n, o;
                                if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(e), this._refreshValue(), void this._change(null, t);
                                if (!arguments.length) return this._values();
                                if (!Array.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(t) : this.value();
                                for (i = this.options.values, n = arguments[0], o = 0; o < i.length; o += 1) i[o] = this._trimAlignValue(n[o]), this._change(null, o);
                                this._refreshValue()
                            },
                            _setOption: function(t, e) {
                                var i, n = 0;
                                switch ("range" === t && !0 === this.options.range && ("min" === e ? (this.options.value = this._values(0), this.options.values = null) : "max" === e && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), Array.isArray(this.options.values) && (n = this.options.values.length), this._super(t, e), t) {
                                    case "orientation":
                                        this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(e), this.handles.css("horizontal" === e ? "bottom" : "left", "");
                                        break;
                                    case "value":
                                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                                        break;
                                    case "values":
                                        for (this._animateOff = !0, this._refreshValue(), i = n - 1; i >= 0; i--) this._change(null, i);
                                        this._animateOff = !1;
                                        break;
                                    case "step":
                                    case "min":
                                    case "max":
                                        this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                                        break;
                                    case "range":
                                        this._animateOff = !0, this._refresh(), this._animateOff = !1
                                }
                            },
                            _setOptionDisabled: function(t) {
                                this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
                            },
                            _value: function() {
                                var t = this.options.value;
                                return this._trimAlignValue(t)
                            },
                            _values: function(t) {
                                var e, i, n;
                                if (arguments.length) return e = this.options.values[t], this._trimAlignValue(e);
                                if (this._hasMultipleValues()) {
                                    for (i = this.options.values.slice(), n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(i[n]);
                                    return i
                                }
                                return []
                            },
                            _trimAlignValue: function(t) {
                                if (t <= this._valueMin()) return this._valueMin();
                                if (t >= this._valueMax()) return this._valueMax();
                                var e = this.options.step > 0 ? this.options.step : 1,
                                    i = (t - this._valueMin()) % e,
                                    n = t - i;
                                return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e), parseFloat(n.toFixed(5))
                            },
                            _calculateNewMax: function() {
                                var t = this.options.max,
                                    e = this._valueMin(),
                                    i = this.options.step;
                                (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
                            },
                            _precision: function() {
                                var t = this._precisionOf(this.options.step);
                                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
                            },
                            _precisionOf: function(t) {
                                var e = t.toString(),
                                    i = e.indexOf(".");
                                return -1 === i ? 0 : e.length - i - 1
                            },
                            _valueMin: function() {
                                return this.options.min
                            },
                            _valueMax: function() {
                                return this.max
                            },
                            _refreshRange: function(t) {
                                "vertical" === t && this.range.css({
                                    width: "",
                                    left: ""
                                }), "horizontal" === t && this.range.css({
                                    height: "",
                                    bottom: ""
                                })
                            },
                            _refreshValue: function() {
                                var e, i, n, o, r, s = this.options.range,
                                    a = this.options,
                                    l = this,
                                    u = !this._animateOff && a.animate,
                                    c = {};
                                this._hasMultipleValues() ? this.handles.each((function(n) {
                                    i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[u ? "animate" : "css"](c, a.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[u ? "animate" : "css"]({
                                        left: i + "%"
                                    }, a.animate), 1 === n && l.range[u ? "animate" : "css"]({
                                        width: i - e + "%"
                                    }, {
                                        queue: !1,
                                        duration: a.animate
                                    })) : (0 === n && l.range.stop(1, 1)[u ? "animate" : "css"]({
                                        bottom: i + "%"
                                    }, a.animate), 1 === n && l.range[u ? "animate" : "css"]({
                                        height: i - e + "%"
                                    }, {
                                        queue: !1,
                                        duration: a.animate
                                    }))), e = i
                                })) : (n = this.value(), o = this._valueMin(), r = this._valueMax(), i = r !== o ? (n - o) / (r - o) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](c, a.animate), "min" === s && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                                    width: i + "%"
                                }, a.animate), "max" === s && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                                    width: 100 - i + "%"
                                }, a.animate), "min" === s && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                                    height: i + "%"
                                }, a.animate), "max" === s && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                                    height: 100 - i + "%"
                                }, a.animate))
                            },
                            _handleEvents: {
                                keydown: function(e) {
                                    var i, n, o, r = t(e.target).data("ui-slider-handle-index");
                                    switch (e.keyCode) {
                                        case t.ui.keyCode.HOME:
                                        case t.ui.keyCode.END:
                                        case t.ui.keyCode.PAGE_UP:
                                        case t.ui.keyCode.PAGE_DOWN:
                                        case t.ui.keyCode.UP:
                                        case t.ui.keyCode.RIGHT:
                                        case t.ui.keyCode.DOWN:
                                        case t.ui.keyCode.LEFT:
                                            if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), !1 === this._start(e, r))) return
                                    }
                                    switch (o = this.options.step, i = n = this._hasMultipleValues() ? this.values(r) : this.value(), e.keyCode) {
                                        case t.ui.keyCode.HOME:
                                            n = this._valueMin();
                                            break;
                                        case t.ui.keyCode.END:
                                            n = this._valueMax();
                                            break;
                                        case t.ui.keyCode.PAGE_UP:
                                            n = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                                            break;
                                        case t.ui.keyCode.PAGE_DOWN:
                                            n = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                                            break;
                                        case t.ui.keyCode.UP:
                                        case t.ui.keyCode.RIGHT:
                                            if (i === this._valueMax()) return;
                                            n = this._trimAlignValue(i + o);
                                            break;
                                        case t.ui.keyCode.DOWN:
                                        case t.ui.keyCode.LEFT:
                                            if (i === this._valueMin()) return;
                                            n = this._trimAlignValue(i - o)
                                    }
                                    this._slide(e, r, n)
                                },
                                keyup: function(e) {
                                    var i = t(e.target).data("ui-slider-handle-index");
                                    this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
                                }
                            }
                        })
                    }, void 0 === (r = n.apply(e, o)) || (t.exports = r)
                }()
            },
            629: function() {
                function t(t, e) {
                    this.fieldName = t, this.buildUserInterface(e)
                }
                t.prototype = {
                    buildUserInterface: function(t) {
                        var e = document.getElementById(this.fieldName).getAttribute("size");
                        document.getElementById(this.fieldName).parentNode.innerHTML = '<div class="row">' + document.getElementById(this.fieldName).parentNode.innerHTML + '<div class="select-container col-xs-12 col-md-6"><select multiple="multiple" size="' + e + '" id="' + this.fieldName + '_options"></select><div class="buttons"><button type="button" id="' + this.fieldName + '_add" class="add"><span class="button-text">Add</span><span class="button-icon"></span></button></div></div><div class="select-container col-xs-12 col-md-6"><select multiple="multiple" size="' + e + '" id="' + this.fieldName + '_selection"></select><div class="buttons"><button type="button" id="' + this.fieldName + '_up" class="up"><span class="button-text">Move up</span><span class="button-icon"></span></button><button type="button" id="' + this.fieldName + '_down" class="down"><span class="button-text">Move down</span><span class="button-icon"></span></button><button type="button" id="' + this.fieldName + '_remove" class="remove"><span class="button-text">Remove</span><span class="button-icon"></span></button></div></div></div>', this.options = document.getElementById(this.fieldName + "_options"), this.selection = document.getElementById(this.fieldName + "_selection"), this.addButton = document.getElementById(this.fieldName + "_add"), this.removeButton = document.getElementById(this.fieldName + "_remove"), this.upButton = document.getElementById(this.fieldName + "_up"), this.downButton = document.getElementById(this.fieldName + "_down"), this.options.ondblclick = this.add.calledOn(this), this.addButton.onclick = this.add.calledOn(this), this.removeButton.onclick = this.remove.calledOn(this), this.upButton.onclick = function() {
                            this.up(this.selection.selectedIndex)
                        }.calledOn(this), this.downButton.onclick = function() {
                            this.down(this.selection.selectedIndex)
                        }.calledOn(this), this.foreachOptions(document.getElementById(this.fieldName), (function(t) {
                            var e = new Option(t.text, t.value, !1);
                            this.options.options[this.options.length] = e
                        }));
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            this.options.options[this.getIndex(this.options, n)].selected = !0, this.add()
                        }
                    },
                    add: function() {
                        this.foreachOptions(this.options, (function(t) {
                            if (t.selected && !1 === this.getIndex(this.selection, t.value)) {
                                this.selection.options[this.selection.length] = new Option(t.text, t.value);
                                var e = this.getIndex(this.options, t.value);
                                this.options.options[e].selected = !1, this.options.options[e].style.color = "#999999", this.select(t.value, this.selection.length - 1)
                            }
                        }))
                    },
                    remove: function() {
                        this.foreachOptions(this.selection, (function(t) {
                            if (t.selected) {
                                var e = t.value;
                                this.selection.options[this.getIndex(this.selection, e)] = null, this.options.options[this.getIndex(this.options, e)].style.color = "black", this.deselect(e)
                            }
                        }))
                    },
                    up: function(t) {
                        -1 !== t && null !== t && 0 !== t && (this.move(this.selection, t, t - 1), this.move(document.getElementById(this.fieldName), t, t - 1))
                    },
                    down: function(t) {
                        -1 !== t && null !== t && t !== this.selection.length - 1 && (this.move(this.selection, t, t + 1), this.move(document.getElementById(this.fieldName), t, t + 1))
                    },
                    move: function(t, e, i) {
                        e > i ? t.insertBefore(t.options[e], t.options[i]) : t.insertBefore(t.options[i], t.options[e])
                    },
                    getIndex: function(t, e) {
                        for (var i = 0; i < t.length; i++)
                            if (t.options[i].value == e) return i;
                        return !1
                    },
                    select: function(t, e) {
                        var i = this.getIndex(document.getElementById(this.fieldName), t);
                        document.getElementById(this.fieldName).options[i].selected = !0, this.move(document.getElementById(this.fieldName), i, e)
                    },
                    deselect: function(t) {
                        var e = this.getIndex(document.getElementById(this.fieldName), t);
                        document.getElementById(this.fieldName).options[e].selected = !1, this.move(document.getElementById(this.fieldName), e, document.getElementById(this.fieldName).length - 1)
                    },
                    foreachOptions: function(t, e) {
                        new Array, e = e.calledOn(this);
                        for (var i = t.options.length, n = 0; n < i; n++) e(t.options[n]), t.options.length < i && (i = t.options.length, n--)
                    }
                }, window.ITReferenceClientside = t
            },
            347: function(t, e, i) {
                var n = i(692);
                n((function() {
                    n("body").hasClass("certificate-preview") && (n(".certificate-preview-text").css({
                        "margin-top": n(".certificate-preview-header-container").outerHeight(),
                        "padding-bottom": n(".review-button-container").outerHeight()
                    }), navigator.userAgent.match(/iPhone|iPad/i) && n(".js-certificate-preview-fallback").show())
                }))
            },
            679: function(t, e, i) {
                var n = i(692);
                n(document).ready((function() {
                    var t = n(".fx-certificate-preview-data-form .button-container").closest(".row").addClass("fixed-buttons");
                    t.affix({
                        offset: {
                            bottom: function() {
                                return this.bottom = n("#page").outerHeight(!0) - t.offset().top
                            }
                        }
                    })
                }))
            },
            891: function(t, e, i) {
                var n = i(692);
                n((function() {
                    "use strict";

                    function t() {
                        i.find(".selectionCheckbox:checked").length ? r.removeClass("disabled").attr("disabled", !1) : r.addClass("disabled").attr("disabled", !0)
                    }
                    var e = n(".participantslist-module"),
                        i = e.find("#fx-generate-certificates-list-form"),
                        o = n(".fx-generate-certificates-form"),
                        r = i.find("input:submit"),
                        s = e.find(".fx-participant-list"),
                        a = o.find("input.radio:checked").val();
                    o.length ? s.hide() : t(), o.find("input.radio").on("change", (function() {
                        var e = n(this);
                        "some" === (a = e.val()) ? (t(), s.show()) : (r.removeClass("disabled").attr("disabled", !1), s.hide())
                    })), i.find(".selectionCheckbox").on("click", (function() {
                        t()
                    })), i.on("submit", (function() {
                        "all" === a && (s.find(".selectionCheckbox").attr("disabled", "disabled"), n("#generate_certificates_for_all_participants").val("y"))
                    }))
                }))
            },
            364: function(t, e, i) {
                var n = i(692);

                function o(t, e, i, o, r, s) {
                    this.container = n(t), this.sizeInMm = n(e), this.buildHtml(this.container, this.sizeInMm, i, o, r, s), this.init()
                }
                o.prototype = {
                    pageWidthMm: 210,
                    originalImageRatio: null,
                    sliderPercentage: 0,
                    maximumImageWidthMm: 70,
                    maximumImageHeightMm: 25,
                    maximumResizeWidthMm: null,
                    init: function() {
                        this.preview = this.container.find("div.preview"), this.resizedImage = this.container.find("img.resized-image"), this.slide = this.container.find(" div.slide");
                        var t = this;
                        this.container.find(".js-image-resize-smaller").on("click", (function() {
                            return t.onSmaller()
                        })), this.container.find(".js-image-resize-larger").on("click", (function() {
                            return t.onLarger()
                        })), this.sizeInMmWidth = this.sizeInMm.find("input.width"), this.sizeInMmWidth.on("change", (function() {
                            t.slideToMM(n(this).val())
                        })), this.slide.slider({
                            slide: function(e, i) {
                                t.updateImageSize(i.value)
                            },
                            change: function(e, i) {
                                t.updateImageSize(i.value)
                            }
                        }), this.initImage(n.proxy((function() {
                            this.sizeInMmWidth.val() ? this.slideToMM(this.sizeInMmWidth.val()) : this.slideToPercent(50)
                        }), this))
                    },
                    initImage: function(t) {
                        if (this.originalImageRatio = this.resizedImage.width() / this.resizedImage.height(), this.originalImageRatio) this.originalImageRatio < this.maximumImageWidthMm / this.maximumImageHeightMm ? this.maximumResizeWidthMm = this.maximumImageHeightMm * this.originalImageRatio : this.maximumResizeWidthMm = this.maximumImageWidthMm, t();
                        else {
                            var e = this;
                            window.setTimeout((function() {
                                e.initImage(t)
                            }), 10)
                        }
                    },
                    slideToPercent: function(t) {
                        t > 100 && (t = 100), t <= 0 && (t = 0), this.slide.slider("value", t)
                    },
                    slideToMM: function(t) {
                        this.slideToPercent(this.mmToPercent(t))
                    },
                    getPxToMmRatio: function() {
                        return this.pageWidthMm / this.container.width()
                    },
                    round: function(t) {
                        return t *= 10, (t = Math.round(t)) / 10
                    },
                    pxToMm: function(t) {
                        return t * this.getPxToMmRatio()
                    },
                    mmToPx: function(t) {
                        return t / this.getPxToMmRatio()
                    },
                    percentToMm: function(t) {
                        return this.round(this.maximumResizeWidthMm / (100 / t))
                    },
                    mmToPercent: function(t) {
                        return t / this.maximumResizeWidthMm * 100
                    },
                    updateImageSize: function(t) {
                        this.sliderPercentage = t, 0 == t && (t = .01);
                        var e = this.percentToMm(t);
                        this.resizedImage.width(this.mmToPx(e) + "px"), this.sizeInMmWidth.val(e)
                    },
                    onSmaller: function() {
                        return this.slideToPercent(this.sliderPercentage - 10), !1
                    },
                    onLarger: function() {
                        return this.slideToPercent(this.sliderPercentage + 10), !1
                    },
                    buildHtml: function(t, e, i, o, r, s) {
                        var a = n('<div class="logo-size-preview-container col-md-offset-4"><div class="logo-size-preview"><div class="organisation-signature"><img class="resized-image" src="' + i + '" alt="Resized Image" /><img class="signer" src="/image-resize-signer.gif" alt="Signature" /></div></div></div>'),
                            l = n('<div class="logo-size-slider flex flex-wrap items-center"><button type="button" class="button slider-btn smaller js-image-resize-smaller" aria-label="smaller"><span class="slider-btn-icon" aria-hidden="true"></span></button><div class="slider"><div class="slide"></div></div><button type="button" class="button slider-btn larger js-image-resize-larger" aria-label="larger"><span class="slider-btn-icon" aria-hidden="true"></span></button></div>'),
                            u = n('<div class="logo-size-tools clear-left md:clear-none mb-400">'),
                            c = n('<div class="flex flex-wrap justify-between items-center">');
                        u.append(c), c.append(l), c.append(e), t.append(u), t.append(a)
                    }
                }, window.ImageResizeTool = o
            },
            983: function(t, e, i) {
                var n = i(692);
                window.SelectionToggler = function(t, e, i) {
                    t = n(t), e = n(e), i = n(i), t[0].checked = !1, e.each((function() {
                        this.checked = !1
                    })), i.attr("disabled", !0).addClass("disabled"), e.length && (t.on("click", (function() {
                        var t = this.checked;
                        i.attr("disabled", !t).toggleClass("disabled"), e.each((function() {
                            this.checked = t
                        }))
                    })), e.on("click", (function() {
                        var n = !1,
                            o = !0;
                        e.each((function() {
                            this.checked ? n = !0 : o = !1
                        })), n ? i.attr("disabled", !1).removeClass("disabled") : i.attr("disabled", !0).addClass("disabled"), t[0].checked = !!o
                    })))
                }
            },
            739: function(t, e, i) {
                var n = i(692);
                if (void 0 === n) throw new Error("Bootstrap's JavaScript requires jQuery");
                ! function(t) {
                    "use strict";
                    var e = t.fn.jquery.split(" ")[0].split(".");
                    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
                }(n),
                function(t) {
                    "use strict";
                    t.fn.emulateTransitionEnd = function(e) {
                        var i = !1,
                            n = this;
                        return t(this).one("bsTransitionEnd", (function() {
                            i = !0
                        })), setTimeout((function() {
                            i || t(n).trigger(t.support.transition.end)
                        }), e), this
                    }, t((function() {
                        t.support.transition = function() {
                            var t = document.createElement("bootstrap"),
                                e = {
                                    WebkitTransition: "webkitTransitionEnd",
                                    MozTransition: "transitionend",
                                    OTransition: "oTransitionEnd otransitionend",
                                    transition: "transitionend"
                                };
                            for (var i in e)
                                if (void 0 !== t.style[i]) return {
                                    end: e[i]
                                };
                            return !1
                        }(), t.support.transition && (t.event.special.bsTransitionEnd = {
                            bindType: t.support.transition.end,
                            delegateType: t.support.transition.end,
                            handle: function(e) {
                                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                            }
                        })
                    }))
                }(n),
                function(t) {
                    "use strict";
                    var e = '[data-dismiss="alert"]',
                        i = function(i) {
                            t(i).on("click", e, this.close)
                        };
                    i.VERSION = "3.4.1", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
                        var n = t(this),
                            o = n.attr("data-target");
                        o || (o = (o = n.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, "")), o = "#" === o ? [] : o;
                        var r = t(document).find(o);

                        function s() {
                            r.detach().trigger("closed.bs.alert").remove()
                        }
                        e && e.preventDefault(), r.length || (r = n.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s())
                    };
                    var n = t.fn.alert;
                    t.fn.alert = function(e) {
                        return this.each((function() {
                            var n = t(this),
                                o = n.data("bs.alert");
                            o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
                        }))
                    }, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
                        return t.fn.alert = n, this
                    }, t(document).on("click.bs.alert.data-api", e, i.prototype.close)
                }(n),
                function(t) {
                    "use strict";
                    var e = function(i, n) {
                        this.$element = t(i), this.options = t.extend({}, e.DEFAULTS, n), this.isLoading = !1
                    };

                    function i(i) {
                        return this.each((function() {
                            var n = t(this),
                                o = n.data("bs.button"),
                                r = "object" == typeof i && i;
                            o || n.data("bs.button", o = new e(this, r)), "toggle" == i ? o.toggle() : i && o.setState(i)
                        }))
                    }
                    e.VERSION = "3.4.1", e.DEFAULTS = {
                        loadingText: "loading..."
                    }, e.prototype.setState = function(e) {
                        var i = "disabled",
                            n = this.$element,
                            o = n.is("input") ? "val" : "html",
                            r = n.data();
                        e += "Text", null == r.resetText && n.data("resetText", n[o]()), setTimeout(t.proxy((function() {
                            n[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i).prop(i, !1))
                        }), this), 0)
                    }, e.prototype.toggle = function() {
                        var t = !0,
                            e = this.$element.closest('[data-toggle="buttons"]');
                        if (e.length) {
                            var i = this.$element.find("input");
                            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
                        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
                    };
                    var n = t.fn.button;
                    t.fn.button = i, t.fn.button.Constructor = e, t.fn.button.noConflict = function() {
                        return t.fn.button = n, this
                    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function(e) {
                        var n = t(e.target).closest(".btn");
                        i.call(n, "toggle"), t(e.target).is('input[type="radio"], input[type="checkbox"]') || (e.preventDefault(), n.is("input,button") ? n.trigger("focus") : n.find("input:visible,button:visible").first().trigger("focus"))
                    })).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function(e) {
                        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
                    }))
                }(n),
                function(t) {
                    "use strict";
                    var e = function(e, i) {
                        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
                    };

                    function i(i) {
                        return this.each((function() {
                            var n = t(this),
                                o = n.data("bs.carousel"),
                                r = t.extend({}, e.DEFAULTS, n.data(), "object" == typeof i && i),
                                s = "string" == typeof i ? i : r.slide;
                            o || n.data("bs.carousel", o = new e(this, r)), "number" == typeof i ? o.to(i) : s ? o[s]() : r.interval && o.pause().cycle()
                        }))
                    }
                    e.VERSION = "3.4.1", e.TRANSITION_DURATION = 600, e.DEFAULTS = {
                        interval: 5e3,
                        pause: "hover",
                        wrap: !0,
                        keyboard: !0
                    }, e.prototype.keydown = function(t) {
                        if (!/input|textarea/i.test(t.target.tagName)) {
                            switch (t.which) {
                                case 37:
                                    this.prev();
                                    break;
                                case 39:
                                    this.next();
                                    break;
                                default:
                                    return
                            }
                            t.preventDefault()
                        }
                    }, e.prototype.cycle = function(e) {
                        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
                    }, e.prototype.getItemIndex = function(t) {
                        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
                    }, e.prototype.getItemForDirection = function(t, e) {
                        var i = this.getItemIndex(e);
                        if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
                        var n = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
                        return this.$items.eq(n)
                    }, e.prototype.to = function(t) {
                        var e = this,
                            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
                        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", (function() {
                            e.to(t)
                        })) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
                    }, e.prototype.pause = function(e) {
                        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
                    }, e.prototype.next = function() {
                        if (!this.sliding) return this.slide("next")
                    }, e.prototype.prev = function() {
                        if (!this.sliding) return this.slide("prev")
                    }, e.prototype.slide = function(i, n) {
                        var o = this.$element.find(".item.active"),
                            r = n || this.getItemForDirection(i, o),
                            s = this.interval,
                            a = "next" == i ? "left" : "right",
                            l = this;
                        if (r.hasClass("active")) return this.sliding = !1;
                        var u = r[0],
                            c = t.Event("slide.bs.carousel", {
                                relatedTarget: u,
                                direction: a
                            });
                        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                                this.$indicators.find(".active").removeClass("active");
                                var d = t(this.$indicators.children()[this.getItemIndex(r)]);
                                d && d.addClass("active")
                            }
                            var h = t.Event("slid.bs.carousel", {
                                relatedTarget: u,
                                direction: a
                            });
                            return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(i), "object" == typeof r && r.length && r[0].offsetWidth, o.addClass(a), r.addClass(a), o.one("bsTransitionEnd", (function() {
                                r.removeClass([i, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout((function() {
                                    l.$element.trigger(h)
                                }), 0)
                            })).emulateTransitionEnd(e.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(h)), s && this.cycle(), this
                        }
                    };
                    var n = t.fn.carousel;
                    t.fn.carousel = i, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function() {
                        return t.fn.carousel = n, this
                    };
                    var o = function(e) {
                        var n = t(this),
                            o = n.attr("href");
                        o && (o = o.replace(/.*(?=#[^\s]+$)/, ""));
                        var r = n.attr("data-target") || o,
                            s = t(document).find(r);
                        if (s.hasClass("carousel")) {
                            var a = t.extend({}, s.data(), n.data()),
                                l = n.attr("data-slide-to");
                            l && (a.interval = !1), i.call(s, a), l && s.data("bs.carousel").to(l), e.preventDefault()
                        }
                    };
                    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", (function() {
                        t('[data-ride="carousel"]').each((function() {
                            var e = t(this);
                            i.call(e, e.data())
                        }))
                    }))
                }(n),
                function(t) {
                    "use strict";
                    var e = function(i, n) {
                        this.$element = t(i), this.options = t.extend({}, e.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
                    };

                    function i(e) {
                        var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
                        return t(document).find(n)
                    }

                    function n(i) {
                        return this.each((function() {
                            var n = t(this),
                                o = n.data("bs.collapse"),
                                r = t.extend({}, e.DEFAULTS, n.data(), "object" == typeof i && i);
                            !o && r.toggle && /show|hide/.test(i) && (r.toggle = !1), o || n.data("bs.collapse", o = new e(this, r)), "string" == typeof i && o[i]()
                        }))
                    }
                    e.VERSION = "3.4.1", e.TRANSITION_DURATION = 350, e.DEFAULTS = {
                        toggle: !0
                    }, e.prototype.dimension = function() {
                        return this.$element.hasClass("width") ? "width" : "height"
                    }, e.prototype.show = function() {
                        if (!this.transitioning && !this.$element.hasClass("in")) {
                            var i, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                            if (!(o && o.length && (i = o.data("bs.collapse")) && i.transitioning)) {
                                var r = t.Event("show.bs.collapse");
                                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                                    o && o.length && (n.call(o, "hide"), i || o.data("bs.collapse", null));
                                    var s = this.dimension();
                                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                                    var a = function() {
                                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                                    };
                                    if (!t.support.transition) return a.call(this);
                                    var l = t.camelCase(["scroll", s].join("-"));
                                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(e.TRANSITION_DURATION)[s](this.$element[0][l])
                                }
                            }
                        }
                    }, e.prototype.hide = function() {
                        if (!this.transitioning && this.$element.hasClass("in")) {
                            var i = t.Event("hide.bs.collapse");
                            if (this.$element.trigger(i), !i.isDefaultPrevented()) {
                                var n = this.dimension();
                                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                                var o = function() {
                                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                                };
                                if (!t.support.transition) return o.call(this);
                                this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(e.TRANSITION_DURATION)
                            }
                        }
                    }, e.prototype.toggle = function() {
                        this[this.$element.hasClass("in") ? "hide" : "show"]()
                    }, e.prototype.getParent = function() {
                        return t(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy((function(e, n) {
                            var o = t(n);
                            this.addAriaAndCollapsedClass(i(o), o)
                        }), this)).end()
                    }, e.prototype.addAriaAndCollapsedClass = function(t, e) {
                        var i = t.hasClass("in");
                        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
                    };
                    var o = t.fn.collapse;
                    t.fn.collapse = n, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function() {
                        return t.fn.collapse = o, this
                    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function(e) {
                        var o = t(this);
                        o.attr("data-target") || e.preventDefault();
                        var r = i(o),
                            s = r.data("bs.collapse") ? "toggle" : o.data();
                        n.call(r, s)
                    }))
                }(n),
                function(t) {
                    "use strict";
                    var e = '[data-toggle="dropdown"]',
                        i = function(e) {
                            t(e).on("click.bs.dropdown", this.toggle)
                        };

                    function n(e) {
                        var i = e.attr("data-target");
                        i || (i = (i = e.attr("href")) && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
                        var n = "#" !== i ? t(document).find(i) : null;
                        return n && n.length ? n : e.parent()
                    }

                    function o(i) {
                        i && 3 === i.which || (t(".dropdown-backdrop").remove(), t(e).each((function() {
                            var e = t(this),
                                o = n(e),
                                r = {
                                    relatedTarget: this
                                };
                            o.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(o[0], i.target) || (o.trigger(i = t.Event("hide.bs.dropdown", r)), i.isDefaultPrevented() || (e.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
                        })))
                    }
                    i.VERSION = "3.4.1", i.prototype.toggle = function(e) {
                        var i = t(this);
                        if (!i.is(".disabled, :disabled")) {
                            var r = n(i),
                                s = r.hasClass("open");
                            if (o(), !s) {
                                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", o);
                                var a = {
                                    relatedTarget: this
                                };
                                if (r.trigger(e = t.Event("show.bs.dropdown", a)), e.isDefaultPrevented()) return;
                                i.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
                            }
                            return !1
                        }
                    }, i.prototype.keydown = function(i) {
                        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
                            var o = t(this);
                            if (i.preventDefault(), i.stopPropagation(), !o.is(".disabled, :disabled")) {
                                var r = n(o),
                                    s = r.hasClass("open");
                                if (!s && 27 != i.which || s && 27 == i.which) return 27 == i.which && r.find(e).trigger("focus"), o.trigger("click");
                                var a = r.find(".dropdown-menu li:not(.disabled):visible a");
                                if (a.length) {
                                    var l = a.index(i.target);
                                    38 == i.which && l > 0 && l--, 40 == i.which && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).trigger("focus")
                                }
                            }
                        }
                    };
                    var r = t.fn.dropdown;
                    t.fn.dropdown = function(e) {
                        return this.each((function() {
                            var n = t(this),
                                o = n.data("bs.dropdown");
                            o || n.data("bs.dropdown", o = new i(this)), "string" == typeof e && o[e].call(n)
                        }))
                    }, t.fn.dropdown.Constructor = i, t.fn.dropdown.noConflict = function() {
                        return t.fn.dropdown = r, this
                    }, t(document).on("click.bs.dropdown.data-api", o).on("click.bs.dropdown.data-api", ".dropdown form", (function(t) {
                        t.stopPropagation()
                    })).on("click.bs.dropdown.data-api", e, i.prototype.toggle).on("keydown.bs.dropdown.data-api", e, i.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", i.prototype.keydown)
                }(n),
                function(t) {
                    "use strict";
                    var e = function(e, i) {
                        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom", this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy((function() {
                            this.$element.trigger("loaded.bs.modal")
                        }), this))
                    };

                    function i(i, n) {
                        return this.each((function() {
                            var o = t(this),
                                r = o.data("bs.modal"),
                                s = t.extend({}, e.DEFAULTS, o.data(), "object" == typeof i && i);
                            r || o.data("bs.modal", r = new e(this, s)), "string" == typeof i ? r[i](n) : s.show && r.show(n)
                        }))
                    }
                    e.VERSION = "3.4.1", e.TRANSITION_DURATION = 300, e.BACKDROP_TRANSITION_DURATION = 150, e.DEFAULTS = {
                        backdrop: !0,
                        keyboard: !0,
                        show: !0
                    }, e.prototype.toggle = function(t) {
                        return this.isShown ? this.hide() : this.show(t)
                    }, e.prototype.show = function(i) {
                        var n = this,
                            o = t.Event("show.bs.modal", {
                                relatedTarget: i
                            });
                        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", (function() {
                            n.$element.one("mouseup.dismiss.bs.modal", (function(e) {
                                t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
                            }))
                        })), this.backdrop((function() {
                            var o = t.support.transition && n.$element.hasClass("fade");
                            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), o && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
                            var r = t.Event("shown.bs.modal", {
                                relatedTarget: i
                            });
                            o ? n.$dialog.one("bsTransitionEnd", (function() {
                                n.$element.trigger("focus").trigger(r)
                            })).emulateTransitionEnd(e.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(r)
                        })))
                    }, e.prototype.hide = function(i) {
                        i && i.preventDefault(), i = t.Event("hide.bs.modal"), this.$element.trigger(i), this.isShown && !i.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : this.hideModal())
                    }, e.prototype.enforceFocus = function() {
                        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy((function(t) {
                            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
                        }), this))
                    }, e.prototype.escape = function() {
                        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy((function(t) {
                            27 == t.which && this.hide()
                        }), this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
                    }, e.prototype.resize = function() {
                        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
                    }, e.prototype.hideModal = function() {
                        var t = this;
                        this.$element.hide(), this.backdrop((function() {
                            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
                        }))
                    }, e.prototype.removeBackdrop = function() {
                        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
                    }, e.prototype.backdrop = function(i) {
                        var n = this,
                            o = this.$element.hasClass("fade") ? "fade" : "";
                        if (this.isShown && this.options.backdrop) {
                            var r = t.support.transition && o;
                            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy((function(t) {
                                    this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                                }), this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !i) return;
                            r ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : i()
                        } else if (!this.isShown && this.$backdrop) {
                            this.$backdrop.removeClass("in");
                            var s = function() {
                                n.removeBackdrop(), i && i()
                            };
                            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : s()
                        } else i && i()
                    }, e.prototype.handleUpdate = function() {
                        this.adjustDialog()
                    }, e.prototype.adjustDialog = function() {
                        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                        this.$element.css({
                            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
                        })
                    }, e.prototype.resetAdjustments = function() {
                        this.$element.css({
                            paddingLeft: "",
                            paddingRight: ""
                        })
                    }, e.prototype.checkScrollbar = function() {
                        var t = window.innerWidth;
                        if (!t) {
                            var e = document.documentElement.getBoundingClientRect();
                            t = e.right - Math.abs(e.left)
                        }
                        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
                    }, e.prototype.setScrollbar = function() {
                        var e = parseInt(this.$body.css("padding-right") || 0, 10);
                        this.originalBodyPad = document.body.style.paddingRight || "";
                        var i = this.scrollbarWidth;
                        this.bodyIsOverflowing && (this.$body.css("padding-right", e + i), t(this.fixedContent).each((function(e, n) {
                            var o = n.style.paddingRight,
                                r = t(n).css("padding-right");
                            t(n).data("padding-right", o).css("padding-right", parseFloat(r) + i + "px")
                        })))
                    }, e.prototype.resetScrollbar = function() {
                        this.$body.css("padding-right", this.originalBodyPad), t(this.fixedContent).each((function(e, i) {
                            var n = t(i).data("padding-right");
                            t(i).removeData("padding-right"), i.style.paddingRight = n || ""
                        }))
                    }, e.prototype.measureScrollbar = function() {
                        var t = document.createElement("div");
                        t.className = "modal-scrollbar-measure", this.$body.append(t);
                        var e = t.offsetWidth - t.clientWidth;
                        return this.$body[0].removeChild(t), e
                    };
                    var n = t.fn.modal;
                    t.fn.modal = i, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function() {
                        return t.fn.modal = n, this
                    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function(e) {
                        var n = t(this),
                            o = n.attr("href"),
                            r = n.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, ""),
                            s = t(document).find(r),
                            a = s.data("bs.modal") ? "toggle" : t.extend({
                                remote: !/#/.test(o) && o
                            }, s.data(), n.data());
                        n.is("a") && e.preventDefault(), s.one("show.bs.modal", (function(t) {
                            t.isDefaultPrevented() || s.one("hidden.bs.modal", (function() {
                                n.is(":visible") && n.trigger("focus")
                            }))
                        })), i.call(s, a, this)
                    }))
                }(n),
                function(t) {
                    "use strict";
                    var e = ["sanitize", "whiteList", "sanitizeFn"],
                        i = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
                        n = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
                        o = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

                    function r(e, r) {
                        var s = e.nodeName.toLowerCase();
                        if (-1 !== t.inArray(s, r)) return -1 === t.inArray(s, i) || Boolean(e.nodeValue.match(n) || e.nodeValue.match(o));
                        for (var a = t(r).filter((function(t, e) {
                                return e instanceof RegExp
                            })), l = 0, u = a.length; l < u; l++)
                            if (s.match(a[l])) return !0;
                        return !1
                    }

                    function s(e, i, n) {
                        if (0 === e.length) return e;
                        if (n && "function" == typeof n) return n(e);
                        if (!document.implementation || !document.implementation.createHTMLDocument) return e;
                        var o = document.implementation.createHTMLDocument("sanitization");
                        o.body.innerHTML = e;
                        for (var s = t.map(i, (function(t, e) {
                                return e
                            })), a = t(o.body).find("*"), l = 0, u = a.length; l < u; l++) {
                            var c = a[l],
                                d = c.nodeName.toLowerCase();
                            if (-1 !== t.inArray(d, s))
                                for (var h = t.map(c.attributes, (function(t) {
                                        return t
                                    })), f = [].concat(i["*"] || [], i[d] || []), p = 0, g = h.length; p < g; p++) r(h[p], f) || c.removeAttribute(h[p].nodeName);
                            else c.parentNode.removeChild(c)
                        }
                        return o.body.innerHTML
                    }
                    var a = function(t, e) {
                        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
                    };
                    a.VERSION = "3.4.1", a.TRANSITION_DURATION = 150, a.DEFAULTS = {
                        animation: !0,
                        placement: "top",
                        selector: !1,
                        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                        trigger: "hover focus",
                        title: "",
                        delay: 0,
                        html: !1,
                        container: !1,
                        viewport: {
                            selector: "body",
                            padding: 0
                        },
                        sanitize: !0,
                        sanitizeFn: null,
                        whiteList: {
                            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                            a: ["target", "href", "title", "rel"],
                            area: [],
                            b: [],
                            br: [],
                            col: [],
                            code: [],
                            div: [],
                            em: [],
                            hr: [],
                            h1: [],
                            h2: [],
                            h3: [],
                            h4: [],
                            h5: [],
                            h6: [],
                            i: [],
                            img: ["src", "alt", "title", "width", "height"],
                            li: [],
                            ol: [],
                            p: [],
                            pre: [],
                            s: [],
                            small: [],
                            span: [],
                            sub: [],
                            sup: [],
                            strong: [],
                            u: [],
                            ul: []
                        }
                    }, a.prototype.init = function(e, i, n) {
                        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(document).find(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                                click: !1,
                                hover: !1,
                                focus: !1
                            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
                            var s = o[r];
                            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                            else if ("manual" != s) {
                                var a = "hover" == s ? "mouseenter" : "focusin",
                                    l = "hover" == s ? "mouseleave" : "focusout";
                                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                            }
                        }
                        this.options.selector ? this._options = t.extend({}, this.options, {
                            trigger: "manual",
                            selector: ""
                        }) : this.fixTitle()
                    }, a.prototype.getDefaults = function() {
                        return a.DEFAULTS
                    }, a.prototype.getOptions = function(i) {
                        var n = this.$element.data();
                        for (var o in n) n.hasOwnProperty(o) && -1 !== t.inArray(o, e) && delete n[o];
                        return (i = t.extend({}, this.getDefaults(), n, i)).delay && "number" == typeof i.delay && (i.delay = {
                            show: i.delay,
                            hide: i.delay
                        }), i.sanitize && (i.template = s(i.template, i.whiteList, i.sanitizeFn)), i
                    }, a.prototype.getDelegateOptions = function() {
                        var e = {},
                            i = this.getDefaults();
                        return this._options && t.each(this._options, (function(t, n) {
                            i[t] != n && (e[t] = n)
                        })), e
                    }, a.prototype.enter = function(e) {
                        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                        if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState) i.hoverState = "in";
                        else {
                            if (clearTimeout(i.timeout), i.hoverState = "in", !i.options.delay || !i.options.delay.show) return i.show();
                            i.timeout = setTimeout((function() {
                                "in" == i.hoverState && i.show()
                            }), i.options.delay.show)
                        }
                    }, a.prototype.isInStateTrue = function() {
                        for (var t in this.inState)
                            if (this.inState[t]) return !0;
                        return !1
                    }, a.prototype.leave = function(e) {
                        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                        if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) {
                            if (clearTimeout(i.timeout), i.hoverState = "out", !i.options.delay || !i.options.delay.hide) return i.hide();
                            i.timeout = setTimeout((function() {
                                "out" == i.hoverState && i.hide()
                            }), i.options.delay.hide)
                        }
                    }, a.prototype.show = function() {
                        var e = t.Event("show.bs." + this.type);
                        if (this.hasContent() && this.enabled) {
                            this.$element.trigger(e);
                            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                            if (e.isDefaultPrevented() || !i) return;
                            var n = this,
                                o = this.tip(),
                                r = this.getUID(this.type);
                            this.setContent(), o.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && o.addClass("fade");
                            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                                l = /\s?auto?\s?/i,
                                u = l.test(s);
                            u && (s = s.replace(l, "") || "top"), o.detach().css({
                                top: 0,
                                left: 0,
                                display: "block"
                            }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(t(document).find(this.options.container)) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                            var c = this.getPosition(),
                                d = o[0].offsetWidth,
                                h = o[0].offsetHeight;
                            if (u) {
                                var f = s,
                                    p = this.getPosition(this.$viewport);
                                s = "bottom" == s && c.bottom + h > p.bottom ? "top" : "top" == s && c.top - h < p.top ? "bottom" : "right" == s && c.right + d > p.width ? "left" : "left" == s && c.left - d < p.left ? "right" : s, o.removeClass(f).addClass(s)
                            }
                            var g = this.getCalculatedOffset(s, c, d, h);
                            this.applyPlacement(g, s);
                            var m = function() {
                                var t = n.hoverState;
                                n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
                            };
                            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(a.TRANSITION_DURATION) : m()
                        }
                    }, a.prototype.applyPlacement = function(e, i) {
                        var n = this.tip(),
                            o = n[0].offsetWidth,
                            r = n[0].offsetHeight,
                            s = parseInt(n.css("margin-top"), 10),
                            a = parseInt(n.css("margin-left"), 10);
                        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(n[0], t.extend({
                            using: function(t) {
                                n.css({
                                    top: Math.round(t.top),
                                    left: Math.round(t.left)
                                })
                            }
                        }, e), 0), n.addClass("in");
                        var l = n[0].offsetWidth,
                            u = n[0].offsetHeight;
                        "top" == i && u != r && (e.top = e.top + r - u);
                        var c = this.getViewportAdjustedDelta(i, e, l, u);
                        c.left ? e.left += c.left : e.top += c.top;
                        var d = /top|bottom/.test(i),
                            h = d ? 2 * c.left - o + l : 2 * c.top - r + u,
                            f = d ? "offsetWidth" : "offsetHeight";
                        n.offset(e), this.replaceArrow(h, n[0][f], d)
                    }, a.prototype.replaceArrow = function(t, e, i) {
                        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
                    }, a.prototype.setContent = function() {
                        var t = this.tip(),
                            e = this.getTitle();
                        this.options.html ? (this.options.sanitize && (e = s(e, this.options.whiteList, this.options.sanitizeFn)), t.find(".tooltip-inner").html(e)) : t.find(".tooltip-inner").text(e), t.removeClass("fade in top bottom left right")
                    }, a.prototype.hide = function(e) {
                        var i = this,
                            n = t(this.$tip),
                            o = t.Event("hide.bs." + this.type);

                        function r() {
                            "in" != i.hoverState && n.detach(), i.$element && i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), e && e()
                        }
                        if (this.$element.trigger(o), !o.isDefaultPrevented()) return n.removeClass("in"), t.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", r).emulateTransitionEnd(a.TRANSITION_DURATION) : r(), this.hoverState = null, this
                    }, a.prototype.fixTitle = function() {
                        var t = this.$element;
                        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
                    }, a.prototype.hasContent = function() {
                        return this.getTitle()
                    }, a.prototype.getPosition = function(e) {
                        var i = (e = e || this.$element)[0],
                            n = "BODY" == i.tagName,
                            o = i.getBoundingClientRect();
                        null == o.width && (o = t.extend({}, o, {
                            width: o.right - o.left,
                            height: o.bottom - o.top
                        }));
                        var r = window.SVGElement && i instanceof window.SVGElement,
                            s = n ? {
                                top: 0,
                                left: 0
                            } : r ? null : e.offset(),
                            a = {
                                scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
                            },
                            l = n ? {
                                width: t(window).width(),
                                height: t(window).height()
                            } : null;
                        return t.extend({}, o, a, l, s)
                    }, a.prototype.getCalculatedOffset = function(t, e, i, n) {
                        return "bottom" == t ? {
                            top: e.top + e.height,
                            left: e.left + e.width / 2 - i / 2
                        } : "top" == t ? {
                            top: e.top - n,
                            left: e.left + e.width / 2 - i / 2
                        } : "left" == t ? {
                            top: e.top + e.height / 2 - n / 2,
                            left: e.left - i
                        } : {
                            top: e.top + e.height / 2 - n / 2,
                            left: e.left + e.width
                        }
                    }, a.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
                        var o = {
                            top: 0,
                            left: 0
                        };
                        if (!this.$viewport) return o;
                        var r = this.options.viewport && this.options.viewport.padding || 0,
                            s = this.getPosition(this.$viewport);
                        if (/right|left/.test(t)) {
                            var a = e.top - r - s.scroll,
                                l = e.top + r - s.scroll + n;
                            a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
                        } else {
                            var u = e.left - r,
                                c = e.left + r + i;
                            u < s.left ? o.left = s.left - u : c > s.right && (o.left = s.left + s.width - c)
                        }
                        return o
                    }, a.prototype.getTitle = function() {
                        var t = this.$element,
                            e = this.options;
                        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
                    }, a.prototype.getUID = function(t) {
                        do {
                            t += ~~(1e6 * Math.random())
                        } while (document.getElementById(t));
                        return t
                    }, a.prototype.tip = function() {
                        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
                        return this.$tip
                    }, a.prototype.arrow = function() {
                        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
                    }, a.prototype.enable = function() {
                        this.enabled = !0
                    }, a.prototype.disable = function() {
                        this.enabled = !1
                    }, a.prototype.toggleEnabled = function() {
                        this.enabled = !this.enabled
                    }, a.prototype.toggle = function(e) {
                        var i = this;
                        e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
                    }, a.prototype.destroy = function() {
                        var t = this;
                        clearTimeout(this.timeout), this.hide((function() {
                            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
                        }))
                    }, a.prototype.sanitizeHtml = function(t) {
                        return s(t, this.options.whiteList, this.options.sanitizeFn)
                    };
                    var l = t.fn.tooltip;
                    t.fn.tooltip = function(e) {
                        return this.each((function() {
                            var i = t(this),
                                n = i.data("bs.tooltip"),
                                o = "object" == typeof e && e;
                            !n && /destroy|hide/.test(e) || (n || i.data("bs.tooltip", n = new a(this, o)), "string" == typeof e && n[e]())
                        }))
                    }, t.fn.tooltip.Constructor = a, t.fn.tooltip.noConflict = function() {
                        return t.fn.tooltip = l, this
                    }
                }(n),
                function(t) {
                    "use strict";
                    var e = function(t, e) {
                        this.init("popover", t, e)
                    };
                    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
                    e.VERSION = "3.4.1", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
                        placement: "right",
                        trigger: "click",
                        content: "",
                        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
                    }), (e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)).constructor = e, e.prototype.getDefaults = function() {
                        return e.DEFAULTS
                    }, e.prototype.setContent = function() {
                        var t = this.tip(),
                            e = this.getTitle(),
                            i = this.getContent();
                        if (this.options.html) {
                            var n = typeof i;
                            this.options.sanitize && (e = this.sanitizeHtml(e), "string" === n && (i = this.sanitizeHtml(i))), t.find(".popover-title").html(e), t.find(".popover-content").children().detach().end()["string" === n ? "html" : "append"](i)
                        } else t.find(".popover-title").text(e), t.find(".popover-content").children().detach().end().text(i);
                        t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
                    }, e.prototype.hasContent = function() {
                        return this.getTitle() || this.getContent()
                    }, e.prototype.getContent = function() {
                        var t = this.$element,
                            e = this.options;
                        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
                    }, e.prototype.arrow = function() {
                        return this.$arrow = this.$arrow || this.tip().find(".arrow")
                    };
                    var i = t.fn.popover;
                    t.fn.popover = function(i) {
                        return this.each((function() {
                            var n = t(this),
                                o = n.data("bs.popover"),
                                r = "object" == typeof i && i;
                            !o && /destroy|hide/.test(i) || (o || n.data("bs.popover", o = new e(this, r)), "string" == typeof i && o[i]())
                        }))
                    }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
                        return t.fn.popover = i, this
                    }
                }(n),
                function(t) {
                    "use strict";

                    function e(i, n) {
                        this.$body = t(document.body), this.$scrollElement = t(i).is(document.body) ? t(window) : t(i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
                    }

                    function i(i) {
                        return this.each((function() {
                            var n = t(this),
                                o = n.data("bs.scrollspy"),
                                r = "object" == typeof i && i;
                            o || n.data("bs.scrollspy", o = new e(this, r)), "string" == typeof i && o[i]()
                        }))
                    }
                    e.VERSION = "3.4.1", e.DEFAULTS = {
                        offset: 10
                    }, e.prototype.getScrollHeight = function() {
                        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
                    }, e.prototype.refresh = function() {
                        var e = this,
                            i = "offset",
                            n = 0;
                        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map((function() {
                            var e = t(this),
                                o = e.data("target") || e.attr("href"),
                                r = /^#./.test(o) && t(o);
                            return r && r.length && r.is(":visible") && [
                                [r[i]().top + n, o]
                            ] || null
                        })).sort((function(t, e) {
                            return t[0] - e[0]
                        })).each((function() {
                            e.offsets.push(this[0]), e.targets.push(this[1])
                        }))
                    }, e.prototype.process = function() {
                        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                            i = this.getScrollHeight(),
                            n = this.options.offset + i - this.$scrollElement.height(),
                            o = this.offsets,
                            r = this.targets,
                            s = this.activeTarget;
                        if (this.scrollHeight != i && this.refresh(), e >= n) return s != (t = r[r.length - 1]) && this.activate(t);
                        if (s && e < o[0]) return this.activeTarget = null, this.clear();
                        for (t = o.length; t--;) s != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
                    }, e.prototype.activate = function(e) {
                        this.activeTarget = e, this.clear();
                        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                            n = t(i).parents("li").addClass("active");
                        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
                    }, e.prototype.clear = function() {
                        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
                    };
                    var n = t.fn.scrollspy;
                    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
                        return t.fn.scrollspy = n, this
                    }, t(window).on("load.bs.scrollspy.data-api", (function() {
                        t('[data-spy="scroll"]').each((function() {
                            var e = t(this);
                            i.call(e, e.data())
                        }))
                    }))
                }(n),
                function(t) {
                    "use strict";
                    var e = function(e) {
                        this.element = t(e)
                    };

                    function i(i) {
                        return this.each((function() {
                            var n = t(this),
                                o = n.data("bs.tab");
                            o || n.data("bs.tab", o = new e(this)), "string" == typeof i && o[i]()
                        }))
                    }
                    e.VERSION = "3.4.1", e.TRANSITION_DURATION = 150, e.prototype.show = function() {
                        var e = this.element,
                            i = e.closest("ul:not(.dropdown-menu)"),
                            n = e.data("target");
                        if (n || (n = (n = e.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                            var o = i.find(".active:last a"),
                                r = t.Event("hide.bs.tab", {
                                    relatedTarget: e[0]
                                }),
                                s = t.Event("show.bs.tab", {
                                    relatedTarget: o[0]
                                });
                            if (o.trigger(r), e.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                                var a = t(document).find(n);
                                this.activate(e.closest("li"), i), this.activate(a, a.parent(), (function() {
                                    o.trigger({
                                        type: "hidden.bs.tab",
                                        relatedTarget: e[0]
                                    }), e.trigger({
                                        type: "shown.bs.tab",
                                        relatedTarget: o[0]
                                    })
                                }))
                            }
                        }
                    }, e.prototype.activate = function(i, n, o) {
                        var r = n.find("> .active"),
                            s = o && t.support.transition && (r.length && r.hasClass("fade") || !!n.find("> .fade").length);

                        function a() {
                            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade"), i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
                        }
                        r.length && s ? r.one("bsTransitionEnd", a).emulateTransitionEnd(e.TRANSITION_DURATION) : a(), r.removeClass("in")
                    };
                    var n = t.fn.tab;
                    t.fn.tab = i, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function() {
                        return t.fn.tab = n, this
                    };
                    var o = function(e) {
                        e.preventDefault(), i.call(t(this), "show")
                    };
                    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
                }(n),
                function(t) {
                    "use strict";
                    var e = function(i, n) {
                        this.options = t.extend({}, e.DEFAULTS, n);
                        var o = this.options.target === e.DEFAULTS.target ? t(this.options.target) : t(document).find(this.options.target);
                        this.$target = o.on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(i), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
                    };

                    function i(i) {
                        return this.each((function() {
                            var n = t(this),
                                o = n.data("bs.affix"),
                                r = "object" == typeof i && i;
                            o || n.data("bs.affix", o = new e(this, r)), "string" == typeof i && o[i]()
                        }))
                    }
                    e.VERSION = "3.4.1", e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {
                        offset: 0,
                        target: window
                    }, e.prototype.getState = function(t, e, i, n) {
                        var o = this.$target.scrollTop(),
                            r = this.$element.offset(),
                            s = this.$target.height();
                        if (null != i && "top" == this.affixed) return o < i && "top";
                        if ("bottom" == this.affixed) return null != i ? !(o + this.unpin <= r.top) && "bottom" : !(o + s <= t - n) && "bottom";
                        var a = null == this.affixed,
                            l = a ? o : r.top;
                        return null != i && o <= i ? "top" : null != n && l + (a ? s : e) >= t - n && "bottom"
                    }, e.prototype.getPinnedOffset = function() {
                        if (this.pinnedOffset) return this.pinnedOffset;
                        this.$element.removeClass(e.RESET).addClass("affix");
                        var t = this.$target.scrollTop(),
                            i = this.$element.offset();
                        return this.pinnedOffset = i.top - t
                    }, e.prototype.checkPositionWithEventLoop = function() {
                        setTimeout(t.proxy(this.checkPosition, this), 1)
                    }, e.prototype.checkPosition = function() {
                        if (this.$element.is(":visible")) {
                            var i = this.$element.height(),
                                n = this.options.offset,
                                o = n.top,
                                r = n.bottom,
                                s = Math.max(t(document).height(), t(document.body).height());
                            "object" != typeof n && (r = o = n), "function" == typeof o && (o = n.top(this.$element)), "function" == typeof r && (r = n.bottom(this.$element));
                            var a = this.getState(s, i, o, r);
                            if (this.affixed != a) {
                                null != this.unpin && this.$element.css("top", "");
                                var l = "affix" + (a ? "-" + a : ""),
                                    u = t.Event(l + ".bs.affix");
                                if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
                            }
                            "bottom" == a && this.$element.offset({
                                top: s - i - r
                            })
                        }
                    };
                    var n = t.fn.affix;
                    t.fn.affix = i, t.fn.affix.Constructor = e, t.fn.affix.noConflict = function() {
                        return t.fn.affix = n, this
                    }, t(window).on("load", (function() {
                        t('[data-spy="affix"]').each((function() {
                            var e = t(this),
                                n = e.data();
                            n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), i.call(e, n)
                        }))
                    }))
                }(n)
            },
            692: function(t, e) {
                var i;
                ! function(e, i) {
                    "use strict";
                    "object" == typeof t.exports ? t.exports = e.document ? i(e, !0) : function(t) {
                        if (!t.document) throw new Error("jQuery requires a window with a document");
                        return i(t)
                    } : i(e)
                }("undefined" != typeof window ? window : this, (function(n, o) {
                    "use strict";
                    var r = [],
                        s = Object.getPrototypeOf,
                        a = r.slice,
                        l = r.flat ? function(t) {
                            return r.flat.call(t)
                        } : function(t) {
                            return r.concat.apply([], t)
                        },
                        u = r.push,
                        c = r.indexOf,
                        d = {},
                        h = d.toString,
                        f = d.hasOwnProperty,
                        p = f.toString,
                        g = p.call(Object),
                        m = {},
                        v = function(t) {
                            return "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item
                        },
                        y = function(t) {
                            return null != t && t === t.window
                        },
                        b = n.document,
                        w = {
                            type: !0,
                            src: !0,
                            nonce: !0,
                            noModule: !0
                        };

                    function x(t, e, i) {
                        var n, o, r = (i = i || b).createElement("script");
                        if (r.text = t, e)
                            for (n in w)(o = e[n] || e.getAttribute && e.getAttribute(n)) && r.setAttribute(n, o);
                        i.head.appendChild(r).parentNode.removeChild(r)
                    }

                    function C(t) {
                        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? d[h.call(t)] || "object" : typeof t
                    }
                    var _ = "3.6.0",
                        k = function(t, e) {
                            return new k.fn.init(t, e)
                        };

                    function T(t) {
                        var e = !!t && "length" in t && t.length,
                            i = C(t);
                        return !v(t) && !y(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
                    }
                    k.fn = k.prototype = {
                        jquery: _,
                        constructor: k,
                        length: 0,
                        toArray: function() {
                            return a.call(this)
                        },
                        get: function(t) {
                            return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t]
                        },
                        pushStack: function(t) {
                            var e = k.merge(this.constructor(), t);
                            return e.prevObject = this, e
                        },
                        each: function(t) {
                            return k.each(this, t)
                        },
                        map: function(t) {
                            return this.pushStack(k.map(this, (function(e, i) {
                                return t.call(e, i, e)
                            })))
                        },
                        slice: function() {
                            return this.pushStack(a.apply(this, arguments))
                        },
                        first: function() {
                            return this.eq(0)
                        },
                        last: function() {
                            return this.eq(-1)
                        },
                        even: function() {
                            return this.pushStack(k.grep(this, (function(t, e) {
                                return (e + 1) % 2
                            })))
                        },
                        odd: function() {
                            return this.pushStack(k.grep(this, (function(t, e) {
                                return e % 2
                            })))
                        },
                        eq: function(t) {
                            var e = this.length,
                                i = +t + (t < 0 ? e : 0);
                            return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
                        },
                        end: function() {
                            return this.prevObject || this.constructor()
                        },
                        push: u,
                        sort: r.sort,
                        splice: r.splice
                    }, k.extend = k.fn.extend = function() {
                        var t, e, i, n, o, r, s = arguments[0] || {},
                            a = 1,
                            l = arguments.length,
                            u = !1;
                        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || v(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
                            if (null != (t = arguments[a]))
                                for (e in t) n = t[e], "__proto__" !== e && s !== n && (u && n && (k.isPlainObject(n) || (o = Array.isArray(n))) ? (i = s[e], r = o && !Array.isArray(i) ? [] : o || k.isPlainObject(i) ? i : {}, o = !1, s[e] = k.extend(u, r, n)) : void 0 !== n && (s[e] = n));
                        return s
                    }, k.extend({
                        expando: "jQuery" + (_ + Math.random()).replace(/\D/g, ""),
                        isReady: !0,
                        error: function(t) {
                            throw new Error(t)
                        },
                        noop: function() {},
                        isPlainObject: function(t) {
                            var e, i;
                            return !(!t || "[object Object]" !== h.call(t) || (e = s(t)) && ("function" != typeof(i = f.call(e, "constructor") && e.constructor) || p.call(i) !== g))
                        },
                        isEmptyObject: function(t) {
                            var e;
                            for (e in t) return !1;
                            return !0
                        },
                        globalEval: function(t, e, i) {
                            x(t, {
                                nonce: e && e.nonce
                            }, i)
                        },
                        each: function(t, e) {
                            var i, n = 0;
                            if (T(t))
                                for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
                            else
                                for (n in t)
                                    if (!1 === e.call(t[n], n, t[n])) break;
                            return t
                        },
                        makeArray: function(t, e) {
                            var i = e || [];
                            return null != t && (T(Object(t)) ? k.merge(i, "string" == typeof t ? [t] : t) : u.call(i, t)), i
                        },
                        inArray: function(t, e, i) {
                            return null == e ? -1 : c.call(e, t, i)
                        },
                        merge: function(t, e) {
                            for (var i = +e.length, n = 0, o = t.length; n < i; n++) t[o++] = e[n];
                            return t.length = o, t
                        },
                        grep: function(t, e, i) {
                            for (var n = [], o = 0, r = t.length, s = !i; o < r; o++) !e(t[o], o) !== s && n.push(t[o]);
                            return n
                        },
                        map: function(t, e, i) {
                            var n, o, r = 0,
                                s = [];
                            if (T(t))
                                for (n = t.length; r < n; r++) null != (o = e(t[r], r, i)) && s.push(o);
                            else
                                for (r in t) null != (o = e(t[r], r, i)) && s.push(o);
                            return l(s)
                        },
                        guid: 1,
                        support: m
                    }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = r[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(t, e) {
                        d["[object " + e + "]"] = e.toLowerCase()
                    }));
                    var S = function(t) {
                        var e, i, n, o, r, s, a, l, u, c, d, h, f, p, g, m, v, y, b, w = "sizzle" + 1 * new Date,
                            x = t.document,
                            C = 0,
                            _ = 0,
                            k = lt(),
                            T = lt(),
                            S = lt(),
                            E = lt(),
                            A = function(t, e) {
                                return t === e && (d = !0), 0
                            },
                            F = {}.hasOwnProperty,
                            O = [],
                            D = O.pop,
                            L = O.push,
                            I = O.push,
                            M = O.slice,
                            N = function(t, e) {
                                for (var i = 0, n = t.length; i < n; i++)
                                    if (t[i] === e) return i;
                                return -1
                            },
                            $ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                            j = "[\\x20\\t\\r\\n\\f]",
                            R = "(?:\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                            P = "\\[" + j + "*(" + R + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + j + "*\\]",
                            H = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
                            q = new RegExp(j + "+", "g"),
                            B = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
                            W = new RegExp("^" + j + "*," + j + "*"),
                            V = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
                            U = new RegExp(j + "|>"),
                            z = new RegExp(H),
                            X = new RegExp("^" + R + "$"),
                            G = {
                                ID: new RegExp("^#(" + R + ")"),
                                CLASS: new RegExp("^\\.(" + R + ")"),
                                TAG: new RegExp("^(" + R + "|[*])"),
                                ATTR: new RegExp("^" + P),
                                PSEUDO: new RegExp("^" + H),
                                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
                                bool: new RegExp("^(?:" + $ + ")$", "i"),
                                needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
                            },
                            K = /HTML$/i,
                            Y = /^(?:input|select|textarea|button)$/i,
                            Q = /^h\d$/i,
                            J = /^[^{]+\{\s*\[native \w/,
                            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            tt = /[+~]/,
                            et = new RegExp("\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\([^\\r\\n\\f])", "g"),
                            it = function(t, e) {
                                var i = "0x" + t.slice(1) - 65536;
                                return e || (i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320))
                            },
                            nt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                            ot = function(t, e) {
                                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                            },
                            rt = function() {
                                h()
                            },
                            st = wt((function(t) {
                                return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                            }), {
                                dir: "parentNode",
                                next: "legend"
                            });
                        try {
                            I.apply(O = M.call(x.childNodes), x.childNodes), O[x.childNodes.length].nodeType
                        } catch (t) {
                            I = {
                                apply: O.length ? function(t, e) {
                                    L.apply(t, M.call(e))
                                } : function(t, e) {
                                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                                    t.length = i - 1
                                }
                            }
                        }

                        function at(t, e, n, o) {
                            var r, a, u, c, d, p, v, y = e && e.ownerDocument,
                                x = e ? e.nodeType : 9;
                            if (n = n || [], "string" != typeof t || !t || 1 !== x && 9 !== x && 11 !== x) return n;
                            if (!o && (h(e), e = e || f, g)) {
                                if (11 !== x && (d = Z.exec(t)))
                                    if (r = d[1]) {
                                        if (9 === x) {
                                            if (!(u = e.getElementById(r))) return n;
                                            if (u.id === r) return n.push(u), n
                                        } else if (y && (u = y.getElementById(r)) && b(e, u) && u.id === r) return n.push(u), n
                                    } else {
                                        if (d[2]) return I.apply(n, e.getElementsByTagName(t)), n;
                                        if ((r = d[3]) && i.getElementsByClassName && e.getElementsByClassName) return I.apply(n, e.getElementsByClassName(r)), n
                                    }
                                if (i.qsa && !E[t + " "] && (!m || !m.test(t)) && (1 !== x || "object" !== e.nodeName.toLowerCase())) {
                                    if (v = t, y = e, 1 === x && (U.test(t) || V.test(t))) {
                                        for ((y = tt.test(t) && vt(e.parentNode) || e) === e && i.scope || ((c = e.getAttribute("id")) ? c = c.replace(nt, ot) : e.setAttribute("id", c = w)), a = (p = s(t)).length; a--;) p[a] = (c ? "#" + c : ":scope") + " " + bt(p[a]);
                                        v = p.join(",")
                                    }
                                    try {
                                        return I.apply(n, y.querySelectorAll(v)), n
                                    } catch (e) {
                                        E(t, !0)
                                    } finally {
                                        c === w && e.removeAttribute("id")
                                    }
                                }
                            }
                            return l(t.replace(B, "$1"), e, n, o)
                        }

                        function lt() {
                            var t = [];
                            return function e(i, o) {
                                return t.push(i + " ") > n.cacheLength && delete e[t.shift()], e[i + " "] = o
                            }
                        }

                        function ut(t) {
                            return t[w] = !0, t
                        }

                        function ct(t) {
                            var e = f.createElement("fieldset");
                            try {
                                return !!t(e)
                            } catch (t) {
                                return !1
                            } finally {
                                e.parentNode && e.parentNode.removeChild(e), e = null
                            }
                        }

                        function dt(t, e) {
                            for (var i = t.split("|"), o = i.length; o--;) n.attrHandle[i[o]] = e
                        }

                        function ht(t, e) {
                            var i = e && t,
                                n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                            if (n) return n;
                            if (i)
                                for (; i = i.nextSibling;)
                                    if (i === e) return -1;
                            return t ? 1 : -1
                        }

                        function ft(t) {
                            return function(e) {
                                return "input" === e.nodeName.toLowerCase() && e.type === t
                            }
                        }

                        function pt(t) {
                            return function(e) {
                                var i = e.nodeName.toLowerCase();
                                return ("input" === i || "button" === i) && e.type === t
                            }
                        }

                        function gt(t) {
                            return function(e) {
                                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && st(e) === t : e.disabled === t : "label" in e && e.disabled === t
                            }
                        }

                        function mt(t) {
                            return ut((function(e) {
                                return e = +e, ut((function(i, n) {
                                    for (var o, r = t([], i.length, e), s = r.length; s--;) i[o = r[s]] && (i[o] = !(n[o] = i[o]))
                                }))
                            }))
                        }

                        function vt(t) {
                            return t && void 0 !== t.getElementsByTagName && t
                        }
                        for (e in i = at.support = {}, r = at.isXML = function(t) {
                                var e = t && t.namespaceURI,
                                    i = t && (t.ownerDocument || t).documentElement;
                                return !K.test(e || i && i.nodeName || "HTML")
                            }, h = at.setDocument = function(t) {
                                var e, o, s = t ? t.ownerDocument || t : x;
                                return s != f && 9 === s.nodeType && s.documentElement ? (p = (f = s).documentElement, g = !r(f), x != f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", rt, !1) : o.attachEvent && o.attachEvent("onunload", rt)), i.scope = ct((function(t) {
                                    return p.appendChild(t).appendChild(f.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
                                })), i.attributes = ct((function(t) {
                                    return t.className = "i", !t.getAttribute("className")
                                })), i.getElementsByTagName = ct((function(t) {
                                    return t.appendChild(f.createComment("")), !t.getElementsByTagName("*").length
                                })), i.getElementsByClassName = J.test(f.getElementsByClassName), i.getById = ct((function(t) {
                                    return p.appendChild(t).id = w, !f.getElementsByName || !f.getElementsByName(w).length
                                })), i.getById ? (n.filter.ID = function(t) {
                                    var e = t.replace(et, it);
                                    return function(t) {
                                        return t.getAttribute("id") === e
                                    }
                                }, n.find.ID = function(t, e) {
                                    if (void 0 !== e.getElementById && g) {
                                        var i = e.getElementById(t);
                                        return i ? [i] : []
                                    }
                                }) : (n.filter.ID = function(t) {
                                    var e = t.replace(et, it);
                                    return function(t) {
                                        var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                        return i && i.value === e
                                    }
                                }, n.find.ID = function(t, e) {
                                    if (void 0 !== e.getElementById && g) {
                                        var i, n, o, r = e.getElementById(t);
                                        if (r) {
                                            if ((i = r.getAttributeNode("id")) && i.value === t) return [r];
                                            for (o = e.getElementsByName(t), n = 0; r = o[n++];)
                                                if ((i = r.getAttributeNode("id")) && i.value === t) return [r]
                                        }
                                        return []
                                    }
                                }), n.find.TAG = i.getElementsByTagName ? function(t, e) {
                                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
                                } : function(t, e) {
                                    var i, n = [],
                                        o = 0,
                                        r = e.getElementsByTagName(t);
                                    if ("*" === t) {
                                        for (; i = r[o++];) 1 === i.nodeType && n.push(i);
                                        return n
                                    }
                                    return r
                                }, n.find.CLASS = i.getElementsByClassName && function(t, e) {
                                    if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
                                }, v = [], m = [], (i.qsa = J.test(f.querySelectorAll)) && (ct((function(t) {
                                    var e;
                                    p.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + j + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + j + "*(?:value|" + $ + ")"), t.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), (e = f.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || m.push("\\[" + j + "*name" + j + "*=" + j + "*(?:''|\"\")"), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]"), t.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                                })), ct((function(t) {
                                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                    var e = f.createElement("input");
                                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + j + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
                                }))), (i.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ct((function(t) {
                                    i.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", H)
                                })), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = J.test(p.compareDocumentPosition), b = e || J.test(p.contains) ? function(t, e) {
                                    var i = 9 === t.nodeType ? t.documentElement : t,
                                        n = e && e.parentNode;
                                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                                } : function(t, e) {
                                    if (e)
                                        for (; e = e.parentNode;)
                                            if (e === t) return !0;
                                    return !1
                                }, A = e ? function(t, e) {
                                    if (t === e) return d = !0, 0;
                                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                    return n || (1 & (n = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === n ? t == f || t.ownerDocument == x && b(x, t) ? -1 : e == f || e.ownerDocument == x && b(x, e) ? 1 : c ? N(c, t) - N(c, e) : 0 : 4 & n ? -1 : 1)
                                } : function(t, e) {
                                    if (t === e) return d = !0, 0;
                                    var i, n = 0,
                                        o = t.parentNode,
                                        r = e.parentNode,
                                        s = [t],
                                        a = [e];
                                    if (!o || !r) return t == f ? -1 : e == f ? 1 : o ? -1 : r ? 1 : c ? N(c, t) - N(c, e) : 0;
                                    if (o === r) return ht(t, e);
                                    for (i = t; i = i.parentNode;) s.unshift(i);
                                    for (i = e; i = i.parentNode;) a.unshift(i);
                                    for (; s[n] === a[n];) n++;
                                    return n ? ht(s[n], a[n]) : s[n] == x ? -1 : a[n] == x ? 1 : 0
                                }, f) : f
                            }, at.matches = function(t, e) {
                                return at(t, null, null, e)
                            }, at.matchesSelector = function(t, e) {
                                if (h(t), i.matchesSelector && g && !E[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
                                    var n = y.call(t, e);
                                    if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                                } catch (t) {
                                    E(e, !0)
                                }
                                return at(e, f, null, [t]).length > 0
                            }, at.contains = function(t, e) {
                                return (t.ownerDocument || t) != f && h(t), b(t, e)
                            }, at.attr = function(t, e) {
                                (t.ownerDocument || t) != f && h(t);
                                var o = n.attrHandle[e.toLowerCase()],
                                    r = o && F.call(n.attrHandle, e.toLowerCase()) ? o(t, e, !g) : void 0;
                                return void 0 !== r ? r : i.attributes || !g ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                            }, at.escape = function(t) {
                                return (t + "").replace(nt, ot)
                            }, at.error = function(t) {
                                throw new Error("Syntax error, unrecognized expression: " + t)
                            }, at.uniqueSort = function(t) {
                                var e, n = [],
                                    o = 0,
                                    r = 0;
                                if (d = !i.detectDuplicates, c = !i.sortStable && t.slice(0), t.sort(A), d) {
                                    for (; e = t[r++];) e === t[r] && (o = n.push(r));
                                    for (; o--;) t.splice(n[o], 1)
                                }
                                return c = null, t
                            }, o = at.getText = function(t) {
                                var e, i = "",
                                    n = 0,
                                    r = t.nodeType;
                                if (r) {
                                    if (1 === r || 9 === r || 11 === r) {
                                        if ("string" == typeof t.textContent) return t.textContent;
                                        for (t = t.firstChild; t; t = t.nextSibling) i += o(t)
                                    } else if (3 === r || 4 === r) return t.nodeValue
                                } else
                                    for (; e = t[n++];) i += o(e);
                                return i
                            }, n = at.selectors = {
                                cacheLength: 50,
                                createPseudo: ut,
                                match: G,
                                attrHandle: {},
                                find: {},
                                relative: {
                                    ">": {
                                        dir: "parentNode",
                                        first: !0
                                    },
                                    " ": {
                                        dir: "parentNode"
                                    },
                                    "+": {
                                        dir: "previousSibling",
                                        first: !0
                                    },
                                    "~": {
                                        dir: "previousSibling"
                                    }
                                },
                                preFilter: {
                                    ATTR: function(t) {
                                        return t[1] = t[1].replace(et, it), t[3] = (t[3] || t[4] || t[5] || "").replace(et, it), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                                    },
                                    CHILD: function(t) {
                                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]), t
                                    },
                                    PSEUDO: function(t) {
                                        var e, i = !t[6] && t[2];
                                        return G.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && z.test(i) && (e = s(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                                    }
                                },
                                filter: {
                                    TAG: function(t) {
                                        var e = t.replace(et, it).toLowerCase();
                                        return "*" === t ? function() {
                                            return !0
                                        } : function(t) {
                                            return t.nodeName && t.nodeName.toLowerCase() === e
                                        }
                                    },
                                    CLASS: function(t) {
                                        var e = k[t + " "];
                                        return e || (e = new RegExp("(^|" + j + ")" + t + "(" + j + "|$)")) && k(t, (function(t) {
                                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                                        }))
                                    },
                                    ATTR: function(t, e, i) {
                                        return function(n) {
                                            var o = at.attr(n, t);
                                            return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === i : "!=" === e ? o !== i : "^=" === e ? i && 0 === o.indexOf(i) : "*=" === e ? i && o.indexOf(i) > -1 : "$=" === e ? i && o.slice(-i.length) === i : "~=" === e ? (" " + o.replace(q, " ") + " ").indexOf(i) > -1 : "|=" === e && (o === i || o.slice(0, i.length + 1) === i + "-"))
                                        }
                                    },
                                    CHILD: function(t, e, i, n, o) {
                                        var r = "nth" !== t.slice(0, 3),
                                            s = "last" !== t.slice(-4),
                                            a = "of-type" === e;
                                        return 1 === n && 0 === o ? function(t) {
                                            return !!t.parentNode
                                        } : function(e, i, l) {
                                            var u, c, d, h, f, p, g = r !== s ? "nextSibling" : "previousSibling",
                                                m = e.parentNode,
                                                v = a && e.nodeName.toLowerCase(),
                                                y = !l && !a,
                                                b = !1;
                                            if (m) {
                                                if (r) {
                                                    for (; g;) {
                                                        for (h = e; h = h[g];)
                                                            if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                                        p = g = "only" === t && !p && "nextSibling"
                                                    }
                                                    return !0
                                                }
                                                if (p = [s ? m.firstChild : m.lastChild], s && y) {
                                                    for (b = (f = (u = (c = (d = (h = m)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === C && u[1]) && u[2], h = f && m.childNodes[f]; h = ++f && h && h[g] || (b = f = 0) || p.pop();)
                                                        if (1 === h.nodeType && ++b && h === e) {
                                                            c[t] = [C, f, b];
                                                            break
                                                        }
                                                } else if (y && (b = f = (u = (c = (d = (h = e)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === C && u[1]), !1 === b)
                                                    for (;
                                                        (h = ++f && h && h[g] || (b = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((c = (d = h[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] = [C, b]), h !== e)););
                                                return (b -= o) === n || b % n == 0 && b / n >= 0
                                            }
                                        }
                                    },
                                    PSEUDO: function(t, e) {
                                        var i, o = n.pseudos[t] || n.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                                        return o[w] ? o(e) : o.length > 1 ? (i = [t, t, "", e], n.setFilters.hasOwnProperty(t.toLowerCase()) ? ut((function(t, i) {
                                            for (var n, r = o(t, e), s = r.length; s--;) t[n = N(t, r[s])] = !(i[n] = r[s])
                                        })) : function(t) {
                                            return o(t, 0, i)
                                        }) : o
                                    }
                                },
                                pseudos: {
                                    not: ut((function(t) {
                                        var e = [],
                                            i = [],
                                            n = a(t.replace(B, "$1"));
                                        return n[w] ? ut((function(t, e, i, o) {
                                            for (var r, s = n(t, null, o, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                                        })) : function(t, o, r) {
                                            return e[0] = t, n(e, null, r, i), e[0] = null, !i.pop()
                                        }
                                    })),
                                    has: ut((function(t) {
                                        return function(e) {
                                            return at(t, e).length > 0
                                        }
                                    })),
                                    contains: ut((function(t) {
                                        return t = t.replace(et, it),
                                            function(e) {
                                                return (e.textContent || o(e)).indexOf(t) > -1
                                            }
                                    })),
                                    lang: ut((function(t) {
                                        return X.test(t || "") || at.error("unsupported lang: " + t), t = t.replace(et, it).toLowerCase(),
                                            function(e) {
                                                var i;
                                                do {
                                                    if (i = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                                return !1
                                            }
                                    })),
                                    target: function(e) {
                                        var i = t.location && t.location.hash;
                                        return i && i.slice(1) === e.id
                                    },
                                    root: function(t) {
                                        return t === p
                                    },
                                    focus: function(t) {
                                        return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                                    },
                                    enabled: gt(!1),
                                    disabled: gt(!0),
                                    checked: function(t) {
                                        var e = t.nodeName.toLowerCase();
                                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                                    },
                                    selected: function(t) {
                                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                                    },
                                    empty: function(t) {
                                        for (t = t.firstChild; t; t = t.nextSibling)
                                            if (t.nodeType < 6) return !1;
                                        return !0
                                    },
                                    parent: function(t) {
                                        return !n.pseudos.empty(t)
                                    },
                                    header: function(t) {
                                        return Q.test(t.nodeName)
                                    },
                                    input: function(t) {
                                        return Y.test(t.nodeName)
                                    },
                                    button: function(t) {
                                        var e = t.nodeName.toLowerCase();
                                        return "input" === e && "button" === t.type || "button" === e
                                    },
                                    text: function(t) {
                                        var e;
                                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                                    },
                                    first: mt((function() {
                                        return [0]
                                    })),
                                    last: mt((function(t, e) {
                                        return [e - 1]
                                    })),
                                    eq: mt((function(t, e, i) {
                                        return [i < 0 ? i + e : i]
                                    })),
                                    even: mt((function(t, e) {
                                        for (var i = 0; i < e; i += 2) t.push(i);
                                        return t
                                    })),
                                    odd: mt((function(t, e) {
                                        for (var i = 1; i < e; i += 2) t.push(i);
                                        return t
                                    })),
                                    lt: mt((function(t, e, i) {
                                        for (var n = i < 0 ? i + e : i > e ? e : i; --n >= 0;) t.push(n);
                                        return t
                                    })),
                                    gt: mt((function(t, e, i) {
                                        for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                                        return t
                                    }))
                                }
                            }, n.pseudos.nth = n.pseudos.eq, {
                                radio: !0,
                                checkbox: !0,
                                file: !0,
                                password: !0,
                                image: !0
                            }) n.pseudos[e] = ft(e);
                        for (e in {
                                submit: !0,
                                reset: !0
                            }) n.pseudos[e] = pt(e);

                        function yt() {}

                        function bt(t) {
                            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
                            return n
                        }

                        function wt(t, e, i) {
                            var n = e.dir,
                                o = e.next,
                                r = o || n,
                                s = i && "parentNode" === r,
                                a = _++;
                            return e.first ? function(e, i, o) {
                                for (; e = e[n];)
                                    if (1 === e.nodeType || s) return t(e, i, o);
                                return !1
                            } : function(e, i, l) {
                                var u, c, d, h = [C, a];
                                if (l) {
                                    for (; e = e[n];)
                                        if ((1 === e.nodeType || s) && t(e, i, l)) return !0
                                } else
                                    for (; e = e[n];)
                                        if (1 === e.nodeType || s)
                                            if (c = (d = e[w] || (e[w] = {}))[e.uniqueID] || (d[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[n] || e;
                                            else {
                                                if ((u = c[r]) && u[0] === C && u[1] === a) return h[2] = u[2];
                                                if (c[r] = h, h[2] = t(e, i, l)) return !0
                                            } return !1
                            }
                        }

                        function xt(t) {
                            return t.length > 1 ? function(e, i, n) {
                                for (var o = t.length; o--;)
                                    if (!t[o](e, i, n)) return !1;
                                return !0
                            } : t[0]
                        }

                        function Ct(t, e, i, n, o) {
                            for (var r, s = [], a = 0, l = t.length, u = null != e; a < l; a++)(r = t[a]) && (i && !i(r, n, o) || (s.push(r), u && e.push(a)));
                            return s
                        }

                        function _t(t, e, i, n, o, r) {
                            return n && !n[w] && (n = _t(n)), o && !o[w] && (o = _t(o, r)), ut((function(r, s, a, l) {
                                var u, c, d, h = [],
                                    f = [],
                                    p = s.length,
                                    g = r || function(t, e, i) {
                                        for (var n = 0, o = e.length; n < o; n++) at(t, e[n], i);
                                        return i
                                    }(e || "*", a.nodeType ? [a] : a, []),
                                    m = !t || !r && e ? g : Ct(g, h, t, a, l),
                                    v = i ? o || (r ? t : p || n) ? [] : s : m;
                                if (i && i(m, v, a, l), n)
                                    for (u = Ct(v, f), n(u, [], a, l), c = u.length; c--;)(d = u[c]) && (v[f[c]] = !(m[f[c]] = d));
                                if (r) {
                                    if (o || t) {
                                        if (o) {
                                            for (u = [], c = v.length; c--;)(d = v[c]) && u.push(m[c] = d);
                                            o(null, v = [], u, l)
                                        }
                                        for (c = v.length; c--;)(d = v[c]) && (u = o ? N(r, d) : h[c]) > -1 && (r[u] = !(s[u] = d))
                                    }
                                } else v = Ct(v === s ? v.splice(p, v.length) : v), o ? o(null, s, v, l) : I.apply(s, v)
                            }))
                        }

                        function kt(t) {
                            for (var e, i, o, r = t.length, s = n.relative[t[0].type], a = s || n.relative[" "], l = s ? 1 : 0, c = wt((function(t) {
                                    return t === e
                                }), a, !0), d = wt((function(t) {
                                    return N(e, t) > -1
                                }), a, !0), h = [function(t, i, n) {
                                    var o = !s && (n || i !== u) || ((e = i).nodeType ? c(t, i, n) : d(t, i, n));
                                    return e = null, o
                                }]; l < r; l++)
                                if (i = n.relative[t[l].type]) h = [wt(xt(h), i)];
                                else {
                                    if ((i = n.filter[t[l].type].apply(null, t[l].matches))[w]) {
                                        for (o = ++l; o < r && !n.relative[t[o].type]; o++);
                                        return _t(l > 1 && xt(h), l > 1 && bt(t.slice(0, l - 1).concat({
                                            value: " " === t[l - 2].type ? "*" : ""
                                        })).replace(B, "$1"), i, l < o && kt(t.slice(l, o)), o < r && kt(t = t.slice(o)), o < r && bt(t))
                                    }
                                    h.push(i)
                                }
                            return xt(h)
                        }
                        return yt.prototype = n.filters = n.pseudos, n.setFilters = new yt, s = at.tokenize = function(t, e) {
                            var i, o, r, s, a, l, u, c = T[t + " "];
                            if (c) return e ? 0 : c.slice(0);
                            for (a = t, l = [], u = n.preFilter; a;) {
                                for (s in i && !(o = W.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = V.exec(a)) && (i = o.shift(), r.push({
                                        value: i,
                                        type: o[0].replace(B, " ")
                                    }), a = a.slice(i.length)), n.filter) !(o = G[s].exec(a)) || u[s] && !(o = u[s](o)) || (i = o.shift(), r.push({
                                    value: i,
                                    type: s,
                                    matches: o
                                }), a = a.slice(i.length));
                                if (!i) break
                            }
                            return e ? a.length : a ? at.error(t) : T(t, l).slice(0)
                        }, a = at.compile = function(t, e) {
                            var i, o = [],
                                r = [],
                                a = S[t + " "];
                            if (!a) {
                                for (e || (e = s(t)), i = e.length; i--;)(a = kt(e[i]))[w] ? o.push(a) : r.push(a);
                                a = S(t, function(t, e) {
                                    var i = e.length > 0,
                                        o = t.length > 0,
                                        r = function(r, s, a, l, c) {
                                            var d, p, m, v = 0,
                                                y = "0",
                                                b = r && [],
                                                w = [],
                                                x = u,
                                                _ = r || o && n.find.TAG("*", c),
                                                k = C += null == x ? 1 : Math.random() || .1,
                                                T = _.length;
                                            for (c && (u = s == f || s || c); y !== T && null != (d = _[y]); y++) {
                                                if (o && d) {
                                                    for (p = 0, s || d.ownerDocument == f || (h(d), a = !g); m = t[p++];)
                                                        if (m(d, s || f, a)) {
                                                            l.push(d);
                                                            break
                                                        }
                                                    c && (C = k)
                                                }
                                                i && ((d = !m && d) && v--, r && b.push(d))
                                            }
                                            if (v += y, i && y !== v) {
                                                for (p = 0; m = e[p++];) m(b, w, s, a);
                                                if (r) {
                                                    if (v > 0)
                                                        for (; y--;) b[y] || w[y] || (w[y] = D.call(l));
                                                    w = Ct(w)
                                                }
                                                I.apply(l, w), c && !r && w.length > 0 && v + e.length > 1 && at.uniqueSort(l)
                                            }
                                            return c && (C = k, u = x), b
                                        };
                                    return i ? ut(r) : r
                                }(r, o)), a.selector = t
                            }
                            return a
                        }, l = at.select = function(t, e, i, o) {
                            var r, l, u, c, d, h = "function" == typeof t && t,
                                f = !o && s(t = h.selector || t);
                            if (i = i || [], 1 === f.length) {
                                if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === e.nodeType && g && n.relative[l[1].type]) {
                                    if (!(e = (n.find.ID(u.matches[0].replace(et, it), e) || [])[0])) return i;
                                    h && (e = e.parentNode), t = t.slice(l.shift().value.length)
                                }
                                for (r = G.needsContext.test(t) ? 0 : l.length; r-- && (u = l[r], !n.relative[c = u.type]);)
                                    if ((d = n.find[c]) && (o = d(u.matches[0].replace(et, it), tt.test(l[0].type) && vt(e.parentNode) || e))) {
                                        if (l.splice(r, 1), !(t = o.length && bt(l))) return I.apply(i, o), i;
                                        break
                                    }
                            }
                            return (h || a(t, f))(o, e, !g, i, !e || tt.test(t) && vt(e.parentNode) || e), i
                        }, i.sortStable = w.split("").sort(A).join("") === w, i.detectDuplicates = !!d, h(), i.sortDetached = ct((function(t) {
                            return 1 & t.compareDocumentPosition(f.createElement("fieldset"))
                        })), ct((function(t) {
                            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                        })) || dt("type|href|height|width", (function(t, e, i) {
                            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                        })), i.attributes && ct((function(t) {
                            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                        })) || dt("value", (function(t, e, i) {
                            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                        })), ct((function(t) {
                            return null == t.getAttribute("disabled")
                        })) || dt($, (function(t, e, i) {
                            var n;
                            if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                        })), at
                    }(n);
                    k.find = S, k.expr = S.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = S.uniqueSort, k.text = S.getText, k.isXMLDoc = S.isXML, k.contains = S.contains, k.escapeSelector = S.escape;
                    var E = function(t, e, i) {
                            for (var n = [], o = void 0 !== i;
                                (t = t[e]) && 9 !== t.nodeType;)
                                if (1 === t.nodeType) {
                                    if (o && k(t).is(i)) break;
                                    n.push(t)
                                }
                            return n
                        },
                        A = function(t, e) {
                            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                            return i
                        },
                        F = k.expr.match.needsContext;

                    function O(t, e) {
                        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                    }
                    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

                    function L(t, e, i) {
                        return v(e) ? k.grep(t, (function(t, n) {
                            return !!e.call(t, n, t) !== i
                        })) : e.nodeType ? k.grep(t, (function(t) {
                            return t === e !== i
                        })) : "string" != typeof e ? k.grep(t, (function(t) {
                            return c.call(e, t) > -1 !== i
                        })) : k.filter(e, t, i)
                    }
                    k.filter = function(t, e, i) {
                        var n = e[0];
                        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? k.find.matchesSelector(n, t) ? [n] : [] : k.find.matches(t, k.grep(e, (function(t) {
                            return 1 === t.nodeType
                        })))
                    }, k.fn.extend({
                        find: function(t) {
                            var e, i, n = this.length,
                                o = this;
                            if ("string" != typeof t) return this.pushStack(k(t).filter((function() {
                                for (e = 0; e < n; e++)
                                    if (k.contains(o[e], this)) return !0
                            })));
                            for (i = this.pushStack([]), e = 0; e < n; e++) k.find(t, o[e], i);
                            return n > 1 ? k.uniqueSort(i) : i
                        },
                        filter: function(t) {
                            return this.pushStack(L(this, t || [], !1))
                        },
                        not: function(t) {
                            return this.pushStack(L(this, t || [], !0))
                        },
                        is: function(t) {
                            return !!L(this, "string" == typeof t && F.test(t) ? k(t) : t || [], !1).length
                        }
                    });
                    var I, M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                    (k.fn.init = function(t, e, i) {
                        var n, o;
                        if (!t) return this;
                        if (i = i || I, "string" == typeof t) {
                            if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : M.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                            if (n[1]) {
                                if (e = e instanceof k ? e[0] : e, k.merge(this, k.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : b, !0)), D.test(n[1]) && k.isPlainObject(e))
                                    for (n in e) v(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                                return this
                            }
                            return (o = b.getElementById(n[2])) && (this[0] = o, this.length = 1), this
                        }
                        return t.nodeType ? (this[0] = t, this.length = 1, this) : v(t) ? void 0 !== i.ready ? i.ready(t) : t(k) : k.makeArray(t, this)
                    }).prototype = k.fn, I = k(b);
                    var N = /^(?:parents|prev(?:Until|All))/,
                        $ = {
                            children: !0,
                            contents: !0,
                            next: !0,
                            prev: !0
                        };

                    function j(t, e) {
                        for (;
                            (t = t[e]) && 1 !== t.nodeType;);
                        return t
                    }
                    k.fn.extend({
                        has: function(t) {
                            var e = k(t, this),
                                i = e.length;
                            return this.filter((function() {
                                for (var t = 0; t < i; t++)
                                    if (k.contains(this, e[t])) return !0
                            }))
                        },
                        closest: function(t, e) {
                            var i, n = 0,
                                o = this.length,
                                r = [],
                                s = "string" != typeof t && k(t);
                            if (!F.test(t))
                                for (; n < o; n++)
                                    for (i = this[n]; i && i !== e; i = i.parentNode)
                                        if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && k.find.matchesSelector(i, t))) {
                                            r.push(i);
                                            break
                                        }
                            return this.pushStack(r.length > 1 ? k.uniqueSort(r) : r)
                        },
                        index: function(t) {
                            return t ? "string" == typeof t ? c.call(k(t), this[0]) : c.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                        },
                        add: function(t, e) {
                            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(t, e))))
                        },
                        addBack: function(t) {
                            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                        }
                    }), k.each({
                        parent: function(t) {
                            var e = t.parentNode;
                            return e && 11 !== e.nodeType ? e : null
                        },
                        parents: function(t) {
                            return E(t, "parentNode")
                        },
                        parentsUntil: function(t, e, i) {
                            return E(t, "parentNode", i)
                        },
                        next: function(t) {
                            return j(t, "nextSibling")
                        },
                        prev: function(t) {
                            return j(t, "previousSibling")
                        },
                        nextAll: function(t) {
                            return E(t, "nextSibling")
                        },
                        prevAll: function(t) {
                            return E(t, "previousSibling")
                        },
                        nextUntil: function(t, e, i) {
                            return E(t, "nextSibling", i)
                        },
                        prevUntil: function(t, e, i) {
                            return E(t, "previousSibling", i)
                        },
                        siblings: function(t) {
                            return A((t.parentNode || {}).firstChild, t)
                        },
                        children: function(t) {
                            return A(t.firstChild)
                        },
                        contents: function(t) {
                            return null != t.contentDocument && s(t.contentDocument) ? t.contentDocument : (O(t, "template") && (t = t.content || t), k.merge([], t.childNodes))
                        }
                    }, (function(t, e) {
                        k.fn[t] = function(i, n) {
                            var o = k.map(this, e, i);
                            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = k.filter(n, o)), this.length > 1 && ($[t] || k.uniqueSort(o), N.test(t) && o.reverse()), this.pushStack(o)
                        }
                    }));
                    var R = /[^\x20\t\r\n\f]+/g;

                    function P(t) {
                        return t
                    }

                    function H(t) {
                        throw t
                    }

                    function q(t, e, i, n) {
                        var o;
                        try {
                            t && v(o = t.promise) ? o.call(t).done(e).fail(i) : t && v(o = t.then) ? o.call(t, e, i) : e.apply(void 0, [t].slice(n))
                        } catch (t) {
                            i.apply(void 0, [t])
                        }
                    }
                    k.Callbacks = function(t) {
                        t = "string" == typeof t ? function(t) {
                            var e = {};
                            return k.each(t.match(R) || [], (function(t, i) {
                                e[i] = !0
                            })), e
                        }(t) : k.extend({}, t);
                        var e, i, n, o, r = [],
                            s = [],
                            a = -1,
                            l = function() {
                                for (o = o || t.once, n = e = !0; s.length; a = -1)
                                    for (i = s.shift(); ++a < r.length;) !1 === r[a].apply(i[0], i[1]) && t.stopOnFalse && (a = r.length, i = !1);
                                t.memory || (i = !1), e = !1, o && (r = i ? [] : "")
                            },
                            u = {
                                add: function() {
                                    return r && (i && !e && (a = r.length - 1, s.push(i)), function e(i) {
                                        k.each(i, (function(i, n) {
                                            v(n) ? t.unique && u.has(n) || r.push(n) : n && n.length && "string" !== C(n) && e(n)
                                        }))
                                    }(arguments), i && !e && l()), this
                                },
                                remove: function() {
                                    return k.each(arguments, (function(t, e) {
                                        for (var i;
                                            (i = k.inArray(e, r, i)) > -1;) r.splice(i, 1), i <= a && a--
                                    })), this
                                },
                                has: function(t) {
                                    return t ? k.inArray(t, r) > -1 : r.length > 0
                                },
                                empty: function() {
                                    return r && (r = []), this
                                },
                                disable: function() {
                                    return o = s = [], r = i = "", this
                                },
                                disabled: function() {
                                    return !r
                                },
                                lock: function() {
                                    return o = s = [], i || e || (r = i = ""), this
                                },
                                locked: function() {
                                    return !!o
                                },
                                fireWith: function(t, i) {
                                    return o || (i = [t, (i = i || []).slice ? i.slice() : i], s.push(i), e || l()), this
                                },
                                fire: function() {
                                    return u.fireWith(this, arguments), this
                                },
                                fired: function() {
                                    return !!n
                                }
                            };
                        return u
                    }, k.extend({
                        Deferred: function(t) {
                            var e = [
                                    ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
                                    ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
                                    ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]
                                ],
                                i = "pending",
                                o = {
                                    state: function() {
                                        return i
                                    },
                                    always: function() {
                                        return r.done(arguments).fail(arguments), this
                                    },
                                    catch: function(t) {
                                        return o.then(null, t)
                                    },
                                    pipe: function() {
                                        var t = arguments;
                                        return k.Deferred((function(i) {
                                            k.each(e, (function(e, n) {
                                                var o = v(t[n[4]]) && t[n[4]];
                                                r[n[1]]((function() {
                                                    var t = o && o.apply(this, arguments);
                                                    t && v(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[n[0] + "With"](this, o ? [t] : arguments)
                                                }))
                                            })), t = null
                                        })).promise()
                                    },
                                    then: function(t, i, o) {
                                        var r = 0;

                                        function s(t, e, i, o) {
                                            return function() {
                                                var a = this,
                                                    l = arguments,
                                                    u = function() {
                                                        var n, u;
                                                        if (!(t < r)) {
                                                            if ((n = i.apply(a, l)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                                            u = n && ("object" == typeof n || "function" == typeof n) && n.then, v(u) ? o ? u.call(n, s(r, e, P, o), s(r, e, H, o)) : (r++, u.call(n, s(r, e, P, o), s(r, e, H, o), s(r, e, P, e.notifyWith))) : (i !== P && (a = void 0, l = [n]), (o || e.resolveWith)(a, l))
                                                        }
                                                    },
                                                    c = o ? u : function() {
                                                        try {
                                                            u()
                                                        } catch (n) {
                                                            k.Deferred.exceptionHook && k.Deferred.exceptionHook(n, c.stackTrace), t + 1 >= r && (i !== H && (a = void 0, l = [n]), e.rejectWith(a, l))
                                                        }
                                                    };
                                                t ? c() : (k.Deferred.getStackHook && (c.stackTrace = k.Deferred.getStackHook()), n.setTimeout(c))
                                            }
                                        }
                                        return k.Deferred((function(n) {
                                            e[0][3].add(s(0, n, v(o) ? o : P, n.notifyWith)), e[1][3].add(s(0, n, v(t) ? t : P)), e[2][3].add(s(0, n, v(i) ? i : H))
                                        })).promise()
                                    },
                                    promise: function(t) {
                                        return null != t ? k.extend(t, o) : o
                                    }
                                },
                                r = {};
                            return k.each(e, (function(t, n) {
                                var s = n[2],
                                    a = n[5];
                                o[n[1]] = s.add, a && s.add((function() {
                                    i = a
                                }), e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), s.add(n[3].fire), r[n[0]] = function() {
                                    return r[n[0] + "With"](this === r ? void 0 : this, arguments), this
                                }, r[n[0] + "With"] = s.fireWith
                            })), o.promise(r), t && t.call(r, r), r
                        },
                        when: function(t) {
                            var e = arguments.length,
                                i = e,
                                n = Array(i),
                                o = a.call(arguments),
                                r = k.Deferred(),
                                s = function(t) {
                                    return function(i) {
                                        n[t] = this, o[t] = arguments.length > 1 ? a.call(arguments) : i, --e || r.resolveWith(n, o)
                                    }
                                };
                            if (e <= 1 && (q(t, r.done(s(i)).resolve, r.reject, !e), "pending" === r.state() || v(o[i] && o[i].then))) return r.then();
                            for (; i--;) q(o[i], s(i), r.reject);
                            return r.promise()
                        }
                    });
                    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                    k.Deferred.exceptionHook = function(t, e) {
                        n.console && n.console.warn && t && B.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
                    }, k.readyException = function(t) {
                        n.setTimeout((function() {
                            throw t
                        }))
                    };
                    var W = k.Deferred();

                    function V() {
                        b.removeEventListener("DOMContentLoaded", V), n.removeEventListener("load", V), k.ready()
                    }
                    k.fn.ready = function(t) {
                        return W.then(t).catch((function(t) {
                            k.readyException(t)
                        })), this
                    }, k.extend({
                        isReady: !1,
                        readyWait: 1,
                        ready: function(t) {
                            (!0 === t ? --k.readyWait : k.isReady) || (k.isReady = !0, !0 !== t && --k.readyWait > 0 || W.resolveWith(b, [k]))
                        }
                    }), k.ready.then = W.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? n.setTimeout(k.ready) : (b.addEventListener("DOMContentLoaded", V), n.addEventListener("load", V));
                    var U = function(t, e, i, n, o, r, s) {
                            var a = 0,
                                l = t.length,
                                u = null == i;
                            if ("object" === C(i))
                                for (a in o = !0, i) U(t, e, a, i[a], !0, r, s);
                            else if (void 0 !== n && (o = !0, v(n) || (s = !0), u && (s ? (e.call(t, n), e = null) : (u = e, e = function(t, e, i) {
                                    return u.call(k(t), i)
                                })), e))
                                for (; a < l; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
                            return o ? t : u ? e.call(t) : l ? e(t[0], i) : r
                        },
                        z = /^-ms-/,
                        X = /-([a-z])/g;

                    function G(t, e) {
                        return e.toUpperCase()
                    }

                    function K(t) {
                        return t.replace(z, "ms-").replace(X, G)
                    }
                    var Y = function(t) {
                        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
                    };

                    function Q() {
                        this.expando = k.expando + Q.uid++
                    }
                    Q.uid = 1, Q.prototype = {
                        cache: function(t) {
                            var e = t[this.expando];
                            return e || (e = {}, Y(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                                value: e,
                                configurable: !0
                            }))), e
                        },
                        set: function(t, e, i) {
                            var n, o = this.cache(t);
                            if ("string" == typeof e) o[K(e)] = i;
                            else
                                for (n in e) o[K(n)] = e[n];
                            return o
                        },
                        get: function(t, e) {
                            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][K(e)]
                        },
                        access: function(t, e, i) {
                            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
                        },
                        remove: function(t, e) {
                            var i, n = t[this.expando];
                            if (void 0 !== n) {
                                if (void 0 !== e) {
                                    i = (e = Array.isArray(e) ? e.map(K) : (e = K(e)) in n ? [e] : e.match(R) || []).length;
                                    for (; i--;) delete n[e[i]]
                                }(void 0 === e || k.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                            }
                        },
                        hasData: function(t) {
                            var e = t[this.expando];
                            return void 0 !== e && !k.isEmptyObject(e)
                        }
                    };
                    var J = new Q,
                        Z = new Q,
                        tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                        et = /[A-Z]/g;

                    function it(t, e, i) {
                        var n;
                        if (void 0 === i && 1 === t.nodeType)
                            if (n = "data-" + e.replace(et, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
                                try {
                                    i = function(t) {
                                        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : tt.test(t) ? JSON.parse(t) : t)
                                    }(i)
                                } catch (t) {}
                                Z.set(t, e, i)
                            } else i = void 0;
                        return i
                    }
                    k.extend({
                        hasData: function(t) {
                            return Z.hasData(t) || J.hasData(t)
                        },
                        data: function(t, e, i) {
                            return Z.access(t, e, i)
                        },
                        removeData: function(t, e) {
                            Z.remove(t, e)
                        },
                        _data: function(t, e, i) {
                            return J.access(t, e, i)
                        },
                        _removeData: function(t, e) {
                            J.remove(t, e)
                        }
                    }), k.fn.extend({
                        data: function(t, e) {
                            var i, n, o, r = this[0],
                                s = r && r.attributes;
                            if (void 0 === t) {
                                if (this.length && (o = Z.get(r), 1 === r.nodeType && !J.get(r, "hasDataAttrs"))) {
                                    for (i = s.length; i--;) s[i] && 0 === (n = s[i].name).indexOf("data-") && (n = K(n.slice(5)), it(r, n, o[n]));
                                    J.set(r, "hasDataAttrs", !0)
                                }
                                return o
                            }
                            return "object" == typeof t ? this.each((function() {
                                Z.set(this, t)
                            })) : U(this, (function(e) {
                                var i;
                                if (r && void 0 === e) return void 0 !== (i = Z.get(r, t)) || void 0 !== (i = it(r, t)) ? i : void 0;
                                this.each((function() {
                                    Z.set(this, t, e)
                                }))
                            }), null, e, arguments.length > 1, null, !0)
                        },
                        removeData: function(t) {
                            return this.each((function() {
                                Z.remove(this, t)
                            }))
                        }
                    }), k.extend({
                        queue: function(t, e, i) {
                            var n;
                            if (t) return e = (e || "fx") + "queue", n = J.get(t, e), i && (!n || Array.isArray(i) ? n = J.access(t, e, k.makeArray(i)) : n.push(i)), n || []
                        },
                        dequeue: function(t, e) {
                            e = e || "fx";
                            var i = k.queue(t, e),
                                n = i.length,
                                o = i.shift(),
                                r = k._queueHooks(t, e);
                            "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete r.stop, o.call(t, (function() {
                                k.dequeue(t, e)
                            }), r)), !n && r && r.empty.fire()
                        },
                        _queueHooks: function(t, e) {
                            var i = e + "queueHooks";
                            return J.get(t, i) || J.access(t, i, {
                                empty: k.Callbacks("once memory").add((function() {
                                    J.remove(t, [e + "queue", i])
                                }))
                            })
                        }
                    }), k.fn.extend({
                        queue: function(t, e) {
                            var i = 2;
                            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? k.queue(this[0], t) : void 0 === e ? this : this.each((function() {
                                var i = k.queue(this, t, e);
                                k._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && k.dequeue(this, t)
                            }))
                        },
                        dequeue: function(t) {
                            return this.each((function() {
                                k.dequeue(this, t)
                            }))
                        },
                        clearQueue: function(t) {
                            return this.queue(t || "fx", [])
                        },
                        promise: function(t, e) {
                            var i, n = 1,
                                o = k.Deferred(),
                                r = this,
                                s = this.length,
                                a = function() {
                                    --n || o.resolveWith(r, [r])
                                };
                            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(i = J.get(r[s], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
                            return a(), o.promise(e)
                        }
                    });
                    var nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                        ot = new RegExp("^(?:([+-])=|)(" + nt + ")([a-z%]*)$", "i"),
                        rt = ["Top", "Right", "Bottom", "Left"],
                        st = b.documentElement,
                        at = function(t) {
                            return k.contains(t.ownerDocument, t)
                        },
                        lt = {
                            composed: !0
                        };
                    st.getRootNode && (at = function(t) {
                        return k.contains(t.ownerDocument, t) || t.getRootNode(lt) === t.ownerDocument
                    });
                    var ut = function(t, e) {
                        return "none" === (t = e || t).style.display || "" === t.style.display && at(t) && "none" === k.css(t, "display")
                    };

                    function ct(t, e, i, n) {
                        var o, r, s = 20,
                            a = n ? function() {
                                return n.cur()
                            } : function() {
                                return k.css(t, e, "")
                            },
                            l = a(),
                            u = i && i[3] || (k.cssNumber[e] ? "" : "px"),
                            c = t.nodeType && (k.cssNumber[e] || "px" !== u && +l) && ot.exec(k.css(t, e));
                        if (c && c[3] !== u) {
                            for (l /= 2, u = u || c[3], c = +l || 1; s--;) k.style(t, e, c + u), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), c /= r;
                            c *= 2, k.style(t, e, c + u), i = i || []
                        }
                        return i && (c = +c || +l || 0, o = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = u, n.start = c, n.end = o)), o
                    }
                    var dt = {};

                    function ht(t) {
                        var e, i = t.ownerDocument,
                            n = t.nodeName,
                            o = dt[n];
                        return o || (e = i.body.appendChild(i.createElement(n)), o = k.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), dt[n] = o, o)
                    }

                    function ft(t, e) {
                        for (var i, n, o = [], r = 0, s = t.length; r < s; r++)(n = t[r]).style && (i = n.style.display, e ? ("none" === i && (o[r] = J.get(n, "display") || null, o[r] || (n.style.display = "")), "" === n.style.display && ut(n) && (o[r] = ht(n))) : "none" !== i && (o[r] = "none", J.set(n, "display", i)));
                        for (r = 0; r < s; r++) null != o[r] && (t[r].style.display = o[r]);
                        return t
                    }
                    k.fn.extend({
                        show: function() {
                            return ft(this, !0)
                        },
                        hide: function() {
                            return ft(this)
                        },
                        toggle: function(t) {
                            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function() {
                                ut(this) ? k(this).show() : k(this).hide()
                            }))
                        }
                    });
                    var pt, gt, mt = /^(?:checkbox|radio)$/i,
                        vt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                        yt = /^$|^module$|\/(?:java|ecma)script/i;
                    pt = b.createDocumentFragment().appendChild(b.createElement("div")), (gt = b.createElement("input")).setAttribute("type", "radio"), gt.setAttribute("checked", "checked"), gt.setAttribute("name", "t"), pt.appendChild(gt), m.checkClone = pt.cloneNode(!0).cloneNode(!0).lastChild.checked, pt.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!pt.cloneNode(!0).lastChild.defaultValue, pt.innerHTML = "<option></option>", m.option = !!pt.lastChild;
                    var bt = {
                        thead: [1, "<table>", "</table>"],
                        col: [2, "<table><colgroup>", "</colgroup></table>"],
                        tr: [2, "<table><tbody>", "</tbody></table>"],
                        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                        _default: [0, "", ""]
                    };

                    function wt(t, e) {
                        var i;
                        return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && O(t, e) ? k.merge([t], i) : i
                    }

                    function xt(t, e) {
                        for (var i = 0, n = t.length; i < n; i++) J.set(t[i], "globalEval", !e || J.get(e[i], "globalEval"))
                    }
                    bt.tbody = bt.tfoot = bt.colgroup = bt.caption = bt.thead, bt.th = bt.td, m.option || (bt.optgroup = bt.option = [1, "<select multiple='multiple'>", "</select>"]);
                    var Ct = /<|&#?\w+;/;

                    function _t(t, e, i, n, o) {
                        for (var r, s, a, l, u, c, d = e.createDocumentFragment(), h = [], f = 0, p = t.length; f < p; f++)
                            if ((r = t[f]) || 0 === r)
                                if ("object" === C(r)) k.merge(h, r.nodeType ? [r] : r);
                                else if (Ct.test(r)) {
                            for (s = s || d.appendChild(e.createElement("div")), a = (vt.exec(r) || ["", ""])[1].toLowerCase(), l = bt[a] || bt._default, s.innerHTML = l[1] + k.htmlPrefilter(r) + l[2], c = l[0]; c--;) s = s.lastChild;
                            k.merge(h, s.childNodes), (s = d.firstChild).textContent = ""
                        } else h.push(e.createTextNode(r));
                        for (d.textContent = "", f = 0; r = h[f++];)
                            if (n && k.inArray(r, n) > -1) o && o.push(r);
                            else if (u = at(r), s = wt(d.appendChild(r), "script"), u && xt(s), i)
                            for (c = 0; r = s[c++];) yt.test(r.type || "") && i.push(r);
                        return d
                    }
                    var kt = /^([^.]*)(?:\.(.+)|)/;

                    function Tt() {
                        return !0
                    }

                    function St() {
                        return !1
                    }

                    function Et(t, e) {
                        return t === function() {
                            try {
                                return b.activeElement
                            } catch (t) {}
                        }() == ("focus" === e)
                    }

                    function At(t, e, i, n, o, r) {
                        var s, a;
                        if ("object" == typeof e) {
                            for (a in "string" != typeof i && (n = n || i, i = void 0), e) At(t, a, i, n, e[a], r);
                            return t
                        }
                        if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = St;
                        else if (!o) return t;
                        return 1 === r && (s = o, o = function(t) {
                            return k().off(t), s.apply(this, arguments)
                        }, o.guid = s.guid || (s.guid = k.guid++)), t.each((function() {
                            k.event.add(this, e, o, n, i)
                        }))
                    }

                    function Ft(t, e, i) {
                        i ? (J.set(t, e, !1), k.event.add(t, e, {
                            namespace: !1,
                            handler: function(t) {
                                var n, o, r = J.get(this, e);
                                if (1 & t.isTrigger && this[e]) {
                                    if (r.length)(k.event.special[e] || {}).delegateType && t.stopPropagation();
                                    else if (r = a.call(arguments), J.set(this, e, r), n = i(this, e), this[e](), r !== (o = J.get(this, e)) || n ? J.set(this, e, !1) : o = {}, r !== o) return t.stopImmediatePropagation(), t.preventDefault(), o && o.value
                                } else r.length && (J.set(this, e, {
                                    value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
                                }), t.stopImmediatePropagation())
                            }
                        })) : void 0 === J.get(t, e) && k.event.add(t, e, Tt)
                    }
                    k.event = {
                        global: {},
                        add: function(t, e, i, n, o) {
                            var r, s, a, l, u, c, d, h, f, p, g, m = J.get(t);
                            if (Y(t))
                                for (i.handler && (i = (r = i).handler, o = r.selector), o && k.find.matchesSelector(st, o), i.guid || (i.guid = k.guid++), (l = m.events) || (l = m.events = Object.create(null)), (s = m.handle) || (s = m.handle = function(e) {
                                        return void 0 !== k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
                                    }), u = (e = (e || "").match(R) || [""]).length; u--;) f = g = (a = kt.exec(e[u]) || [])[1], p = (a[2] || "").split(".").sort(), f && (d = k.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = k.event.special[f] || {}, c = k.extend({
                                    type: f,
                                    origType: g,
                                    data: n,
                                    handler: i,
                                    guid: i.guid,
                                    selector: o,
                                    needsContext: o && k.expr.match.needsContext.test(o),
                                    namespace: p.join(".")
                                }, r), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, n, p, s) || t.addEventListener && t.addEventListener(f, s)), d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), o ? h.splice(h.delegateCount++, 0, c) : h.push(c), k.event.global[f] = !0)
                        },
                        remove: function(t, e, i, n, o) {
                            var r, s, a, l, u, c, d, h, f, p, g, m = J.hasData(t) && J.get(t);
                            if (m && (l = m.events)) {
                                for (u = (e = (e || "").match(R) || [""]).length; u--;)
                                    if (f = g = (a = kt.exec(e[u]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
                                        for (d = k.event.special[f] || {}, h = l[f = (n ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = h.length; r--;) c = h[r], !o && g !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (h.splice(r, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(t, c));
                                        s && !h.length && (d.teardown && !1 !== d.teardown.call(t, p, m.handle) || k.removeEvent(t, f, m.handle), delete l[f])
                                    } else
                                        for (f in l) k.event.remove(t, f + e[u], i, n, !0);
                                k.isEmptyObject(l) && J.remove(t, "handle events")
                            }
                        },
                        dispatch: function(t) {
                            var e, i, n, o, r, s, a = new Array(arguments.length),
                                l = k.event.fix(t),
                                u = (J.get(this, "events") || Object.create(null))[l.type] || [],
                                c = k.event.special[l.type] || {};
                            for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
                            if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                                for (s = k.event.handlers.call(this, l, u), e = 0;
                                    (o = s[e++]) && !l.isPropagationStopped();)
                                    for (l.currentTarget = o.elem, i = 0;
                                        (r = o.handlers[i++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r, l.data = r.data, void 0 !== (n = ((k.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (l.result = n) && (l.preventDefault(), l.stopPropagation()));
                                return c.postDispatch && c.postDispatch.call(this, l), l.result
                            }
                        },
                        handlers: function(t, e) {
                            var i, n, o, r, s, a = [],
                                l = e.delegateCount,
                                u = t.target;
                            if (l && u.nodeType && !("click" === t.type && t.button >= 1))
                                for (; u !== this; u = u.parentNode || this)
                                    if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                                        for (r = [], s = {}, i = 0; i < l; i++) void 0 === s[o = (n = e[i]).selector + " "] && (s[o] = n.needsContext ? k(o, this).index(u) > -1 : k.find(o, this, null, [u]).length), s[o] && r.push(n);
                                        r.length && a.push({
                                            elem: u,
                                            handlers: r
                                        })
                                    }
                            return u = this, l < e.length && a.push({
                                elem: u,
                                handlers: e.slice(l)
                            }), a
                        },
                        addProp: function(t, e) {
                            Object.defineProperty(k.Event.prototype, t, {
                                enumerable: !0,
                                configurable: !0,
                                get: v(e) ? function() {
                                    if (this.originalEvent) return e(this.originalEvent)
                                } : function() {
                                    if (this.originalEvent) return this.originalEvent[t]
                                },
                                set: function(e) {
                                    Object.defineProperty(this, t, {
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                        value: e
                                    })
                                }
                            })
                        },
                        fix: function(t) {
                            return t[k.expando] ? t : new k.Event(t)
                        },
                        special: {
                            load: {
                                noBubble: !0
                            },
                            click: {
                                setup: function(t) {
                                    var e = this || t;
                                    return mt.test(e.type) && e.click && O(e, "input") && Ft(e, "click", Tt), !1
                                },
                                trigger: function(t) {
                                    var e = this || t;
                                    return mt.test(e.type) && e.click && O(e, "input") && Ft(e, "click"), !0
                                },
                                _default: function(t) {
                                    var e = t.target;
                                    return mt.test(e.type) && e.click && O(e, "input") && J.get(e, "click") || O(e, "a")
                                }
                            },
                            beforeunload: {
                                postDispatch: function(t) {
                                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                                }
                            }
                        }
                    }, k.removeEvent = function(t, e, i) {
                        t.removeEventListener && t.removeEventListener(e, i)
                    }, k.Event = function(t, e) {
                        if (!(this instanceof k.Event)) return new k.Event(t, e);
                        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Tt : St, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && k.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[k.expando] = !0
                    }, k.Event.prototype = {
                        constructor: k.Event,
                        isDefaultPrevented: St,
                        isPropagationStopped: St,
                        isImmediatePropagationStopped: St,
                        isSimulated: !1,
                        preventDefault: function() {
                            var t = this.originalEvent;
                            this.isDefaultPrevented = Tt, t && !this.isSimulated && t.preventDefault()
                        },
                        stopPropagation: function() {
                            var t = this.originalEvent;
                            this.isPropagationStopped = Tt, t && !this.isSimulated && t.stopPropagation()
                        },
                        stopImmediatePropagation: function() {
                            var t = this.originalEvent;
                            this.isImmediatePropagationStopped = Tt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
                        }
                    }, k.each({
                        altKey: !0,
                        bubbles: !0,
                        cancelable: !0,
                        changedTouches: !0,
                        ctrlKey: !0,
                        detail: !0,
                        eventPhase: !0,
                        metaKey: !0,
                        pageX: !0,
                        pageY: !0,
                        shiftKey: !0,
                        view: !0,
                        char: !0,
                        code: !0,
                        charCode: !0,
                        key: !0,
                        keyCode: !0,
                        button: !0,
                        buttons: !0,
                        clientX: !0,
                        clientY: !0,
                        offsetX: !0,
                        offsetY: !0,
                        pointerId: !0,
                        pointerType: !0,
                        screenX: !0,
                        screenY: !0,
                        targetTouches: !0,
                        toElement: !0,
                        touches: !0,
                        which: !0
                    }, k.event.addProp), k.each({
                        focus: "focusin",
                        blur: "focusout"
                    }, (function(t, e) {
                        k.event.special[t] = {
                            setup: function() {
                                return Ft(this, t, Et), !1
                            },
                            trigger: function() {
                                return Ft(this, t), !0
                            },
                            _default: function() {
                                return !0
                            },
                            delegateType: e
                        }
                    })), k.each({
                        mouseenter: "mouseover",
                        mouseleave: "mouseout",
                        pointerenter: "pointerover",
                        pointerleave: "pointerout"
                    }, (function(t, e) {
                        k.event.special[t] = {
                            delegateType: e,
                            bindType: e,
                            handle: function(t) {
                                var i, n = t.relatedTarget,
                                    o = t.handleObj;
                                return n && (n === this || k.contains(this, n)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
                            }
                        }
                    })), k.fn.extend({
                        on: function(t, e, i, n) {
                            return At(this, t, e, i, n)
                        },
                        one: function(t, e, i, n) {
                            return At(this, t, e, i, n, 1)
                        },
                        off: function(t, e, i) {
                            var n, o;
                            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, k(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                            if ("object" == typeof t) {
                                for (o in t) this.off(o, e, t[o]);
                                return this
                            }
                            return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = St), this.each((function() {
                                k.event.remove(this, t, i, e)
                            }))
                        }
                    });
                    var Ot = /<script|<style|<link/i,
                        Dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                        Lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

                    function It(t, e) {
                        return O(t, "table") && O(11 !== e.nodeType ? e : e.firstChild, "tr") && k(t).children("tbody")[0] || t
                    }

                    function Mt(t) {
                        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
                    }

                    function Nt(t) {
                        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
                    }

                    function $t(t, e) {
                        var i, n, o, r, s, a;
                        if (1 === e.nodeType) {
                            if (J.hasData(t) && (a = J.get(t).events))
                                for (o in J.remove(e, "handle events"), a)
                                    for (i = 0, n = a[o].length; i < n; i++) k.event.add(e, o, a[o][i]);
                            Z.hasData(t) && (r = Z.access(t), s = k.extend({}, r), Z.set(e, s))
                        }
                    }

                    function jt(t, e) {
                        var i = e.nodeName.toLowerCase();
                        "input" === i && mt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
                    }

                    function Rt(t, e, i, n) {
                        e = l(e);
                        var o, r, s, a, u, c, d = 0,
                            h = t.length,
                            f = h - 1,
                            p = e[0],
                            g = v(p);
                        if (g || h > 1 && "string" == typeof p && !m.checkClone && Dt.test(p)) return t.each((function(o) {
                            var r = t.eq(o);
                            g && (e[0] = p.call(this, o, r.html())), Rt(r, e, i, n)
                        }));
                        if (h && (r = (o = _t(e, t[0].ownerDocument, !1, t, n)).firstChild, 1 === o.childNodes.length && (o = r), r || n)) {
                            for (a = (s = k.map(wt(o, "script"), Mt)).length; d < h; d++) u = o, d !== f && (u = k.clone(u, !0, !0), a && k.merge(s, wt(u, "script"))), i.call(t[d], u, d);
                            if (a)
                                for (c = s[s.length - 1].ownerDocument, k.map(s, Nt), d = 0; d < a; d++) u = s[d], yt.test(u.type || "") && !J.access(u, "globalEval") && k.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
                                    nonce: u.nonce || u.getAttribute("nonce")
                                }, c) : x(u.textContent.replace(Lt, ""), u, c))
                        }
                        return t
                    }

                    function Pt(t, e, i) {
                        for (var n, o = e ? k.filter(e, t) : t, r = 0; null != (n = o[r]); r++) i || 1 !== n.nodeType || k.cleanData(wt(n)), n.parentNode && (i && at(n) && xt(wt(n, "script")), n.parentNode.removeChild(n));
                        return t
                    }
                    k.extend({
                        htmlPrefilter: function(t) {
                            return t
                        },
                        clone: function(t, e, i) {
                            var n, o, r, s, a = t.cloneNode(!0),
                                l = at(t);
                            if (!(m.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || k.isXMLDoc(t)))
                                for (s = wt(a), n = 0, o = (r = wt(t)).length; n < o; n++) jt(r[n], s[n]);
                            if (e)
                                if (i)
                                    for (r = r || wt(t), s = s || wt(a), n = 0, o = r.length; n < o; n++) $t(r[n], s[n]);
                                else $t(t, a);
                            return (s = wt(a, "script")).length > 0 && xt(s, !l && wt(t, "script")), a
                        },
                        cleanData: function(t) {
                            for (var e, i, n, o = k.event.special, r = 0; void 0 !== (i = t[r]); r++)
                                if (Y(i)) {
                                    if (e = i[J.expando]) {
                                        if (e.events)
                                            for (n in e.events) o[n] ? k.event.remove(i, n) : k.removeEvent(i, n, e.handle);
                                        i[J.expando] = void 0
                                    }
                                    i[Z.expando] && (i[Z.expando] = void 0)
                                }
                        }
                    }), k.fn.extend({
                        detach: function(t) {
                            return Pt(this, t, !0)
                        },
                        remove: function(t) {
                            return Pt(this, t)
                        },
                        text: function(t) {
                            return U(this, (function(t) {
                                return void 0 === t ? k.text(this) : this.empty().each((function() {
                                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                                }))
                            }), null, t, arguments.length)
                        },
                        append: function() {
                            return Rt(this, arguments, (function(t) {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || It(this, t).appendChild(t)
                            }))
                        },
                        prepend: function() {
                            return Rt(this, arguments, (function(t) {
                                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                    var e = It(this, t);
                                    e.insertBefore(t, e.firstChild)
                                }
                            }))
                        },
                        before: function() {
                            return Rt(this, arguments, (function(t) {
                                this.parentNode && this.parentNode.insertBefore(t, this)
                            }))
                        },
                        after: function() {
                            return Rt(this, arguments, (function(t) {
                                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                            }))
                        },
                        empty: function() {
                            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (k.cleanData(wt(t, !1)), t.textContent = "");
                            return this
                        },
                        clone: function(t, e) {
                            return t = null != t && t, e = null == e ? t : e, this.map((function() {
                                return k.clone(this, t, e)
                            }))
                        },
                        html: function(t) {
                            return U(this, (function(t) {
                                var e = this[0] || {},
                                    i = 0,
                                    n = this.length;
                                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                                if ("string" == typeof t && !Ot.test(t) && !bt[(vt.exec(t) || ["", ""])[1].toLowerCase()]) {
                                    t = k.htmlPrefilter(t);
                                    try {
                                        for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (k.cleanData(wt(e, !1)), e.innerHTML = t);
                                        e = 0
                                    } catch (t) {}
                                }
                                e && this.empty().append(t)
                            }), null, t, arguments.length)
                        },
                        replaceWith: function() {
                            var t = [];
                            return Rt(this, arguments, (function(e) {
                                var i = this.parentNode;
                                k.inArray(this, t) < 0 && (k.cleanData(wt(this)), i && i.replaceChild(e, this))
                            }), t)
                        }
                    }), k.each({
                        appendTo: "append",
                        prependTo: "prepend",
                        insertBefore: "before",
                        insertAfter: "after",
                        replaceAll: "replaceWith"
                    }, (function(t, e) {
                        k.fn[t] = function(t) {
                            for (var i, n = [], o = k(t), r = o.length - 1, s = 0; s <= r; s++) i = s === r ? this : this.clone(!0), k(o[s])[e](i), u.apply(n, i.get());
                            return this.pushStack(n)
                        }
                    }));
                    var Ht = new RegExp("^(" + nt + ")(?!px)[a-z%]+$", "i"),
                        qt = function(t) {
                            var e = t.ownerDocument.defaultView;
                            return e && e.opener || (e = n), e.getComputedStyle(t)
                        },
                        Bt = function(t, e, i) {
                            var n, o, r = {};
                            for (o in e) r[o] = t.style[o], t.style[o] = e[o];
                            for (o in n = i.call(t), e) t.style[o] = r[o];
                            return n
                        },
                        Wt = new RegExp(rt.join("|"), "i");

                    function Vt(t, e, i) {
                        var n, o, r, s, a = t.style;
                        return (i = i || qt(t)) && ("" !== (s = i.getPropertyValue(e) || i[e]) || at(t) || (s = k.style(t, e)), !m.pixelBoxStyles() && Ht.test(s) && Wt.test(e) && (n = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
                    }

                    function Ut(t, e) {
                        return {
                            get: function() {
                                if (!t()) return (this.get = e).apply(this, arguments);
                                delete this.get
                            }
                        }
                    }! function() {
                        function t() {
                            if (c) {
                                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", st.appendChild(u).appendChild(c);
                                var t = n.getComputedStyle(c);
                                i = "1%" !== t.top, l = 12 === e(t.marginLeft), c.style.right = "60%", s = 36 === e(t.right), o = 36 === e(t.width), c.style.position = "absolute", r = 12 === e(c.offsetWidth / 3), st.removeChild(u), c = null
                            }
                        }

                        function e(t) {
                            return Math.round(parseFloat(t))
                        }
                        var i, o, r, s, a, l, u = b.createElement("div"),
                            c = b.createElement("div");
                        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === c.style.backgroundClip, k.extend(m, {
                            boxSizingReliable: function() {
                                return t(), o
                            },
                            pixelBoxStyles: function() {
                                return t(), s
                            },
                            pixelPosition: function() {
                                return t(), i
                            },
                            reliableMarginLeft: function() {
                                return t(), l
                            },
                            scrollboxSize: function() {
                                return t(), r
                            },
                            reliableTrDimensions: function() {
                                var t, e, i, o;
                                return null == a && (t = b.createElement("table"), e = b.createElement("tr"), i = b.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", e.style.cssText = "border:1px solid", e.style.height = "1px", i.style.height = "9px", i.style.display = "block", st.appendChild(t).appendChild(e).appendChild(i), o = n.getComputedStyle(e), a = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === e.offsetHeight, st.removeChild(t)), a
                            }
                        }))
                    }();
                    var zt = ["Webkit", "Moz", "ms"],
                        Xt = b.createElement("div").style,
                        Gt = {};

                    function Kt(t) {
                        return k.cssProps[t] || Gt[t] || (t in Xt ? t : Gt[t] = function(t) {
                            for (var e = t[0].toUpperCase() + t.slice(1), i = zt.length; i--;)
                                if ((t = zt[i] + e) in Xt) return t
                        }(t) || t)
                    }
                    var Yt = /^(none|table(?!-c[ea]).+)/,
                        Qt = /^--/,
                        Jt = {
                            position: "absolute",
                            visibility: "hidden",
                            display: "block"
                        },
                        Zt = {
                            letterSpacing: "0",
                            fontWeight: "400"
                        };

                    function te(t, e, i) {
                        var n = ot.exec(e);
                        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
                    }

                    function ee(t, e, i, n, o, r) {
                        var s = "width" === e ? 1 : 0,
                            a = 0,
                            l = 0;
                        if (i === (n ? "border" : "content")) return 0;
                        for (; s < 4; s += 2) "margin" === i && (l += k.css(t, i + rt[s], !0, o)), n ? ("content" === i && (l -= k.css(t, "padding" + rt[s], !0, o)), "margin" !== i && (l -= k.css(t, "border" + rt[s] + "Width", !0, o))) : (l += k.css(t, "padding" + rt[s], !0, o), "padding" !== i ? l += k.css(t, "border" + rt[s] + "Width", !0, o) : a += k.css(t, "border" + rt[s] + "Width", !0, o));
                        return !n && r >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - a - .5)) || 0), l
                    }

                    function ie(t, e, i) {
                        var n = qt(t),
                            o = (!m.boxSizingReliable() || i) && "border-box" === k.css(t, "boxSizing", !1, n),
                            r = o,
                            s = Vt(t, e, n),
                            a = "offset" + e[0].toUpperCase() + e.slice(1);
                        if (Ht.test(s)) {
                            if (!i) return s;
                            s = "auto"
                        }
                        return (!m.boxSizingReliable() && o || !m.reliableTrDimensions() && O(t, "tr") || "auto" === s || !parseFloat(s) && "inline" === k.css(t, "display", !1, n)) && t.getClientRects().length && (o = "border-box" === k.css(t, "boxSizing", !1, n), (r = a in t) && (s = t[a])), (s = parseFloat(s) || 0) + ee(t, e, i || (o ? "border" : "content"), r, n, s) + "px"
                    }

                    function ne(t, e, i, n, o) {
                        return new ne.prototype.init(t, e, i, n, o)
                    }
                    k.extend({
                        cssHooks: {
                            opacity: {
                                get: function(t, e) {
                                    if (e) {
                                        var i = Vt(t, "opacity");
                                        return "" === i ? "1" : i
                                    }
                                }
                            }
                        },
                        cssNumber: {
                            animationIterationCount: !0,
                            columnCount: !0,
                            fillOpacity: !0,
                            flexGrow: !0,
                            flexShrink: !0,
                            fontWeight: !0,
                            gridArea: !0,
                            gridColumn: !0,
                            gridColumnEnd: !0,
                            gridColumnStart: !0,
                            gridRow: !0,
                            gridRowEnd: !0,
                            gridRowStart: !0,
                            lineHeight: !0,
                            opacity: !0,
                            order: !0,
                            orphans: !0,
                            widows: !0,
                            zIndex: !0,
                            zoom: !0
                        },
                        cssProps: {},
                        style: function(t, e, i, n) {
                            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                                var o, r, s, a = K(e),
                                    l = Qt.test(e),
                                    u = t.style;
                                if (l || (e = Kt(a)), s = k.cssHooks[e] || k.cssHooks[a], void 0 === i) return s && "get" in s && void 0 !== (o = s.get(t, !1, n)) ? o : u[e];
                                "string" == (r = typeof i) && (o = ot.exec(i)) && o[1] && (i = ct(t, e, o), r = "number"), null != i && i == i && ("number" !== r || l || (i += o && o[3] || (k.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (u[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (l ? u.setProperty(e, i) : u[e] = i))
                            }
                        },
                        css: function(t, e, i, n) {
                            var o, r, s, a = K(e);
                            return Qt.test(e) || (e = Kt(a)), (s = k.cssHooks[e] || k.cssHooks[a]) && "get" in s && (o = s.get(t, !0, i)), void 0 === o && (o = Vt(t, e, n)), "normal" === o && e in Zt && (o = Zt[e]), "" === i || i ? (r = parseFloat(o), !0 === i || isFinite(r) ? r || 0 : o) : o
                        }
                    }), k.each(["height", "width"], (function(t, e) {
                        k.cssHooks[e] = {
                            get: function(t, i, n) {
                                if (i) return !Yt.test(k.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ie(t, e, n) : Bt(t, Jt, (function() {
                                    return ie(t, e, n)
                                }))
                            },
                            set: function(t, i, n) {
                                var o, r = qt(t),
                                    s = !m.scrollboxSize() && "absolute" === r.position,
                                    a = (s || n) && "border-box" === k.css(t, "boxSizing", !1, r),
                                    l = n ? ee(t, e, n, a, r) : 0;
                                return a && s && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(r[e]) - ee(t, e, "border", !1, r) - .5)), l && (o = ot.exec(i)) && "px" !== (o[3] || "px") && (t.style[e] = i, i = k.css(t, e)), te(0, i, l)
                            }
                        }
                    })), k.cssHooks.marginLeft = Ut(m.reliableMarginLeft, (function(t, e) {
                        if (e) return (parseFloat(Vt(t, "marginLeft")) || t.getBoundingClientRect().left - Bt(t, {
                            marginLeft: 0
                        }, (function() {
                            return t.getBoundingClientRect().left
                        }))) + "px"
                    })), k.each({
                        margin: "",
                        padding: "",
                        border: "Width"
                    }, (function(t, e) {
                        k.cssHooks[t + e] = {
                            expand: function(i) {
                                for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) o[t + rt[n] + e] = r[n] || r[n - 2] || r[0];
                                return o
                            }
                        }, "margin" !== t && (k.cssHooks[t + e].set = te)
                    })), k.fn.extend({
                        css: function(t, e) {
                            return U(this, (function(t, e, i) {
                                var n, o, r = {},
                                    s = 0;
                                if (Array.isArray(e)) {
                                    for (n = qt(t), o = e.length; s < o; s++) r[e[s]] = k.css(t, e[s], !1, n);
                                    return r
                                }
                                return void 0 !== i ? k.style(t, e, i) : k.css(t, e)
                            }), t, e, arguments.length > 1)
                        }
                    }), k.Tween = ne, ne.prototype = {
                        constructor: ne,
                        init: function(t, e, i, n, o, r) {
                            this.elem = t, this.prop = i, this.easing = o || k.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (k.cssNumber[i] ? "" : "px")
                        },
                        cur: function() {
                            var t = ne.propHooks[this.prop];
                            return t && t.get ? t.get(this) : ne.propHooks._default.get(this)
                        },
                        run: function(t) {
                            var e, i = ne.propHooks[this.prop];
                            return this.options.duration ? this.pos = e = k.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : ne.propHooks._default.set(this), this
                        }
                    }, ne.prototype.init.prototype = ne.prototype, ne.propHooks = {
                        _default: {
                            get: function(t) {
                                var e;
                                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = k.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                            },
                            set: function(t) {
                                k.fx.step[t.prop] ? k.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !k.cssHooks[t.prop] && null == t.elem.style[Kt(t.prop)] ? t.elem[t.prop] = t.now : k.style(t.elem, t.prop, t.now + t.unit)
                            }
                        }
                    }, ne.propHooks.scrollTop = ne.propHooks.scrollLeft = {
                        set: function(t) {
                            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                        }
                    }, k.easing = {
                        linear: function(t) {
                            return t
                        },
                        swing: function(t) {
                            return .5 - Math.cos(t * Math.PI) / 2
                        },
                        _default: "swing"
                    }, k.fx = ne.prototype.init, k.fx.step = {};
                    var oe, re, se = /^(?:toggle|show|hide)$/,
                        ae = /queueHooks$/;

                    function le() {
                        re && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(le) : n.setTimeout(le, k.fx.interval), k.fx.tick())
                    }

                    function ue() {
                        return n.setTimeout((function() {
                            oe = void 0
                        })), oe = Date.now()
                    }

                    function ce(t, e) {
                        var i, n = 0,
                            o = {
                                height: t
                            };
                        for (e = e ? 1 : 0; n < 4; n += 2 - e) o["margin" + (i = rt[n])] = o["padding" + i] = t;
                        return e && (o.opacity = o.width = t), o
                    }

                    function de(t, e, i) {
                        for (var n, o = (he.tweeners[e] || []).concat(he.tweeners["*"]), r = 0, s = o.length; r < s; r++)
                            if (n = o[r].call(i, e, t)) return n
                    }

                    function he(t, e, i) {
                        var n, o, r = 0,
                            s = he.prefilters.length,
                            a = k.Deferred().always((function() {
                                delete l.elem
                            })),
                            l = function() {
                                if (o) return !1;
                                for (var e = oe || ue(), i = Math.max(0, u.startTime + u.duration - e), n = 1 - (i / u.duration || 0), r = 0, s = u.tweens.length; r < s; r++) u.tweens[r].run(n);
                                return a.notifyWith(t, [u, n, i]), n < 1 && s ? i : (s || a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u]), !1)
                            },
                            u = a.promise({
                                elem: t,
                                props: k.extend({}, e),
                                opts: k.extend(!0, {
                                    specialEasing: {},
                                    easing: k.easing._default
                                }, i),
                                originalProperties: e,
                                originalOptions: i,
                                startTime: oe || ue(),
                                duration: i.duration,
                                tweens: [],
                                createTween: function(e, i) {
                                    var n = k.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
                                    return u.tweens.push(n), n
                                },
                                stop: function(e) {
                                    var i = 0,
                                        n = e ? u.tweens.length : 0;
                                    if (o) return this;
                                    for (o = !0; i < n; i++) u.tweens[i].run(1);
                                    return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                                }
                            }),
                            c = u.props;
                        for (function(t, e) {
                                var i, n, o, r, s;
                                for (i in t)
                                    if (o = e[n = K(i)], r = t[i], Array.isArray(r) && (o = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), (s = k.cssHooks[n]) && "expand" in s)
                                        for (i in r = s.expand(r), delete t[n], r) i in t || (t[i] = r[i], e[i] = o);
                                    else e[n] = o
                            }(c, u.opts.specialEasing); r < s; r++)
                            if (n = he.prefilters[r].call(u, t, c, u.opts)) return v(n.stop) && (k._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;
                        return k.map(c, de, u), v(u.opts.start) && u.opts.start.call(t, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), k.fx.timer(k.extend(l, {
                            elem: t,
                            anim: u,
                            queue: u.opts.queue
                        })), u
                    }
                    k.Animation = k.extend(he, {
                            tweeners: {
                                "*": [function(t, e) {
                                    var i = this.createTween(t, e);
                                    return ct(i.elem, t, ot.exec(e), i), i
                                }]
                            },
                            tweener: function(t, e) {
                                v(t) ? (e = t, t = ["*"]) : t = t.match(R);
                                for (var i, n = 0, o = t.length; n < o; n++) i = t[n], he.tweeners[i] = he.tweeners[i] || [], he.tweeners[i].unshift(e)
                            },
                            prefilters: [function(t, e, i) {
                                var n, o, r, s, a, l, u, c, d = "width" in e || "height" in e,
                                    h = this,
                                    f = {},
                                    p = t.style,
                                    g = t.nodeType && ut(t),
                                    m = J.get(t, "fxshow");
                                for (n in i.queue || (null == (s = k._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                                        s.unqueued || a()
                                    }), s.unqueued++, h.always((function() {
                                        h.always((function() {
                                            s.unqueued--, k.queue(t, "fx").length || s.empty.fire()
                                        }))
                                    }))), e)
                                    if (o = e[n], se.test(o)) {
                                        if (delete e[n], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                                            if ("show" !== o || !m || void 0 === m[n]) continue;
                                            g = !0
                                        }
                                        f[n] = m && m[n] || k.style(t, n)
                                    }
                                if ((l = !k.isEmptyObject(e)) || !k.isEmptyObject(f))
                                    for (n in d && 1 === t.nodeType && (i.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = J.get(t, "display")), "none" === (c = k.css(t, "display")) && (u ? c = u : (ft([t], !0), u = t.style.display || u, c = k.css(t, "display"), ft([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === k.css(t, "float") && (l || (h.done((function() {
                                            p.display = u
                                        })), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), i.overflow && (p.overflow = "hidden", h.always((function() {
                                            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
                                        }))), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = J.access(t, "fxshow", {
                                        display: u
                                    }), r && (m.hidden = !g), g && ft([t], !0), h.done((function() {
                                        for (n in g || ft([t]), J.remove(t, "fxshow"), f) k.style(t, n, f[n])
                                    }))), l = de(g ? m[n] : 0, n, h), n in m || (m[n] = l.start, g && (l.end = l.start, l.start = 0))
                            }],
                            prefilter: function(t, e) {
                                e ? he.prefilters.unshift(t) : he.prefilters.push(t)
                            }
                        }), k.speed = function(t, e, i) {
                            var n = t && "object" == typeof t ? k.extend({}, t) : {
                                complete: i || !i && e || v(t) && t,
                                duration: t,
                                easing: i && e || e && !v(e) && e
                            };
                            return k.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in k.fx.speeds ? n.duration = k.fx.speeds[n.duration] : n.duration = k.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                                v(n.old) && n.old.call(this), n.queue && k.dequeue(this, n.queue)
                            }, n
                        }, k.fn.extend({
                            fadeTo: function(t, e, i, n) {
                                return this.filter(ut).css("opacity", 0).show().end().animate({
                                    opacity: e
                                }, t, i, n)
                            },
                            animate: function(t, e, i, n) {
                                var o = k.isEmptyObject(t),
                                    r = k.speed(e, i, n),
                                    s = function() {
                                        var e = he(this, k.extend({}, t), r);
                                        (o || J.get(this, "finish")) && e.stop(!0)
                                    };
                                return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
                            },
                            stop: function(t, e, i) {
                                var n = function(t) {
                                    var e = t.stop;
                                    delete t.stop, e(i)
                                };
                                return "string" != typeof t && (i = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each((function() {
                                    var e = !0,
                                        o = null != t && t + "queueHooks",
                                        r = k.timers,
                                        s = J.get(this);
                                    if (o) s[o] && s[o].stop && n(s[o]);
                                    else
                                        for (o in s) s[o] && s[o].stop && ae.test(o) && n(s[o]);
                                    for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(i), e = !1, r.splice(o, 1));
                                    !e && i || k.dequeue(this, t)
                                }))
                            },
                            finish: function(t) {
                                return !1 !== t && (t = t || "fx"), this.each((function() {
                                    var e, i = J.get(this),
                                        n = i[t + "queue"],
                                        o = i[t + "queueHooks"],
                                        r = k.timers,
                                        s = n ? n.length : 0;
                                    for (i.finish = !0, k.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                                    for (e = 0; e < s; e++) n[e] && n[e].finish && n[e].finish.call(this);
                                    delete i.finish
                                }))
                            }
                        }), k.each(["toggle", "show", "hide"], (function(t, e) {
                            var i = k.fn[e];
                            k.fn[e] = function(t, n, o) {
                                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(ce(e, !0), t, n, o)
                            }
                        })), k.each({
                            slideDown: ce("show"),
                            slideUp: ce("hide"),
                            slideToggle: ce("toggle"),
                            fadeIn: {
                                opacity: "show"
                            },
                            fadeOut: {
                                opacity: "hide"
                            },
                            fadeToggle: {
                                opacity: "toggle"
                            }
                        }, (function(t, e) {
                            k.fn[t] = function(t, i, n) {
                                return this.animate(e, t, i, n)
                            }
                        })), k.timers = [], k.fx.tick = function() {
                            var t, e = 0,
                                i = k.timers;
                            for (oe = Date.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
                            i.length || k.fx.stop(), oe = void 0
                        }, k.fx.timer = function(t) {
                            k.timers.push(t), k.fx.start()
                        }, k.fx.interval = 13, k.fx.start = function() {
                            re || (re = !0, le())
                        }, k.fx.stop = function() {
                            re = null
                        }, k.fx.speeds = {
                            slow: 600,
                            fast: 200,
                            _default: 400
                        }, k.fn.delay = function(t, e) {
                            return t = k.fx && k.fx.speeds[t] || t, e = e || "fx", this.queue(e, (function(e, i) {
                                var o = n.setTimeout(e, t);
                                i.stop = function() {
                                    n.clearTimeout(o)
                                }
                            }))
                        },
                        function() {
                            var t = b.createElement("input"),
                                e = b.createElement("select").appendChild(b.createElement("option"));
                            t.type = "checkbox", m.checkOn = "" !== t.value, m.optSelected = e.selected, (t = b.createElement("input")).value = "t", t.type = "radio", m.radioValue = "t" === t.value
                        }();
                    var fe, pe = k.expr.attrHandle;
                    k.fn.extend({
                        attr: function(t, e) {
                            return U(this, k.attr, t, e, arguments.length > 1)
                        },
                        removeAttr: function(t) {
                            return this.each((function() {
                                k.removeAttr(this, t)
                            }))
                        }
                    }), k.extend({
                        attr: function(t, e, i) {
                            var n, o, r = t.nodeType;
                            if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? k.prop(t, e, i) : (1 === r && k.isXMLDoc(t) || (o = k.attrHooks[e.toLowerCase()] || (k.expr.match.bool.test(e) ? fe : void 0)), void 0 !== i ? null === i ? void k.removeAttr(t, e) : o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : o && "get" in o && null !== (n = o.get(t, e)) ? n : null == (n = k.find.attr(t, e)) ? void 0 : n)
                        },
                        attrHooks: {
                            type: {
                                set: function(t, e) {
                                    if (!m.radioValue && "radio" === e && O(t, "input")) {
                                        var i = t.value;
                                        return t.setAttribute("type", e), i && (t.value = i), e
                                    }
                                }
                            }
                        },
                        removeAttr: function(t, e) {
                            var i, n = 0,
                                o = e && e.match(R);
                            if (o && 1 === t.nodeType)
                                for (; i = o[n++];) t.removeAttribute(i)
                        }
                    }), fe = {
                        set: function(t, e, i) {
                            return !1 === e ? k.removeAttr(t, i) : t.setAttribute(i, i), i
                        }
                    }, k.each(k.expr.match.bool.source.match(/\w+/g), (function(t, e) {
                        var i = pe[e] || k.find.attr;
                        pe[e] = function(t, e, n) {
                            var o, r, s = e.toLowerCase();
                            return n || (r = pe[s], pe[s] = o, o = null != i(t, e, n) ? s : null, pe[s] = r), o
                        }
                    }));
                    var ge = /^(?:input|select|textarea|button)$/i,
                        me = /^(?:a|area)$/i;

                    function ve(t) {
                        return (t.match(R) || []).join(" ")
                    }

                    function ye(t) {
                        return t.getAttribute && t.getAttribute("class") || ""
                    }

                    function be(t) {
                        return Array.isArray(t) ? t : "string" == typeof t && t.match(R) || []
                    }
                    k.fn.extend({
                        prop: function(t, e) {
                            return U(this, k.prop, t, e, arguments.length > 1)
                        },
                        removeProp: function(t) {
                            return this.each((function() {
                                delete this[k.propFix[t] || t]
                            }))
                        }
                    }), k.extend({
                        prop: function(t, e, i) {
                            var n, o, r = t.nodeType;
                            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && k.isXMLDoc(t) || (e = k.propFix[e] || e, o = k.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
                        },
                        propHooks: {
                            tabIndex: {
                                get: function(t) {
                                    var e = k.find.attr(t, "tabindex");
                                    return e ? parseInt(e, 10) : ge.test(t.nodeName) || me.test(t.nodeName) && t.href ? 0 : -1
                                }
                            }
                        },
                        propFix: {
                            for: "htmlFor",
                            class: "className"
                        }
                    }), m.optSelected || (k.propHooks.selected = {
                        get: function(t) {
                            var e = t.parentNode;
                            return e && e.parentNode && e.parentNode.selectedIndex, null
                        },
                        set: function(t) {
                            var e = t.parentNode;
                            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
                        }
                    }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                        k.propFix[this.toLowerCase()] = this
                    })), k.fn.extend({
                        addClass: function(t) {
                            var e, i, n, o, r, s, a, l = 0;
                            if (v(t)) return this.each((function(e) {
                                k(this).addClass(t.call(this, e, ye(this)))
                            }));
                            if ((e = be(t)).length)
                                for (; i = this[l++];)
                                    if (o = ye(i), n = 1 === i.nodeType && " " + ve(o) + " ") {
                                        for (s = 0; r = e[s++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                                        o !== (a = ve(n)) && i.setAttribute("class", a)
                                    }
                            return this
                        },
                        removeClass: function(t) {
                            var e, i, n, o, r, s, a, l = 0;
                            if (v(t)) return this.each((function(e) {
                                k(this).removeClass(t.call(this, e, ye(this)))
                            }));
                            if (!arguments.length) return this.attr("class", "");
                            if ((e = be(t)).length)
                                for (; i = this[l++];)
                                    if (o = ye(i), n = 1 === i.nodeType && " " + ve(o) + " ") {
                                        for (s = 0; r = e[s++];)
                                            for (; n.indexOf(" " + r + " ") > -1;) n = n.replace(" " + r + " ", " ");
                                        o !== (a = ve(n)) && i.setAttribute("class", a)
                                    }
                            return this
                        },
                        toggleClass: function(t, e) {
                            var i = typeof t,
                                n = "string" === i || Array.isArray(t);
                            return "boolean" == typeof e && n ? e ? this.addClass(t) : this.removeClass(t) : v(t) ? this.each((function(i) {
                                k(this).toggleClass(t.call(this, i, ye(this), e), e)
                            })) : this.each((function() {
                                var e, o, r, s;
                                if (n)
                                    for (o = 0, r = k(this), s = be(t); e = s[o++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                                else void 0 !== t && "boolean" !== i || ((e = ye(this)) && J.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : J.get(this, "__className__") || ""))
                            }))
                        },
                        hasClass: function(t) {
                            var e, i, n = 0;
                            for (e = " " + t + " "; i = this[n++];)
                                if (1 === i.nodeType && (" " + ve(ye(i)) + " ").indexOf(e) > -1) return !0;
                            return !1
                        }
                    });
                    var we = /\r/g;
                    k.fn.extend({
                        val: function(t) {
                            var e, i, n, o = this[0];
                            return arguments.length ? (n = v(t), this.each((function(i) {
                                var o;
                                1 === this.nodeType && (null == (o = n ? t.call(this, i, k(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = k.map(o, (function(t) {
                                    return null == t ? "" : t + ""
                                }))), (e = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                            }))) : o ? (e = k.valHooks[o.type] || k.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : "string" == typeof(i = o.value) ? i.replace(we, "") : null == i ? "" : i : void 0
                        }
                    }), k.extend({
                        valHooks: {
                            option: {
                                get: function(t) {
                                    var e = k.find.attr(t, "value");
                                    return null != e ? e : ve(k.text(t))
                                }
                            },
                            select: {
                                get: function(t) {
                                    var e, i, n, o = t.options,
                                        r = t.selectedIndex,
                                        s = "select-one" === t.type,
                                        a = s ? null : [],
                                        l = s ? r + 1 : o.length;
                                    for (n = r < 0 ? l : s ? r : 0; n < l; n++)
                                        if (((i = o[n]).selected || n === r) && !i.disabled && (!i.parentNode.disabled || !O(i.parentNode, "optgroup"))) {
                                            if (e = k(i).val(), s) return e;
                                            a.push(e)
                                        }
                                    return a
                                },
                                set: function(t, e) {
                                    for (var i, n, o = t.options, r = k.makeArray(e), s = o.length; s--;)((n = o[s]).selected = k.inArray(k.valHooks.option.get(n), r) > -1) && (i = !0);
                                    return i || (t.selectedIndex = -1), r
                                }
                            }
                        }
                    }), k.each(["radio", "checkbox"], (function() {
                        k.valHooks[this] = {
                            set: function(t, e) {
                                if (Array.isArray(e)) return t.checked = k.inArray(k(t).val(), e) > -1
                            }
                        }, m.checkOn || (k.valHooks[this].get = function(t) {
                            return null === t.getAttribute("value") ? "on" : t.value
                        })
                    })), m.focusin = "onfocusin" in n;
                    var xe = /^(?:focusinfocus|focusoutblur)$/,
                        Ce = function(t) {
                            t.stopPropagation()
                        };
                    k.extend(k.event, {
                        trigger: function(t, e, i, o) {
                            var r, s, a, l, u, c, d, h, p = [i || b],
                                g = f.call(t, "type") ? t.type : t,
                                m = f.call(t, "namespace") ? t.namespace.split(".") : [];
                            if (s = h = a = i = i || b, 3 !== i.nodeType && 8 !== i.nodeType && !xe.test(g + k.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), u = g.indexOf(":") < 0 && "on" + g, (t = t[k.expando] ? t : new k.Event(g, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : k.makeArray(e, [t]), d = k.event.special[g] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, e))) {
                                if (!o && !d.noBubble && !y(i)) {
                                    for (l = d.delegateType || g, xe.test(l + g) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                                    a === (i.ownerDocument || b) && p.push(a.defaultView || a.parentWindow || n)
                                }
                                for (r = 0;
                                    (s = p[r++]) && !t.isPropagationStopped();) h = s, t.type = r > 1 ? l : d.bindType || g, (c = (J.get(s, "events") || Object.create(null))[t.type] && J.get(s, "handle")) && c.apply(s, e), (c = u && s[u]) && c.apply && Y(s) && (t.result = c.apply(s, e), !1 === t.result && t.preventDefault());
                                return t.type = g, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), e) || !Y(i) || u && v(i[g]) && !y(i) && ((a = i[u]) && (i[u] = null), k.event.triggered = g, t.isPropagationStopped() && h.addEventListener(g, Ce), i[g](), t.isPropagationStopped() && h.removeEventListener(g, Ce), k.event.triggered = void 0, a && (i[u] = a)), t.result
                            }
                        },
                        simulate: function(t, e, i) {
                            var n = k.extend(new k.Event, i, {
                                type: t,
                                isSimulated: !0
                            });
                            k.event.trigger(n, null, e)
                        }
                    }), k.fn.extend({
                        trigger: function(t, e) {
                            return this.each((function() {
                                k.event.trigger(t, e, this)
                            }))
                        },
                        triggerHandler: function(t, e) {
                            var i = this[0];
                            if (i) return k.event.trigger(t, e, i, !0)
                        }
                    }), m.focusin || k.each({
                        focus: "focusin",
                        blur: "focusout"
                    }, (function(t, e) {
                        var i = function(t) {
                            k.event.simulate(e, t.target, k.event.fix(t))
                        };
                        k.event.special[e] = {
                            setup: function() {
                                var n = this.ownerDocument || this.document || this,
                                    o = J.access(n, e);
                                o || n.addEventListener(t, i, !0), J.access(n, e, (o || 0) + 1)
                            },
                            teardown: function() {
                                var n = this.ownerDocument || this.document || this,
                                    o = J.access(n, e) - 1;
                                o ? J.access(n, e, o) : (n.removeEventListener(t, i, !0), J.remove(n, e))
                            }
                        }
                    }));
                    var _e = n.location,
                        ke = {
                            guid: Date.now()
                        },
                        Te = /\?/;
                    k.parseXML = function(t) {
                        var e, i;
                        if (!t || "string" != typeof t) return null;
                        try {
                            e = (new n.DOMParser).parseFromString(t, "text/xml")
                        } catch (t) {}
                        return i = e && e.getElementsByTagName("parsererror")[0], e && !i || k.error("Invalid XML: " + (i ? k.map(i.childNodes, (function(t) {
                            return t.textContent
                        })).join("\n") : t)), e
                    };
                    var Se = /\[\]$/,
                        Ee = /\r?\n/g,
                        Ae = /^(?:submit|button|image|reset|file)$/i,
                        Fe = /^(?:input|select|textarea|keygen)/i;

                    function Oe(t, e, i, n) {
                        var o;
                        if (Array.isArray(e)) k.each(e, (function(e, o) {
                            i || Se.test(t) ? n(t, o) : Oe(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, i, n)
                        }));
                        else if (i || "object" !== C(e)) n(t, e);
                        else
                            for (o in e) Oe(t + "[" + o + "]", e[o], i, n)
                    }
                    k.param = function(t, e) {
                        var i, n = [],
                            o = function(t, e) {
                                var i = v(e) ? e() : e;
                                n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
                            };
                        if (null == t) return "";
                        if (Array.isArray(t) || t.jquery && !k.isPlainObject(t)) k.each(t, (function() {
                            o(this.name, this.value)
                        }));
                        else
                            for (i in t) Oe(i, t[i], e, o);
                        return n.join("&")
                    }, k.fn.extend({
                        serialize: function() {
                            return k.param(this.serializeArray())
                        },
                        serializeArray: function() {
                            return this.map((function() {
                                var t = k.prop(this, "elements");
                                return t ? k.makeArray(t) : this
                            })).filter((function() {
                                var t = this.type;
                                return this.name && !k(this).is(":disabled") && Fe.test(this.nodeName) && !Ae.test(t) && (this.checked || !mt.test(t))
                            })).map((function(t, e) {
                                var i = k(this).val();
                                return null == i ? null : Array.isArray(i) ? k.map(i, (function(t) {
                                    return {
                                        name: e.name,
                                        value: t.replace(Ee, "\r\n")
                                    }
                                })) : {
                                    name: e.name,
                                    value: i.replace(Ee, "\r\n")
                                }
                            })).get()
                        }
                    });
                    var De = /%20/g,
                        Le = /#.*$/,
                        Ie = /([?&])_=[^&]*/,
                        Me = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                        Ne = /^(?:GET|HEAD)$/,
                        $e = /^\/\//,
                        je = {},
                        Re = {},
                        Pe = "*/".concat("*"),
                        He = b.createElement("a");

                    function qe(t) {
                        return function(e, i) {
                            "string" != typeof e && (i = e, e = "*");
                            var n, o = 0,
                                r = e.toLowerCase().match(R) || [];
                            if (v(i))
                                for (; n = r[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
                        }
                    }

                    function Be(t, e, i, n) {
                        var o = {},
                            r = t === Re;

                        function s(a) {
                            var l;
                            return o[a] = !0, k.each(t[a] || [], (function(t, a) {
                                var u = a(e, i, n);
                                return "string" != typeof u || r || o[u] ? r ? !(l = u) : void 0 : (e.dataTypes.unshift(u), s(u), !1)
                            })), l
                        }
                        return s(e.dataTypes[0]) || !o["*"] && s("*")
                    }

                    function We(t, e) {
                        var i, n, o = k.ajaxSettings.flatOptions || {};
                        for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
                        return n && k.extend(!0, t, n), t
                    }
                    He.href = _e.href, k.extend({
                        active: 0,
                        lastModified: {},
                        etag: {},
                        ajaxSettings: {
                            url: _e.href,
                            type: "GET",
                            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_e.protocol),
                            global: !0,
                            processData: !0,
                            async: !0,
                            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                            accepts: {
                                "*": Pe,
                                text: "text/plain",
                                html: "text/html",
                                xml: "application/xml, text/xml",
                                json: "application/json, text/javascript"
                            },
                            contents: {
                                xml: /\bxml\b/,
                                html: /\bhtml/,
                                json: /\bjson\b/
                            },
                            responseFields: {
                                xml: "responseXML",
                                text: "responseText",
                                json: "responseJSON"
                            },
                            converters: {
                                "* text": String,
                                "text html": !0,
                                "text json": JSON.parse,
                                "text xml": k.parseXML
                            },
                            flatOptions: {
                                url: !0,
                                context: !0
                            }
                        },
                        ajaxSetup: function(t, e) {
                            return e ? We(We(t, k.ajaxSettings), e) : We(k.ajaxSettings, t)
                        },
                        ajaxPrefilter: qe(je),
                        ajaxTransport: qe(Re),
                        ajax: function(t, e) {
                            "object" == typeof t && (e = t, t = void 0), e = e || {};
                            var i, o, r, s, a, l, u, c, d, h, f = k.ajaxSetup({}, e),
                                p = f.context || f,
                                g = f.context && (p.nodeType || p.jquery) ? k(p) : k.event,
                                m = k.Deferred(),
                                v = k.Callbacks("once memory"),
                                y = f.statusCode || {},
                                w = {},
                                x = {},
                                C = "canceled",
                                _ = {
                                    readyState: 0,
                                    getResponseHeader: function(t) {
                                        var e;
                                        if (u) {
                                            if (!s)
                                                for (s = {}; e = Me.exec(r);) s[e[1].toLowerCase() + " "] = (s[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                            e = s[t.toLowerCase() + " "]
                                        }
                                        return null == e ? null : e.join(", ")
                                    },
                                    getAllResponseHeaders: function() {
                                        return u ? r : null
                                    },
                                    setRequestHeader: function(t, e) {
                                        return null == u && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, w[t] = e), this
                                    },
                                    overrideMimeType: function(t) {
                                        return null == u && (f.mimeType = t), this
                                    },
                                    statusCode: function(t) {
                                        var e;
                                        if (t)
                                            if (u) _.always(t[_.status]);
                                            else
                                                for (e in t) y[e] = [y[e], t[e]];
                                        return this
                                    },
                                    abort: function(t) {
                                        var e = t || C;
                                        return i && i.abort(e), T(0, e), this
                                    }
                                };
                            if (m.promise(_), f.url = ((t || f.url || _e.href) + "").replace($e, _e.protocol + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(R) || [""], null == f.crossDomain) {
                                l = b.createElement("a");
                                try {
                                    l.href = f.url, l.href = l.href, f.crossDomain = He.protocol + "//" + He.host != l.protocol + "//" + l.host
                                } catch (t) {
                                    f.crossDomain = !0
                                }
                            }
                            if (f.data && f.processData && "string" != typeof f.data && (f.data = k.param(f.data, f.traditional)), Be(je, f, e, _), u) return _;
                            for (d in (c = k.event && f.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ne.test(f.type), o = f.url.replace(Le, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(De, "+")) : (h = f.url.slice(o.length), f.data && (f.processData || "string" == typeof f.data) && (o += (Te.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace(Ie, "$1"), h = (Te.test(o) ? "&" : "?") + "_=" + ke.guid++ + h), f.url = o + h), f.ifModified && (k.lastModified[o] && _.setRequestHeader("If-Modified-Since", k.lastModified[o]), k.etag[o] && _.setRequestHeader("If-None-Match", k.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || e.contentType) && _.setRequestHeader("Content-Type", f.contentType), _.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Pe + "; q=0.01" : "") : f.accepts["*"]), f.headers) _.setRequestHeader(d, f.headers[d]);
                            if (f.beforeSend && (!1 === f.beforeSend.call(p, _, f) || u)) return _.abort();
                            if (C = "abort", v.add(f.complete), _.done(f.success), _.fail(f.error), i = Be(Re, f, e, _)) {
                                if (_.readyState = 1, c && g.trigger("ajaxSend", [_, f]), u) return _;
                                f.async && f.timeout > 0 && (a = n.setTimeout((function() {
                                    _.abort("timeout")
                                }), f.timeout));
                                try {
                                    u = !1, i.send(w, T)
                                } catch (t) {
                                    if (u) throw t;
                                    T(-1, t)
                                }
                            } else T(-1, "No Transport");

                            function T(t, e, s, l) {
                                var d, h, b, w, x, C = e;
                                u || (u = !0, a && n.clearTimeout(a), i = void 0, r = l || "", _.readyState = t > 0 ? 4 : 0, d = t >= 200 && t < 300 || 304 === t, s && (w = function(t, e, i) {
                                    for (var n, o, r, s, a = t.contents, l = t.dataTypes;
                                        "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                                    if (n)
                                        for (o in a)
                                            if (a[o] && a[o].test(n)) {
                                                l.unshift(o);
                                                break
                                            }
                                    if (l[0] in i) r = l[0];
                                    else {
                                        for (o in i) {
                                            if (!l[0] || t.converters[o + " " + l[0]]) {
                                                r = o;
                                                break
                                            }
                                            s || (s = o)
                                        }
                                        r = r || s
                                    }
                                    if (r) return r !== l[0] && l.unshift(r), i[r]
                                }(f, _, s)), !d && k.inArray("script", f.dataTypes) > -1 && k.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function() {}), w = function(t, e, i, n) {
                                    var o, r, s, a, l, u = {},
                                        c = t.dataTypes.slice();
                                    if (c[1])
                                        for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
                                    for (r = c.shift(); r;)
                                        if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())
                                            if ("*" === r) r = l;
                                            else if ("*" !== l && l !== r) {
                                        if (!(s = u[l + " " + r] || u["* " + r]))
                                            for (o in u)
                                                if ((a = o.split(" "))[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                                    !0 === s ? s = u[o] : !0 !== u[o] && (r = a[0], c.unshift(a[1]));
                                                    break
                                                }
                                        if (!0 !== s)
                                            if (s && t.throws) e = s(e);
                                            else try {
                                                e = s(e)
                                            } catch (t) {
                                                return {
                                                    state: "parsererror",
                                                    error: s ? t : "No conversion from " + l + " to " + r
                                                }
                                            }
                                    }
                                    return {
                                        state: "success",
                                        data: e
                                    }
                                }(f, w, _, d), d ? (f.ifModified && ((x = _.getResponseHeader("Last-Modified")) && (k.lastModified[o] = x), (x = _.getResponseHeader("etag")) && (k.etag[o] = x)), 204 === t || "HEAD" === f.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = w.state, h = w.data, d = !(b = w.error))) : (b = C, !t && C || (C = "error", t < 0 && (t = 0))), _.status = t, _.statusText = (e || C) + "", d ? m.resolveWith(p, [h, C, _]) : m.rejectWith(p, [_, C, b]), _.statusCode(y), y = void 0, c && g.trigger(d ? "ajaxSuccess" : "ajaxError", [_, f, d ? h : b]), v.fireWith(p, [_, C]), c && (g.trigger("ajaxComplete", [_, f]), --k.active || k.event.trigger("ajaxStop")))
                            }
                            return _
                        },
                        getJSON: function(t, e, i) {
                            return k.get(t, e, i, "json")
                        },
                        getScript: function(t, e) {
                            return k.get(t, void 0, e, "script")
                        }
                    }), k.each(["get", "post"], (function(t, e) {
                        k[e] = function(t, i, n, o) {
                            return v(i) && (o = o || n, n = i, i = void 0), k.ajax(k.extend({
                                url: t,
                                type: e,
                                dataType: o,
                                data: i,
                                success: n
                            }, k.isPlainObject(t) && t))
                        }
                    })), k.ajaxPrefilter((function(t) {
                        var e;
                        for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
                    })), k._evalUrl = function(t, e, i) {
                        return k.ajax({
                            url: t,
                            type: "GET",
                            dataType: "script",
                            cache: !0,
                            async: !1,
                            global: !1,
                            converters: {
                                "text script": function() {}
                            },
                            dataFilter: function(t) {
                                k.globalEval(t, e, i)
                            }
                        })
                    }, k.fn.extend({
                        wrapAll: function(t) {
                            var e;
                            return this[0] && (v(t) && (t = t.call(this[0])), e = k(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map((function() {
                                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                                return t
                            })).append(this)), this
                        },
                        wrapInner: function(t) {
                            return v(t) ? this.each((function(e) {
                                k(this).wrapInner(t.call(this, e))
                            })) : this.each((function() {
                                var e = k(this),
                                    i = e.contents();
                                i.length ? i.wrapAll(t) : e.append(t)
                            }))
                        },
                        wrap: function(t) {
                            var e = v(t);
                            return this.each((function(i) {
                                k(this).wrapAll(e ? t.call(this, i) : t)
                            }))
                        },
                        unwrap: function(t) {
                            return this.parent(t).not("body").each((function() {
                                k(this).replaceWith(this.childNodes)
                            })), this
                        }
                    }), k.expr.pseudos.hidden = function(t) {
                        return !k.expr.pseudos.visible(t)
                    }, k.expr.pseudos.visible = function(t) {
                        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
                    }, k.ajaxSettings.xhr = function() {
                        try {
                            return new n.XMLHttpRequest
                        } catch (t) {}
                    };
                    var Ve = {
                            0: 200,
                            1223: 204
                        },
                        Ue = k.ajaxSettings.xhr();
                    m.cors = !!Ue && "withCredentials" in Ue, m.ajax = Ue = !!Ue, k.ajaxTransport((function(t) {
                        var e, i;
                        if (m.cors || Ue && !t.crossDomain) return {
                            send: function(o, r) {
                                var s, a = t.xhr();
                                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                                for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(s, o[s]);
                                e = function(t) {
                                    return function() {
                                        e && (e = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Ve[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                            binary: a.response
                                        } : {
                                            text: a.responseText
                                        }, a.getAllResponseHeaders()))
                                    }
                                }, a.onload = e(), i = a.onerror = a.ontimeout = e("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                                    4 === a.readyState && n.setTimeout((function() {
                                        e && i()
                                    }))
                                }, e = e("abort");
                                try {
                                    a.send(t.hasContent && t.data || null)
                                } catch (t) {
                                    if (e) throw t
                                }
                            },
                            abort: function() {
                                e && e()
                            }
                        }
                    })), k.ajaxPrefilter((function(t) {
                        t.crossDomain && (t.contents.script = !1)
                    })), k.ajaxSetup({
                        accepts: {
                            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                        },
                        contents: {
                            script: /\b(?:java|ecma)script\b/
                        },
                        converters: {
                            "text script": function(t) {
                                return k.globalEval(t), t
                            }
                        }
                    }), k.ajaxPrefilter("script", (function(t) {
                        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
                    })), k.ajaxTransport("script", (function(t) {
                        var e, i;
                        if (t.crossDomain || t.scriptAttrs) return {
                            send: function(n, o) {
                                e = k("<script>").attr(t.scriptAttrs || {}).prop({
                                    charset: t.scriptCharset,
                                    src: t.url
                                }).on("load error", i = function(t) {
                                    e.remove(), i = null, t && o("error" === t.type ? 404 : 200, t.type)
                                }), b.head.appendChild(e[0])
                            },
                            abort: function() {
                                i && i()
                            }
                        }
                    }));
                    var ze, Xe = [],
                        Ge = /(=)\?(?=&|$)|\?\?/;
                    k.ajaxSetup({
                        jsonp: "callback",
                        jsonpCallback: function() {
                            var t = Xe.pop() || k.expando + "_" + ke.guid++;
                            return this[t] = !0, t
                        }
                    }), k.ajaxPrefilter("json jsonp", (function(t, e, i) {
                        var o, r, s, a = !1 !== t.jsonp && (Ge.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ge.test(t.data) && "data");
                        if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = v(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ge, "$1" + o) : !1 !== t.jsonp && (t.url += (Te.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
                            return s || k.error(o + " was not called"), s[0]
                        }, t.dataTypes[0] = "json", r = n[o], n[o] = function() {
                            s = arguments
                        }, i.always((function() {
                            void 0 === r ? k(n).removeProp(o) : n[o] = r, t[o] && (t.jsonpCallback = e.jsonpCallback, Xe.push(o)), s && v(r) && r(s[0]), s = r = void 0
                        })), "script"
                    })), m.createHTMLDocument = ((ze = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === ze.childNodes.length), k.parseHTML = function(t, e, i) {
                        return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (m.createHTMLDocument ? ((n = (e = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, e.head.appendChild(n)) : e = b), r = !i && [], (o = D.exec(t)) ? [e.createElement(o[1])] : (o = _t([t], e, r), r && r.length && k(r).remove(), k.merge([], o.childNodes)));
                        var n, o, r
                    }, k.fn.load = function(t, e, i) {
                        var n, o, r, s = this,
                            a = t.indexOf(" ");
                        return a > -1 && (n = ve(t.slice(a)), t = t.slice(0, a)), v(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && k.ajax({
                            url: t,
                            type: o || "GET",
                            dataType: "html",
                            data: e
                        }).done((function(t) {
                            r = arguments, s.html(n ? k("<div>").append(k.parseHTML(t)).find(n) : t)
                        })).always(i && function(t, e) {
                            s.each((function() {
                                i.apply(this, r || [t.responseText, e, t])
                            }))
                        }), this
                    }, k.expr.pseudos.animated = function(t) {
                        return k.grep(k.timers, (function(e) {
                            return t === e.elem
                        })).length
                    }, k.offset = {
                        setOffset: function(t, e, i) {
                            var n, o, r, s, a, l, u = k.css(t, "position"),
                                c = k(t),
                                d = {};
                            "static" === u && (t.style.position = "relative"), a = c.offset(), r = k.css(t, "top"), l = k.css(t, "left"), ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1 ? (s = (n = c.position()).top, o = n.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), v(e) && (e = e.call(t, i, k.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : c.css(d)
                        }
                    }, k.fn.extend({
                        offset: function(t) {
                            if (arguments.length) return void 0 === t ? this : this.each((function(e) {
                                k.offset.setOffset(this, t, e)
                            }));
                            var e, i, n = this[0];
                            return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                                top: e.top + i.pageYOffset,
                                left: e.left + i.pageXOffset
                            }) : {
                                top: 0,
                                left: 0
                            } : void 0
                        },
                        position: function() {
                            if (this[0]) {
                                var t, e, i, n = this[0],
                                    o = {
                                        top: 0,
                                        left: 0
                                    };
                                if ("fixed" === k.css(n, "position")) e = n.getBoundingClientRect();
                                else {
                                    for (e = this.offset(), i = n.ownerDocument, t = n.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === k.css(t, "position");) t = t.parentNode;
                                    t && t !== n && 1 === t.nodeType && ((o = k(t).offset()).top += k.css(t, "borderTopWidth", !0), o.left += k.css(t, "borderLeftWidth", !0))
                                }
                                return {
                                    top: e.top - o.top - k.css(n, "marginTop", !0),
                                    left: e.left - o.left - k.css(n, "marginLeft", !0)
                                }
                            }
                        },
                        offsetParent: function() {
                            return this.map((function() {
                                for (var t = this.offsetParent; t && "static" === k.css(t, "position");) t = t.offsetParent;
                                return t || st
                            }))
                        }
                    }), k.each({
                        scrollLeft: "pageXOffset",
                        scrollTop: "pageYOffset"
                    }, (function(t, e) {
                        var i = "pageYOffset" === e;
                        k.fn[t] = function(n) {
                            return U(this, (function(t, n, o) {
                                var r;
                                if (y(t) ? r = t : 9 === t.nodeType && (r = t.defaultView), void 0 === o) return r ? r[e] : t[n];
                                r ? r.scrollTo(i ? r.pageXOffset : o, i ? o : r.pageYOffset) : t[n] = o
                            }), t, n, arguments.length)
                        }
                    })), k.each(["top", "left"], (function(t, e) {
                        k.cssHooks[e] = Ut(m.pixelPosition, (function(t, i) {
                            if (i) return i = Vt(t, e), Ht.test(i) ? k(t).position()[e] + "px" : i
                        }))
                    })), k.each({
                        Height: "height",
                        Width: "width"
                    }, (function(t, e) {
                        k.each({
                            padding: "inner" + t,
                            content: e,
                            "": "outer" + t
                        }, (function(i, n) {
                            k.fn[n] = function(o, r) {
                                var s = arguments.length && (i || "boolean" != typeof o),
                                    a = i || (!0 === o || !0 === r ? "margin" : "border");
                                return U(this, (function(e, i, o) {
                                    var r;
                                    return y(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? k.css(e, i, a) : k.style(e, i, o, a)
                                }), e, s ? o : void 0, s)
                            }
                        }))
                    })), k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(t, e) {
                        k.fn[e] = function(t) {
                            return this.on(e, t)
                        }
                    })), k.fn.extend({
                        bind: function(t, e, i) {
                            return this.on(t, null, e, i)
                        },
                        unbind: function(t, e) {
                            return this.off(t, null, e)
                        },
                        delegate: function(t, e, i, n) {
                            return this.on(e, t, i, n)
                        },
                        undelegate: function(t, e, i) {
                            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
                        },
                        hover: function(t, e) {
                            return this.mouseenter(t).mouseleave(e || t)
                        }
                    }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(t, e) {
                        k.fn[e] = function(t, i) {
                            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
                        }
                    }));
                    var Ke = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                    k.proxy = function(t, e) {
                        var i, n, o;
                        if ("string" == typeof e && (i = t[e], e = t, t = i), v(t)) return n = a.call(arguments, 2), o = function() {
                            return t.apply(e || this, n.concat(a.call(arguments)))
                        }, o.guid = t.guid = t.guid || k.guid++, o
                    }, k.holdReady = function(t) {
                        t ? k.readyWait++ : k.ready(!0)
                    }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = O, k.isFunction = v, k.isWindow = y, k.camelCase = K, k.type = C, k.now = Date.now, k.isNumeric = function(t) {
                        var e = k.type(t);
                        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
                    }, k.trim = function(t) {
                        return null == t ? "" : (t + "").replace(Ke, "")
                    }, void 0 === (i = function() {
                        return k
                    }.apply(e, [])) || (t.exports = i);
                    var Ye = n.jQuery,
                        Qe = n.$;
                    return k.noConflict = function(t) {
                        return n.$ === k && (n.$ = Qe), t && n.jQuery === k && (n.jQuery = Ye), k
                    }, void 0 === o && (n.jQuery = n.$ = k), k
                }))
            },
            437: function(t, e, i) {
                var n = i(692);
                ! function(t, e, i) {
                    "use strict";

                    function o() {
                        return e.location.hash.replace("#", "")
                    }
                    e.wfaccordion = e.wfaccordion || {}, e.wfaccordion.slugs = e.wfaccordion.slugs || [];
                    var r = function(e, i) {
                        this.$elem = t(e), this.options = i
                    };
                    r.defaults = (r.prototype = {
                        defaults: {
                            accordionGroup: ".js-accordion-group",
                            accordionRoot: ".js-accordion",
                            accordionHeader: ".js-accordion__header",
                            accordionTrigger: ".js-accordion__trigger",
                            accordionPanel: ".js-accordion__panel",
                            disableHashUpdate: !1
                        },
                        init: function() {
                            this.settings = t.extend({}, this.defaults, this.options);
                            var i = this.$elem.find(this.settings.accordionRoot),
                                n = this.$elem.find(this.settings.accordionHeader),
                                r = this;
                            return i.each((function(i, s) {
                                var a, l, u, c, d, h = t(s),
                                    f = h.children(n).find(r.settings.accordionTrigger),
                                    p = r.enhanceWithButton(f),
                                    g = h.children(r.settings.accordionPanel),
                                    m = h.attr("id") || (u = p.text(), c = "àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;", d = new RegExp(c.split("").join("|"), "g"), u.toString().toLowerCase().replace(/\s+/g, "-").replace(d, (function(t) {
                                        return "aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(c.indexOf(t))
                                    })).replace(/&/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")),
                                    v = t.grep(e.wfaccordion.slugs, (function(t, e) {
                                        return t.indexOf(m) >= 0
                                    })).length; - 1 === t.inArray(m, e.wfaccordion.slugs) ? (e.wfaccordion.slugs.push(m), a = m, l = m + "-panel") : (e.wfaccordion.slugs.push(m + "-" + v), a = m + "-" + v, l = m + "-panel-" + v), h.removeAttr("id"), p.attr("aria-controls", l), g.attr("id", l), p.attr("id", a), g.attr("aria-labelledby", a);
                                var y = void 0 !== h.attr("data-wf-accordion-disabled"),
                                    b = function(t) {
                                        return t.attr("id") === o()
                                    }(p),
                                    w = void 0 !== h.attr("data-wf-accordion-expanded") || b;
                                p.attr("aria-expanded", !1), g.attr("aria-hidden", !0), p.attr("aria-disabled", y), p.attr("aria-expanded", w), g.attr("aria-hidden", !w), p.on("click", (function(e) {
                                    var i, n = t(e.target).closest("button"),
                                        s = "false" === n.attr("aria-expanded"),
                                        a = n.attr("id");
                                    y || (n.attr("aria-expanded", s), t("#" + n.attr("aria-controls")).attr("aria-hidden", !s)), "true" !== n.attr("aria-expanded") || a === o() || r.settings.disableHashUpdate ? "false" === n.attr("aria-expanded") && history.replaceState && history.replaceState(null, "", " ") : (i = a, history.replaceState ? history.replaceState(null, "", "#" + i) : location.hash = i)
                                })), p.on("keydown", (function(e) {
                                    var i = t(e.target),
                                        o = e.which.toString(),
                                        s = i.parents(r.settings.accordionHeader),
                                        a = e.ctrlKey && o.match(/33|34/);
                                    if (o.match(/38|40/) || a) {
                                        var l = n.index(s),
                                            u = o.match(/34|40/) ? 1 : -1,
                                            c = n.length;
                                        t(n[(l + c + u) % c]).find(r.settings.accordionTrigger).focus(), e.preventDefault()
                                    } else if (o.match(/35|36/)) {
                                        switch (o) {
                                            case "36":
                                                t(n[0]).find(r.settings.accordionTrigger).focus();
                                                break;
                                            case "35":
                                                t(n[n.length - 1]).find(r.settings.accordionTrigger).focus()
                                        }
                                        e.preventDefault()
                                    }
                                })), b && p.focus()
                            })), this
                        },
                        enhanceWithButton: function(e) {
                            if (e.get("0").nodeName && "button" === e.get("0").nodeName.toLowerCase()) return e;
                            var i = t("<button>" + e.html() + "</button>");
                            return t.each(this.getAttributes(e), (function(t, e) {
                                i.attr(t, e)
                            })), i.attr("type", "button"), e.html(i), this.removeAllAttributes(e), i
                        },
                        getAttributes: function(e) {
                            var i = {};
                            return t.each(e[0].attributes, (function(t, e) {
                                i[e.name] = e.value
                            })), i
                        },
                        removeAllAttributes: function(t) {
                            for (var e = t instanceof n ? t.get("0") : t; e.attributes.length > 0;) e.removeAttribute(e.attributes[0].name)
                        }
                    }).defaults, t.fn.wfAccordion = function(t) {
                        var n = this.length;
                        return this.each((function(o) {
                            if (new r(this, t).init(), o === n - 1) {
                                var s = i.createEvent("Event");
                                s.initEvent("wf.accordions.mounted", !0, !0), e.dispatchEvent(s)
                            }
                        }))
                    }
                }(n, window, document)
            }
        },
        __webpack_module_cache__ = {};

    function __webpack_require__(t) {
        var e = __webpack_module_cache__[t];
        if (void 0 !== e) return e.exports;
        var i = __webpack_module_cache__[t] = {
            exports: {}
        };
        return __webpack_modules__[t].call(i.exports, i, i.exports, __webpack_require__), i.exports
    }
    var __webpack_exports__ = {};
    ! function() {
        "use strict";
        __webpack_require__(739), __webpack_require__(154), __webpack_require__(646), __webpack_require__(934), __webpack_require__(839), __webpack_require__(439), __webpack_require__(305);
        var t = __webpack_require__(692);

        function e(t) {
            if ("function" == typeof t) return "loading" !== document.readyState ? t() : void document.addEventListener("DOMContentLoaded", t, !1)
        }
        t((function() {
            window.yp = window.yp || {}, window.yp.certificateCounter = window.yp.certificateCounter || {};
            var e = {
                    apiUrl: "/certificate-count",
                    jsonCount: "certificate_count",
                    pollingInterval: 3e4,
                    counterElementSelector: ".certificate-counter__number"
                },
                i = t(e.counterElementSelector);

            function n(e, i) {
                t.getJSON(e.apiUrl, (function(t) {
                    i(t[e.jsonCount])
                }))
            }

            function o(i) {
                if (yp.certificateCounter.lastCount !== i) {
                    var n = t(e.counterElementSelector);
                    n.siblings(".sr-only").remove(), n.replaceWith('<div class="certificate-counter__number" aria-hidden="true"></div>');
                    var o = t(e.counterElementSelector),
                        a = [yp.certificateCounter.lastCount, i];
                    delete yp.certificateCounter.counter, yp.prefersReducedMotion ? s(o, i) : r(o, a, i), yp.certificateCounter.lastCount = i
                }
            }

            function r(t, e, i) {
                yp.certificateCounter.counter = new TextRoller({
                    el: t.get(0),
                    values: e,
                    delay: 0,
                    loop: !1
                });
                var n = '<span class="sr-only">' + i + "</span>";
                t.after(n)
            }

            function s(e, i) {
                var n = function(t) {
                    for (var e = t.toString(), i = [], n = 0, o = e.length; n < o; n++) i.push(e.charAt(n));
                    return i
                }(i);
                ! function(e, i) {
                    e.html(""), t(i).each((function() {
                        e.append('<span class="odometer-digit">' + this + "</span>")
                    }))
                }(e.find(".odometer-inside"), n)
            }
            i.length > 0 && (yp.prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches, yp.certificateCounter.lastCount = "", yp.certificateCounter.timer = setInterval((function() {
                n(e, o)
            }), e.pollingInterval), n(e, (function(t) {
                yp.certificateCounter.lastCount = t;
                var e = ["0000000", t];
                yp.prefersReducedMotion ? s(i, t) : r(i, e, t)
            })))
        })), __webpack_require__(437);
        var i = __webpack_require__(692);

        function n(t) {
            return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, n(t)
        }

        function o(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, (void 0, r = function(t) {
                    if ("object" !== n(t) || null === t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var i = e.call(t, "string");
                        if ("object" !== n(i)) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(o.key), "symbol" === n(r) ? r : String(r)), o)
            }
            var r
        }
        e((function() {
            i(".js-accordion-group").wfAccordion()
        })), __webpack_require__(845), e((function() {
            for (var t = document.querySelectorAll("[data-atabs]"), e = 0; e < t.length; e++) new ARIAtabs(t[e], {
                tabListClass: "yp-tabs__tablist",
                tabClass: "yp-tabs__tab",
                tabDisabledClass: "yp-tabs__tab--disabled",
                panelClass: "yp-tabs__panel",
                panelDisabledClass: "yp-tabs__panel--disabled"
            })
        }));
        var r = function() {
            function t(e) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.element = e, this.button = this.element.querySelector(".js-button-disclosure-trigger"), this.popup = document.getElementById(this.button.getAttribute("aria-controls")), this.open = "false" !== this.button.getAttribute("aria-expanded"), this.button.addEventListener("click", this.toggle.bind(this))
            }
            var e, i;
            return e = t, (i = [{
                key: "toggle",
                value: function() {
                    this.popup.classList.toggle("hidden", this.open), this.popup.setAttribute("aria-hidden", this.open), this.button.setAttribute("aria-expanded", !this.open), this.open = !this.open
                }
            }]) && o(e.prototype, i), Object.defineProperty(e, "prototype", {
                writable: !1
            }), t
        }();

        function s(t) {
            return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, s(t)
        }

        function a(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (void 0, o = function(t) {
                    if ("object" !== s(t) || null === t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var i = e.call(t, "string");
                        if ("object" !== s(i)) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(n.key), "symbol" === s(o) ? o : String(o)), n)
            }
            var o
        }

        function l(t, e, i) {
            return e && a(t.prototype, e), i && a(t, i), Object.defineProperty(t, "prototype", {
                writable: !1
            }), t
        }
        e((function() {
            document.querySelectorAll(".js-button-disclosure").forEach((function(t) {
                new r(t)
            }))
        }));
        var u = l((function t(e) {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.element = e, this.scrollHeight = this.element.scrollHeight, this.element.scrollTop = this.scrollHeight
        }));

        function c(t) {
            return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, c(t)
        }

        function d(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (void 0, o = function(t) {
                    if ("object" !== c(t) || null === t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var i = e.call(t, "string");
                        if ("object" !== c(i)) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(n.key), "symbol" === c(o) ? o : String(o)), n)
            }
            var o
        }
        e((function() {
            document.querySelectorAll(".js-scroll-to-bottom-of-container").forEach((function(t) {
                new u(t)
            }))
        })), __webpack_require__(999);
        var h = function() {
            function t(e) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.element = e, this.element.addEventListener("input", this.textareaDidChange.bind(this))
            }
            var e, i;
            return e = t, (i = [{
                key: "textareaDidChange",
                value: function() {
                    this.element.style.height = "auto", this.element.style.height = this.element.scrollHeight + this.getVerticalPadding() + "px"
                }
            }, {
                key: "getVerticalPadding",
                value: function() {
                    return parseFloat(window.getComputedStyle(this.element).paddingTop) + parseFloat(window.getComputedStyle(this.element).paddingBottom)
                }
            }]) && d(e.prototype, i), Object.defineProperty(e, "prototype", {
                writable: !1
            }), t
        }();

        function f(t, e, i) {
            var n;
            return function() {
                var o = this,
                    r = arguments;
                clearTimeout(n), n = setTimeout((function() {
                    n = null, i || t.apply(o, r)
                }), e), i && !n && t.apply(o, r)
            }
        }

        function p(t) {
            return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, p(t)
        }

        function g(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (void 0, o = function(t) {
                    if ("object" !== p(t) || null === t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var i = e.call(t, "string");
                        if ("object" !== p(i)) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(n.key), "symbol" === p(o) ? o : String(o)), n)
            }
            var o
        }
        e((function() {
                document.querySelectorAll("textarea").forEach((function(t) {
                    new h(t)
                }))
            })),
            function() {
                function t(t) {
                    var e = t.currentTarget.getAttribute("href").replace(/#form-group-/g, "");
                    window.setTimeout((function() {
                        document.getElementById(e).focus()
                    }), 100)
                }
                e((function() {
                    var e = document.querySelector(".js-error-summary");
                    if (e) {
                        var i = e.querySelectorAll(".js-form-error-sprunglink");
                        e.focus(), i.forEach((function(e) {
                            e.addEventListener("click", t, !1)
                        }))
                    }
                }))
            }(), __webpack_require__(740),
            function() {
                function t(t, e) {
                    var i = t.dataset.constraintLengthMaxMessage,
                        n = t.dataset.constraintLengthMax,
                        o = t.querySelector(".js-form-widget-constraint-length").value.replace(/(\r\n|\n|\r)/g, "\r\n").length;
                    i = i.replace(/%d/, o), n < o ? e.classList.add("text-danger") : e.classList.remove("text-danger"), e.innerHTML = i
                }
                e((function() {
                    var e = document.querySelectorAll("[data-constraint-length-max]");
                    e && e.forEach((function(e) {
                        var i = e.querySelector(".yp-character-count");
                        t(e, i), i.classList.remove("hidden"), i.setAttribute("aria-live", "polite"), e.addEventListener("keyup", f((function() {
                            t(e, i)
                        }), 300, !1))
                    }))
                }))
            }();
        var m = function() {
            function t(e) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.element = e, this.keyupListener = f(this.copySourceInputValueToRecipientFields.bind(this), 100), this.isChecked = !0, this.checkbox = this.element.querySelector(".js-use-same-value-for-all-languages-checkbox"), this.init()
            }
            var e, i;
            return e = t, (i = [{
                key: "getPublisher",
                value: function() {
                    return this.multilingualFields[0].querySelector("input, textarea")
                }
            }, {
                key: "activateSameValueForAllLanguges",
                value: function() {
                    this.subscribeSingleValueRecipientFields(), this.disableSingleValueRecipientFields()
                }
            }, {
                key: "deactivateSameValueForAllLanguges",
                value: function() {
                    this.unsubscribeSingleValueRecipientFields(), this.enableSingleValueRecipientFields()
                }
            }, {
                key: "enableSingleValueRecipientFields",
                value: function() {
                    this.subscribers.forEach((function(t) {
                        var e = t.querySelector("input, textarea");
                        t.classList.remove("opacity-70"), e.classList.remove("bg-gray-200"), e.removeAttribute("readonly"), e.removeAttribute("tabindex")
                    }))
                }
            }, {
                key: "disableSingleValueRecipientFields",
                value: function() {
                    this.subscribers.forEach((function(t) {
                        var e = t.querySelector("input, textarea");
                        t.classList.add("opacity-70"), e.classList.add("bg-gray-200"), e.setAttribute("readonly", "readonly"), e.setAttribute("tabindex", "-1")
                    }))
                }
            }, {
                key: "subscribeSingleValueRecipientFields",
                value: function() {
                    this.publisher.addEventListener("input", this.keyupListener, !1)
                }
            }, {
                key: "unsubscribeSingleValueRecipientFields",
                value: function() {
                    this.publisher.removeEventListener("input", this.keyupListener, !1)
                }
            }, {
                key: "copySourceInputValueToRecipientFields",
                value: function() {
                    this.subscribers.forEach((function(t) {
                        t.querySelector("input, textarea").value = this.publisher.value
                    }), this)
                }
            }, {
                key: "cacheRecipientFieldValuesInTransientDataAttribute",
                value: function() {
                    this.subscribers.forEach((function(t) {
                        var e = t.querySelector("input, textarea"),
                            i = e.value;
                        i && (e.dataset.languageSpecificValue = i)
                    }))
                }
            }, {
                key: "restoreCachedValuesToRecipientFields",
                value: function() {
                    this.subscribers.forEach((function(t) {
                        var e = t.querySelector("input, textarea");
                        e.dataset.languageSpecificValue && (e.value = e.dataset.languageSpecificValue)
                    }))
                }
            }, {
                key: "init",
                value: function() {
                    if (this.checkbox) return this.multilingualFields = this.element.querySelectorAll(".js-multilingual-field"), this.publisher = this.getPublisher(), this.subscribers = [].slice.call(this.multilingualFields, 1), this.subscribers.forEach((function(t) {
                        this.publisher.value !== t.querySelector("input, textarea").value && (this.isChecked = !1)
                    }), this), this.checkbox.checked = this.isChecked, this.isChecked ? this.activateSameValueForAllLanguges() : this.deactivateSameValueForAllLanguges(), this.cacheRecipientFieldValuesInTransientDataAttribute(), this.checkbox.addEventListener("change", function(t) {
                        t.currentTarget.checked ? (this.cacheRecipientFieldValuesInTransientDataAttribute(), this.copySourceInputValueToRecipientFields(), this.activateSameValueForAllLanguges()) : (this.restoreCachedValuesToRecipientFields(), this.deactivateSameValueForAllLanguges())
                    }.bind(this)), !1
                }
            }]) && g(e.prototype, i), Object.defineProperty(e, "prototype", {
                writable: !1
            }), t
        }();

        function v(t) {
            return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, v(t)
        }

        function y(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (void 0, o = function(t) {
                    if ("object" !== v(t) || null === t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var i = e.call(t, "string");
                        if ("object" !== v(i)) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(n.key), "symbol" === v(o) ? o : String(o)), n)
            }
            var o
        }
        e((function() {
            var t = document.querySelectorAll(".js-multilingual-group");
            t && (t.forEach((function(t) {
                new m(t)
            })), document.addEventListener("FORM_INIT", (function(t) {
                new m(t.detail.context)
            })))
        }));
        var b = function() {
            function t(e) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.element = e, this.list = this.element.querySelector(".js-collection-type-list"), this.entries = this.getEntries(), this.hasAdd = "true" === this.element.dataset.add, this.hasDelete = "true" === this.element.dataset.remove, this.counter = this.element.dataset.entryCounter || this.entries.length, this.init()
            }
            var e, i;
            return e = t, (i = [{
                key: "init",
                value: function() {
                    this.hasAdd && this.enhanceCollectionWithAddAbility(this.element), this.hasDelete && this.enhanceCollectionWithRemoveAbility(), 0 === this.entries.length && this.createCollectionItem()
                }
            }, {
                key: "counterIncrement",
                value: function() {
                    this.counter++
                }
            }, {
                key: "enhanceCollectionWithAddAbility",
                value: function(t) {
                    var e = this;
                    this.addButton = t.querySelector(".js-collection-type-add-button"), this.entryPrototype = this.element.dataset.prototypeWidget, this.addButton.classList.remove("hidden"), this.addButton.addEventListener("click", (function() {
                        e.createCollectionItem({
                            manageFocus: !0
                        })
                    }))
                }
            }, {
                key: "enhanceCollectionWithRemoveAbility",
                value: function() {
                    var t = this;
                    this.removeButtonLabel = this.element.dataset.removeButtonLabel, this.removeButtonClass = this.element.dataset.removeButtonClass, this.entries.forEach((function(e) {
                        e.appendChild(t.createRemoveButton())
                    }))
                }
            }, {
                key: "createCollectionItem",
                value: function(t) {
                    var e = Object.assign({
                            manageFocus: !1
                        }, t),
                        i = this.entryPrototype;
                    i = i.replace(/__name__/g, this.counter);
                    var n = document.createElement(this.element.dataset.entryTag);
                    this.element.dataset.entryClass && n.setAttribute("class", this.element.dataset.entryClass), n.setAttribute("tabindex", "-1"), n.innerHTML = i, this.hasDelete && n.appendChild(this.createRemoveButton()), this.list.appendChild(n), document.dispatchEvent(new CustomEvent("FORM_INIT", {
                        detail: {
                            context: n
                        }
                    })), e.manageFocus && n.focus(), this.counterIncrement(), this.updateEntries(), this.updateListStatus()
                }
            }, {
                key: "createRemoveButton",
                value: function() {
                    var t = this,
                        e = document.createElement("button");
                    return e.setAttribute("type", "button"), this.removeButtonClass && e.setAttribute("class", this.removeButtonClass), e.innerHTML = this.removeButtonLabel, e.addEventListener("click", (function() {
                        t.removeEntry(e.closest(".js-collection-type-entry"))
                    })), e
                }
            }, {
                key: "removeEntry",
                value: function(t) {
                    t.remove(), this.updateEntries(), this.updateListStatus(), this.list.focus()
                }
            }, {
                key: "getEntries",
                value: function() {
                    return this.element.querySelectorAll(".js-collection-type-entry")
                }
            }, {
                key: "updateEntries",
                value: function() {
                    this.entries = this.getEntries()
                }
            }, {
                key: "updateListStatus",
                value: function() {
                    this.entries.length > 1 ? this.list.classList.add("yp-collection__list--enhanced-ui") : this.list.classList.remove("yp-collection__list--enhanced-ui")
                }
            }]) && y(e.prototype, i), Object.defineProperty(e, "prototype", {
                writable: !1
            }), t
        }();

        function w(t) {
            return w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, w(t)
        }

        function x(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n
        }

        function C(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (void 0, o = function(t) {
                    if ("object" !== w(t) || null === t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var i = e.call(t, "string");
                        if ("object" !== w(i)) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(n.key), "symbol" === w(o) ? o : String(o)), n)
            }
            var o
        }
        e((function() {
            document.querySelectorAll(".js-collection-type").forEach((function(t) {
                new b(t)
            }))
        }));
        var _ = function() {
            function t(e) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.element = e, this.element.addEventListener("change", this.handleRadioChoiceChange.bind(this)), this.toggles = this.element.querySelectorAll(".js-conditional-reveal-toggle"), this.widgets = this.element.querySelectorAll("[data-conditional-reveal-toggle]"), this.radios = this.getRadiosAsArrayOfObjects(), this.initialiseToggles(), this.handleRadioChoiceChange()
            }
            var e, i;
            return e = t, (i = [{
                key: "getRadiosAsArrayOfObjects",
                value: function() {
                    var t, e = this;
                    return (t = this.toggles, function(t) {
                        if (Array.isArray(t)) return x(t)
                    }(t) || function(t) {
                        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                    }(t) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return x(t, e);
                            var i = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? x(t, e) : void 0
                        }
                    }(t) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()).map((function(t) {
                        return {
                            toggle: t,
                            widget: e.getWidgetByToggleId(t.id)
                        }
                    }))
                }
            }, {
                key: "getWidgetByToggleId",
                value: function(t) {
                    return this.element.querySelector('[data-conditional-reveal-toggle="' + t + '"]')
                }
            }, {
                key: "initialiseToggles",
                value: function() {
                    this.radios.forEach((function(t) {
                        t.toggle.setAttribute("aria-controls", t.widget.id), t.toggle.setAttribute("aria-expanded", !1)
                    }))
                }
            }, {
                key: "handleRadioChoiceChange",
                value: function() {
                    this.hideWidgetsWithUncheckedToggles();
                    var t = this;
                    this.radios.forEach((function(e) {
                        e.toggle.checked ? t.revealWidget(e.toggle, e.widget) : t.hideWidget(e.toggle, e.widget)
                    }))
                }
            }, {
                key: "revealWidget",
                value: function(t, e) {
                    t.setAttribute("aria-expanded", !0), e.classList.remove("hidden-js")
                }
            }, {
                key: "hideWidget",
                value: function(t, e) {
                    t.setAttribute("aria-expanded", !1), e.classList.add("hidden-js")
                }
            }, {
                key: "hideWidgetsWithUncheckedToggles",
                value: function() {
                    var t = this;
                    this.radios.forEach((function(e) {
                        e.toggle.checked || t.hideWidget(e.toggle, e.widget)
                    }))
                }
            }]) && C(e.prototype, i), Object.defineProperty(e, "prototype", {
                writable: !1
            }), t
        }();

        function k(t) {
            return k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, k(t)
        }

        function T(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (void 0, o = function(t) {
                    if ("object" !== k(t) || null === t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var i = e.call(t, "string");
                        if ("object" !== k(i)) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(n.key), "symbol" === k(o) ? o : String(o)), n)
            }
            var o
        }
        e((function() {
            document.querySelectorAll(".js-conditional-reveal-radio-choice-type").forEach((function(t) {
                new _(t)
            }))
        }));
        var S = function() {
            function t(e) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.element = e, this.toggle = this.element.querySelector("select"), this.toggle.addEventListener("change", this.handleSelectChoiceChange.bind(this)), this.widgets = this.element.querySelectorAll("[data-conditional-reveal-toggle]"), this.widgetIds = [], this.toggleIds = [], this.initialiseToggle(), this.handleSelectChoiceChange()
            }
            var e, i;
            return e = t, (i = [{
                key: "initialiseToggle",
                value: function() {
                    var t = this;
                    this.widgets.forEach((function(e) {
                        t.widgetIds.push(e.id), t.toggleIds.push(e.dataset.conditionalRevealToggle)
                    })), this.toggle.setAttribute("aria-controls", this.widgetIds.join(" ")), this.toggle.setAttribute("aria-expanded", !1)
                }
            }, {
                key: "handleSelectChoiceChange",
                value: function() {
                    this.hideWidgetsWithUncheckedToggles();
                    var t = this;
                    this.widgets.forEach((function(e) {
                        t.toggle.value === e.dataset.conditionalRevealToggle ? t.revealWidget(e) : t.hideWidget(e)
                    }))
                }
            }, {
                key: "setToggleState",
                value: function() {
                    var t = this.toggleIds.indexOf(this.toggle.value) > -1;
                    this.toggle.setAttribute("aria-expanded", t)
                }
            }, {
                key: "revealWidget",
                value: function(t) {
                    t.classList.remove("hidden-js"), this.setToggleState()
                }
            }, {
                key: "hideWidget",
                value: function(t) {
                    t.classList.add("hidden-js"), this.setToggleState()
                }
            }, {
                key: "hideWidgetsWithUncheckedToggles",
                value: function() {
                    var t = this;
                    this.widgets.forEach((function(e) {
                        t.toggle.value !== e.dataset.conditionalRevealToggle && t.hideWidget(e)
                    }))
                }
            }]) && T(e.prototype, i), Object.defineProperty(e, "prototype", {
                writable: !1
            }), t
        }();

        function E(t) {
            return E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, E(t)
        }

        function A(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (void 0, o = function(t) {
                    if ("object" !== E(t) || null === t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var i = e.call(t, "string");
                        if ("object" !== E(i)) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(n.key), "symbol" === E(o) ? o : String(o)), n)
            }
            var o
        }
        e((function() {
            document.querySelectorAll(".js-conditional-reveal-select-choice-type").forEach((function(t) {
                new S(t)
            }))
        }));
        var F = function() {
            function t(e) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.element = e, this.toggle = this.element.querySelector(".js-conditional-reveal-toggle"), this.toggle.addEventListener("change", this.handleToggleChange.bind(this)), this.widget = this.getWidgetByToggleId(this.toggle.id), this.widgetChildInputs = this.widget.querySelectorAll("input, textarea, select"), this.widgetEnabledChildInputs = [], this.init()
            }
            var e, i;
            return e = t, (i = [{
                key: "getWidgetByToggleId",
                value: function(t) {
                    return this.element.querySelector('[data-conditional-reveal-toggle="' + t + '"]')
                }
            }, {
                key: "initialiseToggle",
                value: function() {
                    this.toggle.setAttribute("aria-controls", this.widget.id), this.toggle.setAttribute("aria-expanded", !1);
                    var t = !1;
                    this.widgetChildInputs.forEach((function(e) {
                        var i = -1 !== ["checkbox", "radio"].indexOf(e.getAttribute("type"));
                        (i && !e.classList.contains("js-use-same-value-for-all-languages-checkbox") && e.checked || !i && e.value) && (t = !0)
                    })), this.toggle.checked = t, this.handleToggleChange()
                }
            }, {
                key: "handleToggleChange",
                value: function() {
                    this.toggle.checked ? this.revealWidget() : this.hideWidget()
                }
            }, {
                key: "cacheEnabledWidgetChildren",
                value: function() {
                    var t = this;
                    this.widgetChildInputs.forEach((function(e) {
                        e.getAttribute("disabled") || t.widgetEnabledChildInputs.push(e)
                    }))
                }
            }, {
                key: "enableWidgetChildren",
                value: function() {
                    this.widgetEnabledChildInputs.forEach((function(t) {
                        t.removeAttribute("disabled")
                    }))
                }
            }, {
                key: "disableWidgetChildren",
                value: function() {
                    this.cacheEnabledWidgetChildren(), this.widgetChildInputs.forEach((function(t) {
                        t.setAttribute("disabled", "disabled")
                    }))
                }
            }, {
                key: "revealWidget",
                value: function() {
                    this.widget.classList.remove("hidden-js"), this.toggle.setAttribute("aria-expanded", !0), this.enableWidgetChildren()
                }
            }, {
                key: "hideWidget",
                value: function() {
                    this.widget.classList.add("hidden-js"), this.toggle.setAttribute("aria-expanded", !1), this.cacheEnabledWidgetChildren(), this.disableWidgetChildren()
                }
            }, {
                key: "init",
                value: function() {
                    this.initialiseToggle(), this.cacheEnabledWidgetChildren()
                }
            }]) && A(e.prototype, i), Object.defineProperty(e, "prototype", {
                writable: !1
            }), t
        }();

        function O(t) {
            return O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, O(t)
        }

        function D(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n
        }

        function L(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (void 0, o = function(t) {
                    if ("object" !== O(t) || null === t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var i = e.call(t, "string");
                        if ("object" !== O(i)) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(n.key), "symbol" === O(o) ? o : String(o)), n)
            }
            var o
        }
        e((function() {
            document.querySelectorAll(".js-conditional-reveal-section").forEach((function(t) {
                new F(t)
            }))
        }));
        var I = function() {
            function t(e) {
                var i = this;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.element = e, this.input = e.querySelector("input"), this.listbox = e.querySelector("[role=listbox]"), this.idBase = this.input.id, this.selectedEl = document.getElementById("".concat(this.idBase, "-selected")), this.baseSelectId = this.input.dataset.baseSelectId, this.baseSelectEl = document.getElementById(this.baseSelectId), this.options = JSON.parse(e.dataset.options), this.preselected = this.options.filter((function(t, e) {
                    if (t.selected) return t.origIndex = e, t
                })), this.activeIndex = 0, this.open = !1, this.keys = {
                    Backspace: "Backspace",
                    Clear: "Clear",
                    Down: "ArrowDown",
                    End: "End",
                    Enter: "Enter",
                    Escape: "Escape",
                    Home: "Home",
                    Left: "ArrowLeft",
                    PageDown: "PageDown",
                    PageUp: "PageUp",
                    Right: "ArrowRight",
                    Space: " ",
                    Tab: "Tab",
                    Up: "ArrowUp"
                }, this.menuActions = {
                    Close: 0,
                    CloseSelect: 1,
                    First: 2,
                    Last: 3,
                    Next: 4,
                    Open: 5,
                    Previous: 6,
                    Select: 7,
                    Space: 8,
                    Type: 9
                }, this.input.addEventListener("input", this.onInput.bind(this)), this.input.addEventListener("blur", this.onInputBlur.bind(this)), this.input.addEventListener("click", (function() {
                    return i.updateMenuState(!0)
                })), this.input.addEventListener("keydown", this.onInputKeyDown.bind(this)), this.listbox.addEventListener("blur", this.onInputBlur.bind(this)), this.options.map((function(t, e) {
                    var n = document.createElement("div");
                    n.setAttribute("role", "option"), n.id = t.value, n.className = 0 === e ? "yp-multiple-select__option option-current" : "yp-multiple-select__option", n.setAttribute("aria-selected", "false"), n.innerText = t.label, n.addEventListener("click", (function() {
                        i.onOptionClick(e)
                    })), n.addEventListener("mousedown", i.onOptionMouseDown.bind(i)), i.listbox.appendChild(n)
                })), this.preselected.map((function(t) {
                    i.selectOption(t.origIndex)
                }))
            }
            var e, i;
            return e = t, i = [{
                key: "filterOptions",
                value: function() {
                    var t = arguments.length > 1 ? arguments[1] : void 0,
                        e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).filter((function(i) {
                        return 0 === i.label.toLowerCase().indexOf(t.toLowerCase()) && e.indexOf(i) < 0
                    }))
                }
            }, {
                key: "findMatches",
                value: function(t, e) {
                    return e.split(",").map((function(e) {
                        var i = t.filter((function(t) {
                            return e.trim().toLowerCase() === t.label.toLowerCase()
                        }));
                        return i.length > 0 ? i[0] : null
                    })).filter((function(t) {
                        return null !== t
                    }))
                }
            }, {
                key: "getActionFromKey",
                value: function(t, e) {
                    var i = t.key,
                        n = t.altKey,
                        o = t.ctrlKey,
                        r = t.metaKey;
                    return e || i !== this.keys.Down && i !== this.keys.Enter && i !== this.keys.Space ? i === this.keys.Down ? this.menuActions.Next : i === this.keys.Up ? this.menuActions.Previous : i === this.keys.Home ? this.menuActions.First : i === this.keys.End ? this.menuActions.Last : i === this.keys.Escape ? this.menuActions.Close : i === this.keys.Enter ? this.menuActions.CloseSelect : i === this.keys.Space ? this.menuActions.Space : i !== this.keys.Backspace && i !== this.keys.Clear && (1 !== i.length || n || o || r) ? void 0 : this.menuActions.Type : this.menuActions.Open
                }
            }, {
                key: "getUpdatedIndex",
                value: function(t, e, i) {
                    switch (i) {
                        case this.menuActions.First:
                            return 0;
                        case this.menuActions.Last:
                            return e;
                        case this.menuActions.Previous:
                            return Math.max(0, t - 1);
                        case this.menuActions.Next:
                            return Math.min(e, t + 1);
                        default:
                            return t
                    }
                }
            }, {
                key: "isScrollable",
                value: function(t) {
                    return t && t.clientHeight < t.scrollHeight
                }
            }, {
                key: "maintainScrollVisibility",
                value: function(t, e) {
                    var i = t.offsetHeight,
                        n = t.offsetTop,
                        o = e.offsetHeight,
                        r = e.scrollTop,
                        s = n + i > r + o;
                    n < r ? e.scrollTo(0, n) : s && e.scrollTo(0, n - o + i)
                }
            }, {
                key: "onInput",
                value: function() {
                    var t = this,
                        e = this.input.value,
                        i = this.filterOptions(this.options, e),
                        n = i.filter((function(e) {
                            return e === t.options[t.activeIndex]
                        }));
                    i.length > 0 && !n.length && this.onOptionChange(this.options.indexOf(i[0]));
                    var o = this.options.length > 0;
                    this.open !== o && this.updateMenuState(o, !1)
                }
            }, {
                key: "onInputKeyDown",
                value: function(t) {
                    var e = this.options.length - 1,
                        i = this.getActionFromKey(t, this.open);
                    switch (i) {
                        case this.menuActions.Next:
                        case this.menuActions.Last:
                        case this.menuActions.First:
                        case this.menuActions.Previous:
                            return t.preventDefault(), this.onOptionChange(this.getUpdatedIndex(this.activeIndex, e, i));
                        case this.menuActions.CloseSelect:
                            return t.preventDefault(), this.updateOption(this.activeIndex);
                        case this.menuActions.Close:
                            return t.preventDefault(), this.updateMenuState(!1);
                        case this.menuActions.Open:
                            return this.updateMenuState(!0)
                    }
                }
            }, {
                key: "onInputBlur",
                value: function() {
                    this.ignoreBlur ? this.ignoreBlur = !1 : this.open && this.updateMenuState(!1, !1)
                }
            }, {
                key: "onOptionChange",
                value: function(t) {
                    this.activeIndex = t, this.input.setAttribute("aria-activedescendant", "".concat(this.idBase, "-").concat(t));
                    var e, i = this.element.querySelectorAll("[role=option]");
                    (e = i, function(t) {
                        if (Array.isArray(t)) return D(t)
                    }(e) || function(t) {
                        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                    }(e) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return D(t, e);
                            var i = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? D(t, e) : void 0
                        }
                    }(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()).forEach((function(t) {
                        t.classList.remove("option-current")
                    })), i[t].classList.add("option-current"), this.open && this.isScrollable(this.listbox) && this.maintainScrollVisibility(i[t], this.listbox)
                }
            }, {
                key: "onOptionClick",
                value: function(t) {
                    this.onOptionChange(t), this.updateOption(t), this.input.focus()
                }
            }, {
                key: "onOptionMouseDown",
                value: function() {
                    this.ignoreBlur = !0
                }
            }, {
                key: "removeOption",
                value: function(t) {
                    var e = this.options[t],
                        i = this.element.querySelectorAll("[role=option]");
                    i[t].setAttribute("aria-selected", "false"), i[t].classList.remove("option-selected");
                    var n = document.getElementById("".concat(this.idBase, "-").concat(e.value));
                    this.selectedEl.removeChild(n.parentElement), 0 === this.selectedEl.children.length && this.selectedEl.classList.remove("has-selected-options"), this.baseSelectEl.querySelector('option[value="'.concat(e.value, '"]')).removeAttribute("selected")
                }
            }, {
                key: "selectOption",
                value: function(t) {
                    var e = this,
                        i = this.options[t];
                    this.activeIndex = t;
                    var n = this.element.querySelectorAll("[role=option]");
                    n[t].setAttribute("aria-selected", "true"), n[t].classList.add("option-selected");
                    var o = document.createElement("button"),
                        r = document.createElement("li");
                    o.type = "button", o.id = "".concat(this.idBase, "-").concat(i.value), o.setAttribute("class", "yp-multiple-select__remove-option yp-button yp-button--secondary yp-button--small"), o.setAttribute("aria-describedby", "".concat(this.idBase, "-remove")), o.addEventListener("click", (function() {
                        e.removeOption(t)
                    })), o.innerHTML = i.label + " ", r.appendChild(o), this.selectedEl.appendChild(r), this.selectedEl.classList.add("has-selected-options"), this.baseSelectEl.querySelector('option[value="'.concat(i.value, '"]')).setAttribute("selected", "selected")
                }
            }, {
                key: "updateOption",
                value: function(t) {
                    "true" === this.element.querySelectorAll("[role=option]")[t].getAttribute("aria-selected") ? this.removeOption(t) : this.selectOption(t), this.input.value = ""
                }
            }, {
                key: "updateMenuState",
                value: function(t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this.open = t, this.input.setAttribute("aria-expanded", "".concat(t)), t ? this.element.classList.add("yp-multiple-select--open") : this.element.classList.remove("yp-multiple-select--open"), e && this.input.focus()
                }
            }], i && L(e.prototype, i), Object.defineProperty(e, "prototype", {
                writable: !1
            }), t
        }();
        e((function() {
            document.querySelectorAll(".js-multiple-select-choice-type").forEach((function(t) {
                new I(t)
            }))
        })), __webpack_require__(983), __webpack_require__(679), __webpack_require__(364), __webpack_require__(629), __webpack_require__(891), __webpack_require__(347)
    }()
})();
