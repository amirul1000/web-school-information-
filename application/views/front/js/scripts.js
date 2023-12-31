function Disable_Control_C() {
    var n = String.fromCharCode(event.keyCode).toLowerCase();
    event.ctrlKey && n == "c" && (event.returnValue = !1)
}
if (! function(n, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) {
            if (!n.document) throw new Error("jQuery requires a window with a document");
            return t(n)
        } : t(n)
    }("undefined" != typeof window ? window : this, function(n, t) {
        function ii(n) {
            var t = !!n && "length" in n && n.length,
                r = i.type(n);
            return "function" === r || i.isWindow(n) ? !1 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in n
        }

        function ri(n, t, r) {
            if (i.isFunction(t)) return i.grep(n, function(n, i) {
                return !!t.call(n, i, n) !== r
            });
            if (t.nodeType) return i.grep(n, function(n) {
                return n === t !== r
            });
            if ("string" == typeof t) {
                if (bf.test(t)) return i.filter(t, n, r);
                t = i.filter(t, n)
            }
            return i.grep(n, function(n) {
                return lt.call(t, n) > -1 !== r
            })
        }

        function hr(n, t) {
            while ((n = n[t]) && 1 !== n.nodeType);
            return n
        }

        function kf(n) {
            var t = {};
            return i.each(n.match(h) || [], function(n, i) {
                t[i] = !0
            }), t
        }

        function yt() {
            u.removeEventListener("DOMContentLoaded", yt);
            n.removeEventListener("load", yt);
            i.ready()
        }

        function et() {
            this.expando = i.expando + et.uid++
        }

        function lr(n, t, r) {
            var u;
            if (void 0 === r && 1 === n.nodeType)
                if (u = "data-" + t.replace(cr, "-$&").toLowerCase(), r = n.getAttribute(u), "string" == typeof r) {
                    try {
                        r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : df.test(r) ? i.parseJSON(r) : r
                    } catch (f) {}
                    e.set(n, t, r)
                } else r = void 0;
            return r
        }

        function vr(n, t, r, u) {
            var h, e = 1,
                l = 20,
                c = u ? function() {
                    return u.cur()
                } : function() {
                    return i.css(n, t, "")
                },
                s = c(),
                o = r && r[3] || (i.cssNumber[t] ? "" : "px"),
                f = (i.cssNumber[t] || "px" !== o && +s) && ot.exec(i.css(n, t));
            if (f && f[3] !== o) {
                o = o || f[3];
                r = r || [];
                f = +s || 1;
                do e = e || ".5", f /= e, i.style(n, t, f + o); while (e !== (e = c() / s) && 1 !== e && --l)
            }
            return r && (f = +f || +s || 0, h = r[1] ? f + (r[1] + 1) * r[2] : +r[2], u && (u.unit = o, u.start = f, u.end = h)), h
        }

        function o(n, t) {
            var r = "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(t || "*") : "undefined" != typeof n.querySelectorAll ? n.querySelectorAll(t || "*") : [];
            return void 0 === t || t && i.nodeName(n, t) ? i.merge([n], r) : r
        }

        function ui(n, t) {
            for (var i = 0, u = n.length; u > i; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
        }

        function kr(n, t, r, u, f) {
            for (var e, s, p, a, w, v, h = t.createDocumentFragment(), y = [], l = 0, b = n.length; b > l; l++)
                if (e = n[l], e || 0 === e)
                    if ("object" === i.type(e)) i.merge(y, e.nodeType ? [e] : e);
                    else if (br.test(e)) {
                for (s = s || h.appendChild(t.createElement("div")), p = (pr.exec(e) || ["", ""])[1].toLowerCase(), a = c[p] || c._default, s.innerHTML = a[1] + i.htmlPrefilter(e) + a[2], v = a[0]; v--;) s = s.lastChild;
                i.merge(y, s.childNodes);
                s = h.firstChild;
                s.textContent = ""
            } else y.push(t.createTextNode(e));
            for (h.textContent = "", l = 0; e = y[l++];)
                if (u && i.inArray(e, u) > -1) f && f.push(e);
                else if (w = i.contains(e.ownerDocument, e), s = o(h.appendChild(e), "script"), w && ui(s), r)
                for (v = 0; e = s[v++];) wr.test(e.type || "") && r.push(e);
            return h
        }

        function pt() {
            return !0
        }

        function nt() {
            return !1
        }

        function gr() {
            try {
                return u.activeElement
            } catch (n) {}
        }

        function fi(n, t, r, u, f, e) {
            var o, s;
            if ("object" == typeof t) {
                "string" != typeof r && (u = u || r, r = void 0);
                for (s in t) fi(n, s, r, u, t[s], e);
                return n
            }
            if (null == u && null == f ? (f = r, u = r = void 0) : null == f && ("string" == typeof r ? (f = u, u = void 0) : (f = u, u = r, r = void 0)), f === !1) f = nt;
            else if (!f) return n;
            return 1 === e && (o = f, f = function(n) {
                return i().off(n), o.apply(this, arguments)
            }, f.guid = o.guid || (o.guid = i.guid++)), n.each(function() {
                i.event.add(this, t, f, u, r)
            })
        }

        function nu(n, t) {
            return i.nodeName(n, "table") && i.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
        }

        function ee(n) {
            return n.type = (null !== n.getAttribute("type")) + "/" + n.type, n
        }

        function oe(n) {
            var t = ue.exec(n.type);
            return t ? n.type = t[1] : n.removeAttribute("type"), n
        }

        function tu(n, t) {
            var u, c, f, s, h, l, a, o;
            if (1 === t.nodeType) {
                if (r.hasData(n) && (s = r.access(n), h = r.set(t, s), o = s.events)) {
                    delete h.handle;
                    h.events = {};
                    for (f in o)
                        for (u = 0, c = o[f].length; c > u; u++) i.event.add(t, f, o[f][u])
                }
                e.hasData(n) && (l = e.access(n), a = i.extend({}, l), e.set(t, a))
            }
        }

        function se(n, t) {
            var i = t.nodeName.toLowerCase();
            "input" === i && yr.test(n.type) ? t.checked = n.checked : "input" !== i && "textarea" !== i || (t.defaultValue = n.defaultValue)
        }

        function b(n, t, u, e) {
            t = gi.apply([], t);
            var l, p, c, a, s, w, h = 0,
                v = n.length,
                d = v - 1,
                y = t[0],
                k = i.isFunction(y);
            if (k || v > 1 && "string" == typeof y && !f.checkClone && re.test(y)) return n.each(function(i) {
                var r = n.eq(i);
                k && (t[0] = y.call(this, i, r.html()));
                b(r, t, u, e)
            });
            if (v && (l = kr(t, n[0].ownerDocument, !1, n, e), p = l.firstChild, 1 === l.childNodes.length && (l = p), p || e)) {
                for (c = i.map(o(l, "script"), ee), a = c.length; v > h; h++) s = l, h !== d && (s = i.clone(s, !0, !0), a && i.merge(c, o(s, "script"))), u.call(n[h], s, h);
                if (a)
                    for (w = c[c.length - 1].ownerDocument, i.map(c, oe), h = 0; a > h; h++) s = c[h], wr.test(s.type || "") && !r.access(s, "globalEval") && i.contains(w, s) && (s.src ? i._evalUrl && i._evalUrl(s.src) : i.globalEval(s.textContent.replace(fe, "")))
            }
            return n
        }

        function iu(n, t, r) {
            for (var u, e = t ? i.filter(t, n) : n, f = 0; null != (u = e[f]); f++) r || 1 !== u.nodeType || i.cleanData(o(u)), u.parentNode && (r && i.contains(u.ownerDocument, u) && ui(o(u, "script")), u.parentNode.removeChild(u));
            return n
        }

        function ru(n, t) {
            var r = i(t.createElement(n)).appendTo(t.body),
                u = i.css(r[0], "display");
            return r.detach(), u
        }

        function oi(n) {
            var r = u,
                t = ei[n];
            return t || (t = ru(n, r), "none" !== t && t || (wt = (wt || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement), r = wt[0].contentDocument, r.write(), r.close(), t = ru(n, r), wt.detach()), ei[n] = t), t
        }

        function tt(n, t, r) {
            var o, s, h, u, e = n.style;
            return r = r || bt(n), u = r ? r.getPropertyValue(t) || r[t] : void 0, "" !== u && void 0 !== u || i.contains(n.ownerDocument, n) || (u = i.style(n, t)), r && !f.pixelMarginRight() && si.test(u) && uu.test(t) && (o = e.width, s = e.minWidth, h = e.maxWidth, e.minWidth = e.maxWidth = e.width = u, u = r.width, e.width = o, e.minWidth = s, e.maxWidth = h), void 0 !== u ? u + "" : u
        }

        function ci(n, t) {
            return {
                get: function() {
                    return n() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function su(n) {
            if (n in ou) return n;
            for (var i = n[0].toUpperCase() + n.slice(1), t = eu.length; t--;)
                if (n = eu[t] + i, n in ou) return n
        }

        function hu(n, t, i) {
            var r = ot.exec(t);
            return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t
        }

        function cu(n, t, r, u, f) {
            for (var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > e; e += 2) "margin" === r && (o += i.css(n, r + w[e], !0, f)), u ? ("content" === r && (o -= i.css(n, "padding" + w[e], !0, f)), "margin" !== r && (o -= i.css(n, "border" + w[e] + "Width", !0, f))) : (o += i.css(n, "padding" + w[e], !0, f), "padding" !== r && (o += i.css(n, "border" + w[e] + "Width", !0, f)));
            return o
        }

        function lu(n, t, r) {
            var o = !0,
                u = "width" === t ? n.offsetWidth : n.offsetHeight,
                e = bt(n),
                s = "border-box" === i.css(n, "boxSizing", !1, e);
            if (0 >= u || null == u) {
                if (u = tt(n, t, e), (0 > u || null == u) && (u = n.style[t]), si.test(u)) return u;
                o = s && (f.boxSizingReliable() || u === n.style[t]);
                u = parseFloat(u) || 0
            }
            return u + cu(n, t, r || (s ? "border" : "content"), o, e) + "px"
        }

        function au(n, t) {
            for (var e, u, s, o = [], f = 0, h = n.length; h > f; f++) u = n[f], u.style && (o[f] = r.get(u, "olddisplay"), e = u.style.display, t ? (o[f] || "none" !== e || (u.style.display = ""), "" === u.style.display && st(u) && (o[f] = r.access(u, "olddisplay", oi(u.nodeName)))) : (s = st(u), "none" === e && s || r.set(u, "olddisplay", s ? e : i.css(u, "display"))));
            for (f = 0; h > f; f++) u = n[f], u.style && (t && "none" !== u.style.display && "" !== u.style.display || (u.style.display = t ? o[f] || "" : "none"));
            return n
        }

        function s(n, t, i, r, u) {
            return new s.prototype.init(n, t, i, r, u)
        }

        function pu() {
            return n.setTimeout(function() {
                it = void 0
            }), it = i.now()
        }

        function dt(n, t) {
            var r, u = 0,
                i = {
                    height: n
                };
            for (t = t ? 1 : 0; 4 > u; u += 2 - t) r = w[u], i["margin" + r] = i["padding" + r] = n;
            return t && (i.opacity = i.width = n), i
        }

        function wu(n, t, i) {
            for (var u, f = (l.tweeners[t] || []).concat(l.tweeners["*"]), r = 0, e = f.length; e > r; r++)
                if (u = f[r].call(i, t, n)) return u
        }

        function le(n, t, u) {
            var f, a, p, v, o, w, h, b, l = this,
                y = {},
                s = n.style,
                c = n.nodeType && st(n),
                e = r.get(n, "fxshow");
            u.queue || (o = i._queueHooks(n, "fx"), null == o.unqueued && (o.unqueued = 0, w = o.empty.fire, o.empty.fire = function() {
                o.unqueued || w()
            }), o.unqueued++, l.always(function() {
                l.always(function() {
                    o.unqueued--;
                    i.queue(n, "fx").length || o.empty.fire()
                })
            }));
            1 === n.nodeType && ("height" in t || "width" in t) && (u.overflow = [s.overflow, s.overflowX, s.overflowY], h = i.css(n, "display"), b = "none" === h ? r.get(n, "olddisplay") || oi(n.nodeName) : h, "inline" === b && "none" === i.css(n, "float") && (s.display = "inline-block"));
            u.overflow && (s.overflow = "hidden", l.always(function() {
                s.overflow = u.overflow[0];
                s.overflowX = u.overflow[1];
                s.overflowY = u.overflow[2]
            }));
            for (f in t)
                if (a = t[f], vu.exec(a)) {
                    if (delete t[f], p = p || "toggle" === a, a === (c ? "hide" : "show")) {
                        if ("show" !== a || !e || void 0 === e[f]) continue;
                        c = !0
                    }
                    y[f] = e && e[f] || i.style(n, f)
                } else h = void 0;
            if (i.isEmptyObject(y)) "inline" === ("none" === h ? oi(n.nodeName) : h) && (s.display = h);
            else {
                e ? "hidden" in e && (c = e.hidden) : e = r.access(n, "fxshow", {});
                p && (e.hidden = !c);
                c ? i(n).show() : l.done(function() {
                    i(n).hide()
                });
                l.done(function() {
                    var t;
                    r.remove(n, "fxshow");
                    for (t in y) i.style(n, t, y[t])
                });
                for (f in y) v = wu(c ? e[f] : 0, f, l), f in e || (e[f] = v.start, c && (v.end = v.start, v.start = "width" === f || "height" === f ? 1 : 0))
            }
        }

        function ae(n, t) {
            var r, f, e, u, o;
            for (r in n)
                if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                    u = o.expand(u);
                    delete n[f];
                    for (r in u) r in n || (n[r] = u[r], t[r] = e)
                } else t[f] = e
        }

        function l(n, t, r) {
            var e, o, s = 0,
                a = l.prefilters.length,
                f = i.Deferred().always(function() {
                    delete c.elem
                }),
                c = function() {
                    if (o) return !1;
                    for (var s = it || pu(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, e = u.tweens.length; e > r; r++) u.tweens[r].run(i);
                    return f.notifyWith(n, [u, i, t]), 1 > i && e ? t : (f.resolveWith(n, [u]), !1)
                },
                u = f.promise({
                    elem: n,
                    props: i.extend({}, t),
                    opts: i.extend(!0, {
                        specialEasing: {},
                        easing: i.easing._default
                    }, r),
                    originalProperties: t,
                    originalOptions: r,
                    startTime: it || pu(),
                    duration: r.duration,
                    tweens: [],
                    createTween: function(t, r) {
                        var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(f), f
                    },
                    stop: function(t) {
                        var i = 0,
                            r = t ? u.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; r > i; i++) u.tweens[i].run(1);
                        return t ? (f.notifyWith(n, [u, 1, 0]), f.resolveWith(n, [u, t])) : f.rejectWith(n, [u, t]), this
                    }
                }),
                h = u.props;
            for (ae(h, u.opts.specialEasing); a > s; s++)
                if (e = l.prefilters[s].call(u, n, h, u.opts)) return i.isFunction(e.stop) && (i._queueHooks(u.elem, u.opts.queue).stop = i.proxy(e.stop, e)), e;
            return i.map(h, wu, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, {
                elem: n,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function k(n) {
            return n.getAttribute && n.getAttribute("class") || ""
        }

        function ff(n) {
            return function(t, r) {
                "string" != typeof t && (r = t, t = "*");
                var u, f = 0,
                    e = t.toLowerCase().match(h) || [];
                if (i.isFunction(r))
                    while (u = e[f++]) "+" === u[0] ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
            }
        }

        function ef(n, t, r, u) {
            function e(s) {
                var h;
                return f[s] = !0, i.each(n[s] || [], function(n, i) {
                    var s = i(t, r, u);
                    return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1)
                }), h
            }
            var f = {},
                o = n === yi;
            return e(t.dataTypes[0]) || !f["*"] && e("*")
        }

        function wi(n, t) {
            var r, u, f = i.ajaxSettings.flatOptions || {};
            for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
            return u && i.extend(!0, n, u), n
        }

        function be(n, t, i) {
            for (var e, u, f, o, s = n.contents, r = n.dataTypes;
                "*" === r[0];) r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
            if (e)
                for (u in s)
                    if (s[u] && s[u].test(e)) {
                        r.unshift(u);
                        break
                    }
            if (r[0] in i) f = r[0];
            else {
                for (u in i) {
                    if (!r[0] || n.converters[u + " " + r[0]]) {
                        f = u;
                        break
                    }
                    o || (o = u)
                }
                f = f || o
            }
            if (f) return (f !== r[0] && r.unshift(f), i[f])
        }

        function ke(n, t, i, r) {
            var h, u, f, s, e, o = {},
                c = n.dataTypes.slice();
            if (c[1])
                for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
            for (u = c.shift(); u;)
                if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
                    if ("*" === u) u = e;
                    else if ("*" !== e && e !== u) {
                if (f = o[e + " " + u] || o["* " + u], !f)
                    for (h in o)
                        if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                            f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
                            break
                        }
                if (f !== !0)
                    if (f && n.throws) t = f(t);
                    else try {
                        t = f(t)
                    } catch (l) {
                        return {
                            state: "parsererror",
                            error: f ? l : "No conversion from " + e + " to " + u
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function bi(n, t, r, u) {
            var f;
            if (i.isArray(t)) i.each(t, function(t, i) {
                r || ge.test(n) ? u(n, i) : bi(n + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, r, u)
            });
            else if (r || "object" !== i.type(t)) u(n, t);
            else
                for (f in t) bi(n + "[" + f + "]", t[f], r, u)
        }

        function hf(n) {
            return i.isWindow(n) ? n : 9 === n.nodeType && n.defaultView
        }
        var y = [],
            u = n.document,
            v = y.slice,
            gi = y.concat,
            ti = y.push,
            lt = y.indexOf,
            at = {},
            af = at.toString,
            ft = at.hasOwnProperty,
            f = {},
            nr = "2.2.4",
            i = function(n, t) {
                return new i.fn.init(n, t)
            },
            vf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            yf = /^-ms-/,
            pf = /-([\da-z])/gi,
            wf = function(n, t) {
                return t.toUpperCase()
            },
            p, ur, fr, er, or, sr, h, vt, a, g, br, wt, ei, it, kt, vu, yu, bu, rt, ku, du, gt, gu, nf, li, sf, ut, ki, ni, di, cf, lf;
        i.fn = i.prototype = {
            jquery: nr,
            constructor: i,
            selector: "",
            length: 0,
            toArray: function() {
                return v.call(this)
            },
            get: function(n) {
                return null != n ? 0 > n ? this[n + this.length] : this[n] : v.call(this)
            },
            pushStack: function(n) {
                var t = i.merge(this.constructor(), n);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(n) {
                return i.each(this, n)
            },
            map: function(n) {
                return this.pushStack(i.map(this, function(t, i) {
                    return n.call(t, i, t)
                }))
            },
            slice: function() {
                return this.pushStack(v.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(n) {
                var i = this.length,
                    t = +n + (0 > n ? i : 0);
                return this.pushStack(t >= 0 && i > t ? [this[t]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: ti,
            sort: y.sort,
            splice: y.splice
        };
        i.extend = i.fn.extend = function() {
            var e, f, r, t, o, s, n = arguments[0] || {},
                u = 1,
                c = arguments.length,
                h = !1;
            for ("boolean" == typeof n && (h = n, n = arguments[u] || {}, u++), "object" == typeof n || i.isFunction(n) || (n = {}), u === c && (n = this, u--); c > u; u++)
                if (null != (e = arguments[u]))
                    for (f in e) r = n[f], t = e[f], n !== t && (h && t && (i.isPlainObject(t) || (o = i.isArray(t))) ? (o ? (o = !1, s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f] = i.extend(h, s, t)) : void 0 !== t && (n[f] = t));
            return n
        };
        i.extend({
            expando: "jQuery" + (nr + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(n) {
                throw new Error(n);
            },
            noop: function() {},
            isFunction: function(n) {
                return "function" === i.type(n)
            },
            isArray: Array.isArray,
            isWindow: function(n) {
                return null != n && n === n.window
            },
            isNumeric: function(n) {
                var t = n && n.toString();
                return !i.isArray(n) && t - parseFloat(t) + 1 >= 0
            },
            isPlainObject: function(n) {
                var t;
                if ("object" !== i.type(n) || n.nodeType || i.isWindow(n) || n.constructor && !ft.call(n, "constructor") && !ft.call(n.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (t in n);
                return void 0 === t || ft.call(n, t)
            },
            isEmptyObject: function(n) {
                for (var t in n) return !1;
                return !0
            },
            type: function(n) {
                return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? at[af.call(n)] || "object" : typeof n
            },
            globalEval: function(n) {
                var t, r = eval;
                n = i.trim(n);
                n && (1 === n.indexOf("use strict") ? (t = u.createElement("script"), t.text = n, u.head.appendChild(t).parentNode.removeChild(t)) : r(n))
            },
            camelCase: function(n) {
                return n.replace(yf, "ms-").replace(pf, wf)
            },
            nodeName: function(n, t) {
                return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(n, t) {
                var r, i = 0;
                if (ii(n)) {
                    for (r = n.length; r > i; i++)
                        if (t.call(n[i], i, n[i]) === !1) break
                } else
                    for (i in n)
                        if (t.call(n[i], i, n[i]) === !1) break;
                return n
            },
            trim: function(n) {
                return null == n ? "" : (n + "").replace(vf, "")
            },
            makeArray: function(n, t) {
                var r = t || [];
                return null != n && (ii(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : ti.call(r, n)), r
            },
            inArray: function(n, t, i) {
                return null == t ? -1 : lt.call(t, n, i)
            },
            merge: function(n, t) {
                for (var u = +t.length, i = 0, r = n.length; u > i; i++) n[r++] = t[i];
                return n.length = r, n
            },
            grep: function(n, t, i) {
                for (var u, f = [], r = 0, e = n.length, o = !i; e > r; r++) u = !t(n[r], r), u !== o && f.push(n[r]);
                return f
            },
            map: function(n, t, i) {
                var e, u, r = 0,
                    f = [];
                if (ii(n))
                    for (e = n.length; e > r; r++) u = t(n[r], r, i), null != u && f.push(u);
                else
                    for (r in n) u = t(n[r], r, i), null != u && f.push(u);
                return gi.apply([], f)
            },
            guid: 1,
            proxy: function(n, t) {
                var u, f, r;
                return "string" == typeof t && (u = n[t], t = n, n = u), i.isFunction(n) ? (f = v.call(arguments, 2), r = function() {
                    return n.apply(t || this, f.concat(v.call(arguments)))
                }, r.guid = n.guid = n.guid || i.guid++, r) : void 0
            },
            now: Date.now,
            support: f
        });
        "function" == typeof Symbol && (i.fn[Symbol.iterator] = y[Symbol.iterator]);
        i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) {
            at["[object " + t + "]"] = t.toLowerCase()
        });
        p = function(n) {
            function u(n, t, r, u) {
                var l, w, a, s, nt, d, y, g, p = t && t.ownerDocument,
                    v = t ? t.nodeType : 9;
                if (r = r || [], "string" != typeof n || !n || 1 !== v && 9 !== v && 11 !== v) return r;
                if (!u && ((t ? t.ownerDocument || t : c) !== i && b(t), t = t || i, h)) {
                    if (11 !== v && (d = sr.exec(n)))
                        if (l = d[1]) {
                            if (9 === v) {
                                if (!(a = t.getElementById(l))) return r;
                                if (a.id === l) return r.push(a), r
                            } else if (p && (a = p.getElementById(l)) && et(t, a) && a.id === l) return r.push(a), r
                        } else {
                            if (d[2]) return k.apply(r, t.getElementsByTagName(n)), r;
                            if ((l = d[3]) && f.getElementsByClassName && t.getElementsByClassName) return k.apply(r, t.getElementsByClassName(l)), r
                        }
                    if (f.qsa && !lt[n + " "] && (!o || !o.test(n))) {
                        if (1 !== v) p = t, g = n;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((s = t.getAttribute("id")) ? s = s.replace(hr, "\\$&") : t.setAttribute("id", s = e), y = ft(n), w = y.length, nt = yi.test(s) ? "#" + s : "[id='" + s + "']"; w--;) y[w] = nt + " " + yt(y[w]);
                            g = y.join(",");
                            p = gt.test(n) && ii(t.parentNode) || t
                        }
                        if (g) try {
                            return k.apply(r, p.querySelectorAll(g)), r
                        } catch (tt) {} finally {
                            s === e && t.removeAttribute("id")
                        }
                    }
                }
                return si(n.replace(at, "$1"), t, r, u)
            }

            function ni() {
                function n(r, u) {
                    return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u
                }
                var i = [];
                return n
            }

            function l(n) {
                return n[e] = !0, n
            }

            function a(n) {
                var t = i.createElement("div");
                try {
                    return !!n(t)
                } catch (r) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t);
                    t = null
                }
            }

            function ti(n, i) {
                for (var r = n.split("|"), u = r.length; u--;) t.attrHandle[r[u]] = i
            }

            function wi(n, t) {
                var i = t && n,
                    r = i && 1 === n.nodeType && 1 === t.nodeType && (~t.sourceIndex || li) - (~n.sourceIndex || li);
                if (r) return r;
                if (i)
                    while (i = i.nextSibling)
                        if (i === t) return -1;
                return n ? 1 : -1
            }

            function cr(n) {
                return function(t) {
                    var i = t.nodeName.toLowerCase();
                    return "input" === i && t.type === n
                }
            }

            function lr(n) {
                return function(t) {
                    var i = t.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && t.type === n
                }
            }

            function it(n) {
                return l(function(t) {
                    return t = +t, l(function(i, r) {
                        for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                    })
                })
            }

            function ii(n) {
                return n && "undefined" != typeof n.getElementsByTagName && n
            }

            function bi() {}

            function yt(n) {
                for (var t = 0, r = n.length, i = ""; r > t; t++) i += n[t].value;
                return i
            }

            function ri(n, t, i) {
                var r = t.dir,
                    u = i && "parentNode" === r,
                    f = ki++;
                return t.first ? function(t, i, f) {
                    while (t = t[r])
                        if (1 === t.nodeType || u) return n(t, i, f)
                } : function(t, i, o) {
                    var s, h, c, l = [v, f];
                    if (o) {
                        while (t = t[r])
                            if ((1 === t.nodeType || u) && n(t, i, o)) return !0
                    } else
                        while (t = t[r])
                            if (1 === t.nodeType || u) {
                                if (c = t[e] || (t[e] = {}), h = c[t.uniqueID] || (c[t.uniqueID] = {}), (s = h[r]) && s[0] === v && s[1] === f) return l[2] = s[2];
                                if (h[r] = l, l[2] = n(t, i, o)) return !0
                            }
                }
            }

            function ui(n) {
                return n.length > 1 ? function(t, i, r) {
                    for (var u = n.length; u--;)
                        if (!n[u](t, i, r)) return !1;
                    return !0
                } : n[0]
            }

            function ar(n, t, i) {
                for (var r = 0, f = t.length; f > r; r++) u(n, t[r], i);
                return i
            }

            function pt(n, t, i, r, u) {
                for (var e, o = [], f = 0, s = n.length, h = null != t; s > f; f++)(e = n[f]) && (i && !i(e, r, u) || (o.push(e), h && t.push(f)));
                return o
            }

            function fi(n, t, i, r, u, f) {
                return r && !r[e] && (r = fi(r)), u && !u[e] && (u = fi(u, f)), l(function(f, e, o, s) {
                    var l, c, a, p = [],
                        y = [],
                        w = e.length,
                        b = f || ar(t || "*", o.nodeType ? [o] : o, []),
                        v = !n || !f && t ? b : pt(b, p, n, o, s),
                        h = i ? u || (f ? n : w || r) ? [] : e : v;
                    if (i && i(v, h, o, s), r)
                        for (l = pt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                    if (f) {
                        if (u || n) {
                            if (u) {
                                for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                                u(null, h = [], l, s)
                            }
                            for (c = h.length; c--;)(a = h[c]) && (l = u ? nt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                        }
                    } else h = pt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : k.apply(e, h)
                })
            }

            function ei(n) {
                for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = ri(function(n) {
                        return n === o
                    }, c, !0), a = ri(function(n) {
                        return nt(o, n) > -1
                    }, c, !0), f = [function(n, t, i) {
                        var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                        return o = null, r
                    }]; s > i; i++)
                    if (u = t.relative[n[i].type]) f = [ri(ui(f), u)];
                    else {
                        if (u = t.filter[n[i].type].apply(null, n[i].matches), u[e]) {
                            for (r = ++i; s > r; r++)
                                if (t.relative[n[r].type]) break;
                            return fi(i > 1 && ui(f), i > 1 && yt(n.slice(0, i - 1).concat({
                                value: " " === n[i - 2].type ? "*" : ""
                            })).replace(at, "$1"), u, r > i && ei(n.slice(i, r)), s > r && ei(n = n.slice(r)), s > r && yt(n))
                        }
                        f.push(u)
                    }
                return ui(f)
            }

            function vr(n, r) {
                var f = r.length > 0,
                    e = n.length > 0,
                    o = function(o, s, c, l, a) {
                        var y, nt, d, g = 0,
                            p = "0",
                            tt = o && [],
                            w = [],
                            it = ht,
                            rt = o || e && t.find.TAG("*", a),
                            ut = v += null == it ? 1 : Math.random() || .1,
                            ft = rt.length;
                        for (a && (ht = s === i || s || a); p !== ft && null != (y = rt[p]); p++) {
                            if (e && y) {
                                for (nt = 0, s || y.ownerDocument === i || (b(y), c = !h); d = n[nt++];)
                                    if (d(y, s || i, c)) {
                                        l.push(y);
                                        break
                                    }
                                a && (v = ut)
                            }
                            f && ((y = !d && y) && g--, o && tt.push(y))
                        }
                        if (g += p, f && p !== g) {
                            for (nt = 0; d = r[nt++];) d(tt, w, s, c);
                            if (o) {
                                if (g > 0)
                                    while (p--) tt[p] || w[p] || (w[p] = gi.call(l));
                                w = pt(w)
                            }
                            k.apply(l, w);
                            a && !o && w.length > 0 && g + r.length > 1 && u.uniqueSort(l)
                        }
                        return a && (v = ut, ht = it), tt
                    };
                return f ? l(o) : o
            }
            var rt, f, t, st, oi, ft, wt, si, ht, w, ut, b, i, s, h, o, d, ct, et, e = "sizzle" + 1 * new Date,
                c = n.document,
                v = 0,
                ki = 0,
                hi = ni(),
                ci = ni(),
                lt = ni(),
                bt = function(n, t) {
                    return n === t && (ut = !0), 0
                },
                li = -2147483648,
                di = {}.hasOwnProperty,
                g = [],
                gi = g.pop,
                nr = g.push,
                k = g.push,
                ai = g.slice,
                nt = function(n, t) {
                    for (var i = 0, r = n.length; r > i; i++)
                        if (n[i] === t) return i;
                    return -1
                },
                kt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                r = "[\\x20\\t\\r\\n\\f]",
                tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                vi = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]",
                dt = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + vi + ")*)|.*)\\)|)",
                tr = new RegExp(r + "+", "g"),
                at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
                ir = new RegExp("^" + r + "*," + r + "*"),
                rr = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
                ur = new RegExp("=" + r + "*([^\\]'\"]*?)" + r + "*\\]", "g"),
                fr = new RegExp(dt),
                yi = new RegExp("^" + tt + "$"),
                vt = {
                    ID: new RegExp("^#(" + tt + ")"),
                    CLASS: new RegExp("^\\.(" + tt + ")"),
                    TAG: new RegExp("^(" + tt + "|[*])"),
                    ATTR: new RegExp("^" + vi),
                    PSEUDO: new RegExp("^" + dt),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + kt + ")$", "i"),
                    needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i")
                },
                er = /^(?:input|select|textarea|button)$/i,
                or = /^h\d$/i,
                ot = /^[^{]+\{\s*\[native \w/,
                sr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                gt = /[+~]/,
                hr = /'|\\/g,
                y = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)", "ig"),
                p = function(n, t, i) {
                    var r = "0x" + t - 65536;
                    return r !== r || i ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                },
                pi = function() {
                    b()
                };
            try {
                k.apply(g = ai.call(c.childNodes), c.childNodes);
                g[c.childNodes.length].nodeType
            } catch (yr) {
                k = {
                    apply: g.length ? function(n, t) {
                        nr.apply(n, ai.call(t))
                    } : function(n, t) {
                        for (var i = n.length, r = 0; n[i++] = t[r++];);
                        n.length = i - 1
                    }
                }
            }
            f = u.support = {};
            oi = u.isXML = function(n) {
                var t = n && (n.ownerDocument || n).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            };
            b = u.setDocument = function(n) {
                var v, u, l = n ? n.ownerDocument || n : c;
                return l !== i && 9 === l.nodeType && l.documentElement ? (i = l, s = i.documentElement, h = !oi(i), (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", pi, !1) : u.attachEvent && u.attachEvent("onunload", pi)), f.attributes = a(function(n) {
                    return n.className = "i", !n.getAttribute("className")
                }), f.getElementsByTagName = a(function(n) {
                    return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length
                }), f.getElementsByClassName = ot.test(i.getElementsByClassName), f.getById = a(function(n) {
                    return s.appendChild(n).id = e, !i.getElementsByName || !i.getElementsByName(e).length
                }), f.getById ? (t.find.ID = function(n, t) {
                    if ("undefined" != typeof t.getElementById && h) {
                        var i = t.getElementById(n);
                        return i ? [i] : []
                    }
                }, t.filter.ID = function(n) {
                    var t = n.replace(y, p);
                    return function(n) {
                        return n.getAttribute("id") === t
                    }
                }) : (delete t.find.ID, t.filter.ID = function(n) {
                    var t = n.replace(y, p);
                    return function(n) {
                        var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id");
                        return i && i.value === t
                    }
                }), t.find.TAG = f.getElementsByTagName ? function(n, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : f.qsa ? t.querySelectorAll(n) : void 0
                } : function(n, t) {
                    var i, r = [],
                        f = 0,
                        u = t.getElementsByTagName(n);
                    if ("*" === n) {
                        while (i = u[f++]) 1 === i.nodeType && r.push(i);
                        return r
                    }
                    return u
                }, t.find.CLASS = f.getElementsByClassName && function(n, t) {
                    if ("undefined" != typeof t.getElementsByClassName && h) return t.getElementsByClassName(n)
                }, d = [], o = [], (f.qsa = ot.test(i.querySelectorAll)) && (a(function(n) {
                    s.appendChild(n).innerHTML = "<a id='" + e + "'><\/a><select id='" + e + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
                    n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
                    n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + kt + ")");
                    n.querySelectorAll("[id~=" + e + "-]").length || o.push("~=");
                    n.querySelectorAll(":checked").length || o.push(":checked");
                    n.querySelectorAll("a#" + e + "+*").length || o.push(".#.+[+~]")
                }), a(function(n) {
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden");
                    n.appendChild(t).setAttribute("name", "D");
                    n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
                    n.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled");
                    n.querySelectorAll("*,:x");
                    o.push(",.*:")
                })), (f.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function(n) {
                    f.disconnectedMatch = ct.call(n, "div");
                    ct.call(n, "[s!='']:x");
                    d.push("!=", dt)
                }), o = o.length && new RegExp(o.join("|")), d = d.length && new RegExp(d.join("|")), v = ot.test(s.compareDocumentPosition), et = v || ot.test(s.contains) ? function(n, t) {
                    var r = 9 === n.nodeType ? n.documentElement : n,
                        i = t && t.parentNode;
                    return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
                } : function(n, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === n) return !0;
                    return !1
                }, bt = v ? function(n, t) {
                    if (n === t) return ut = !0, 0;
                    var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
                    return r ? r : (r = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, 1 & r || !f.sortDetached && t.compareDocumentPosition(n) === r ? n === i || n.ownerDocument === c && et(c, n) ? -1 : t === i || t.ownerDocument === c && et(c, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : 4 & r ? -1 : 1)
                } : function(n, t) {
                    if (n === t) return ut = !0, 0;
                    var r, u = 0,
                        o = n.parentNode,
                        s = t.parentNode,
                        f = [n],
                        e = [t];
                    if (!o || !s) return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                    if (o === s) return wi(n, t);
                    for (r = n; r = r.parentNode;) f.unshift(r);
                    for (r = t; r = r.parentNode;) e.unshift(r);
                    while (f[u] === e[u]) u++;
                    return u ? wi(f[u], e[u]) : f[u] === c ? -1 : e[u] === c ? 1 : 0
                }, i) : i
            };
            u.matches = function(n, t) {
                return u(n, null, null, t)
            };
            u.matchesSelector = function(n, t) {
                if ((n.ownerDocument || n) !== i && b(n), t = t.replace(ur, "='$1']"), f.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t))) try {
                    var r = ct.call(n, t);
                    if (r || f.disconnectedMatch || n.document && 11 !== n.document.nodeType) return r
                } catch (e) {}
                return u(t, i, null, [n]).length > 0
            };
            u.contains = function(n, t) {
                return (n.ownerDocument || n) !== i && b(n), et(n, t)
            };
            u.attr = function(n, r) {
                (n.ownerDocument || n) !== i && b(n);
                var e = t.attrHandle[r.toLowerCase()],
                    u = e && di.call(t.attrHandle, r.toLowerCase()) ? e(n, r, !h) : void 0;
                return void 0 !== u ? u : f.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
            };
            u.error = function(n) {
                throw new Error("Syntax error, unrecognized expression: " + n);
            };
            u.uniqueSort = function(n) {
                var r, u = [],
                    t = 0,
                    i = 0;
                if (ut = !f.detectDuplicates, w = !f.sortStable && n.slice(0), n.sort(bt), ut) {
                    while (r = n[i++]) r === n[i] && (t = u.push(i));
                    while (t--) n.splice(u[t], 1)
                }
                return w = null, n
            };
            st = u.getText = function(n) {
                var r, i = "",
                    u = 0,
                    t = n.nodeType;
                if (t) {
                    if (1 === t || 9 === t || 11 === t) {
                        if ("string" == typeof n.textContent) return n.textContent;
                        for (n = n.firstChild; n; n = n.nextSibling) i += st(n)
                    } else if (3 === t || 4 === t) return n.nodeValue
                } else
                    while (r = n[u++]) i += st(r);
                return i
            };
            t = u.selectors = {
                cacheLength: 50,
                createPseudo: l,
                match: vt,
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
                    ATTR: function(n) {
                        return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                    },
                    CHILD: function(n) {
                        return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n
                    },
                    PSEUDO: function(n) {
                        var i, t = !n[6] && n[2];
                        return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && fr.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(n) {
                        var t = n.replace(y, p).toLowerCase();
                        return "*" === n ? function() {
                            return !0
                        } : function(n) {
                            return n.nodeName && n.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(n) {
                        var t = hi[n + " "];
                        return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function(n) {
                            return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, t, i) {
                        return function(r) {
                            var f = u.attr(r, n);
                            return null == f ? "!=" === t : t ? (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f.replace(tr, " ") + " ").indexOf(i) > -1 : "|=" === t ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(n, t, i, r, u) {
                        var s = "nth" !== n.slice(0, 3),
                            o = "last" !== n.slice(-4),
                            f = "of-type" === t;
                        return 1 === r && 0 === u ? function(n) {
                            return !!n.parentNode
                        } : function(t, i, h) {
                            var p, w, y, c, a, b, k = s !== o ? "nextSibling" : "previousSibling",
                                d = t.parentNode,
                                nt = f && t.nodeName.toLowerCase(),
                                g = !h && !f,
                                l = !1;
                            if (d) {
                                if (s) {
                                    while (k) {
                                        for (c = t; c = c[k];)
                                            if (f ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) return !1;
                                        b = k = "only" === n && !b && "nextSibling"
                                    }
                                    return !0
                                }
                                if (b = [o ? d.firstChild : d.lastChild], o && g) {
                                    for (c = d, y = c[e] || (c[e] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), p = w[n] || [], a = p[0] === v && p[1], l = a && p[2], c = a && d.childNodes[a]; c = ++a && c && c[k] || (l = a = 0) || b.pop();)
                                        if (1 === c.nodeType && ++l && c === t) {
                                            w[n] = [v, a, l];
                                            break
                                        }
                                } else if (g && (c = t, y = c[e] || (c[e] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), p = w[n] || [], a = p[0] === v && p[1], l = a), l === !1)
                                    while (c = ++a && c && c[k] || (l = a = 0) || b.pop())
                                        if ((f ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) && ++l && (g && (y = c[e] || (c[e] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), w[n] = [v, l]), c === t)) break;
                                return l -= u, l === r || l % r == 0 && l / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(n, i) {
                        var f, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                        return r[e] ? r(i) : r.length > 1 ? (f = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, t) {
                            for (var u, f = r(n, i), e = f.length; e--;) u = nt(n, f[e]), n[u] = !(t[u] = f[e])
                        }) : function(n) {
                            return r(n, 0, f)
                        }) : r
                    }
                },
                pseudos: {
                    not: l(function(n) {
                        var t = [],
                            r = [],
                            i = wt(n.replace(at, "$1"));
                        return i[e] ? l(function(n, t, r, u) {
                            for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e))
                        }) : function(n, u, f) {
                            return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop()
                        }
                    }),
                    has: l(function(n) {
                        return function(t) {
                            return u(n, t).length > 0
                        }
                    }),
                    contains: l(function(n) {
                        return n = n.replace(y, p),
                            function(t) {
                                return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                            }
                    }),
                    lang: l(function(n) {
                        return yi.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
                            function(t) {
                                var i;
                                do
                                    if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === n || 0 === i.indexOf(n + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var i = n.location && n.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function(n) {
                        return n === s
                    },
                    focus: function(n) {
                        return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                    },
                    enabled: function(n) {
                        return n.disabled === !1
                    },
                    disabled: function(n) {
                        return n.disabled === !0
                    },
                    checked: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return "input" === t && !!n.checked || "option" === t && !!n.selected
                    },
                    selected: function(n) {
                        return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                    },
                    empty: function(n) {
                        for (n = n.firstChild; n; n = n.nextSibling)
                            if (n.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(n) {
                        return !t.pseudos.empty(n)
                    },
                    header: function(n) {
                        return or.test(n.nodeName)
                    },
                    input: function(n) {
                        return er.test(n.nodeName)
                    },
                    button: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return "input" === t && "button" === n.type || "button" === t
                    },
                    text: function(n) {
                        var t;
                        return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: it(function() {
                        return [0]
                    }),
                    last: it(function(n, t) {
                        return [t - 1]
                    }),
                    eq: it(function(n, t, i) {
                        return [0 > i ? i + t : i]
                    }),
                    even: it(function(n, t) {
                        for (var i = 0; t > i; i += 2) n.push(i);
                        return n
                    }),
                    odd: it(function(n, t) {
                        for (var i = 1; t > i; i += 2) n.push(i);
                        return n
                    }),
                    lt: it(function(n, t, i) {
                        for (var r = 0 > i ? i + t : i; --r >= 0;) n.push(r);
                        return n
                    }),
                    gt: it(function(n, t, i) {
                        for (var r = 0 > i ? i + t : i; ++r < t;) n.push(r);
                        return n
                    })
                }
            };
            t.pseudos.nth = t.pseudos.eq;
            for (rt in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) t.pseudos[rt] = cr(rt);
            for (rt in {
                    submit: !0,
                    reset: !0
                }) t.pseudos[rt] = lr(rt);
            return bi.prototype = t.filters = t.pseudos, t.setFilters = new bi, ft = u.tokenize = function(n, i) {
                var e, f, s, o, r, h, c, l = ci[n + " "];
                if (l) return i ? 0 : l.slice(0);
                for (r = n, h = [], c = t.preFilter; r;) {
                    (!e || (f = ir.exec(r))) && (f && (r = r.slice(f[0].length) || r), h.push(s = []));
                    e = !1;
                    (f = rr.exec(r)) && (e = f.shift(), s.push({
                        value: e,
                        type: f[0].replace(at, " ")
                    }), r = r.slice(e.length));
                    for (o in t.filter)(f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                        value: e,
                        type: o,
                        matches: f
                    }), r = r.slice(e.length));
                    if (!e) break
                }
                return i ? r.length : r ? u.error(n) : ci(n, h).slice(0)
            }, wt = u.compile = function(n, t) {
                var r, u = [],
                    f = [],
                    i = lt[n + " "];
                if (!i) {
                    for (t || (t = ft(n)), r = t.length; r--;) i = ei(t[r]), i[e] ? u.push(i) : f.push(i);
                    i = lt(n, vr(f, u));
                    i.selector = n
                }
                return i
            }, si = u.select = function(n, i, r, u) {
                var s, e, o, a, v, l = "function" == typeof n && n,
                    c = !u && ft(n = l.selector || n);
                if (r = r || [], 1 === c.length) {
                    if (e = c[0] = c[0].slice(0), e.length > 2 && "ID" === (o = e[0]).type && f.getById && 9 === i.nodeType && h && t.relative[e[1].type]) {
                        if (i = (t.find.ID(o.matches[0].replace(y, p), i) || [])[0], !i) return r;
                        l && (i = i.parentNode);
                        n = n.slice(e.shift().value.length)
                    }
                    for (s = vt.needsContext.test(n) ? 0 : e.length; s--;) {
                        if (o = e[s], t.relative[a = o.type]) break;
                        if ((v = t.find[a]) && (u = v(o.matches[0].replace(y, p), gt.test(e[0].type) && ii(i.parentNode) || i))) {
                            if (e.splice(s, 1), n = u.length && yt(e), !n) return k.apply(r, u), r;
                            break
                        }
                    }
                }
                return (l || wt(n, c))(u, i, !h, r, !i || gt.test(n) && ii(i.parentNode) || i), r
            }, f.sortStable = e.split("").sort(bt).join("") === e, f.detectDuplicates = !!ut, b(), f.sortDetached = a(function(n) {
                return 1 & n.compareDocumentPosition(i.createElement("div"))
            }), a(function(n) {
                return n.innerHTML = "<a href='#'><\/a>", "#" === n.firstChild.getAttribute("href")
            }) || ti("type|href|height|width", function(n, t, i) {
                if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), f.attributes && a(function(n) {
                return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value")
            }) || ti("value", function(n, t, i) {
                if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue
            }), a(function(n) {
                return null == n.getAttribute("disabled")
            }) || ti(kt, function(n, t, i) {
                var r;
                if (!i) return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
            }), u
        }(n);
        i.find = p;
        i.expr = p.selectors;
        i.expr[":"] = i.expr.pseudos;
        i.uniqueSort = i.unique = p.uniqueSort;
        i.text = p.getText;
        i.isXMLDoc = p.isXML;
        i.contains = p.contains;
        var d = function(n, t, r) {
                for (var u = [], f = void 0 !== r;
                    (n = n[t]) && 9 !== n.nodeType;)
                    if (1 === n.nodeType) {
                        if (f && i(n).is(r)) break;
                        u.push(n)
                    }
                return u
            },
            tr = function(n, t) {
                for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
                return i
            },
            ir = i.expr.match.needsContext,
            rr = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            bf = /^.[^:#\[\.,]*$/;
        i.filter = function(n, t, r) {
            var u = t[0];
            return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
                return 1 === n.nodeType
            }))
        };
        i.fn.extend({
            find: function(n) {
                var t, u = this.length,
                    r = [],
                    f = this;
                if ("string" != typeof n) return this.pushStack(i(n).filter(function() {
                    for (t = 0; u > t; t++)
                        if (i.contains(f[t], this)) return !0
                }));
                for (t = 0; u > t; t++) i.find(n, f[t], r);
                return r = this.pushStack(u > 1 ? i.unique(r) : r), r.selector = this.selector ? this.selector + " " + n : n, r
            },
            filter: function(n) {
                return this.pushStack(ri(this, n || [], !1))
            },
            not: function(n) {
                return this.pushStack(ri(this, n || [], !0))
            },
            is: function(n) {
                return !!ri(this, "string" == typeof n && ir.test(n) ? i(n) : n || [], !1).length
            }
        });
        fr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        er = i.fn.init = function(n, t, r) {
            var f, e;
            if (!n) return this;
            if (r = r || ur, "string" == typeof n) {
                if (f = "<" === n[0] && ">" === n[n.length - 1] && n.length >= 3 ? [null, n, null] : fr.exec(n), !f || !f[1] && t) return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
                if (f[1]) {
                    if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(f[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), rr.test(f[1]) && i.isPlainObject(t))
                        for (f in t) i.isFunction(this[f]) ? this[f](t[f]) : this.attr(f, t[f]);
                    return this
                }
                return e = u.getElementById(f[2]), e && e.parentNode && (this.length = 1, this[0] = e), this.context = u, this.selector = n, this
            }
            return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? void 0 !== r.ready ? r.ready(n) : n(i) : (void 0 !== n.selector && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
        };
        er.prototype = i.fn;
        ur = i(u);
        or = /^(?:parents|prev(?:Until|All))/;
        sr = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        i.fn.extend({
            has: function(n) {
                var t = i(n, this),
                    r = t.length;
                return this.filter(function() {
                    for (var n = 0; r > n; n++)
                        if (i.contains(this, t[n])) return !0
                })
            },
            closest: function(n, t) {
                for (var r, f = 0, o = this.length, u = [], e = ir.test(n) || "string" != typeof n ? i(n, t || this.context) : 0; o > f; f++)
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (r.nodeType < 11 && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                            u.push(r);
                            break
                        }
                return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u)
            },
            index: function(n) {
                return n ? "string" == typeof n ? lt.call(i(n), this[0]) : lt.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(n, t) {
                return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))))
            },
            addBack: function(n) {
                return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
            }
        });
        i.each({
            parent: function(n) {
                var t = n.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(n) {
                return d(n, "parentNode")
            },
            parentsUntil: function(n, t, i) {
                return d(n, "parentNode", i)
            },
            next: function(n) {
                return hr(n, "nextSibling")
            },
            prev: function(n) {
                return hr(n, "previousSibling")
            },
            nextAll: function(n) {
                return d(n, "nextSibling")
            },
            prevAll: function(n) {
                return d(n, "previousSibling")
            },
            nextUntil: function(n, t, i) {
                return d(n, "nextSibling", i)
            },
            prevUntil: function(n, t, i) {
                return d(n, "previousSibling", i)
            },
            siblings: function(n) {
                return tr((n.parentNode || {}).firstChild, n)
            },
            children: function(n) {
                return tr(n.firstChild)
            },
            contents: function(n) {
                return n.contentDocument || i.merge([], n.childNodes)
            }
        }, function(n, t) {
            i.fn[n] = function(r, u) {
                var f = i.map(this, t, r);
                return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), this.length > 1 && (sr[n] || i.uniqueSort(f), or.test(n) && f.reverse()), this.pushStack(f)
            }
        });
        h = /\S+/g;
        i.Callbacks = function(n) {
            n = "string" == typeof n ? kf(n) : i.extend({}, n);
            var o, r, h, f, t = [],
                e = [],
                u = -1,
                c = function() {
                    for (f = n.once, h = o = !0; e.length; u = -1)
                        for (r = e.shift(); ++u < t.length;) t[u].apply(r[0], r[1]) === !1 && n.stopOnFalse && (u = t.length, r = !1);
                    n.memory || (r = !1);
                    o = !1;
                    f && (t = r ? [] : "")
                },
                s = {
                    add: function() {
                        return t && (r && !o && (u = t.length - 1, e.push(r)), function f(r) {
                            i.each(r, function(r, u) {
                                i.isFunction(u) ? n.unique && s.has(u) || t.push(u) : u && u.length && "string" !== i.type(u) && f(u)
                            })
                        }(arguments), r && !o && c()), this
                    },
                    remove: function() {
                        return i.each(arguments, function(n, r) {
                            for (var f;
                                (f = i.inArray(r, t, f)) > -1;) t.splice(f, 1), u >= f && u--
                        }), this
                    },
                    has: function(n) {
                        return n ? i.inArray(n, t) > -1 : t.length > 0
                    },
                    empty: function() {
                        return t && (t = []), this
                    },
                    disable: function() {
                        return f = e = [], t = r = "", this
                    },
                    disabled: function() {
                        return !t
                    },
                    lock: function() {
                        return f = e = [], r || (t = r = ""), this
                    },
                    locked: function() {
                        return !!f
                    },
                    fireWith: function(n, t) {
                        return f || (t = t || [], t = [n, t.slice ? t.slice() : t], e.push(t), o || c()), this
                    },
                    fire: function() {
                        return s.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!h
                    }
                };
            return s
        };
        i.extend({
            Deferred: function(n) {
                var u = [
                        ["resolve", "done", i.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", i.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", i.Callbacks("memory")]
                    ],
                    f = "pending",
                    r = {
                        state: function() {
                            return f
                        },
                        always: function() {
                            return t.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var n = arguments;
                            return i.Deferred(function(f) {
                                i.each(u, function(u, e) {
                                    var o = i.isFunction(n[u]) && n[u];
                                    t[e[1]](function() {
                                        var n = o && o.apply(this, arguments);
                                        n && i.isFunction(n.promise) ? n.promise().progress(f.notify).done(f.resolve).fail(f.reject) : f[e[0] + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                                    })
                                });
                                n = null
                            }).promise()
                        },
                        promise: function(n) {
                            return null != n ? i.extend(n, r) : r
                        }
                    },
                    t = {};
                return r.pipe = r.then, i.each(u, function(n, i) {
                    var e = i[2],
                        o = i[3];
                    r[i[1]] = e.add;
                    o && e.add(function() {
                        f = o
                    }, u[1 ^ n][2].disable, u[2][2].lock);
                    t[i[0]] = function() {
                        return t[i[0] + "With"](this === t ? r : this, arguments), this
                    };
                    t[i[0] + "With"] = e.fireWith
                }), r.promise(t), n && n.call(t, t), t
            },
            when: function(n) {
                var t = 0,
                    u = v.call(arguments),
                    r = u.length,
                    e = 1 !== r || n && i.isFunction(n.promise) ? r : 0,
                    f = 1 === e ? n : i.Deferred(),
                    h = function(n, t, i) {
                        return function(r) {
                            t[n] = this;
                            i[n] = arguments.length > 1 ? v.call(arguments) : r;
                            i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                        }
                    },
                    o, c, s;
                if (r > 1)
                    for (o = new Array(r), c = new Array(r), s = new Array(r); r > t; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().progress(h(t, c, o)).done(h(t, s, u)).fail(f.reject) : --e;
                return e || f.resolveWith(s, u), f.promise()
            }
        });
        i.fn.ready = function(n) {
            return i.ready.promise().done(n), this
        };
        i.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(n) {
                n ? i.readyWait++ : i.ready(!0)
            },
            ready: function(n) {
                (n === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, n !== !0 && --i.readyWait > 0 || (vt.resolveWith(u, [i]), i.fn.triggerHandler && (i(u).triggerHandler("ready"), i(u).off("ready"))))
            }
        });
        i.ready.promise = function(t) {
            return vt || (vt = i.Deferred(), "complete" === u.readyState || "loading" !== u.readyState && !u.documentElement.doScroll ? n.setTimeout(i.ready) : (u.addEventListener("DOMContentLoaded", yt), n.addEventListener("load", yt))), vt.promise(t)
        };
        i.ready.promise();
        a = function(n, t, r, u, f, e, o) {
            var s = 0,
                c = n.length,
                h = null == r;
            if ("object" === i.type(r)) {
                f = !0;
                for (s in r) a(n, t, s, r[s], !0, e, o)
            } else if (void 0 !== u && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function(n, t, r) {
                    return h.call(i(n), r)
                })), t))
                for (; c > s; s++) t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
            return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
        };
        g = function(n) {
            return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType
        };
        et.uid = 1;
        et.prototype = {
            register: function(n, t) {
                var i = t || {};
                return n.nodeType ? n[this.expando] = i : Object.defineProperty(n, this.expando, {
                    value: i,
                    writable: !0,
                    configurable: !0
                }), n[this.expando]
            },
            cache: function(n) {
                if (!g(n)) return {};
                var t = n[this.expando];
                return t || (t = {}, g(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(n, t, i) {
                var r, u = this.cache(n);
                if ("string" == typeof t) u[t] = i;
                else
                    for (r in t) u[r] = t[r];
                return u
            },
            get: function(n, t) {
                return void 0 === t ? this.cache(n) : n[this.expando] && n[this.expando][t]
            },
            access: function(n, t, r) {
                var u;
                return void 0 === t || t && "string" == typeof t && void 0 === r ? (u = this.get(n, t), void 0 !== u ? u : this.get(n, i.camelCase(t))) : (this.set(n, t, r), void 0 !== r ? r : t)
            },
            remove: function(n, t) {
                var f, r, e, u = n[this.expando];
                if (void 0 !== u) {
                    if (void 0 === t) this.register(n);
                    else
                        for (i.isArray(t) ? r = t.concat(t.map(i.camelCase)) : (e = i.camelCase(t), (t in u) ? r = [t, e] : (r = e, r = (r in u) ? [r] : r.match(h) || [])), f = r.length; f--;) delete u[r[f]];
                    (void 0 === t || i.isEmptyObject(u)) && (n.nodeType ? n[this.expando] = void 0 : delete n[this.expando])
                }
            },
            hasData: function(n) {
                var t = n[this.expando];
                return void 0 !== t && !i.isEmptyObject(t)
            }
        };
        var r = new et,
            e = new et,
            df = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            cr = /[A-Z]/g;
        i.extend({
            hasData: function(n) {
                return e.hasData(n) || r.hasData(n)
            },
            data: function(n, t, i) {
                return e.access(n, t, i)
            },
            removeData: function(n, t) {
                e.remove(n, t)
            },
            _data: function(n, t, i) {
                return r.access(n, t, i)
            },
            _removeData: function(n, t) {
                r.remove(n, t)
            }
        });
        i.fn.extend({
            data: function(n, t) {
                var o, f, s, u = this[0],
                    h = u && u.attributes;
                if (void 0 === n) {
                    if (this.length && (s = e.get(u), 1 === u.nodeType && !r.get(u, "hasDataAttrs"))) {
                        for (o = h.length; o--;) h[o] && (f = h[o].name, 0 === f.indexOf("data-") && (f = i.camelCase(f.slice(5)), lr(u, f, s[f])));
                        r.set(u, "hasDataAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof n ? this.each(function() {
                    e.set(this, n)
                }) : a(this, function(t) {
                    var r, f;
                    if (u && void 0 === t) {
                        if ((r = e.get(u, n) || e.get(u, n.replace(cr, "-$&").toLowerCase()), void 0 !== r) || (f = i.camelCase(n), r = e.get(u, f), void 0 !== r) || (r = lr(u, f, void 0), void 0 !== r)) return r
                    } else f = i.camelCase(n), this.each(function() {
                        var i = e.get(this, f);
                        e.set(this, f, t);
                        n.indexOf("-") > -1 && void 0 !== i && e.set(this, n, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(n) {
                return this.each(function() {
                    e.remove(this, n)
                })
            }
        });
        i.extend({
            queue: function(n, t, u) {
                var f;
                if (n) return (t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || i.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || [])
            },
            dequeue: function(n, t) {
                t = t || "fx";
                var r = i.queue(n, t),
                    e = r.length,
                    u = r.shift(),
                    f = i._queueHooks(n, t),
                    o = function() {
                        i.dequeue(n, t)
                    };
                "inprogress" === u && (u = r.shift(), e--);
                u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
                !e && f && f.empty.fire()
            },
            _queueHooks: function(n, t) {
                var u = t + "queueHooks";
                return r.get(n, u) || r.access(n, u, {
                    empty: i.Callbacks("once memory").add(function() {
                        r.remove(n, [t + "queue", u])
                    })
                })
            }
        });
        i.fn.extend({
            queue: function(n, t) {
                var r = 2;
                return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() {
                    var r = i.queue(this, n, t);
                    i._queueHooks(this, n);
                    "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
                })
            },
            dequeue: function(n) {
                return this.each(function() {
                    i.dequeue(this, n)
                })
            },
            clearQueue: function(n) {
                return this.queue(n || "fx", [])
            },
            promise: function(n, t) {
                var u, e = 1,
                    o = i.Deferred(),
                    f = this,
                    s = this.length,
                    h = function() {
                        --e || o.resolveWith(f, [f])
                    };
                for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; s--;) u = r.get(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h));
                return h(), o.promise(t)
            }
        });
        var ar = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ot = new RegExp("^(?:([+-])=|)(" + ar + ")([a-z%]*)$", "i"),
            w = ["Top", "Right", "Bottom", "Left"],
            st = function(n, t) {
                return n = t || n, "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n)
            };
        var yr = /^(?:checkbox|radio)$/i,
            pr = /<([\w:-]+)/,
            wr = /^$|\/(?:java|ecma)script/i,
            c = {
                option: [1, "<select multiple='multiple'>", "<\/select>"],
                thead: [1, "<table>", "<\/table>"],
                col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
                tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
                td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
                _default: [0, "", ""]
            };
        c.optgroup = c.option;
        c.tbody = c.tfoot = c.colgroup = c.caption = c.thead;
        c.th = c.td;
        br = /<|&#?\w+;/;
        ! function() {
            var i = u.createDocumentFragment(),
                n = i.appendChild(u.createElement("div")),
                t = u.createElement("input");
            t.setAttribute("type", "radio");
            t.setAttribute("checked", "checked");
            t.setAttribute("name", "t");
            n.appendChild(t);
            f.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
            n.innerHTML = "<textarea>x<\/textarea>";
            f.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue
        }();
        var gf = /^key/,
            ne = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            dr = /^([^.]*)(?:\.(.+)|)/;
        i.event = {
            global: {},
            add: function(n, t, u, f, e) {
                var v, y, w, p, b, c, s, l, o, k, d, a = r.get(n);
                if (a)
                    for (u.handler && (v = u, u = v.handler, e = v.selector), u.guid || (u.guid = i.guid++), (p = a.events) || (p = a.events = {}), (y = a.handle) || (y = a.handle = function(t) {
                            if ("undefined" != typeof i && i.event.triggered !== t.type) return i.event.dispatch.apply(n, arguments)
                        }), t = (t || "").match(h) || [""], b = t.length; b--;) w = dr.exec(t[b]) || [], o = d = w[1], k = (w[2] || "").split(".").sort(), o && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, c = i.extend({
                        type: o,
                        origType: d,
                        data: f,
                        handler: u,
                        guid: u.guid,
                        selector: e,
                        needsContext: e && i.expr.match.needsContext.test(e),
                        namespace: k.join(".")
                    }, v), (l = p[o]) || (l = p[o] = [], l.delegateCount = 0, s.setup && s.setup.call(n, f, k, y) !== !1 || n.addEventListener && n.addEventListener(o, y)), s.add && (s.add.call(n, c), c.handler.guid || (c.handler.guid = u.guid)), e ? l.splice(l.delegateCount++, 0, c) : l.push(c), i.event.global[o] = !0)
            },
            remove: function(n, t, u, f, e) {
                var y, k, c, v, p, s, l, a, o, b, d, w = r.hasData(n) && r.get(n);
                if (w && (v = w.events)) {
                    for (t = (t || "").match(h) || [""], p = t.length; p--;)
                        if (c = dr.exec(t[p]) || [], o = d = c[1], b = (c[2] || "").split(".").sort(), o) {
                            for (l = i.event.special[o] || {}, o = (f ? l.delegateType : l.bindType) || o, a = v[o] || [], c = c[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = y = a.length; y--;) s = a[y], !e && d !== s.origType || u && u.guid !== s.guid || c && !c.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (a.splice(y, 1), s.selector && a.delegateCount--, l.remove && l.remove.call(n, s));
                            k && !a.length && (l.teardown && l.teardown.call(n, b, w.handle) !== !1 || i.removeEvent(n, o, w.handle), delete v[o])
                        } else
                            for (o in v) i.event.remove(n, o + t[p], u, f, !0);
                    i.isEmptyObject(v) && r.remove(n, "handle events")
                }
            },
            dispatch: function(n) {
                n = i.event.fix(n);
                var o, s, e, u, t, h = [],
                    c = v.call(arguments),
                    l = (r.get(this, "events") || {})[n.type] || [],
                    f = i.event.special[n.type] || {};
                if (c[0] = n, n.delegateTarget = this, !f.preDispatch || f.preDispatch.call(this, n) !== !1) {
                    for (h = i.event.handlers.call(this, n, l), o = 0;
                        (u = h[o++]) && !n.isPropagationStopped();)
                        for (n.currentTarget = u.elem, s = 0;
                            (t = u.handlers[s++]) && !n.isImmediatePropagationStopped();) n.rnamespace && !n.rnamespace.test(t.namespace) || (n.handleObj = t, n.data = t.data, e = ((i.event.special[t.origType] || {}).handle || t.handler).apply(u.elem, c), void 0 !== e && (n.result = e) === !1 && (n.preventDefault(), n.stopPropagation()));
                    return f.postDispatch && f.postDispatch.call(this, n), n.result
                }
            },
            handlers: function(n, t) {
                var e, u, f, o, h = [],
                    s = t.delegateCount,
                    r = n.target;
                if (s && r.nodeType && ("click" !== n.type || isNaN(n.button) || n.button < 1))
                    for (; r !== this; r = r.parentNode || this)
                        if (1 === r.nodeType && (r.disabled !== !0 || "click" !== n.type)) {
                            for (u = [], e = 0; s > e; e++) o = t[e], f = o.selector + " ", void 0 === u[f] && (u[f] = o.needsContext ? i(f, this).index(r) > -1 : i.find(f, this, null, [r]).length), u[f] && u.push(o);
                            u.length && h.push({
                                elem: r,
                                handlers: u
                            })
                        }
                return s < t.length && h.push({
                    elem: this,
                    handlers: t.slice(s)
                }), h
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(n, t) {
                    return null == n.which && (n.which = null != t.charCode ? t.charCode : t.keyCode), n
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(n, t) {
                    var e, i, r, f = t.button;
                    return null == n.pageX && null != t.clientX && (e = n.target.ownerDocument || u, i = e.documentElement, r = e.body, n.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), n.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), n.which || void 0 === f || (n.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), n
                }
            },
            fix: function(n) {
                if (n[i.expando]) return n;
                var f, e, o, r = n.type,
                    s = n,
                    t = this.fixHooks[r];
                for (t || (this.fixHooks[r] = t = ne.test(r) ? this.mouseHooks : gf.test(r) ? this.keyHooks : {}), o = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(s), f = o.length; f--;) e = o[f], n[e] = s[e];
                return n.target || (n.target = u), 3 === n.target.nodeType && (n.target = n.target.parentNode), t.filter ? t.filter(n, s) : n
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== gr() && this.focus) return (this.focus(), !1)
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === gr() && this.blur) return (this.blur(), !1)
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && i.nodeName(this, "input")) return (this.click(), !1)
                    },
                    _default: function(n) {
                        return i.nodeName(n.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(n) {
                        void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result)
                    }
                }
            }
        };
        i.removeEvent = function(n, t, i) {
            n.removeEventListener && n.removeEventListener(t, i)
        };
        i.Event = function(n, t) {
            return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && n.returnValue === !1 ? pt : nt) : this.type = n, t && i.extend(this, t), this.timeStamp = n && n.timeStamp || i.now(), void(this[i.expando] = !0)) : new i.Event(n, t)
        };
        i.Event.prototype = {
            constructor: i.Event,
            isDefaultPrevented: nt,
            isPropagationStopped: nt,
            isImmediatePropagationStopped: nt,
            isSimulated: !1,
            preventDefault: function() {
                var n = this.originalEvent;
                this.isDefaultPrevented = pt;
                n && !this.isSimulated && n.preventDefault()
            },
            stopPropagation: function() {
                var n = this.originalEvent;
                this.isPropagationStopped = pt;
                n && !this.isSimulated && n.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var n = this.originalEvent;
                this.isImmediatePropagationStopped = pt;
                n && !this.isSimulated && n.stopImmediatePropagation();
                this.stopPropagation()
            }
        };
        i.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(n, t) {
            i.event.special[n] = {
                delegateType: t,
                bindType: t,
                handle: function(n) {
                    var u, f = this,
                        r = n.relatedTarget,
                        e = n.handleObj;
                    return r && (r === f || i.contains(f, r)) || (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
                }
            }
        });
        i.fn.extend({
            on: function(n, t, i, r) {
                return fi(this, n, t, i, r)
            },
            one: function(n, t, i, r) {
                return fi(this, n, t, i, r, 1)
            },
            off: function(n, t, r) {
                var u, f;
                if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
                if ("object" == typeof n) {
                    for (f in n) this.off(f, t, n[f]);
                    return this
                }
                return t !== !1 && "function" != typeof t || (r = t, t = void 0), r === !1 && (r = nt), this.each(function() {
                    i.event.remove(this, n, r, t)
                })
            }
        });
        var te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            ie = /<script|<style|<link/i,
            re = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ue = /^true\/(.*)/,
            fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        i.extend({
            htmlPrefilter: function(n) {
                return n.replace(te, "<$1><\/$2>")
            },
            clone: function(n, t, r) {
                var u, c, s, e, h = n.cloneNode(!0),
                    l = i.contains(n.ownerDocument, n);
                if (!(f.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                    for (e = o(h), s = o(n), u = 0, c = s.length; c > u; u++) se(s[u], e[u]);
                if (t)
                    if (r)
                        for (s = s || o(n), e = e || o(h), u = 0, c = s.length; c > u; u++) tu(s[u], e[u]);
                    else tu(n, h);
                return e = o(h, "script"), e.length > 0 && ui(e, !l && o(n, "script")), h
            },
            cleanData: function(n) {
                for (var u, t, f, s = i.event.special, o = 0; void 0 !== (t = n[o]); o++)
                    if (g(t)) {
                        if (u = t[r.expando]) {
                            if (u.events)
                                for (f in u.events) s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                            t[r.expando] = void 0
                        }
                        t[e.expando] && (t[e.expando] = void 0)
                    }
            }
        });
        i.fn.extend({
            domManip: b,
            detach: function(n) {
                return iu(this, n, !0)
            },
            remove: function(n) {
                return iu(this, n)
            },
            text: function(n) {
                return a(this, function(n) {
                    return void 0 === n ? i.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = n)
                    })
                }, null, n, arguments.length)
            },
            append: function() {
                return b(this, arguments, function(n) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = nu(this, n);
                        t.appendChild(n)
                    }
                })
            },
            prepend: function() {
                return b(this, arguments, function(n) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = nu(this, n);
                        t.insertBefore(n, t.firstChild)
                    }
                })
            },
            before: function() {
                return b(this, arguments, function(n) {
                    this.parentNode && this.parentNode.insertBefore(n, this)
                })
            },
            after: function() {
                return b(this, arguments, function(n) {
                    this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
                })
            },
            empty: function() {
                for (var n, t = 0; null != (n = this[t]); t++) 1 === n.nodeType && (i.cleanData(o(n, !1)), n.textContent = "");
                return this
            },
            clone: function(n, t) {
                return n = null == n ? !1 : n, t = null == t ? n : t, this.map(function() {
                    return i.clone(this, n, t)
                })
            },
            html: function(n) {
                return a(this, function(n) {
                    var t = this[0] || {},
                        r = 0,
                        u = this.length;
                    if (void 0 === n && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof n && !ie.test(n) && !c[(pr.exec(n) || ["", ""])[1].toLowerCase()]) {
                        n = i.htmlPrefilter(n);
                        try {
                            for (; u > r; r++) t = this[r] || {}, 1 === t.nodeType && (i.cleanData(o(t, !1)), t.innerHTML = n);
                            t = 0
                        } catch (f) {}
                    }
                    t && this.empty().append(n)
                }, null, n, arguments.length)
            },
            replaceWith: function() {
                var n = [];
                return b(this, arguments, function(t) {
                    var r = this.parentNode;
                    i.inArray(this, n) < 0 && (i.cleanData(o(this)), r && r.replaceChild(t, this))
                }, n)
            }
        });
        i.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(n, t) {
            i.fn[n] = function(n) {
                for (var u, f = [], e = i(n), o = e.length - 1, r = 0; o >= r; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), ti.apply(f, u.get());
                return this.pushStack(f)
            }
        });
        ei = {
            HTML: "block",
            BODY: "block"
        };
        var uu = /^margin/,
            si = new RegExp("^(" + ar + ")(?!px)[a-z%]+$", "i"),
            bt = function(t) {
                var i = t.ownerDocument.defaultView;
                return i && i.opener || (i = n), i.getComputedStyle(t)
            },
            hi = function(n, t, i, r) {
                var f, u, e = {};
                for (u in t) e[u] = n.style[u], n.style[u] = t[u];
                f = i.apply(n, r || []);
                for (u in t) n.style[u] = e[u];
                return f
            },
            ht = u.documentElement;
        ! function() {
            var s, e, h, c, r = u.createElement("div"),
                t = u.createElement("div");
            if (t.style) {
                t.style.backgroundClip = "content-box";
                t.cloneNode(!0).style.backgroundClip = "";
                f.clearCloneStyle = "content-box" === t.style.backgroundClip;
                r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
                r.appendChild(t);

                function o() {
                    t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                    t.innerHTML = "";
                    ht.appendChild(r);
                    var i = n.getComputedStyle(t);
                    s = "1%" !== i.top;
                    c = "2px" === i.marginLeft;
                    e = "4px" === i.width;
                    t.style.marginRight = "50%";
                    h = "4px" === i.marginRight;
                    ht.removeChild(r)
                }
                i.extend(f, {
                    pixelPosition: function() {
                        return o(), s
                    },
                    boxSizingReliable: function() {
                        return null == e && o(), e
                    },
                    pixelMarginRight: function() {
                        return null == e && o(), h
                    },
                    reliableMarginLeft: function() {
                        return null == e && o(), c
                    },
                    reliableMarginRight: function() {
                        var f, i = t.appendChild(u.createElement("div"));
                        return i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", ht.appendChild(r), f = !parseFloat(n.getComputedStyle(i).marginRight), ht.removeChild(r), t.removeChild(i), f
                    }
                })
            }
        }();
        var he = /^(none|table(?!-c[ea]).+)/,
            ce = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            fu = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            eu = ["Webkit", "O", "Moz", "ms"],
            ou = u.createElement("div").style;
        i.extend({
            cssHooks: {
                opacity: {
                    get: function(n, t) {
                        if (t) {
                            var i = tt(n, "opacity");
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
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(n, t, r, u) {
                if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                    var e, h, o, s = i.camelCase(t),
                        c = n.style;
                    return t = i.cssProps[s] || (i.cssProps[s] = su(s) || s), o = i.cssHooks[t] || i.cssHooks[s], void 0 === r ? o && "get" in o && void 0 !== (e = o.get(n, !1, u)) ? e : c[t] : (h = typeof r, "string" === h && (e = ot.exec(r)) && e[1] && (r = vr(n, t, e), h = "number"), null != r && r === r && ("number" === h && (r += e && e[3] || (i.cssNumber[s] ? "" : "px")), f.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (c[t] = "inherit"), o && "set" in o && void 0 === (r = o.set(n, r, u)) || (c[t] = r)), void 0)
                }
            },
            css: function(n, t, r, u) {
                var f, s, o, e = i.camelCase(t);
                return t = i.cssProps[e] || (i.cssProps[e] = su(e) || e), o = i.cssHooks[t] || i.cssHooks[e], o && "get" in o && (f = o.get(n, !0, r)), void 0 === f && (f = tt(n, t, u)), "normal" === f && t in fu && (f = fu[t]), "" === r || r ? (s = parseFloat(f), r === !0 || isFinite(s) ? s || 0 : f) : f
            }
        });
        i.each(["height", "width"], function(n, t) {
            i.cssHooks[t] = {
                get: function(n, r, u) {
                    if (r) return he.test(i.css(n, "display")) && 0 === n.offsetWidth ? hi(n, ce, function() {
                        return lu(n, t, u)
                    }) : lu(n, t, u)
                },
                set: function(n, r, u) {
                    var f, e = u && bt(n),
                        o = u && cu(n, t, u, "border-box" === i.css(n, "boxSizing", !1, e), e);
                    return o && (f = ot.exec(r)) && "px" !== (f[3] || "px") && (n.style[t] = r, r = i.css(n, t)), hu(n, r, o)
                }
            }
        });
        i.cssHooks.marginLeft = ci(f.reliableMarginLeft, function(n, t) {
            if (t) return (parseFloat(tt(n, "marginLeft")) || n.getBoundingClientRect().left - hi(n, {
                marginLeft: 0
            }, function() {
                return n.getBoundingClientRect().left
            })) + "px"
        });
        i.cssHooks.marginRight = ci(f.reliableMarginRight, function(n, t) {
            if (t) return hi(n, {
                display: "inline-block"
            }, tt, [n, "marginRight"])
        });
        i.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(n, t) {
            i.cssHooks[n + t] = {
                expand: function(i) {
                    for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; 4 > r; r++) f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
                    return f
                }
            };
            uu.test(n) || (i.cssHooks[n + t].set = hu)
        });
        i.fn.extend({
            css: function(n, t) {
                return a(this, function(n, t, r) {
                    var f, e, o = {},
                        u = 0;
                    if (i.isArray(t)) {
                        for (f = bt(n), e = t.length; e > u; u++) o[t[u]] = i.css(n, t[u], !1, f);
                        return o
                    }
                    return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
                }, n, t, arguments.length > 1)
            },
            show: function() {
                return au(this, !0)
            },
            hide: function() {
                return au(this)
            },
            toggle: function(n) {
                return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                    st(this) ? i(this).show() : i(this).hide()
                })
            }
        });
        i.Tween = s;
        s.prototype = {
            constructor: s,
            init: function(n, t, r, u, f, e) {
                this.elem = n;
                this.prop = r;
                this.easing = f || i.easing._default;
                this.options = t;
                this.start = this.now = this.cur();
                this.end = u;
                this.unit = e || (i.cssNumber[r] ? "" : "px")
            },
            cur: function() {
                var n = s.propHooks[this.prop];
                return n && n.get ? n.get(this) : s.propHooks._default.get(this)
            },
            run: function(n) {
                var t, r = s.propHooks[this.prop];
                return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : s.propHooks._default.set(this), this
            }
        };
        s.prototype.init.prototype = s.prototype;
        s.propHooks = {
            _default: {
                get: function(n) {
                    var t;
                    return 1 !== n.elem.nodeType || null != n.elem[n.prop] && null == n.elem.style[n.prop] ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, ""), t && "auto" !== t ? t : 0)
                },
                set: function(n) {
                    i.fx.step[n.prop] ? i.fx.step[n.prop](n) : 1 !== n.elem.nodeType || null == n.elem.style[i.cssProps[n.prop]] && !i.cssHooks[n.prop] ? n.elem[n.prop] = n.now : i.style(n.elem, n.prop, n.now + n.unit)
                }
            }
        };
        s.propHooks.scrollTop = s.propHooks.scrollLeft = {
            set: function(n) {
                n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
            }
        };
        i.easing = {
            linear: function(n) {
                return n
            },
            swing: function(n) {
                return .5 - Math.cos(n * Math.PI) / 2
            },
            _default: "swing"
        };
        i.fx = s.prototype.init;
        i.fx.step = {};
        vu = /^(?:toggle|show|hide)$/;
        yu = /queueHooks$/;
        i.Animation = i.extend(l, {
            tweeners: {
                "*": [function(n, t) {
                    var i = this.createTween(n, t);
                    return vr(i.elem, n, ot.exec(t), i), i
                }]
            },
            tweener: function(n, t) {
                i.isFunction(n) ? (t = n, n = ["*"]) : n = n.match(h);
                for (var r, u = 0, f = n.length; f > u; u++) r = n[u], l.tweeners[r] = l.tweeners[r] || [], l.tweeners[r].unshift(t)
            },
            prefilters: [le],
            prefilter: function(n, t) {
                t ? l.prefilters.unshift(n) : l.prefilters.push(n)
            }
        });
        i.speed = function(n, t, r) {
            var u = n && "object" == typeof n ? i.extend({}, n) : {
                complete: r || !r && t || i.isFunction(n) && n,
                duration: n,
                easing: r && t || t && !i.isFunction(t) && t
            };
            return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, null != u.queue && u.queue !== !0 || (u.queue = "fx"), u.old = u.complete, u.complete = function() {
                i.isFunction(u.old) && u.old.call(this);
                u.queue && i.dequeue(this, u.queue)
            }, u
        };
        i.fn.extend({
            fadeTo: function(n, t, i, r) {
                return this.filter(st).css("opacity", 0).show().end().animate({
                    opacity: t
                }, n, i, r)
            },
            animate: function(n, t, u, f) {
                var s = i.isEmptyObject(n),
                    o = i.speed(t, u, f),
                    e = function() {
                        var t = l(this, i.extend({}, n), o);
                        (s || r.get(this, "finish")) && t.stop(!0)
                    };
                return e.finish = e, s || o.queue === !1 ? this.each(e) : this.queue(o.queue, e)
            },
            stop: function(n, t, u) {
                var f = function(n) {
                    var t = n.stop;
                    delete n.stop;
                    t(u)
                };
                return "string" != typeof n && (u = t, t = n, n = void 0), t && n !== !1 && this.queue(n || "fx", []), this.each(function() {
                    var s = !0,
                        t = null != n && n + "queueHooks",
                        o = i.timers,
                        e = r.get(this);
                    if (t) e[t] && e[t].stop && f(e[t]);
                    else
                        for (t in e) e[t] && e[t].stop && yu.test(t) && f(e[t]);
                    for (t = o.length; t--;) o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u), s = !1, o.splice(t, 1));
                    !s && u || i.dequeue(this, n)
                })
            },
            finish: function(n) {
                return n !== !1 && (n = n || "fx"), this.each(function() {
                    var t, e = r.get(this),
                        u = e[n + "queue"],
                        o = e[n + "queueHooks"],
                        f = i.timers,
                        s = u ? u.length : 0;
                    for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
                    for (t = 0; s > t; t++) u[t] && u[t].finish && u[t].finish.call(this);
                    delete e.finish
                })
            }
        });
        i.each(["toggle", "show", "hide"], function(n, t) {
            var r = i.fn[t];
            i.fn[t] = function(n, i, u) {
                return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(dt(t, !0), n, i, u)
            }
        });
        i.each({
            slideDown: dt("show"),
            slideUp: dt("hide"),
            slideToggle: dt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(n, t) {
            i.fn[n] = function(n, i, r) {
                return this.animate(t, n, i, r)
            }
        });
        i.timers = [];
        i.fx.tick = function() {
            var r, n = 0,
                t = i.timers;
            for (it = i.now(); n < t.length; n++) r = t[n], r() || t[n] !== r || t.splice(n--, 1);
            t.length || i.fx.stop();
            it = void 0
        };
        i.fx.timer = function(n) {
            i.timers.push(n);
            n() ? i.fx.start() : i.timers.pop()
        };
        i.fx.interval = 13;
        i.fx.start = function() {
            kt || (kt = n.setInterval(i.fx.tick, i.fx.interval))
        };
        i.fx.stop = function() {
            n.clearInterval(kt);
            kt = null
        };
        i.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        i.fn.delay = function(t, r) {
                return t = i.fx ? i.fx.speeds[t] || t : t, r = r || "fx", this.queue(r, function(i, r) {
                    var u = n.setTimeout(i, t);
                    r.stop = function() {
                        n.clearTimeout(u)
                    }
                })
            },
            function() {
                var n = u.createElement("input"),
                    t = u.createElement("select"),
                    i = t.appendChild(u.createElement("option"));
                n.type = "checkbox";
                f.checkOn = "" !== n.value;
                f.optSelected = i.selected;
                t.disabled = !0;
                f.optDisabled = !i.disabled;
                n = u.createElement("input");
                n.value = "t";
                n.type = "radio";
                f.radioValue = "t" === n.value
            }();
        rt = i.expr.attrHandle;
        i.fn.extend({
            attr: function(n, t) {
                return a(this, i.attr, n, t, arguments.length > 1)
            },
            removeAttr: function(n) {
                return this.each(function() {
                    i.removeAttr(this, n)
                })
            }
        });
        i.extend({
            attr: function(n, t, r) {
                var u, f, e = n.nodeType;
                if (3 !== e && 8 !== e && 2 !== e) return "undefined" == typeof n.getAttribute ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (t = t.toLowerCase(), f = i.attrHooks[t] || (i.expr.match.bool.test(t) ? bu : void 0)), void 0 !== r ? null === r ? void i.removeAttr(n, t) : f && "set" in f && void 0 !== (u = f.set(n, r, t)) ? u : (n.setAttribute(t, r + ""), r) : f && "get" in f && null !== (u = f.get(n, t)) ? u : (u = i.find.attr(n, t), null == u ? void 0 : u))
            },
            attrHooks: {
                type: {
                    set: function(n, t) {
                        if (!f.radioValue && "radio" === t && i.nodeName(n, "input")) {
                            var r = n.value;
                            return n.setAttribute("type", t), r && (n.value = r), t
                        }
                    }
                }
            },
            removeAttr: function(n, t) {
                var r, u, e = 0,
                    f = t && t.match(h);
                if (f && 1 === n.nodeType)
                    while (r = f[e++]) u = i.propFix[r] || r, i.expr.match.bool.test(r) && (n[u] = !1), n.removeAttribute(r)
            }
        });
        bu = {
            set: function(n, t, r) {
                return t === !1 ? i.removeAttr(n, r) : n.setAttribute(r, r), r
            }
        };
        i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
            var r = rt[t] || i.find.attr;
            rt[t] = function(n, t, i) {
                var u, f;
                return i || (f = rt[t], rt[t] = u, u = null != r(n, t, i) ? t.toLowerCase() : null, rt[t] = f), u
            }
        });
        ku = /^(?:input|select|textarea|button)$/i;
        du = /^(?:a|area)$/i;
        i.fn.extend({
            prop: function(n, t) {
                return a(this, i.prop, n, t, arguments.length > 1)
            },
            removeProp: function(n) {
                return this.each(function() {
                    delete this[i.propFix[n] || n]
                })
            }
        });
        i.extend({
            prop: function(n, t, r) {
                var f, u, e = n.nodeType;
                if (3 !== e && 8 !== e && 2 !== e) return 1 === e && i.isXMLDoc(n) || (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(n) {
                        var t = i.find.attr(n, "tabindex");
                        return t ? parseInt(t, 10) : ku.test(n.nodeName) || du.test(n.nodeName) && n.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        });
        f.optSelected || (i.propHooks.selected = {
            get: function(n) {
                var t = n.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(n) {
                var t = n.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        });
        i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            i.propFix[this.toLowerCase()] = this
        });
        gt = /[\t\r\n\f]/g;
        i.fn.extend({
            addClass: function(n) {
                var o, t, r, u, f, s, e, c = 0;
                if (i.isFunction(n)) return this.each(function(t) {
                    i(this).addClass(n.call(this, t, k(this)))
                });
                if ("string" == typeof n && n)
                    for (o = n.match(h) || []; t = this[c++];)
                        if (u = k(t), r = 1 === t.nodeType && (" " + u + " ").replace(gt, " ")) {
                            for (s = 0; f = o[s++];) r.indexOf(" " + f + " ") < 0 && (r += f + " ");
                            e = i.trim(r);
                            u !== e && t.setAttribute("class", e)
                        }
                return this
            },
            removeClass: function(n) {
                var o, r, t, u, f, s, e, c = 0;
                if (i.isFunction(n)) return this.each(function(t) {
                    i(this).removeClass(n.call(this, t, k(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof n && n)
                    for (o = n.match(h) || []; r = this[c++];)
                        if (u = k(r), t = 1 === r.nodeType && (" " + u + " ").replace(gt, " ")) {
                            for (s = 0; f = o[s++];)
                                while (t.indexOf(" " + f + " ") > -1) t = t.replace(" " + f + " ", " ");
                            e = i.trim(t);
                            u !== e && r.setAttribute("class", e)
                        }
                return this
            },
            toggleClass: function(n, t) {
                var u = typeof n;
                return "boolean" == typeof t && "string" === u ? t ? this.addClass(n) : this.removeClass(n) : i.isFunction(n) ? this.each(function(r) {
                    i(this).toggleClass(n.call(this, r, k(this), t), t)
                }) : this.each(function() {
                    var t, e, f, o;
                    if ("string" === u)
                        for (e = 0, f = i(this), o = n.match(h) || []; t = o[e++];) f.hasClass(t) ? f.removeClass(t) : f.addClass(t);
                    else void 0 !== n && "boolean" !== u || (t = k(this), t && r.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || n === !1 ? "" : r.get(this, "__className__") || ""))
                })
            },
            hasClass: function(n) {
                for (var t, r = 0, i = " " + n + " "; t = this[r++];)
                    if (1 === t.nodeType && (" " + k(t) + " ").replace(gt, " ").indexOf(i) > -1) return !0;
                return !1
            }
        });
        gu = /\r/g;
        nf = /[\x20\t\r\n\f]+/g;
        i.fn.extend({
            val: function(n) {
                var t, r, f, u = this[0];
                return arguments.length ? (f = i.isFunction(n), this.each(function(r) {
                    var u;
                    1 === this.nodeType && (u = f ? n.call(this, r, i(this).val()) : n, null == u ? u = "" : "number" == typeof u ? u += "" : i.isArray(u) && (u = i.map(u, function(n) {
                        return null == n ? "" : n + ""
                    })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u))
                })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && void 0 !== (r = t.get(u, "value")) ? r : (r = u.value, "string" == typeof r ? r.replace(gu, "") : null == r ? "" : r)) : void 0
            }
        });
        i.extend({
            valHooks: {
                option: {
                    get: function(n) {
                        var t = i.find.attr(n, "value");
                        return null != t ? t : i.trim(i.text(n)).replace(nf, " ")
                    }
                },
                select: {
                    get: function(n) {
                        for (var o, t, s = n.options, r = n.selectedIndex, u = "select-one" === n.type || 0 > r, h = u ? null : [], c = u ? r + 1 : s.length, e = 0 > r ? c : u ? r : 0; c > e; e++)
                            if (t = s[e], (t.selected || e === r) && (f.optDisabled ? !t.disabled : null === t.getAttribute("disabled")) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                                if (o = i(t).val(), u) return o;
                                h.push(o)
                            }
                        return h
                    },
                    set: function(n, t) {
                        for (var u, r, f = n.options, e = i.makeArray(t), o = f.length; o--;) r = f[o], (r.selected = i.inArray(i.valHooks.option.get(r), e) > -1) && (u = !0);
                        return u || (n.selectedIndex = -1), e
                    }
                }
            }
        });
        i.each(["radio", "checkbox"], function() {
            i.valHooks[this] = {
                set: function(n, t) {
                    if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) > -1
                }
            };
            f.checkOn || (i.valHooks[this].get = function(n) {
                return null === n.getAttribute("value") ? "on" : n.value
            })
        });
        li = /^(?:focusinfocus|focusoutblur)$/;
        i.extend(i.event, {
            trigger: function(t, f, e, o) {
                var w, s, c, b, a, v, l, p = [e || u],
                    h = ft.call(t, "type") ? t.type : t,
                    y = ft.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = c = e = e || u, 3 !== e.nodeType && 8 !== e.nodeType && !li.test(h + i.event.triggered) && (h.indexOf(".") > -1 && (y = h.split("."), h = y.shift(), y.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[i.expando] ? t : new i.Event(h, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = y.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = e), f = null == f ? [t] : i.makeArray(f, [t]), l = i.event.special[h] || {}, o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
                    if (!o && !l.noBubble && !i.isWindow(e)) {
                        for (b = l.delegateType || h, li.test(b + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), c = s;
                        c === (e.ownerDocument || u) && p.push(c.defaultView || c.parentWindow || n)
                    }
                    for (w = 0;
                        (s = p[w++]) && !t.isPropagationStopped();) t.type = w > 1 ? b : l.bindType || h, v = (r.get(s, "events") || {})[t.type] && r.get(s, "handle"), v && v.apply(s, f), v = a && s[a], v && v.apply && g(s) && (t.result = v.apply(s, f), t.result === !1 && t.preventDefault());
                    return t.type = h, o || t.isDefaultPrevented() || l._default && l._default.apply(p.pop(), f) !== !1 || !g(e) || a && i.isFunction(e[h]) && !i.isWindow(e) && (c = e[a], c && (e[a] = null), i.event.triggered = h, e[h](), i.event.triggered = void 0, c && (e[a] = c)), t.result
                }
            },
            simulate: function(n, t, r) {
                var u = i.extend(new i.Event, r, {
                    type: n,
                    isSimulated: !0
                });
                i.event.trigger(u, null, t)
            }
        });
        i.fn.extend({
            trigger: function(n, t) {
                return this.each(function() {
                    i.event.trigger(n, t, this)
                })
            },
            triggerHandler: function(n, t) {
                var r = this[0];
                if (r) return i.event.trigger(n, t, r, !0)
            }
        });
        i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
            i.fn[t] = function(n, i) {
                return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
            }
        });
        i.fn.extend({
            hover: function(n, t) {
                return this.mouseenter(n).mouseleave(t || n)
            }
        });
        f.focusin = "onfocusin" in n;
        f.focusin || i.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, t) {
            var u = function(n) {
                i.event.simulate(t, n.target, i.event.fix(n))
            };
            i.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        f = r.access(i, t);
                    f || i.addEventListener(n, u, !0);
                    r.access(i, t, (f || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        f = r.access(i, t) - 1;
                    f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t))
                }
            }
        });
        var ct = n.location,
            ai = i.now(),
            vi = /\?/;
        i.parseJSON = function(n) {
            return JSON.parse(n + "")
        };
        i.parseXML = function(t) {
            var r;
            if (!t || "string" != typeof t) return null;
            try {
                r = (new n.DOMParser).parseFromString(t, "text/xml")
            } catch (u) {
                r = void 0
            }
            return r && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t), r
        };
        var ve = /#.*$/,
            tf = /([?&])_=[^&]*/,
            ye = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            pe = /^(?:GET|HEAD)$/,
            we = /^\/\//,
            rf = {},
            yi = {},
            uf = "*/".concat("*"),
            pi = u.createElement("a");
        pi.href = ct.href;
        i.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ct.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ct.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": uf,
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
                    "text json": i.parseJSON,
                    "text xml": i.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(n, t) {
                return t ? wi(wi(n, i.ajaxSettings), t) : wi(i.ajaxSettings, n)
            },
            ajaxPrefilter: ff(rf),
            ajaxTransport: ff(yi),
            ajax: function(t, r) {
                function b(t, r, u, h) {
                    var a, rt, it, p, b, l = r;
                    2 !== s && (s = 2, d && n.clearTimeout(d), v = void 0, k = h || "", e.readyState = t > 0 ? 4 : 0, a = t >= 200 && 300 > t || 304 === t, u && (p = be(f, e, u)), p = ke(f, p, e, a), a ? (f.ifModified && (b = e.getResponseHeader("Last-Modified"), b && (i.lastModified[o] = b), b = e.getResponseHeader("etag"), b && (i.etag[o] = b)), 204 === t || "HEAD" === f.type ? l = "nocontent" : 304 === t ? l = "notmodified" : (l = p.state, rt = p.data, it = p.error, a = !it)) : (it = l, !t && l || (l = "error", 0 > t && (t = 0))), e.status = t, e.statusText = (r || l) + "", a ? nt.resolveWith(c, [rt, l, e]) : nt.rejectWith(c, [e, l, it]), e.statusCode(w), w = void 0, y && g.trigger(a ? "ajaxSuccess" : "ajaxError", [e, f, a ? rt : it]), tt.fireWith(c, [e, l]), y && (g.trigger("ajaxComplete", [e, f]), --i.active || i.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (r = t, t = void 0);
                r = r || {};
                var v, o, k, p, d, l, y, a, f = i.ajaxSetup({}, r),
                    c = f.context || f,
                    g = f.context && (c.nodeType || c.jquery) ? i(c) : i.event,
                    nt = i.Deferred(),
                    tt = i.Callbacks("once memory"),
                    w = f.statusCode || {},
                    it = {},
                    rt = {},
                    s = 0,
                    ut = "canceled",
                    e = {
                        readyState: 0,
                        getResponseHeader: function(n) {
                            var t;
                            if (2 === s) {
                                if (!p)
                                    for (p = {}; t = ye.exec(k);) p[t[1].toLowerCase()] = t[2];
                                t = p[n.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === s ? k : null
                        },
                        setRequestHeader: function(n, t) {
                            var i = n.toLowerCase();
                            return s || (n = rt[i] = rt[i] || n, it[n] = t), this
                        },
                        overrideMimeType: function(n) {
                            return s || (f.mimeType = n), this
                        },
                        statusCode: function(n) {
                            var t;
                            if (n)
                                if (2 > s)
                                    for (t in n) w[t] = [w[t], n[t]];
                                else e.always(n[e.status]);
                            return this
                        },
                        abort: function(n) {
                            var t = n || ut;
                            return v && v.abort(t), b(0, t), this
                        }
                    };
                if (nt.promise(e).complete = tt.add, e.success = e.done, e.error = e.fail, f.url = ((t || f.url || ct.href) + "").replace(ve, "").replace(we, ct.protocol + "//"), f.type = r.method || r.type || f.method || f.type, f.dataTypes = i.trim(f.dataType || "*").toLowerCase().match(h) || [""], null == f.crossDomain) {
                    l = u.createElement("a");
                    try {
                        l.href = f.url;
                        l.href = l.href;
                        f.crossDomain = pi.protocol + "//" + pi.host != l.protocol + "//" + l.host
                    } catch (ft) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = i.param(f.data, f.traditional)), ef(rf, f, r, e), 2 === s) return e;
                y = i.event && f.global;
                y && 0 == i.active++ && i.event.trigger("ajaxStart");
                f.type = f.type.toUpperCase();
                f.hasContent = !pe.test(f.type);
                o = f.url;
                f.hasContent || (f.data && (o = f.url += (vi.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = tf.test(o) ? o.replace(tf, "$1_=" + ai++) : o + (vi.test(o) ? "&" : "?") + "_=" + ai++));
                f.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o]));
                (f.data && f.hasContent && f.contentType !== !1 || r.contentType) && e.setRequestHeader("Content-Type", f.contentType);
                e.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + uf + "; q=0.01" : "") : f.accepts["*"]);
                for (a in f.headers) e.setRequestHeader(a, f.headers[a]);
                if (f.beforeSend && (f.beforeSend.call(c, e, f) === !1 || 2 === s)) return e.abort();
                ut = "abort";
                for (a in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) e[a](f[a]);
                if (v = ef(yi, f, r, e)) {
                    if (e.readyState = 1, y && g.trigger("ajaxSend", [e, f]), 2 === s) return e;
                    f.async && f.timeout > 0 && (d = n.setTimeout(function() {
                        e.abort("timeout")
                    }, f.timeout));
                    try {
                        s = 1;
                        v.send(it, b)
                    } catch (ft) {
                        if (!(2 > s)) throw ft;
                        b(-1, ft)
                    }
                } else b(-1, "No Transport");
                return e
            },
            getJSON: function(n, t, r) {
                return i.get(n, t, r, "json")
            },
            getScript: function(n, t) {
                return i.get(n, void 0, t, "script")
            }
        });
        i.each(["get", "post"], function(n, t) {
            i[t] = function(n, r, u, f) {
                return i.isFunction(r) && (f = f || u, u = r, r = void 0), i.ajax(i.extend({
                    url: n,
                    type: t,
                    dataType: f,
                    data: r,
                    success: u
                }, i.isPlainObject(n) && n))
            }
        });
        i._evalUrl = function(n) {
            return i.ajax({
                url: n,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        };
        i.fn.extend({
            wrapAll: function(n) {
                var t;
                return i.isFunction(n) ? this.each(function(t) {
                    i(this).wrapAll(n.call(this, t))
                }) : (this[0] && (t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var n = this; n.firstElementChild;) n = n.firstElementChild;
                    return n
                }).append(this)), this)
            },
            wrapInner: function(n) {
                return i.isFunction(n) ? this.each(function(t) {
                    i(this).wrapInner(n.call(this, t))
                }) : this.each(function() {
                    var t = i(this),
                        r = t.contents();
                    r.length ? r.wrapAll(n) : t.append(n)
                })
            },
            wrap: function(n) {
                var t = i.isFunction(n);
                return this.each(function(r) {
                    i(this).wrapAll(t ? n.call(this, r) : n)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        i.expr.filters.hidden = function(n) {
            return !i.expr.filters.visible(n)
        };
        i.expr.filters.visible = function(n) {
            return n.offsetWidth > 0 || n.offsetHeight > 0 || n.getClientRects().length > 0
        };
        var de = /%20/g,
            ge = /\[\]$/,
            of = /\r?\n/g,
            no = /^(?:submit|button|image|reset|file)$/i,
            to = /^(?:input|select|textarea|keygen)/i;
        return i.param = function(n, t) {
            var r, u = [],
                f = function(n, t) {
                    t = i.isFunction(t) ? t() : null == t ? "" : t;
                    u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
                f(this.name, this.value)
            });
            else
                for (r in n) bi(r, n[r], t, f);
            return u.join("&").replace(de, "+")
        }, i.fn.extend({
            serialize: function() {
                return i.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var n = i.prop(this, "elements");
                    return n ? i.makeArray(n) : this
                }).filter(function() {
                    var n = this.type;
                    return this.name && !i(this).is(":disabled") && to.test(this.nodeName) && !no.test(n) && (this.checked || !yr.test(n))
                }).map(function(n, t) {
                    var r = i(this).val();
                    return null == r ? null : i.isArray(r) ? i.map(r, function(n) {
                        return {
                            name: t.name,
                            value: n.replace( of , "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: r.replace( of , "\r\n")
                    }
                }).get()
            }
        }), i.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (t) {}
        }, sf = {
            0: 200,
            1223: 204
        }, ut = i.ajaxSettings.xhr(), f.cors = !!ut && "withCredentials" in ut, f.ajax = ut = !!ut, i.ajaxTransport(function(t) {
            var i, r;
            if (f.cors || ut && !t.crossDomain) return {
                send: function(u, f) {
                    var o, e = t.xhr();
                    if (e.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields) e[o] = t.xhrFields[o];
                    t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType);
                    t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest");
                    for (o in u) e.setRequestHeader(o, u[o]);
                    i = function(n) {
                        return function() {
                            i && (i = r = e.onload = e.onerror = e.onabort = e.onreadystatechange = null, "abort" === n ? e.abort() : "error" === n ? "number" != typeof e.status ? f(0, "error") : f(e.status, e.statusText) : f(sf[e.status] || e.status, e.statusText, "text" !== (e.responseType || "text") || "string" != typeof e.responseText ? {
                                binary: e.response
                            } : {
                                text: e.responseText
                            }, e.getAllResponseHeaders()))
                        }
                    };
                    e.onload = i();
                    r = e.onerror = i("error");
                    void 0 !== e.onabort ? e.onabort = r : e.onreadystatechange = function() {
                        4 === e.readyState && n.setTimeout(function() {
                            i && r()
                        })
                    };
                    i = i("abort");
                    try {
                        e.send(t.hasContent && t.data || null)
                    } catch (s) {
                        if (i) throw s;
                    }
                },
                abort: function() {
                    i && i()
                }
            }
        }), i.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(n) {
                    return i.globalEval(n), n
                }
            }
        }), i.ajaxPrefilter("script", function(n) {
            void 0 === n.cache && (n.cache = !1);
            n.crossDomain && (n.type = "GET")
        }), i.ajaxTransport("script", function(n) {
            if (n.crossDomain) {
                var r, t;
                return {
                    send: function(f, e) {
                        r = i("<script>").prop({
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", t = function(n) {
                            r.remove();
                            t = null;
                            n && e("error" === n.type ? 404 : 200, n.type)
                        });
                        u.head.appendChild(r[0])
                    },
                    abort: function() {
                        t && t()
                    }
                }
            }
        }), ki = [], ni = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var n = ki.pop() || i.expando + "_" + ai++;
                return this[n] = !0, n
            }
        }), i.ajaxPrefilter("json jsonp", function(t, r, u) {
            var f, e, o, s = t.jsonp !== !1 && (ni.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0]) return (f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ni, "$1" + f) : t.jsonp !== !1 && (t.url += (vi.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function() {
                return o || i.error(f + " was not called"), o[0]
            }, t.dataTypes[0] = "json", e = n[f], n[f] = function() {
                o = arguments
            }, u.always(function() {
                void 0 === e ? i(n).removeProp(f) : n[f] = e;
                t[f] && (t.jsonpCallback = r.jsonpCallback, ki.push(f));
                o && i.isFunction(e) && e(o[0]);
                o = e = void 0
            }), "script")
        }), i.parseHTML = function(n, t, r) {
            if (!n || "string" != typeof n) return null;
            "boolean" == typeof t && (r = t, t = !1);
            t = t || u;
            var f = rr.exec(n),
                e = !r && [];
            return f ? [t.createElement(f[1])] : (f = kr([n], t, e), e && e.length && i(e).remove(), i.merge([], f.childNodes))
        }, di = i.fn.load, i.fn.load = function(n, t, r) {
            if ("string" != typeof n && di) return di.apply(this, arguments);
            var u, o, s, f = this,
                e = n.indexOf(" ");
            return e > -1 && (u = i.trim(n.slice(e)), n = n.slice(0, e)), i.isFunction(t) ? (r = t, t = void 0) : t && "object" == typeof t && (o = "POST"), f.length > 0 && i.ajax({
                url: n,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done(function(n) {
                s = arguments;
                f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
            }).always(r && function(n, t) {
                f.each(function() {
                    r.apply(this, s || [n.responseText, t, n])
                })
            }), this
        }, i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
            i.fn[t] = function(n) {
                return this.on(t, n)
            }
        }), i.expr.filters.animated = function(n) {
            return i.grep(i.timers, function(t) {
                return n === t.elem
            }).length
        }, i.offset = {
            setOffset: function(n, t, r) {
                var e, o, s, h, u, c, v, l = i.css(n, "position"),
                    a = i(n),
                    f = {};
                "static" === l && (n.style.position = "relative");
                u = a.offset();
                s = i.css(n, "top");
                c = i.css(n, "left");
                v = ("absolute" === l || "fixed" === l) && (s + c).indexOf("auto") > -1;
                v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
                i.isFunction(t) && (t = t.call(n, r, i.extend({}, u)));
                null != t.top && (f.top = t.top - u.top + h);
                null != t.left && (f.left = t.left - u.left + o);
                "using" in t ? t.using.call(n, f) : a.css(f)
            }
        }, i.fn.extend({
            offset: function(n) {
                if (arguments.length) return void 0 === n ? this : this.each(function(t) {
                    i.offset.setOffset(this, n, t)
                });
                var t, f, r = this[0],
                    u = {
                        top: 0,
                        left: 0
                    },
                    e = r && r.ownerDocument;
                if (e) return t = e.documentElement, i.contains(t, r) ? (u = r.getBoundingClientRect(), f = hf(e), {
                    top: u.top + f.pageYOffset - t.clientTop,
                    left: u.left + f.pageXOffset - t.clientLeft
                }) : u
            },
            position: function() {
                if (this[0]) {
                    var n, r, u = this[0],
                        t = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)), {
                        top: r.top - t.top - i.css(u, "marginTop", !0),
                        left: r.left - t.left - i.css(u, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var n = this.offsetParent; n && "static" === i.css(n, "position");) n = n.offsetParent;
                    return n || ht
                })
            }
        }), i.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(n, t) {
            var r = "pageYOffset" === t;
            i.fn[n] = function(i) {
                return a(this, function(n, i, u) {
                    var f = hf(n);
                    return void 0 === u ? f ? f[t] : n[i] : void(f ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset) : n[i] = u)
                }, n, i, arguments.length)
            }
        }), i.each(["top", "left"], function(n, t) {
            i.cssHooks[t] = ci(f.pixelPosition, function(n, r) {
                if (r) return (r = tt(n, t), si.test(r) ? i(n).position()[t] + "px" : r)
            })
        }), i.each({
            Height: "height",
            Width: "width"
        }, function(n, t) {
            i.each({
                padding: "inner" + n,
                content: t,
                "": "outer" + n
            }, function(r, u) {
                i.fn[u] = function(u, f) {
                    var e = arguments.length && (r || "boolean" != typeof u),
                        o = r || (u === !0 || f === !0 ? "margin" : "border");
                    return a(this, function(t, r, u) {
                        var f;
                        return i.isWindow(t) ? t.document.documentElement["client" + n] : 9 === t.nodeType ? (f = t.documentElement, Math.max(t.body["scroll" + n], f["scroll" + n], t.body["offset" + n], f["offset" + n], f["client" + n])) : void 0 === u ? i.css(t, r, o) : i.style(t, r, u, o)
                    }, t, e ? u : void 0, e, null)
                }
            })
        }), i.fn.extend({
            bind: function(n, t, i) {
                return this.on(n, null, t, i)
            },
            unbind: function(n, t) {
                return this.off(n, null, t)
            },
            delegate: function(n, t, i, r) {
                return this.on(t, n, i, r)
            },
            undelegate: function(n, t, i) {
                return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
            },
            size: function() {
                return this.length
            }
        }), i.fn.andSelf = i.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return i
        }), cf = n.jQuery, lf = n.$, i.noConflict = function(t) {
            return n.$ === i && (n.$ = lf), t && n.jQuery === i && (n.jQuery = cf), i
        }, t || (n.jQuery = n.$ = i), i
    }), typeof jQuery == "undefined") throw new Error("Bootstrap's JavaScript requires jQuery"); + function(n) {
    "use strict";
    var t = n.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || t[0] == 1 && t[1] == 9 && t[2] < 1 || t[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(jQuery); + function(n) {
    "use strict";

    function t() {
        var i = document.createElement("bootstrap"),
            n = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var t in n)
            if (i.style[t] !== undefined) return {
                end: n[t]
            };
        return !1
    }
    n.fn.emulateTransitionEnd = function(t) {
        var i = !1,
            u = this,
            r;
        n(this).one("bsTransitionEnd", function() {
            i = !0
        });
        return r = function() {
            i || n(u).trigger(n.support.transition.end)
        }, setTimeout(r, t), this
    };
    n(function() {
        (n.support.transition = t(), n.support.transition) && (n.event.special.bsTransitionEnd = {
            bindType: n.support.transition.end,
            delegateType: n.support.transition.end,
            handle: function(t) {
                if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery); + function(n) {
    "use strict";

    function u(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("bs.alert");
            u || r.data("bs.alert", u = new t(this));
            typeof i == "string" && u[i].call(r)
        })
    }
    var i = '[data-dismiss="alert"]',
        t = function(t) {
            n(t).on("click", i, this.close)
        },
        r;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 150;
    t.prototype.close = function(i) {
        function e() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var f = n(this),
            u = f.attr("data-target"),
            r;
        (u || (u = f.attr("href"), u = u && u.replace(/.*(?=#[^\s]*$)/, "")), r = n(u === "#" ? [] : u), i && i.preventDefault(), r.length || (r = f.closest(".alert")), r.trigger(i = n.Event("close.bs.alert")), i.isDefaultPrevented()) || (r.removeClass("in"), n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e())
    };
    r = n.fn.alert;
    n.fn.alert = u;
    n.fn.alert.Constructor = t;
    n.fn.alert.noConflict = function() {
        return n.fn.alert = r, this
    };
    n(document).on("click.bs.alert.data-api", i, t.prototype.close)
}(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.button"),
                f = typeof i == "object" && i;
            r || u.data("bs.button", r = new t(this, f));
            i == "toggle" ? r.toggle() : i && r.setState(i)
        })
    }
    var t = function(i, r) {
            this.$element = n(i);
            this.options = n.extend({}, t.DEFAULTS, r);
            this.isLoading = !1
        },
        r;
    t.VERSION = "3.3.7";
    t.DEFAULTS = {
        loadingText: "loading..."
    };
    t.prototype.setState = function(t) {
        var i = "disabled",
            r = this.$element,
            f = r.is("input") ? "val" : "html",
            u = r.data();
        t += "Text";
        u.resetText == null && r.data("resetText", r[f]());
        setTimeout(n.proxy(function() {
            r[f](u[t] == null ? this.options[t] : u[t]);
            t == "loadingText" ? (this.isLoading = !0, r.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, r.removeClass(i).removeAttr(i).prop(i, !1))
        }, this), 0)
    };
    t.prototype.toggle = function() {
        var t = !0,
            i = this.$element.closest('[data-toggle="buttons"]'),
            n;
        i.length ? (n = this.$element.find("input"), n.prop("type") == "radio" ? (n.prop("checked") && (t = !1), i.find(".active").removeClass("active"), this.$element.addClass("active")) : n.prop("type") == "checkbox" && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")) : (this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active"))
    };
    r = n.fn.button;
    n.fn.button = i;
    n.fn.button.Constructor = t;
    n.fn.button.noConflict = function() {
        return n.fn.button = r, this
    };
    n(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        var r = n(t.target).closest(".btn");
        i.call(r, "toggle");
        n(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(), r.is("input,button") ? r.trigger("focus") : r.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        n(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.carousel"),
                f = n.extend({}, t.DEFAULTS, u.data(), typeof i == "object" && i),
                e = typeof i == "string" ? i : f.slide;
            r || u.data("bs.carousel", r = new t(this, f));
            typeof i == "number" ? r.to(i) : e ? r[e]() : f.interval && r.pause().cycle()
        })
    }
    var t = function(t, i) {
            this.$element = n(t);
            this.$indicators = this.$element.find(".carousel-indicators");
            this.options = i;
            this.paused = null;
            this.sliding = null;
            this.interval = null;
            this.$active = null;
            this.$items = null;
            this.options.keyboard && this.$element.on("keydown.bs.carousel", n.proxy(this.keydown, this));
            this.options.pause != "hover" || "ontouchstart" in document.documentElement || this.$element.on("mouseenter.bs.carousel", n.proxy(this.pause, this)).on("mouseleave.bs.carousel", n.proxy(this.cycle, this))
        },
        u, r;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 600;
    t.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    };
    t.prototype.keydown = function(n) {
        if (!/input|textarea/i.test(n.target.tagName)) {
            switch (n.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            n.preventDefault()
        }
    };
    t.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)), this
    };
    t.prototype.getItemIndex = function(n) {
        return this.$items = n.parent().children(".item"), this.$items.index(n || this.$active)
    };
    t.prototype.getItemForDirection = function(n, t) {
        var i = this.getItemIndex(t),
            f = n == "prev" && i === 0 || n == "next" && i == this.$items.length - 1,
            r, u;
        return f && !this.options.wrap ? t : (r = n == "prev" ? -1 : 1, u = (i + r) % this.$items.length, this.$items.eq(u))
    };
    t.prototype.to = function(n) {
        var i = this,
            t = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(n > this.$items.length - 1) && !(n < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            i.to(n)
        }) : t == n ? this.pause().cycle() : this.slide(n > t ? "next" : "prev", this.$items.eq(n))
    };
    t.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && n.support.transition && (this.$element.trigger(n.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    };
    t.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    };
    t.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    };
    t.prototype.slide = function(i, r) {
        var e = this.$element.find(".item.active"),
            u = r || this.getItemForDirection(i, e),
            l = this.interval,
            f = i == "next" ? "left" : "right",
            a = this,
            o, s, h, c;
        return u.hasClass("active") ? this.sliding = !1 : (o = u[0], s = n.Event("slide.bs.carousel", {
            relatedTarget: o,
            direction: f
        }), this.$element.trigger(s), s.isDefaultPrevented()) ? void 0 : (this.sliding = !0, l && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), h = n(this.$indicators.children()[this.getItemIndex(u)]), h && h.addClass("active")), c = n.Event("slid.bs.carousel", {
            relatedTarget: o,
            direction: f
        }), n.support.transition && this.$element.hasClass("slide") ? (u.addClass(i), u[0].offsetWidth, e.addClass(f), u.addClass(f), e.one("bsTransitionEnd", function() {
            u.removeClass([i, f].join(" ")).addClass("active");
            e.removeClass(["active", f].join(" "));
            a.sliding = !1;
            setTimeout(function() {
                a.$element.trigger(c)
            }, 0)
        }).emulateTransitionEnd(t.TRANSITION_DURATION)) : (e.removeClass("active"), u.addClass("active"), this.sliding = !1, this.$element.trigger(c)), l && this.cycle(), this)
    };
    u = n.fn.carousel;
    n.fn.carousel = i;
    n.fn.carousel.Constructor = t;
    n.fn.carousel.noConflict = function() {
        return n.fn.carousel = u, this
    };
    r = function(t) {
        var o, r = n(this),
            u = n(r.attr("data-target") || (o = r.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")),
            e, f;
        u.hasClass("carousel") && (e = n.extend({}, u.data(), r.data()), f = r.attr("data-slide-to"), f && (e.interval = !1), i.call(u, e), f && u.data("bs.carousel").to(f), t.preventDefault())
    };
    n(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r);
    n(window).on("load", function() {
        n('[data-ride="carousel"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery); + function(n) {
    "use strict";

    function r(t) {
        var i, r = t.attr("data-target") || (i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return n(r)
    }

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.collapse"),
                f = n.extend({}, t.DEFAULTS, u.data(), typeof i == "object" && i);
            !r && f.toggle && /show|hide/.test(i) && (f.toggle = !1);
            r || u.data("bs.collapse", r = new t(this, f));
            typeof i == "string" && r[i]()
        })
    }
    var t = function(i, r) {
            this.$element = n(i);
            this.options = n.extend({}, t.DEFAULTS, r);
            this.$trigger = n('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]');
            this.transitioning = null;
            this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
            this.options.toggle && this.toggle()
        },
        u;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 350;
    t.DEFAULTS = {
        toggle: !0
    };
    t.prototype.dimension = function() {
        var n = this.$element.hasClass("width");
        return n ? "width" : "height"
    };
    t.prototype.show = function() {
        var f, r, e, u, o, s;
        if (!this.transitioning && !this.$element.hasClass("in") && (r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"), !r || !r.length || (f = r.data("bs.collapse"), !f || !f.transitioning)) && (e = n.Event("show.bs.collapse"), this.$element.trigger(e), !e.isDefaultPrevented())) {
            if (r && r.length && (i.call(r, "hide"), f || r.data("bs.collapse", null)), u = this.dimension(), this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1, o = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[u]("");
                    this.transitioning = 0;
                    this.$element.trigger("shown.bs.collapse")
                }, !n.support.transition) return o.call(this);
            s = n.camelCase(["scroll", u].join("-"));
            this.$element.one("bsTransitionEnd", n.proxy(o, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[u](this.$element[0][s])
        }
    };
    t.prototype.hide = function() {
        var r, i, u;
        if (!this.transitioning && this.$element.hasClass("in") && (r = n.Event("hide.bs.collapse"), this.$element.trigger(r), !r.isDefaultPrevented())) {
            if (i = this.dimension(), this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1, u = function() {
                    this.transitioning = 0;
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                }, !n.support.transition) return u.call(this);
            this.$element[i](0).one("bsTransitionEnd", n.proxy(u, this)).emulateTransitionEnd(t.TRANSITION_DURATION)
        }
    };
    t.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    t.prototype.getParent = function() {
        return n(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(n.proxy(function(t, i) {
            var u = n(i);
            this.addAriaAndCollapsedClass(r(u), u)
        }, this)).end()
    };
    t.prototype.addAriaAndCollapsedClass = function(n, t) {
        var i = n.hasClass("in");
        n.attr("aria-expanded", i);
        t.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    u = n.fn.collapse;
    n.fn.collapse = i;
    n.fn.collapse.Constructor = t;
    n.fn.collapse.noConflict = function() {
        return n.fn.collapse = u, this
    };
    n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
        var u = n(this);
        u.attr("data-target") || t.preventDefault();
        var f = r(u),
            e = f.data("bs.collapse"),
            o = e ? "toggle" : u.data();
        i.call(f, o)
    })
}(jQuery); + function(n) {
    "use strict";

    function r(t) {
        var i = t.attr("data-target"),
            r;
        return i || (i = t.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), r = i && n(i), r && r.length ? r : t.parent()
    }

    function u(t) {
        t && t.which === 3 || (n(o).remove(), n(i).each(function() {
            var u = n(this),
                i = r(u),
                f = {
                    relatedTarget: this
                };
            i.hasClass("open") && (t && t.type == "click" && /input|textarea/i.test(t.target.tagName) && n.contains(i[0], t.target) || (i.trigger(t = n.Event("hide.bs.dropdown", f)), t.isDefaultPrevented()) || (u.attr("aria-expanded", "false"), i.removeClass("open").trigger(n.Event("hidden.bs.dropdown", f))))
        }))
    }

    function e(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("bs.dropdown");
            u || r.data("bs.dropdown", u = new t(this));
            typeof i == "string" && u[i].call(r)
        })
    }
    var o = ".dropdown-backdrop",
        i = '[data-toggle="dropdown"]',
        t = function(t) {
            n(t).on("click.bs.dropdown", this.toggle)
        },
        f;
    t.VERSION = "3.3.7";
    t.prototype.toggle = function(t) {
        var f = n(this),
            i, o, e;
        if (!f.is(".disabled, :disabled")) {
            if (i = r(f), o = i.hasClass("open"), u(), !o) {
                if ("ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length) n(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(n(this)).on("click", u);
                if (e = {
                        relatedTarget: this
                    }, i.trigger(t = n.Event("show.bs.dropdown", e)), t.isDefaultPrevented()) return;
                f.trigger("focus").attr("aria-expanded", "true");
                i.toggleClass("open").trigger(n.Event("shown.bs.dropdown", e))
            }
            return !1
        }
    };
    t.prototype.keydown = function(t) {
        var e, o, s, h, f, u;
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (e = n(this), t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))) {
            if (o = r(e), s = o.hasClass("open"), !s && t.which != 27 || s && t.which == 27) return t.which == 27 && o.find(i).trigger("focus"), e.trigger("click");
            (h = " li:not(.disabled):visible a", f = o.find(".dropdown-menu" + h), f.length) && (u = f.index(t.target), t.which == 38 && u > 0 && u--, t.which == 40 && u < f.length - 1 && u++, ~u || (u = 0), f.eq(u).trigger("focus"))
        }
    };
    f = n.fn.dropdown;
    n.fn.dropdown = e;
    n.fn.dropdown.Constructor = t;
    n.fn.dropdown.noConflict = function() {
        return n.fn.dropdown = f, this
    };
    n(document).on("click.bs.dropdown.data-api", u).on("click.bs.dropdown.data-api", ".dropdown form", function(n) {
        n.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i, t.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", t.prototype.keydown)
}(jQuery); + function(n) {
    "use strict";

    function i(i, r) {
        return this.each(function() {
            var f = n(this),
                u = f.data("bs.modal"),
                e = n.extend({}, t.DEFAULTS, f.data(), typeof i == "object" && i);
            u || f.data("bs.modal", u = new t(this, e));
            typeof i == "string" ? u[i](r) : e.show && u.show(r)
        })
    }
    var t = function(t, i) {
            this.options = i;
            this.$body = n(document.body);
            this.$element = n(t);
            this.$dialog = this.$element.find(".modal-dialog");
            this.$backdrop = null;
            this.isShown = null;
            this.originalBodyPad = null;
            this.scrollbarWidth = 0;
            this.ignoreBackdropClick = !1;
            this.options.remote && this.$element.find(".modal-content").load(this.options.remote, n.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        },
        r;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 300;
    t.BACKDROP_TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    };
    t.prototype.toggle = function(n) {
        return this.isShown ? this.hide() : this.show(n)
    };
    t.prototype.show = function(i) {
        var r = this,
            u = n.Event("show.bs.modal", {
                relatedTarget: i
            });
        if (this.$element.trigger(u), !this.isShown && !u.isDefaultPrevented()) {
            this.isShown = !0;
            this.checkScrollbar();
            this.setScrollbar();
            this.$body.addClass("modal-open");
            this.escape();
            this.resize();
            this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this));
            this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                r.$element.one("mouseup.dismiss.bs.modal", function(t) {
                    n(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
                })
            });
            this.backdrop(function() {
                var f = n.support.transition && r.$element.hasClass("fade"),
                    u;
                r.$element.parent().length || r.$element.appendTo(r.$body);
                r.$element.show().scrollTop(0);
                r.adjustDialog();
                f && r.$element[0].offsetWidth;
                r.$element.addClass("in");
                r.enforceFocus();
                u = n.Event("shown.bs.modal", {
                    relatedTarget: i
                });
                f ? r.$dialog.one("bsTransitionEnd", function() {
                    r.$element.trigger("focus").trigger(u)
                }).emulateTransitionEnd(t.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(u)
            })
        }
    };
    t.prototype.hide = function(i) {
        (i && i.preventDefault(), i = n.Event("hide.bs.modal"), this.$element.trigger(i), this.isShown && !i.isDefaultPrevented()) && (this.isShown = !1, this.escape(), this.resize(), n(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), n.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", n.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal())
    };
    t.prototype.enforceFocus = function() {
        n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function(n) {
            document === n.target || this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.trigger("focus")
        }, this))
    };
    t.prototype.escape = function() {
        if (this.isShown && this.options.keyboard) this.$element.on("keydown.dismiss.bs.modal", n.proxy(function(n) {
            n.which == 27 && this.hide()
        }, this));
        else this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    };
    t.prototype.resize = function() {
        if (this.isShown) n(window).on("resize.bs.modal", n.proxy(this.handleUpdate, this));
        else n(window).off("resize.bs.modal")
    };
    t.prototype.hideModal = function() {
        var n = this;
        this.$element.hide();
        this.backdrop(function() {
            n.$body.removeClass("modal-open");
            n.resetAdjustments();
            n.resetScrollbar();
            n.$element.trigger("hidden.bs.modal")
        })
    };
    t.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    };
    t.prototype.backdrop = function(i) {
        var e = this,
            f = this.$element.hasClass("fade") ? "fade" : "",
            r, u;
        if (this.isShown && this.options.backdrop) {
            r = n.support.transition && f;
            this.$backdrop = n(document.createElement("div")).addClass("modal-backdrop " + f).appendTo(this.$body);
            this.$element.on("click.dismiss.bs.modal", n.proxy(function(n) {
                if (this.ignoreBackdropClick) {
                    this.ignoreBackdropClick = !1;
                    return
                }
                n.target === n.currentTarget && (this.options.backdrop == "static" ? this.$element[0].focus() : this.hide())
            }, this));
            if (r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !i) return;
            r ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : i()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), u = function() {
            e.removeBackdrop();
            i && i()
        }, n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", u).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : u()) : i && i()
    };
    t.prototype.handleUpdate = function() {
        this.adjustDialog()
    };
    t.prototype.adjustDialog = function() {
        var n = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && n ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !n ? this.scrollbarWidth : ""
        })
    };
    t.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    };
    t.prototype.checkScrollbar = function() {
        var n = window.innerWidth,
            t;
        n || (t = document.documentElement.getBoundingClientRect(), n = t.right - Math.abs(t.left));
        this.bodyIsOverflowing = document.body.clientWidth < n;
        this.scrollbarWidth = this.measureScrollbar()
    };
    t.prototype.setScrollbar = function() {
        var n = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        this.bodyIsOverflowing && this.$body.css("padding-right", n + this.scrollbarWidth)
    };
    t.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    };
    t.prototype.measureScrollbar = function() {
        var n = document.createElement("div"),
            t;
        return n.className = "modal-scrollbar-measure", this.$body.append(n), t = n.offsetWidth - n.clientWidth, this.$body[0].removeChild(n), t
    };
    r = n.fn.modal;
    n.fn.modal = i;
    n.fn.modal.Constructor = t;
    n.fn.modal.noConflict = function() {
        return n.fn.modal = r, this
    };
    n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var r = n(this),
            f = r.attr("href"),
            u = n(r.attr("data-target") || f && f.replace(/.*(?=#[^\s]+$)/, "")),
            e = u.data("bs.modal") ? "toggle" : n.extend({
                remote: !/#/.test(f) && f
            }, u.data(), r.data());
        r.is("a") && t.preventDefault();
        u.one("show.bs.modal", function(n) {
            if (!n.isDefaultPrevented()) u.one("hidden.bs.modal", function() {
                r.is(":visible") && r.trigger("focus")
            })
        });
        i.call(u, e, this)
    })
}(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.tooltip"),
                f = typeof i == "object" && i;
            (r || !/destroy|hide/.test(i)) && (r || u.data("bs.tooltip", r = new t(this, f)), typeof i == "string" && r[i]())
        })
    }
    var t = function(n, t) {
            this.type = null;
            this.options = null;
            this.enabled = null;
            this.timeout = null;
            this.hoverState = null;
            this.$element = null;
            this.inState = null;
            this.init("tooltip", n, t)
        },
        i;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    };
    t.prototype.init = function(t, i, r) {
        var f, e, u, o, s;
        if (this.enabled = !0, this.type = t, this.$element = n(i), this.options = this.getOptions(r), this.$viewport = this.options.viewport && n(n.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (f = this.options.trigger.split(" "), e = f.length; e--;)
            if (u = f[e], u == "click") this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));
            else if (u != "manual") {
            o = u == "hover" ? "mouseenter" : "focusin";
            s = u == "hover" ? "mouseleave" : "focusout";
            this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this));
            this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this))
        }
        this.options.selector ? this._options = n.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    };
    t.prototype.getDefaults = function() {
        return t.DEFAULTS
    };
    t.prototype.getOptions = function(t) {
        return t = n.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && typeof t.delay == "number" && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    };
    t.prototype.getDelegateOptions = function() {
        var t = {},
            i = this.getDefaults();
        return this._options && n.each(this._options, function(n, r) {
            i[n] != r && (t[n] = r)
        }), t
    };
    t.prototype.enter = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState[t.type == "focusin" ? "focus" : "hover"] = !0), i.tip().hasClass("in") || i.hoverState == "in") {
            i.hoverState = "in";
            return
        }
        if (clearTimeout(i.timeout), i.hoverState = "in", !i.options.delay || !i.options.delay.show) return i.show();
        i.timeout = setTimeout(function() {
            i.hoverState == "in" && i.show()
        }, i.options.delay.show)
    };
    t.prototype.isInStateTrue = function() {
        for (var n in this.inState)
            if (this.inState[n]) return !0;
        return !1
    };
    t.prototype.leave = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState[t.type == "focusout" ? "focus" : "hover"] = !1), !i.isInStateTrue()) {
            if (clearTimeout(i.timeout), i.hoverState = "out", !i.options.delay || !i.options.delay.hide) return i.hide();
            i.timeout = setTimeout(function() {
                i.hoverState == "out" && i.hide()
            }, i.options.delay.hide)
        }
    };
    t.prototype.show = function() {
        var c = n.Event("show.bs." + this.type),
            l, a, f, v, o;
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(c), l = n.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]), c.isDefaultPrevented() || !l) return;
            var u = this,
                r = this.tip(),
                y = this.getUID(this.type);
            this.setContent();
            r.attr("id", y);
            this.$element.attr("aria-describedby", y);
            this.options.animation && r.addClass("fade");
            var i = typeof this.options.placement == "function" ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                p = /\s?auto?\s?/i,
                w = p.test(i);
            w && (i = i.replace(p, "") || "top");
            r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(i).data("bs." + this.type, this);
            this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
            this.$element.trigger("inserted.bs." + this.type);
            var e = this.getPosition(),
                s = r[0].offsetWidth,
                h = r[0].offsetHeight;
            w && (a = i, f = this.getPosition(this.$viewport), i = i == "bottom" && e.bottom + h > f.bottom ? "top" : i == "top" && e.top - h < f.top ? "bottom" : i == "right" && e.right + s > f.width ? "left" : i == "left" && e.left - s < f.left ? "right" : i, r.removeClass(a).addClass(i));
            v = this.getCalculatedOffset(i, e, s, h);
            this.applyPlacement(v, i);
            o = function() {
                var n = u.hoverState;
                u.$element.trigger("shown.bs." + u.type);
                u.hoverState = null;
                n == "out" && u.leave(u)
            };
            n.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", o).emulateTransitionEnd(t.TRANSITION_DURATION) : o()
        }
    };
    t.prototype.applyPlacement = function(t, i) {
        var r = this.tip(),
            l = r[0].offsetWidth,
            e = r[0].offsetHeight,
            o = parseInt(r.css("margin-top"), 10),
            s = parseInt(r.css("margin-left"), 10),
            h, f, u;
        isNaN(o) && (o = 0);
        isNaN(s) && (s = 0);
        t.top += o;
        t.left += s;
        n.offset.setOffset(r[0], n.extend({
            using: function(n) {
                r.css({
                    top: Math.round(n.top),
                    left: Math.round(n.left)
                })
            }
        }, t), 0);
        r.addClass("in");
        h = r[0].offsetWidth;
        f = r[0].offsetHeight;
        i == "top" && f != e && (t.top = t.top + e - f);
        u = this.getViewportAdjustedDelta(i, t, h, f);
        u.left ? t.left += u.left : t.top += u.top;
        var c = /top|bottom/.test(i),
            a = c ? u.left * 2 - l + h : u.top * 2 - e + f,
            v = c ? "offsetWidth" : "offsetHeight";
        r.offset(t);
        this.replaceArrow(a, r[0][v], c)
    };
    t.prototype.replaceArrow = function(n, t, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - n / t) + "%").css(i ? "top" : "left", "")
    };
    t.prototype.setContent = function() {
        var n = this.tip(),
            t = this.getTitle();
        n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t);
        n.removeClass("fade in top bottom left right")
    };
    t.prototype.hide = function(i) {
        function f() {
            r.hoverState != "in" && u.detach();
            r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type);
            i && i()
        }
        var r = this,
            u = n(this.$tip),
            e = n.Event("hide.bs." + this.type);
        if (this.$element.trigger(e), !e.isDefaultPrevented()) return u.removeClass("in"), n.support.transition && u.hasClass("fade") ? u.one("bsTransitionEnd", f).emulateTransitionEnd(t.TRANSITION_DURATION) : f(), this.hoverState = null, this
    };
    t.prototype.fixTitle = function() {
        var n = this.$element;
        (n.attr("title") || typeof n.attr("data-original-title") != "string") && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
    };
    t.prototype.hasContent = function() {
        return this.getTitle()
    };
    t.prototype.getPosition = function(t) {
        t = t || this.$element;
        var r = t[0],
            u = r.tagName == "BODY",
            i = r.getBoundingClientRect();
        i.width == null && (i = n.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var f = window.SVGElement && r instanceof window.SVGElement,
            e = u ? {
                top: 0,
                left: 0
            } : f ? null : t.offset(),
            o = {
                scroll: u ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            s = u ? {
                width: n(window).width(),
                height: n(window).height()
            } : null;
        return n.extend({}, i, o, s, e)
    };
    t.prototype.getCalculatedOffset = function(n, t, i, r) {
        return n == "bottom" ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - i / 2
        } : n == "top" ? {
            top: t.top - r,
            left: t.left + t.width / 2 - i / 2
        } : n == "left" ? {
            top: t.top + t.height / 2 - r / 2,
            left: t.left - i
        } : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    };
    t.prototype.getViewportAdjustedDelta = function(n, t, i, r) {
        var f = {
                top: 0,
                left: 0
            },
            e, u, o, s, h, c;
        return this.$viewport ? (e = this.options.viewport && this.options.viewport.padding || 0, u = this.getPosition(this.$viewport), /right|left/.test(n) ? (o = t.top - e - u.scroll, s = t.top + e - u.scroll + r, o < u.top ? f.top = u.top - o : s > u.top + u.height && (f.top = u.top + u.height - s)) : (h = t.left - e, c = t.left + e + i, h < u.left ? f.left = u.left - h : c > u.right && (f.left = u.left + u.width - c)), f) : f
    };
    t.prototype.getTitle = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-original-title") || (typeof n.title == "function" ? n.title.call(t[0]) : n.title)
    };
    t.prototype.getUID = function(n) {
        do n += ~~(Math.random() * 1e6); while (document.getElementById(n));
        return n
    };
    t.prototype.tip = function() {
        if (!this.$tip && (this.$tip = n(this.options.template), this.$tip.length != 1)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    };
    t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    };
    t.prototype.enable = function() {
        this.enabled = !0
    };
    t.prototype.disable = function() {
        this.enabled = !1
    };
    t.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    };
    t.prototype.toggle = function(t) {
        var i = this;
        t && (i = n(t.currentTarget).data("bs." + this.type), i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)));
        t ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    };
    t.prototype.destroy = function() {
        var n = this;
        clearTimeout(this.timeout);
        this.hide(function() {
            n.$element.off("." + n.type).removeData("bs." + n.type);
            n.$tip && n.$tip.detach();
            n.$tip = null;
            n.$arrow = null;
            n.$viewport = null;
            n.$element = null
        })
    };
    i = n.fn.tooltip;
    n.fn.tooltip = r;
    n.fn.tooltip.Constructor = t;
    n.fn.tooltip.noConflict = function() {
        return n.fn.tooltip = i, this
    }
}(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.popover"),
                f = typeof i == "object" && i;
            (r || !/destroy|hide/.test(i)) && (r || u.data("bs.popover", r = new t(this, f)), typeof i == "string" && r[i]())
        })
    }
    var t = function(n, t) {
            this.init("popover", n, t)
        },
        i;
    if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
    t.VERSION = "3.3.7";
    t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'
    });
    t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype);
    t.prototype.constructor = t;
    t.prototype.getDefaults = function() {
        return t.DEFAULTS
    };
    t.prototype.setContent = function() {
        var n = this.tip(),
            i = this.getTitle(),
            t = this.getContent();
        n.find(".popover-title")[this.options.html ? "html" : "text"](i);
        n.find(".popover-content").children().detach().end()[this.options.html ? typeof t == "string" ? "html" : "append" : "text"](t);
        n.removeClass("fade top bottom left right in");
        n.find(".popover-title").html() || n.find(".popover-title").hide()
    };
    t.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    };
    t.prototype.getContent = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-content") || (typeof n.content == "function" ? n.content.call(t[0]) : n.content)
    };
    t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    i = n.fn.popover;
    n.fn.popover = r;
    n.fn.popover.Constructor = t;
    n.fn.popover.noConflict = function() {
        return n.fn.popover = i, this
    }
}(jQuery); + function(n) {
    "use strict";

    function t(i, r) {
        this.$body = n(document.body);
        this.$scrollElement = n(i).is(document.body) ? n(window) : n(i);
        this.options = n.extend({}, t.DEFAULTS, r);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", n.proxy(this.process, this));
        this.refresh();
        this.process()
    }

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.scrollspy"),
                f = typeof i == "object" && i;
            r || u.data("bs.scrollspy", r = new t(this, f));
            typeof i == "string" && r[i]()
        })
    }
    t.VERSION = "3.3.7";
    t.DEFAULTS = {
        offset: 10
    };
    t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    };
    t.prototype.refresh = function() {
        var t = this,
            i = "offset",
            r = 0;
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        n.isWindow(this.$scrollElement[0]) || (i = "position", r = this.$scrollElement.scrollTop());
        this.$body.find(this.selector).map(function() {
            var f = n(this),
                u = f.data("target") || f.attr("href"),
                t = /^#./.test(u) && n(u);
            return t && t.length && t.is(":visible") && [
                [t[i]().top + r, u]
            ] || null
        }).sort(function(n, t) {
            return n[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]);
            t.targets.push(this[1])
        })
    };
    t.prototype.process = function() {
        var i = this.$scrollElement.scrollTop() + this.options.offset,
            f = this.getScrollHeight(),
            e = this.options.offset + f - this.$scrollElement.height(),
            t = this.offsets,
            r = this.targets,
            u = this.activeTarget,
            n;
        if (this.scrollHeight != f && this.refresh(), i >= e) return u != (n = r[r.length - 1]) && this.activate(n);
        if (u && i < t[0]) return this.activeTarget = null, this.clear();
        for (n = t.length; n--;) u != r[n] && i >= t[n] && (t[n + 1] === undefined || i < t[n + 1]) && this.activate(r[n])
    };
    t.prototype.activate = function(t) {
        this.activeTarget = t;
        this.clear();
        var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = n(r).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active"));
        i.trigger("activate.bs.scrollspy")
    };
    t.prototype.clear = function() {
        n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var r = n.fn.scrollspy;
    n.fn.scrollspy = i;
    n.fn.scrollspy.Constructor = t;
    n.fn.scrollspy.noConflict = function() {
        return n.fn.scrollspy = r, this
    };
    n(window).on("load.bs.scrollspy.data-api", function() {
        n('[data-spy="scroll"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.tab");
            r || u.data("bs.tab", r = new t(this));
            typeof i == "string" && r[i]()
        })
    }
    var t = function(t) {
            this.element = n(t)
        },
        u, i;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 150;
    t.prototype.show = function() {
        var t = this.element,
            f = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target"),
            u;
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var r = f.find(".active:last a"),
                e = n.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                o = n.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            (r.trigger(e), t.trigger(o), o.isDefaultPrevented() || e.isDefaultPrevented()) || (u = n(i), this.activate(t.closest("li"), f), this.activate(u, u.parent(), function() {
                r.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: t[0]
                });
                t.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: r[0]
                })
            }))
        }
    };
    t.prototype.activate = function(i, r, u) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1);
            i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0);
            o ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade");
            i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
            u && u()
        }
        var f = r.find("> .active"),
            o = u && n.support.transition && (f.length && f.hasClass("fade") || !!r.find("> .fade").length);
        f.length && o ? f.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e();
        f.removeClass("in")
    };
    u = n.fn.tab;
    n.fn.tab = r;
    n.fn.tab.Constructor = t;
    n.fn.tab.noConflict = function() {
        return n.fn.tab = u, this
    };
    i = function(t) {
        t.preventDefault();
        r.call(n(this), "show")
    };
    n(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.affix"),
                f = typeof i == "object" && i;
            r || u.data("bs.affix", r = new t(this, f));
            typeof i == "string" && r[i]()
        })
    }
    var t = function(i, r) {
            this.options = n.extend({}, t.DEFAULTS, r);
            this.$target = n(this.options.target).on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this));
            this.$element = n(i);
            this.affixed = null;
            this.unpin = null;
            this.pinnedOffset = null;
            this.checkPosition()
        },
        r;
    t.VERSION = "3.3.7";
    t.RESET = "affix affix-top affix-bottom";
    t.DEFAULTS = {
        offset: 0,
        target: window
    };
    t.prototype.getState = function(n, t, i, r) {
        var u = this.$target.scrollTop(),
            f = this.$element.offset(),
            e = this.$target.height();
        if (i != null && this.affixed == "top") return u < i ? "top" : !1;
        if (this.affixed == "bottom") return i != null ? u + this.unpin <= f.top ? !1 : "bottom" : u + e <= n - r ? !1 : "bottom";
        var o = this.affixed == null,
            s = o ? u : f.top,
            h = o ? e : t;
        return i != null && u <= i ? "top" : r != null && s + h >= n - r ? "bottom" : !1
    };
    t.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(t.RESET).addClass("affix");
        var n = this.$target.scrollTop(),
            i = this.$element.offset();
        return this.pinnedOffset = i.top - n
    };
    t.prototype.checkPositionWithEventLoop = function() {
        setTimeout(n.proxy(this.checkPosition, this), 1)
    };
    t.prototype.checkPosition = function() {
        var i, f, o;
        if (this.$element.is(":visible")) {
            var s = this.$element.height(),
                r = this.options.offset,
                e = r.top,
                u = r.bottom,
                h = Math.max(n(document).height(), n(document.body).height());
            if (typeof r != "object" && (u = e = r), typeof e == "function" && (e = r.top(this.$element)), typeof u == "function" && (u = r.bottom(this.$element)), i = this.getState(h, s, e, u), this.affixed != i) {
                if (this.unpin != null && this.$element.css("top", ""), f = "affix" + (i ? "-" + i : ""), o = n.Event(f + ".bs.affix"), this.$element.trigger(o), o.isDefaultPrevented()) return;
                this.affixed = i;
                this.unpin = i == "bottom" ? this.getPinnedOffset() : null;
                this.$element.removeClass(t.RESET).addClass(f).trigger(f.replace("affix", "affixed") + ".bs.affix")
            }
            i == "bottom" && this.$element.offset({
                top: h - s - u
            })
        }
    };
    r = n.fn.affix;
    n.fn.affix = i;
    n.fn.affix.Constructor = t;
    n.fn.affix.noConflict = function() {
        return n.fn.affix = r, this
    };
    n(window).on("load", function() {
        n('[data-spy="affix"]').each(function() {
            var r = n(this),
                t = r.data();
            t.offset = t.offset || {};
            t.offsetBottom != null && (t.offset.bottom = t.offsetBottom);
            t.offsetTop != null && (t.offset.top = t.offsetTop);
            i.call(r, t)
        })
    })
}(jQuery);
$("#subMenu").click(function() {
    $("#castMenu").fadeToggle("fast")
});
jQuery(function(n) {
        n("#slides").superslides({
            animation: "fade",
            animation_easing: "linear",
            pagination: "true"
        });
        n(".single_notice_pane").slick({
            slide: "ul"
        });
        n('[href="#notice"]').on("shown.bs.tab", function() {
            n(".single_notice_pane").resize()
        });
        n('[href="#news"]').on("shown.bs.tab", function() {
            n(".single_notice_pane").resize()
        });
        n("#myStathalf").circliful();
        n("#myStat").circliful();
        n("#myStathalf2").circliful();
        n("#myStat2").circliful();
        n("#myStat3").circliful();
        n("#myStat4").circliful();
        n("#myStathalf3").circliful();
        wow = new WOW({
            animateClass: "animated",
            offset: 100
        });
        wow.init();
        n(".course_nav").slick({
            dots: !1,
            infinite: !1,
            speed: 300,
            slidesToShow: 3,
            arrows: !0,
            slidesToScroll: 3,
            slide: "li",
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: !0,
                    dots: !0
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
        n(".tutors_nav").slick({
            dots: !0,
            infinite: !0,
            speed: 300,
            slidesToShow: 5,
            arrows: !1,
            slidesToScroll: 1,
            slide: "li",
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: !0,
                    arrows: !1
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
        n(".soc_tooltip").tooltip("hide");
        n(".events_slider").slick({
            dots: !0,
            infinite: !0,
            speed: 500,
            fade: !0,
            cssEase: "linear"
        });
        n("#gallerySLide a").tosrus({
            buttons: "inline",
            pagination: {
                add: !0,
                type: "thumbnails"
            },
            caption: {
                add: !0
            }
        });
        n(window).scroll(function() {
            n(this).scrollTop() > 300 ? n(".scrollToTop").fadeIn() : n(".scrollToTop").fadeOut()
        });
        n(".scrollToTop").click(function() {
            return n("html, body").animate({
                scrollTop: 0
            }, 800), !1
        })
    }),
    function(n, t, i) {
        function y(n, t, i, u, f, e, o, s, c) {
            var k = !1;
            o = !0 === o && !0 === s;
            t = t || {};
            t.original || (t.original = {}, k = !0);
            t.properties = t.properties || {};
            t.secondary = t.secondary || {};
            s = t.meta;
            for (var b = t.original, l = t.properties, d = t.secondary, a = r.length - 1; 0 <= a; a--) {
                var y = r[a] + "transition-property",
                    p = r[a] + "transition-duration",
                    w = r[a] + "transition-timing-function";
                i = o ? r[a] + "transform" : i;
                k && (b[y] = n.css(y) || "", b[p] = n.css(p) || "", b[w] = n.css(w) || "");
                d[i] = o ? !0 === c || !0 === h && !1 !== c && v ? "translate3d(" + s.left + "px, " + s.top + "px, 0)" : "translate(" + s.left + "px," + s.top + "px)" : e;
                l[y] = (l[y] ? l[y] + "," : "") + i;
                l[p] = (l[p] ? l[p] + "," : "") + u + "ms";
                l[w] = (l[w] ? l[w] + "," : "") + f
            }
            return t
        }

        function u(n) {
            for (var t in n) return !1;
            return !0
        }

        function p(n) {
            n = n.toUpperCase();
            var t = {
                LI: "list-item",
                TR: "table-row",
                TD: "table-cell",
                TH: "table-cell",
                CAPTION: "table-caption",
                COL: "table-column",
                COLGROUP: "table-column-group",
                TFOOT: "table-footer-group",
                THEAD: "table-header-group",
                TBODY: "table-row-group"
            };
            return "string" == typeof t[n] ? t[n] : "block"
        }

        function o(n) {
            return parseFloat(n.replace(n.match(/\D+$/), ""))
        }

        function c(n) {
            var t = !0;
            return n.each(function(n, i) {
                return t = t && i.ownerDocument
            }), t
        }
        var w = "top right bottom left opacity height width".split(" "),
            s = ["top", "right", "bottom", "left"],
            r = ["-webkit-", "-moz-", "-o-", ""],
            b = ["avoidTransforms", "useTranslate3d", "leaveTransforms"],
            k = /^([+-]=)?([\d+-.]+)(.*)$/,
            d = /([A-Z])/g,
            g = {
                secondary: {},
                meta: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            },
            l = null,
            f = !1,
            e = (document.body || document.documentElement).style,
            a = void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.OTransition || void 0 !== e.transition,
            v = "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix,
            h = v;
        n.expr && n.expr.filters && (l = n.expr.filters.animated, n.expr.filters.animated = function(t) {
            return n(t).data("events") && n(t).data("events")["webkitTransitionEnd oTransitionEnd transitionend"] ? !0 : l.call(this, t)
        });
        n.extend({
            toggle3DByDefault: function() {
                return h = !h
            },
            toggleDisabledByDefault: function() {
                return f = !f
            },
            setDisabledByDefault: function(n) {
                return f = n
            }
        });
        n.fn.translation = function() {
            var n, u, t, i;
            if (!this[0]) return null;
            if (n = window.getComputedStyle(this[0], null), u = {
                    x: 0,
                    y: 0
                }, n)
                for (t = r.length - 1; 0 <= t; t--)
                    if (i = n.getPropertyValue(r[t] + "transform"), i && /matrix/i.test(i)) {
                        n = i.replace(/^matrix\(/i, "").split(/, |\)$/g);
                        u = {
                            x: parseInt(n[4], 10),
                            y: parseInt(n[5], 10)
                        };
                        break
                    }
            return u
        };
        n.fn.animate = function(i, e, h, l) {
            var v;
            i = i || {};
            var it = !("undefined" != typeof i.bottom || "undefined" != typeof i.right),
                d = n.speed(e, h, l),
                ut = this,
                tt = 0,
                rt = function() {
                    tt--;
                    0 === tt && "function" == typeof d.complete && d.complete.apply(ut, arguments)
                },
                nt;
            if (!(nt = !0 === ("undefined" != typeof i.avoidCSSTransitions ? i.avoidCSSTransitions : f)) && !(nt = !a) && !(nt = u(i))) {
                n: {
                    for (v in i)
                        if (("width" == v || "height" == v) && ("show" == i[v] || "hide" == i[v] || "toggle" == i[v])) {
                            v = !0;
                            break n
                        }
                    v = !1
                }
                nt = v || 0 >= d.duration
            }
            return nt ? t.apply(this, arguments) : this[!0 === d.queue ? "queue" : "each"](function() {
                var a = n(this),
                    ft = n.extend({}, d),
                    wt = function(t) {
                        var e = a.data("jQe") || {
                                original: {}
                            },
                            f = {},
                            u;
                        if (2 == t.eventPhase) {
                            if (!0 !== i.leaveTransforms) {
                                for (t = r.length - 1; 0 <= t; t--) f[r[t] + "transform"] = "";
                                if (it && "undefined" != typeof e.meta)
                                    for (t = 0; u = s[t]; ++t) f[u] = e.meta[u + "_o"] + "px", n(this).css(u, f[u])
                            }
                            a.unbind("webkitTransitionEnd oTransitionEnd transitionend").css(e.original).css(f).data("jQe", null);
                            "hide" === i.opacity && a.css({
                                display: "none",
                                opacity: ""
                            });
                            rt.call(this)
                        }
                    },
                    ht = {
                        bounce: "cubic-bezier(0.0, 0.35, .5, 1.3)",
                        linear: "linear",
                        swing: "ease-in-out",
                        easeInQuad: "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
                        easeInCubic: "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
                        easeInQuart: "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
                        easeInQuint: "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
                        easeInSine: "cubic-bezier(0.470, 0.000, 0.745, 0.715)",
                        easeInExpo: "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
                        easeInCirc: "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
                        easeInBack: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
                        easeOutQuad: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                        easeOutCubic: "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
                        easeOutQuart: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
                        easeOutQuint: "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
                        easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
                        easeOutExpo: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
                        easeOutCirc: "cubic-bezier(0.075, 0.820, 0.165, 1.000)",
                        easeOutBack: "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
                        easeInOutQuad: "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
                        easeInOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
                        easeInOutQuart: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
                        easeInOutQuint: "cubic-bezier(0.860, 0.000, 0.070, 1.000)",
                        easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
                        easeInOutExpo: "cubic-bezier(1.000, 0.000, 0.000, 1.000)",
                        easeInOutCirc: "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
                        easeInOutBack: "cubic-bezier(0.680, -0.550, 0.265, 1.550)"
                    },
                    ct = {},
                    ht = ht[ft.easing || "swing"] ? ht[ft.easing || "swing"] : ft.easing || "swing",
                    l, f, pt;
                for (l in i)
                    if (-1 === n.inArray(l, b)) {
                        var lt = -1 < n.inArray(l, s),
                            h, e = a,
                            et = i[l],
                            v = l,
                            nt = lt && !0 !== i.avoidTransforms;
                        if ("d" == v) h = void 0;
                        else if (c(e)) {
                            f = k.exec(et);
                            h = "auto" === e.css(v) ? 0 : e.css(v);
                            h = "string" == typeof h ? o(h) : h;
                            "string" == typeof et && o(et);
                            var nt = !0 === nt ? 0 : h,
                                vt = e.is(":hidden"),
                                ut = e.translation();
                            "left" == v && (nt = parseInt(h, 10) + ut.x);
                            "right" == v && (nt = parseInt(h, 10) + ut.x);
                            "top" == v && (nt = parseInt(h, 10) + ut.y);
                            "bottom" == v && (nt = parseInt(h, 10) + ut.y);
                            !f && "show" == et ? (nt = 1, vt && e.css({
                                display: p(e.context.tagName),
                                opacity: 0
                            })) : !f && "hide" == et && (nt = 0);
                            f ? (e = parseFloat(f[2]), f[1] && (e = ("-=" === f[1] ? -1 : 1) * e + parseInt(nt, 10)), h = e) : h = nt
                        } else h = void 0;
                        if (f = l, e = h, et = a, c(et) ? (v = -1 < n.inArray(f, w), ("width" == f || "height" == f || "opacity" == f) && parseFloat(e) === parseFloat(et.css(f)) && (v = !1), f = v) : f = !1, f) {
                            var f = a,
                                e = l,
                                et = ft.duration,
                                v = ht,
                                lt = lt && !0 !== i.avoidTransforms,
                                nt = it,
                                vt = i.useTranslate3d,
                                ut = (ut = f.data("jQe")) && !u(ut) ? ut : n.extend(!0, {}, g),
                                ot = h;
                            if (-1 < n.inArray(e, s)) {
                                var st = ut.meta,
                                    yt = o(f.css(e)) || 0,
                                    at = e + "_o",
                                    ot = h - yt;
                                st[e] = ot;
                                st[at] = "auto" == f.css(e) ? 0 + ot : yt + ot || 0;
                                ut.meta = st;
                                nt && 0 === ot && (ot = 0 - st[at], st[e] = ot, st[at] = 0)
                            }
                            f.data("jQe", y(f, ut, e, et, v, ot, lt, nt, vt))
                        } else ct[l] = i[l]
                    }
                return a.unbind("webkitTransitionEnd oTransitionEnd transitionend"), !(l = a.data("jQe")) || u(l) || u(l.secondary) ? ft.queue = !1 : (tt++, a.css(l.properties), pt = l.secondary, setTimeout(function() {
                    a.bind("webkitTransitionEnd oTransitionEnd transitionend", wt).css(pt)
                })), u(ct) || (tt++, t.apply(a, [ct, {
                    duration: ft.duration,
                    easing: n.easing[ft.easing] ? ft.easing : n.easing.swing ? "swing" : "linear",
                    complete: rt,
                    queue: ft.queue
                }])), !0
            })
        };
        n.fn.animate.defaults = {};
        n.fn.stop = function(t, f, e) {
            return a ? (t && this.queue([]), this.each(function() {
                var l = n(this),
                    o = l.data("jQe"),
                    h, s, a, c;
                if (o && !u(o)) {
                    if (s = {}, f) {
                        if (s = o.secondary, !e && void 0 !== typeof o.meta.left_o || void 0 !== typeof o.meta.top_o)
                            for (s.left = void 0 !== typeof o.meta.left_o ? o.meta.left_o : "auto", s.top = void 0 !== typeof o.meta.top_o ? o.meta.top_o : "auto", h = r.length - 1; 0 <= h; h--) s[r[h] + "transform"] = ""
                    } else if (!u(o.secondary) && (a = window.getComputedStyle(l[0], null), a))
                        for (c in o.secondary)
                            if (o.secondary.hasOwnProperty(c) && (c = c.replace(d, "-$1").toLowerCase(), s[c] = a.getPropertyValue(c), !e && /matrix/i.test(s[c])))
                                for (h = s[c].replace(/^matrix\(/i, "").split(/, |\)$/g), s.left = parseFloat(h[4]) + parseFloat(l.css("left")) + "px" || "auto", s.top = parseFloat(h[5]) + parseFloat(l.css("top")) + "px" || "auto", h = r.length - 1; 0 <= h; h--) s[r[h] + "transform"] = "";
                    l.unbind("webkitTransitionEnd oTransitionEnd transitionend");
                    l.css(o.original).css(s).data("jQe", null)
                } else i.apply(l, [t, f])
            }), this) : i.apply(this, [t, f])
        }
    }(jQuery, jQuery.fn.animate, jQuery.fn.stop);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(n, t, i, r, u) {
            return jQuery.easing[jQuery.easing.def](n, t, i, r, u)
        },
        easeInQuad: function(n, t, i, r, u) {
            return r * (t /= u) * t + i
        },
        easeOutQuad: function(n, t, i, r, u) {
            return -r * (t /= u) * (t - 2) + i
        },
        easeInOutQuad: function(n, t, i, r, u) {
            return (t /= u / 2) < 1 ? r / 2 * t * t + i : -r / 2 * (--t * (t - 2) - 1) + i
        },
        easeInCubic: function(n, t, i, r, u) {
            return r * (t /= u) * t * t + i
        },
        easeOutCubic: function(n, t, i, r, u) {
            return r * ((t = t / u - 1) * t * t + 1) + i
        },
        easeInOutCubic: function(n, t, i, r, u) {
            return (t /= u / 2) < 1 ? r / 2 * t * t * t + i : r / 2 * ((t -= 2) * t * t + 2) + i
        },
        easeInQuart: function(n, t, i, r, u) {
            return r * (t /= u) * t * t * t + i
        },
        easeOutQuart: function(n, t, i, r, u) {
            return -r * ((t = t / u - 1) * t * t * t - 1) + i
        },
        easeInOutQuart: function(n, t, i, r, u) {
            return (t /= u / 2) < 1 ? r / 2 * t * t * t * t + i : -r / 2 * ((t -= 2) * t * t * t - 2) + i
        },
        easeInQuint: function(n, t, i, r, u) {
            return r * (t /= u) * t * t * t * t + i
        },
        easeOutQuint: function(n, t, i, r, u) {
            return r * ((t = t / u - 1) * t * t * t * t + 1) + i
        },
        easeInOutQuint: function(n, t, i, r, u) {
            return (t /= u / 2) < 1 ? r / 2 * t * t * t * t * t + i : r / 2 * ((t -= 2) * t * t * t * t + 2) + i
        },
        easeInSine: function(n, t, i, r, u) {
            return -r * Math.cos(t / u * (Math.PI / 2)) + r + i
        },
        easeOutSine: function(n, t, i, r, u) {
            return r * Math.sin(t / u * (Math.PI / 2)) + i
        },
        easeInOutSine: function(n, t, i, r, u) {
            return -r / 2 * (Math.cos(Math.PI * t / u) - 1) + i
        },
        easeInExpo: function(n, t, i, r, u) {
            return t == 0 ? i : r * Math.pow(2, 10 * (t / u - 1)) + i
        },
        easeOutExpo: function(n, t, i, r, u) {
            return t == u ? i + r : r * (-Math.pow(2, -10 * t / u) + 1) + i
        },
        easeInOutExpo: function(n, t, i, r, u) {
            return t == 0 ? i : t == u ? i + r : (t /= u / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + i : r / 2 * (-Math.pow(2, -10 * --t) + 2) + i
        },
        easeInCirc: function(n, t, i, r, u) {
            return -r * (Math.sqrt(1 - (t /= u) * t) - 1) + i
        },
        easeOutCirc: function(n, t, i, r, u) {
            return r * Math.sqrt(1 - (t = t / u - 1) * t) + i
        },
        easeInOutCirc: function(n, t, i, r, u) {
            return (t /= u / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + i : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
        },
        easeInElastic: function(n, t, i, r, u) {
            var o = 1.70158,
                f = 0,
                e = r;
            return t == 0 ? i : (t /= u) == 1 ? i + r : (f || (f = u * .3), e < Math.abs(r) ? (e = r, o = f / 4) : o = f / (2 * Math.PI) * Math.asin(r / e), -(e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * u - o) * 2 * Math.PI / f)) + i)
        },
        easeOutElastic: function(n, t, i, r, u) {
            var o = 1.70158,
                f = 0,
                e = r;
            return t == 0 ? i : (t /= u) == 1 ? i + r : (f || (f = u * .3), e < Math.abs(r) ? (e = r, o = f / 4) : o = f / (2 * Math.PI) * Math.asin(r / e), e * Math.pow(2, -10 * t) * Math.sin((t * u - o) * 2 * Math.PI / f) + r + i)
        },
        easeInOutElastic: function(n, t, i, r, u) {
            var o = 1.70158,
                f = 0,
                e = r;
            return t == 0 ? i : (t /= u / 2) == 2 ? i + r : (f || (f = u * .3 * 1.5), e < Math.abs(r) ? (e = r, o = f / 4) : o = f / (2 * Math.PI) * Math.asin(r / e), t < 1) ? -.5 * e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * u - o) * 2 * Math.PI / f) + i : e * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * u - o) * 2 * Math.PI / f) * .5 + r + i
        },
        easeInBack: function(n, t, i, r, u, f) {
            return f == undefined && (f = 1.70158), r * (t /= u) * t * ((f + 1) * t - f) + i
        },
        easeOutBack: function(n, t, i, r, u, f) {
            return f == undefined && (f = 1.70158), r * ((t = t / u - 1) * t * ((f + 1) * t + f) + 1) + i
        },
        easeInOutBack: function(n, t, i, r, u, f) {
            return (f == undefined && (f = 1.70158), (t /= u / 2) < 1) ? r / 2 * t * t * (((f *= 1.525) + 1) * t - f) + i : r / 2 * ((t -= 2) * t * (((f *= 1.525) + 1) * t + f) + 2) + i
        },
        easeInBounce: function(n, t, i, r, u) {
            return r - jQuery.easing.easeOutBounce(n, u - t, 0, r, u) + i
        },
        easeOutBounce: function(n, t, i, r, u) {
            return (t /= u) < 1 / 2.75 ? r * 7.5625 * t * t + i : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
        },
        easeInOutBounce: function(n, t, i, r, u) {
            return t < u / 2 ? jQuery.easing.easeInBounce(n, t * 2, 0, r, u) * .5 + i : jQuery.easing.easeOutBounce(n, t * 2 - u, 0, r, u) * .5 + r * .5 + i
        }
    }),
    function(n, t) {
        var r, i = "superslides";
        r = function(i, r) {
            var o, s;
            this.options = t.extend({
                play: !1,
                animation_speed: 600,
                animation_easing: "swing",
                animation: "slide",
                inherit_width_from: n,
                inherit_height_from: n,
                pagination: !0,
                hashchange: !1,
                scrollable: !0,
                elements: {
                    preserve: ".preserve",
                    nav: ".slides-navigation",
                    container: ".slides-container",
                    pagination: ".slides-pagination"
                }
            }, r);
            var u = this,
                h = t("<div>", {
                    "class": "slides-control"
                }),
                f = 1;
            this.$el = t(i);
            this.$container = this.$el.find(this.options.elements.container);
            var c = function() {
                    return f = u._findMultiplier(), u.$el.on("click", u.options.elements.nav + " a", function(n) {
                        n.preventDefault();
                        u.stop();
                        t(this).hasClass("next") ? u.animate("next", function() {
                            u.start()
                        }) : u.animate("prev", function() {
                            u.start()
                        })
                    }), t(document).on("keyup", function(n) {
                        37 === n.keyCode && u.animate("prev");
                        39 === n.keyCode && u.animate("next")
                    }), t(n).on("resize", function() {
                        setTimeout(function() {
                            var n = u.$container.children();
                            u.width = u._findWidth();
                            u.height = u._findHeight();
                            n.css({
                                width: u.width,
                                left: u.width
                            });
                            u.css.containers();
                            u.css.images()
                        }, 10)
                    }), t(n).on("hashchange", function() {
                        var n, t = u._parseHash();
                        n = t && !isNaN(t) ? u._upcomingSlide(t - 1) : u._upcomingSlide(t);
                        n >= 0 && n !== u.current && u.animate(n)
                    }), u.pagination._events(), u.start(), u
                },
                l = {
                    containers: function() {
                        u.init ? (u.$el.css({
                            height: u.height
                        }), u.$control.css({
                            width: u.width * f,
                            left: -u.width
                        }), u.$container.css({})) : (t("body").css({
                            margin: 0
                        }), u.$el.css({
                            position: "relative",
                            overflow: "hidden",
                            width: "100%",
                            height: u.height
                        }), u.$control.css({
                            position: "relative",
                            transform: "translate3d(0)",
                            height: "100%",
                            width: u.width * f,
                            left: -u.width
                        }), u.$container.css({
                            display: "none",
                            margin: "0",
                            padding: "0",
                            listStyle: "none",
                            position: "relative",
                            height: "100%"
                        }));
                        1 === u.size() && u.$el.find(u.options.elements.nav).hide()
                    },
                    images: function() {
                        var n = u.$container.find("img").not(u.options.elements.preserve);
                        n.removeAttr("width").removeAttr("height").css({
                            "-webkit-backface-visibility": "hidden",
                            "-ms-interpolation-mode": "bicubic",
                            position: "absolute",
                            left: "0",
                            top: "0",
                            "z-index": "-1",
                            "max-width": "none"
                        });
                        n.each(function() {
                            var i = u.image._aspectRatio(this),
                                n = this,
                                r;
                            t.data(this, "processed") ? (u.image._scale(n, i), u.image._center(n, i)) : (r = new Image, r.onload = function() {
                                u.image._scale(n, i);
                                u.image._center(n, i);
                                t.data(n, "processed", !0)
                            }, r.src = this.src)
                        })
                    },
                    children: function() {
                        var n = u.$container.children();
                        n.is("img") && (n.each(function() {
                            if (t(this).is("img")) {
                                t(this).wrap("<div>");
                                var n = t(this).attr("id");
                                t(this).removeAttr("id");
                                t(this).parent().attr("id", n)
                            }
                        }), n = u.$container.children());
                        u.init || n.css({
                            display: "none",
                            left: 2 * u.width
                        });
                        n.css({
                            position: "absolute",
                            overflow: "hidden",
                            height: "100%",
                            width: u.width,
                            top: 0,
                            zIndex: 0
                        })
                    }
                },
                e = {
                    slide: function(n, t) {
                        var i = u.$container.children(),
                            r = i.eq(n.upcoming_slide);
                        r.css({
                            left: n.upcoming_position,
                            display: "block"
                        });
                        u.$control.animate({
                            left: n.offset
                        }, u.options.animation_speed, u.options.animation_easing, function() {
                            u.size() > 1 && (u.$control.css({
                                left: -u.width
                            }), i.eq(n.upcoming_slide).css({
                                left: u.width,
                                zIndex: 2
                            }), n.outgoing_slide >= 0 && i.eq(n.outgoing_slide).css({
                                left: u.width,
                                display: "none",
                                zIndex: 0
                            }));
                            t()
                        })
                    },
                    fade: function(n, t) {
                        var i = this,
                            r = i.$container.children(),
                            f = r.eq(n.outgoing_slide),
                            u = r.eq(n.upcoming_slide);
                        u.css({
                            left: this.width,
                            opacity: 1,
                            display: "block"
                        });
                        n.outgoing_slide >= 0 ? f.animate({
                            opacity: 0
                        }, i.options.animation_speed, i.options.animation_easing, function() {
                            i.size() > 1 && (r.eq(n.upcoming_slide).css({
                                zIndex: 2
                            }), n.outgoing_slide >= 0 && r.eq(n.outgoing_slide).css({
                                opacity: 1,
                                display: "none",
                                zIndex: 0
                            }));
                            t()
                        }) : (u.css({
                            zIndex: 2
                        }), t())
                    }
                };
            return e = t.extend(e, t.fn.superslides.fx), o = {
                _centerY: function(n) {
                    var i = t(n);
                    i.css({
                        top: (u.height - i.height()) / 2
                    })
                },
                _centerX: function(n) {
                    var i = t(n);
                    i.css({
                        left: (u.width - i.width()) / 2
                    })
                },
                _center: function(n) {
                    u.image._centerX(n);
                    u.image._centerY(n)
                },
                _aspectRatio: function(n) {
                    if (!n.naturalHeight && !n.naturalWidth) {
                        var t = new Image;
                        t.src = n.src;
                        n.naturalHeight = t.height;
                        n.naturalWidth = t.width
                    }
                    return n.naturalHeight / n.naturalWidth
                },
                _scale: function(n, i) {
                    i = i || u.image._aspectRatio(n);
                    var f = u.height / u.width,
                        r = t(n);
                    f > i ? r.css({
                        height: u.height,
                        width: u.height / i
                    }) : r.css({
                        height: u.width * i,
                        width: u.width
                    })
                }
            }, s = {
                _setCurrent: function(n) {
                    if (u.$pagination) {
                        var t = u.$pagination.children();
                        t.removeClass("current");
                        t.eq(n).addClass("current")
                    }
                },
                _addItem: function(n) {
                    var e = n + 1,
                        i = e,
                        o = u.$container.children().eq(n),
                        r = o.attr("id"),
                        f;
                    r && (i = r);
                    f = t("<a>", {
                        href: "#" + i,
                        text: i
                    });
                    f.appendTo(u.$pagination)
                },
                _setup: function() {
                    var i, n;
                    if (u.options.pagination && 1 !== u.size())
                        for (i = t("<nav>", {
                                "class": u.options.elements.pagination.replace(/^\./, "")
                            }), u.$pagination = i.appendTo(u.$el), n = 0; u.size() > n; n++) u.pagination._addItem(n)
                },
                _events: function() {
                    u.$el.on("click", u.options.elements.pagination + " a", function(n) {
                        n.preventDefault();
                        var i = u._parseHash(this.hash),
                            t = u._upcomingSlide(i - 1);
                        t !== u.current && u.animate(t, function() {
                            u.start()
                        })
                    })
                }
            }, this.css = l, this.image = o, this.pagination = s, this.fx = e, this.animation = this.fx[this.options.animation], this.$control = this.$container.wrap(h).parent(".slides-control"), u._findPositions(), u.width = u._findWidth(), u.height = u._findHeight(), this.css.children(), this.css.containers(), this.css.images(), this.pagination._setup(), c()
        };
        r.prototype = {
            _findWidth: function() {
                return t(this.options.inherit_width_from).width()
            },
            _findHeight: function() {
                return t(this.options.inherit_height_from).height()
            },
            _findMultiplier: function() {
                return 1 === this.size() ? 1 : 3
            },
            _upcomingSlide: function(n) {
                if (/next/.test(n)) return this._nextInDom();
                if (/prev/.test(n)) return this._prevInDom();
                if (/\d/.test(n)) return +n;
                if (n && /\w/.test(n)) {
                    var t = this._findSlideById(n);
                    return t >= 0 ? t : 0
                }
                return 0
            },
            _findSlideById: function(n) {
                return this.$container.find("#" + n).index()
            },
            _findPositions: function(n, t) {
                t = t || this;
                void 0 === n && (n = -1);
                t.current = n;
                t.next = t._nextInDom();
                t.prev = t._prevInDom()
            },
            _nextInDom: function() {
                var n = this.current + 1;
                return n === this.size() && (n = 0), n
            },
            _prevInDom: function() {
                var n = this.current - 1;
                return 0 > n && (n = this.size() - 1), n
            },
            _parseHash: function(t) {
                return t = t || n.location.hash, t = t.replace(/^#/, ""), t && !isNaN(+t) && (t = +t), t
            },
            size: function() {
                return this.$container.children().length
            },
            destroy: function() {
                return this.$el.removeData()
            },
            update: function() {
                this.css.children();
                this.css.containers();
                this.css.images();
                this.pagination._addItem(this.size());
                this._findPositions(this.current);
                this.$el.trigger("updated.slides")
            },
            stop: function() {
                clearInterval(this.play_id);
                delete this.play_id;
                this.$el.trigger("stopped.slides")
            },
            start: function() {
                var i = this;
                i.options.hashchange ? t(n).trigger("hashchange") : this.animate();
                this.options.play && (this.play_id && this.stop(), this.play_id = setInterval(function() {
                    i.animate()
                }, this.options.play));
                this.$el.trigger("started.slides")
            },
            animate: function(t, i) {
                var u = this,
                    r = {},
                    e, f;
                this.animating || (this.animating = !0, void 0 === t && (t = "next"), r.upcoming_slide = this._upcomingSlide(t), r.upcoming_slide >= this.size()) || ((r.outgoing_slide = this.current, r.upcoming_position = 2 * this.width, r.offset = -r.upcoming_position, ("prev" === t || r.outgoing_slide > t) && (r.upcoming_position = 0, r.offset = 0), u.size() > 1 && u.pagination._setCurrent(r.upcoming_slide), u.options.hashchange) && (e = r.upcoming_slide + 1, f = u.$container.children(":eq(" + r.upcoming_slide + ")").attr("id"), n.location.hash = f ? f : e), u.$el.trigger("animating.slides", [r]), u.animation(r, function() {
                    u._findPositions(r.upcoming_slide, u);
                    "function" == typeof i && i();
                    u.animating = !1;
                    u.$el.trigger("animated.slides");
                    u.init || (u.$el.trigger("init.slides"), u.init = !0, u.$container.fadeIn("fast"))
                }))
            }
        };
        t.fn[i] = function(n, u) {
            var f = [];
            return this.each(function() {
                var o, e, s;
                return o = t(this), e = o.data(i), s = "object" == typeof n && n, e || (f = o.data(i, e = new r(this, s))), "string" == typeof n && (f = e[n], "function" == typeof f) ? f = f.call(e, u) : void 0
            }), f
        };
        t.fn[i].fx = {}
    }(this, jQuery);
! function(n) {
    function s() {
        i = function(n) {
            return o + "-" + n
        };
        e = function(n) {
            return o + "-" + n
        };
        r = function(n) {
            return n + "." + o
        };
        n.each([i, e, r], function(n, t) {
            t.add = function(n) {
                n = n.split(" ");
                for (var i in n) t[n[i]] = t(n[i])
            }
        });
        i.add("touch desktop scale-1 scale-2 scale-3 wrapper opened opening fixed inline hover slider slide loading noanimation fastanimation");
        e.add("slide anchor");
        r.add("open opening close closing prev next slideTo sliding click pinch scroll resize orientationchange load loading loaded transitionend webkitTransitionEnd");
        f = {
            complObject: function(t, i) {
                return n.isPlainObject(t) || (t = i), t
            },
            complBoolean: function(n, t) {
                return "boolean" != typeof n && (n = t), n
            },
            complNumber: function(t, i) {
                return n.isNumeric(t) || (t = i), t
            },
            complString: function(n, t) {
                return "string" != typeof n && (n = t), n
            },
            isPercentage: function(n) {
                return "string" == typeof n && "%" == n.slice(-1)
            },
            getPercentage: function(n) {
                return parseInt(n.slice(0, -1))
            },
            resizeRatio: function(n, t, i, r, u) {
                var f = t.width(),
                    e = t.height();
                i && f > i && (f = i);
                r && e > r && (e = r);
                u > f / e ? e = f / u : f = e * u;
                n.width(f).height(e)
            },
            transitionend: function(n, t, i) {
                var f = !1,
                    u = function() {
                        f || t.call(n[0]);
                        f = !0
                    };
                n.one(r.transitionend, u);
                n.one(r.webkitTransitionEnd, u);
                setTimeout(u, 1.1 * i)
            },
            setViewportScale: function() {
                if (u.viewportScale) {
                    var n = u.viewportScale.getScale();
                    "undefined" != typeof n && (n = 1 / n, u.$body.removeClass(i["scale-1"]).removeClass(i["scale-2"]).removeClass(i["scale-3"]).addClass(i["scale-" + Math.max(Math.min(Math.round(n), 3), 1)]))
                }
            }
        };
        u = {
            $wndw: n(window),
            $html: n("html"),
            $body: n("body"),
            scrollPosition: 0,
            viewportScale: null,
            viewportScaleInterval: null
        };
        u.$body.addClass(n[t].support.touch ? i.touch : i.desktop);
        u.$wndw.on(r.scroll, function(n) {
            u.$body.hasClass(i.opened) && (window.scrollTo(0, u.scrollPosition), n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation())
        });
        !u.viewportScale && n[t].support.touch && "undefined" != typeof FlameViewportScale && (u.viewportScale = new FlameViewportScale, f.setViewportScale(), u.$wndw.on(r.orientationchange + " " + r.resize, function() {
            u.viewportScaleInterval && (clearTimeout(u.viewportScaleInterval), u.viewportScaleInterval = null);
            u.viewportScaleInterval = setTimeout(function() {
                f.setViewportScale()
            }, 500)
        }));
        n[t]._c = i;
        n[t]._d = e;
        n[t]._e = r;
        n[t]._f = f;
        n[t]._g = u
    }
    var t = "tosrus",
        o = "tos";
    if (!n[t]) {
        var i = {},
            e = {},
            r = {},
            f = {},
            u = {};
        n[t] = function(n, t, i) {
            return this.$node = n, this.opts = t, this.conf = i, this.vars = {}, this.nodes = {}, this.slides = {}, this._init(), this
        };
        n[t].prototype = {
            _init: function() {
                var f = this,
                    e, o;
                for (this._complementOptions(), this.vars.fixed = "window" == this.opts.wrapper.target, this.nodes.$wrpr = n('<div class="' + i.wrapper + '" />'), this.nodes.$sldr = n('<div class="' + i.slider + '" />').appendTo(this.nodes.$wrpr), this.nodes.$wrpr.addClass(this.vars.fixed ? i.fixed : i.inline).addClass(i("fx-" + this.opts.effect)).addClass(i(this.opts.slides.scale)).addClass(this.opts.wrapper.classes), this.nodes.$wrpr.on(r.open + " " + r.close + " " + r.prev + " " + r.next + " " + r.slideTo, function(n) {
                        arguments = Array.prototype.slice.call(arguments);
                        var n = arguments.shift(),
                            t = n.type;
                        n.stopPropagation();
                        "function" == typeof f[t] && f[t].apply(f, arguments)
                    }).on(r.opening + " " + r.closing + " " + r.sliding + " " + r.loading + " " + r.loaded, function(n) {
                        n.stopPropagation()
                    }).on(r.click, function(t) {
                        switch (t.stopPropagation(), f.opts.wrapper.onClick) {
                            case "toggleUI":
                                f.nodes.$wrpr.toggleClass(i.hover);
                                break;
                            case "close":
                                n(t.target).is("img") || f.close()
                        }
                    }), this.nodes.$anchors = this._initAnchors(), this.nodes.$slides = this._initSlides(), this.slides.total = this.nodes.$slides.length, this.slides.visible = this.opts.slides.visible, this.slides.index = 0, this.vars.opened = !0, e = 0; e < n[t].addons.length; e++) n.isFunction(this["_addon_" + n[t].addons[e]]) && this["_addon_" + n[t].addons[e]]();
                for (o = 0; o < n[t].ui.length; o++) this.nodes.$wrpr.find("." + i[n[t].ui[o]]).length && this.nodes.$wrpr.addClass(i("has-" + n[t].ui[o]));
                "close" == this.opts.wrapper.onClick && this.nodes.$uibg.add(this.nodes.$capt || n()).add(this.nodes.$pagr || n()).on(r.click, function(n) {
                    n.stopPropagation()
                });
                this.vars.fixed ? (this.nodes.$wrpr.appendTo(u.$body), this.close(!0)) : (this.nodes.$wrpr.appendTo(this.opts.wrapper.target), this.opts.show ? (this.vars.opened = !1, this.open(0, !0)) : this.close(!0))
            },
            open: function(t, e) {
                var o = this;
                this.vars.opened || (this.vars.fixed && (u.scrollPosition = u.$wndw.scrollTop(), u.$body.addClass(i.opened), f.setViewportScale()), e ? this.nodes.$wrpr.addClass(i.opening).trigger(r.opening, [t, e]) : setTimeout(function() {
                    o.nodes.$wrpr.addClass(i.opening).trigger(r.opening, [t, e])
                }, 5), this.nodes.$wrpr.addClass(i.hover).addClass(i.opened));
                this.vars.opened = !0;
                this._loadContents();
                n.isNumeric(t) && (e = e || !this.vars.opened, this.slideTo(t, e))
            },
            close: function(t) {
                this.vars.opened && (this.vars.fixed && u.$body.removeClass(i.opened), t ? this.nodes.$wrpr.removeClass(i.opened) : f.transitionend(this.nodes.$wrpr, function() {
                    n(this).removeClass(i.opened)
                }, this.conf.transitionDuration), this.nodes.$wrpr.removeClass(i.hover).removeClass(i.opening).trigger(r.closing, [this.slides.index, t]));
                this.vars.opened = !1
            },
            prev: function(t, i) {
                n.isNumeric(t) || (t = this.opts.slides.slide);
                this.slideTo(this.slides.index - t, i)
            },
            next: function(t, i) {
                n.isNumeric(t) || (t = this.opts.slides.slide);
                this.slideTo(this.slides.index + t, i)
            },
            slideTo: function(u, e) {
                var o, s, h, c, l;
                if (!this.vars.opened || !n.isNumeric(u)) return !1;
                if (o = !0, 0 > u && (s = 0 == this.slides.index, this.opts.infinite ? u = s ? this.slides.total - this.slides.visible : 0 : (u = 0, s && (o = !1))), u + this.slides.visible > this.slides.total && (h = this.slides.index + this.slides.visible >= this.slides.total, this.opts.infinite ? u = h ? 0 : this.slides.total - this.slides.visible : (u = this.slides.total - this.slides.visible, h && (o = !1))), this.slides.index = u, this._loadContents(), o) {
                    c = 0 - this.slides.index * this.opts.slides.width + this.opts.slides.offset;
                    this.slides.widthPercentage && (c += "%");
                    e && (this.nodes.$sldr.addClass(i.noanimation), f.transitionend(this.nodes.$sldr, function() {
                        n(this).removeClass(i.noanimation)
                    }, 5));
                    for (l in n[t].effects)
                        if (l == this.opts.effect) {
                            n[t].effects[l].call(this, c, e);
                            break
                        }
                    this.nodes.$wrpr.trigger(r.sliding, [u, e])
                }
            },
            _initAnchors: function() {
                var i = this,
                    u = n(),
                    r;
                if (this.$node.is("a"))
                    for (r in n[t].media) u = u.add(this.$node.filter(function() {
                        if (i.opts.media[r] && i.opts.media[r].filterAnchors) {
                            var u = i.opts.media[r].filterAnchors.call(i, n(this));
                            if ("boolean" == typeof u) return u
                        }
                        return n[t].media[r].filterAnchors.call(i, n(this))
                    }));
                return u
            },
            _initSlides: function() {
                return this[this.$node.is("a") ? "_initSlidesFromAnchors" : "_initSlidesFromContent"](), this.nodes.$sldr.children().css("width", this.opts.slides.width + (this.slides.widthPercentage ? "%" : "px"))
            },
            _initSlidesFromAnchors: function() {
                var t = this;
                this.nodes.$anchors.each(function(u) {
                    var f = n(this),
                        o = n('<div class="' + i.slide + " " + i.loading + '" />').data(e.anchor, f).appendTo(t.nodes.$sldr);
                    f.data(e.slide, o).on(r.click, function(n) {
                        n.preventDefault();
                        t.open(u)
                    })
                })
            },
            _initSlidesFromContent: function() {
                var r = this;
                this.$node.children().each(function() {
                    var f = n(this),
                        u, e;
                    n('<div class="' + i.slide + '" />').append(f).appendTo(r.nodes.$sldr);
                    for (u in n[t].media)
                        if (e = null, r.opts.media[u] && r.opts.media[u].filterSlides && (e = r.opts.media[u].filterSlides.call(r, f)), "boolean" != typeof e && (e = n[t].media[u].filterSlides.call(r, f)), e) {
                            n[t].media[u].initSlides.call(r, f);
                            f.parent().addClass(i(u));
                            break
                        }
                })
            },
            _loadContents: function() {
                var n = this;
                switch (this.opts.slides.load) {
                    case "all":
                        this._loadContent(0, this.slides.total);
                        break;
                    case "visible":
                        this._loadContent(this.slides.index, this.slides.index + this.slides.visible);
                        break;
                    case "near-visible":
                    default:
                        this._loadContent(this.slides.index, this.slides.index + this.slides.visible);
                        setTimeout(function() {
                            n._loadContent(n.slides.index - n.slides.visible, n.slides.index);
                            n._loadContent(n.slides.index + n.slides.visible, n.slides.index + 2 * n.slides.visible)
                        }, this.conf.transitionDuration)
                }
            },
            _loadContent: function(u, f) {
                var o = this;
                this.nodes.$slides.slice(u, f).each(function() {
                    var f = n(this),
                        h, c, u, s;
                    if (0 == f.children().length) {
                        h = f.data(e.anchor);
                        c = h.attr("href");
                        for (u in n[t].media)
                            if (s = null, o.opts.media[u] && o.opts.media[u].filterAnchors && (s = o.opts.media[u].filterAnchors.call(o, h)), "boolean" != typeof s && (s = n[t].media[u].filterAnchors.call(o, h)), s) {
                                n[t].media[u].initAnchors.call(o, f, c);
                                f.addClass(i(u));
                                break
                            }
                        f.trigger(r.loading, [f.data(e.anchor)])
                    }
                })
            },
            _complementOptions: function() {
                if ("undefined" == typeof this.opts.wrapper.target && (this.opts.wrapper.target = this.$node.is("a") ? "window" : this.$node), "window" != this.opts.wrapper.target && "string" == typeof this.opts.wrapper.target && (this.opts.wrapper.target = n(this.opts.wrapper.target)), this.opts.show = f.complBoolean(this.opts.show, "window" != this.opts.wrapper.target), n.isNumeric(this.opts.slides.width)) this.slides.widthPercentage = !1, this.opts.slides.visible = f.complNumber(this.opts.slides.visible, 1);
                else {
                    var t = f.isPercentage(this.opts.slides.width) ? f.getPercentage(this.opts.slides.width) : !1;
                    this.slides.widthPercentage = !0;
                    this.opts.slides.visible = f.complNumber(this.opts.slides.visible, t ? Math.floor(100 / t) : 1);
                    this.opts.slides.width = t ? t : Math.ceil(1e4 / this.opts.slides.visible) / 100
                }
                this.opts.slides.slide = f.complNumber(this.opts.slides.slide, this.opts.slides.visible);
                this.opts.slides.offset = f.isPercentage(this.opts.slides.offset) ? f.getPercentage(this.opts.slides.offset) : f.complNumber(this.opts.slides.offset, 0)
            },
            _uniqueID: function() {
                return this.__uniqueID || (this.__uniqueID = 0), this.__uniqueID++, i("uid-" + this.__uniqueID)
            }
        };
        n.fn[t] = function(i, r, f, e) {
            u.$wndw || s();
            i = n.extend(!0, {}, n[t].defaults, i);
            i = n.extend(!0, {}, i, n[t].support.touch ? f : r);
            e = n.extend(!0, {}, n[t].configuration, e);
            var o = new n[t](this, i, e);
            return this.data(t, o), o.nodes.$wrpr
        };
        n[t].support = {
            touch: "ontouchstart" in window.document || navigator.msMaxTouchPoints
        };
        n[t].defaults = {
            infinite: !1,
            effect: "slide",
            wrapper: {
                classes: "",
                onClick: "toggleUI"
            },
            slides: {
                offset: 0,
                scale: "fit",
                load: "near-visible",
                visible: 1
            },
            media: {}
        };
        n[t].configuration = {
            transitionDuration: 400
        };
        n[t].constants = {};
        n[t].debug = function() {};
        n[t].deprecated = function(n, i) {
            "undefined" != typeof console && "undefined" != typeof console.warn && console.warn(t + ": " + n + " is deprecated, use " + i + " instead.")
        };
        n[t].effects = {
            slide: function(n) {
                this.nodes.$sldr.css("left", n)
            },
            fade: function(t) {
                f.transitionend(this.nodes.$sldr, function() {
                    n(this).css("left", t).css("opacity", 1)
                }, this.conf.transitionDuration);
                this.nodes.$sldr.css("opacity", 0)
            }
        };
        n[t].version = "2.4.0";
        n[t].media = {};
        n[t].addons = [];
        n[t].ui = []
    }
}(jQuery);
! function(n) {
    var f, e, i, o, s, t = "tosrus",
        r = "autoplay",
        u = !1;
    n[t].prototype["_addon_" + r] = function() {
        u || (f = n[t]._c, e = n[t]._d, i = n[t]._e, o = n[t]._f, s = n[t]._g, i.add("mouseover mouseout"), u = !0);
        var h = this,
            c = this.opts[r];
        c.play && (this.opts.infinite = !0, this.nodes.$wrpr.on(i.sliding, function() {
            h.autoplay()
        }), c.pauseOnHover && this.nodes.$wrpr.on(i.mouseover, function() {
            h.autostop()
        }).on(i.mouseout, function() {
            h.autoplay()
        }), this.autoplay())
    };
    n[t].prototype.autoplay = function() {
        var n = this;
        this.autostop();
        this.vars.autoplay = setTimeout(function() {
            n.next()
        }, this.opts[r].timeout)
    };
    n[t].prototype.autostop = function() {
        this.vars.autoplay && clearTimeout(this.vars.autoplay)
    };
    n[t].defaults[r] = {
        play: !1,
        timeout: 4e3,
        pauseOnHover: !1
    };
    n[t].addons.push(r)
}(jQuery);
! function(n) {
    function f(t, r) {
        return n('<a class="' + i[t] + r + '" href="#"><span><\/span><\/a>')
    }

    function e(n, t, i, u) {
        t.on(r.click, function(t) {
            t.preventDefault();
            t.stopPropagation();
            n.trigger(r[i], [u])
        })
    }
    var i, s, r, h, c, t = "tosrus",
        u = "buttons",
        o = !1;
    n[t].prototype["_addon_" + u] = function() {
        o || (i = n[t]._c, s = n[t]._d, r = n[t]._e, h = n[t]._f, c = n[t]._g, i.add("prev next close disabled"), o = !0);
        var a = this,
            l = this.opts[u];
        this.nodes.$prev = null;
        this.nodes.$next = null;
        this.nodes.$clse = null;
        ("boolean" == typeof l || "string" == typeof l && "inline" == l) && (l = {
            prev: l,
            next: l
        });
        "undefined" == typeof l.close && (l.close = this.vars.fixed);
        this.nodes.$slides.length < 2 && (l.prev = !1, l.next = !1);
        n.each({
            prev: "prev",
            next: "next",
            close: "clse"
        }, function(t, u) {
            l[t] && ("string" == typeof l[t] && "inline" == l[t] ? a.vars.fixed && "close" != t && a.nodes.$slides.on(r.loading, function() {
                var r = f(t, " " + i.inline)["prev" == t ? "prependTo" : "appendTo"](this);
                e(a.nodes.$wrpr, r, t, 1);
                a.opts.infinite || ("prev" == t && n(this).is(":first-child") || "next" == t && n(this).is(":last-child")) && r.addClass(i.disabled)
            }) : ("string" == typeof l[t] && (l[t] = n(l[t])), a.nodes["$" + u] = l[t] instanceof n ? l[t] : f(t, "").appendTo(a.nodes.$wrpr), e(a.nodes.$wrpr, a.nodes["$" + u], t, null)))
        });
        this.opts.infinite || (this.updateButtons(), this.nodes.$wrpr.on(r.sliding, function() {
            a.updateButtons()
        }))
    };
    n[t].prototype.updateButtons = function() {
        this.nodes.$prev && this.nodes.$prev[(this.slides.index < 1 ? "add" : "remove") + "Class"](i.disabled);
        this.nodes.$next && this.nodes.$next[(this.slides.index >= this.slides.total - this.slides.visible ? "add" : "remove") + "Class"](i.disabled)
    };
    n[t].defaults[u] = {
        prev: !n[t].support.touch,
        next: !n[t].support.touch
    };
    n[t].addons.push(u);
    n[t].ui.push("prev");
    n[t].ui.push("next");
    n[t].ui.push("close")
}(jQuery);
! function(n) {
    var r, i, f, o, s, t = "tosrus",
        u = "caption",
        e = !1;
    n[t].prototype["_addon_" + u] = function() {
        var c, h, l, a;
        if (e || (r = n[t]._c, i = n[t]._d, f = n[t]._e, o = n[t]._f, s = n[t]._g, r.add("caption uibg"), i.add("caption"), e = !0), c = this, h = this.opts[u], h.add) {
            for (h.attributes = h.attributes || [], "string" == typeof h.target && (h.target = n(h.target)), h.target instanceof n ? this.nodes.$capt = h.target : (this.nodes.$capt = n('<div class="' + r.caption + '" />').appendTo(this.nodes.$wrpr), this.nodes.$uibg || (this.nodes.$uibg = n('<div class="' + r.uibg + '" />').prependTo(this.nodes.$wrpr))), l = 0, a = this.slides.visible; a > l; l++) n('<div class="' + r.caption + "-" + l + '" />').css("width", this.opts.slides.width + (this.slides.widthPercentage ? "%" : "px")).appendTo(this.nodes.$capt);
            this.nodes.$slides.each(function() {
                var t = n(this),
                    e = c.vars.fixed ? t.data(i.anchor) : t.children(),
                    r, f, u;
                for (t.data(i.caption, ""), r = 0, f = h.attributes.length; f > r; r++)
                    if (u = e.attr(h.attributes[r]), u && u.length) {
                        t.data(i.caption, u);
                        break
                    }
            });
            this.nodes.$wrpr.on(f.sliding, function() {
                for (var n = 0, t = c.slides.visible; t > n; n++) c.nodes.$capt.children().eq(n).text(c.nodes.$sldr.children().eq(c.slides.index + n).data(i.caption) || "")
            })
        }
    };
    n[t].defaults[u] = {
        add: !1,
        target: null,
        attributes: ["title", "alt", "rel"]
    };
    n[t].addons.push(u);
    n[t].ui.push("caption")
}(jQuery);
! function(n) {
    if ("function" == typeof Hammer) {
        var i, o, u, f, s, t = "tosrus",
            r = "drag",
            e = !1;
        n[t].prototype["_addon_" + r] = function() {
            var h;
            if (e || (i = n[t]._c, o = n[t]._d, u = n[t]._e, f = n[t]._f, s = n[t]._g, e = !0), h = this, this.opts[r] && "slide" == this.opts.effect) {
                if (Hammer.VERSION < 2) return n[t].deprecated("Older version of the Hammer library", "version 2 or newer"), void 0;
                if (this.nodes.$slides.length > 1) {
                    var l = 0,
                        c = !1,
                        a = !1,
                        v = new Hammer(this.nodes.$wrpr[0]);
                    v.on("panstart panleft panright panend swipeleft swiperight", function(n) {
                        n.preventDefault()
                    }).on("panstart", function() {
                        h.nodes.$sldr.addClass(i.noanimation)
                    }).on("panleft panright", function(n) {
                        switch (l = n.deltaX, a = !1, n.direction) {
                            case 2:
                                c = "left";
                                break;
                            case 4:
                                c = "right";
                                break;
                            default:
                                c = !1
                        }("left" == c && h.slides.index + h.slides.visible >= h.slides.total || "right" == c && 0 == h.slides.index) && (l /= 2.5);
                        h.nodes.$sldr.css("margin-left", Math.round(l))
                    }).on("swipeleft swiperight", function() {
                        a = !0
                    }).on("panend", function() {
                        var t, n;
                        (h.nodes.$sldr.removeClass(i.noanimation).addClass(i.fastanimation), f.transitionend(h.nodes.$sldr, function() {
                            h.nodes.$sldr.removeClass(i.fastanimation)
                        }, h.conf.transitionDuration / 2), h.nodes.$sldr.css("margin-left", 0), "left" == c || "right" == c) && (a ? n = h.slides.visible : (t = h.nodes.$slides.first().width(), n = Math.floor((Math.abs(l) + t / 2) / t)), n > 0 && h.nodes.$wrpr.trigger(u["left" == c ? "next" : "prev"], [n]));
                        c = !1
                    })
                }
            }
        };
        n[t].defaults[r] = n[t].support.touch;
        n[t].addons.push(r)
    }
}(jQuery);
! function(n) {
    var f, e, r, o, s, t = "tosrus",
        i = "keys",
        u = !1;
    n[t].prototype["_addon_" + i] = function() {
        var l, h, c;
        if (u || (f = n[t]._c, e = n[t]._d, r = n[t]._e, o = n[t]._f, s = n[t]._g, r.add("keyup"), u = !0), l = this, h = this.opts[i], "boolean" == typeof h && h && (h = {
                prev: !0,
                next: !0,
                close: !0
            }), n.isPlainObject(h)) {
            for (c in n[t].constants[i]) "boolean" == typeof h[c] && h[c] && (h[c] = n[t].constants[i][c]);
            this.nodes.$slides.length < 2 && (h.prev = !1, h.next = !1);
            n(document).on(r.keyup, function(n) {
                if (l.vars.opened) {
                    var t = !1;
                    switch (n.keyCode) {
                        case h.prev:
                            t = r.prev;
                            break;
                        case h.next:
                            t = r.next;
                            break;
                        case h.close:
                            t = r.close
                    }
                    t && (n.preventDefault(), n.stopPropagation(), l.nodes.$wrpr.trigger(t))
                }
            })
        }
    };
    n[t].defaults[i] = !1;
    n[t].constants[i] = {
        prev: 37,
        next: 39,
        close: 27
    };
    n[t].addons.push(i)
}(jQuery);
! function(n) {
    var i, f, r, o, s, t = "tosrus",
        u = "pagination",
        e = !1;
    n[t].prototype["_addon_" + u] = function() {
        var c, h, l, a;
        if (e || (i = n[t]._c, f = n[t]._d, r = n[t]._e, o = n[t]._f, s = n[t]._g, i.add("pagination selected uibg bullets thumbnails"), e = !0), c = this, h = this.opts[u], this.nodes.$slides.length < 2 && (h.add = !1), h.add) {
            if ("string" == typeof h.target && (h.target = n(h.target)), h.target instanceof n ? this.nodes.$pagr = h.target : (this.nodes.$pagr = n('<div class="' + i.pagination + " " + i[h.type] + '" />').appendTo(this.nodes.$wrpr), this.nodes.$uibg || (this.nodes.$uibg = n('<div class="' + i.uibg + '" />').prependTo(this.nodes.$wrpr))), "function" != typeof h.anchorBuilder) switch (h.type) {
                case "thumbnails":
                    l = '<a href="#" style="background-image: url(';
                    a = ');"><\/a>';
                    h.anchorBuilder = this.vars.fixed ? function() {
                        return l + n(this).data(f.anchor).attr("href") + a
                    } : function() {
                        return l + n(this).find("img").attr("src") + a
                    };
                    break;
                case "bullets":
                default:
                    h.anchorBuilder = function() {
                        return '<a href="#"><\/a>'
                    }
            }
            this.nodes.$slides.each(function(t) {
                n(h.anchorBuilder.call(this, t + 1)).appendTo(c.nodes.$pagr).on(r.click, function(n) {
                    n.preventDefault();
                    n.stopPropagation();
                    c.nodes.$wrpr.trigger(r.slideTo, [t])
                })
            });
            this.updatePagination();
            this.nodes.$wrpr.on(r.sliding, function() {
                c.updatePagination()
            })
        }
    };
    n[t].prototype.updatePagination = function() {
        this.nodes.$pagr && this.nodes.$pagr.children().removeClass(i.selected).eq(this.slides.index).addClass(i.selected)
    };
    n[t].defaults[u] = {
        add: !1,
        type: "bullets",
        target: null,
        anchorBuilder: null
    };
    n[t].addons.push(u);
    n[t].ui.push("pagination");
    n[t].ui.push("bullets");
    n[t].ui.push("thumbnails")
}(jQuery);
! function(n) {
    var t = "tosrus",
        i = "html";
    n[t].media[i] = {
        filterAnchors: function(t) {
            var i = t.attr("href");
            return "#" == i.slice(0, 1) && n(i).is("div")
        },
        initAnchors: function(i, r) {
            n('<div class="' + n[t]._c("html") + '" />').append(n(r)).appendTo(i);
            i.removeClass(n[t]._c.loading).trigger(n[t]._e.loaded)
        },
        filterSlides: function(n) {
            return n.is("div")
        },
        initSlides: function() {}
    };
    n[t].defaults.media[i] = {}
}(jQuery);
! function(n) {
    var t = "tosrus",
        i = "image";
    n[t].media[i] = {
        filterAnchors: function(t) {
            return n.inArray(t.attr("href").toLowerCase().split(".").pop().split("?")[0], ["jpg", "jpe", "jpeg", "gif", "png"]) > -1
        },
        initAnchors: function(i, r) {
            n('<img border="0" />').on(n[t]._e.load, function(r) {
                r.stopPropagation();
                i.removeClass(n[t]._c.loading).trigger(n[t]._e.loaded)
            }).appendTo(i).attr("src", r)
        },
        filterSlides: function(n) {
            return n.is("img")
        },
        initSlides: function() {}
    };
    n[t].defaults.media[i] = {}
}(jQuery);
! function(n) {
    function e(e) {
        function a() {
            c.length && (c.attr("src", ""), c.attr("src", w))
        }
        h || (o = n[t]._c, u = n[t]._d, i = n[t]._e, f = n[t]._f, s = n[t]._g, u.add("ratio maxWidth maxHeight"), h = !0);
        var c = e.children(),
            l = e.data(n[t]._d.anchor) || n(),
            w = c.attr("src"),
            v = l.data(u.ratio) || this.opts[r].ratio,
            y = l.data(u.maxWidth) || this.opts[r].maxWidth,
            p = l.data(u.maxHeight) || this.opts[r].maxHeight;
        e.removeClass(o.loading).trigger(i.loaded).on(i.loading, function() {
            f.resizeRatio(c, e, y, p, v)
        });
        this.nodes.$wrpr.on(i.sliding, function() {
            a()
        }).on(i.closing, function() {
            a()
        });
        s.$wndw.on(i.resize, function() {
            f.resizeRatio(c, e, y, p, v)
        })
    }
    var o, u, i, f, s, t = "tosrus",
        r = "vimeo",
        h = !1;
    n[t].media[r] = {
        filterAnchors: function(n) {
            return n.attr("href").toLowerCase().indexOf("vimeo.com/") > -1
        },
        initAnchors: function(t, i) {
            var r = this._uniqueID();
            i = i.split("vimeo.com/")[1].split("?")[0] + "?api=1&player_id=" + r;
            n('<iframe id="' + r + '" src="http://player.vimeo.com/video/' + i + '" frameborder="0" allowfullscreen />').appendTo(t);
            e.call(this, t)
        },
        filterSlides: function(n) {
            return n.is("iframe") && n.attr("src") ? n.attr("src").toLowerCase().indexOf("vimeo.com/video/") > -1 : !1
        },
        initSlides: function(n) {
            e.call(this, n)
        }
    };
    n[t].defaults.media[r] = {};
    n[t].defaults[r] = {
        ratio: 16 / 9,
        maxWidth: !1,
        maxHeight: !1
    }
}(jQuery);
! function(n) {
    function e(e) {
        function a(n) {
            c.length && c[0].contentWindow.postMessage('{ "event": "command", "func": "' + n + 'Video" }', "*")
        }
        h || (o = n[t]._c, u = n[t]._d, r = n[t]._e, f = n[t]._f, s = n[t]._g, u.add("ratio maxWidth maxHeight"), h = !0);
        var c = e.children(),
            l = e.data(n[t]._d.anchor) || n(),
            v = l.data(u.ratio) || this.opts[i].ratio,
            y = l.data(u.maxWidth) || this.opts[i].maxWidth,
            p = l.data(u.maxHeight) || this.opts[i].maxHeight;
        e.removeClass(o.loading).trigger(r.loaded).on(r.loading, function() {
            f.resizeRatio(c, e, y, p, v)
        });
        this.nodes.$wrpr.on(r.sliding, function() {
            a("pause")
        }).on(r.closing, function() {
            a("stop")
        });
        s.$wndw.on(r.resize, function() {
            f.resizeRatio(c, e, y, p, v)
        })
    }
    var o, u, r, f, s, t = "tosrus",
        i = "youtube",
        h = !1;
    n[t].media[i] = {
        filterAnchors: function(n) {
            return n.attr("href").toLowerCase().indexOf("youtube.com/watch?v=") > -1
        },
        initAnchors: function(r, u) {
            var f = u;
            u = u.split("?v=")[1].split("&")[0];
            this.opts[i].imageLink ? (u = "http://img.youtube.com/vi/" + u + "/0.jpg", n('<a href="' + f + '" class="' + n[t]._c("play") + '" target="_blank" />').appendTo(r), n('<img border="0" />').on(n[t]._e.load, function(i) {
                i.stopPropagation();
                r.removeClass(n[t]._c.loading).trigger(n[t]._e.loaded)
            }).appendTo(r).attr("src", u)) : (n('<iframe src="http://www.youtube.com/embed/' + u + '?enablejsapi=1" frameborder="0" allowfullscreen />').appendTo(r), e.call(this, r))
        },
        filterSlides: function(n) {
            return n.is("iframe") && n.attr("src") ? n.attr("src").toLowerCase().indexOf("youtube.com/embed/") > -1 : !1
        },
        initSlides: function(n) {
            e.call(this, n)
        }
    };
    n[t].defaults.media[i] = {};
    n[t].defaults[i] = {
        ratio: 16 / 9,
        maxWidth: !1,
        maxHeight: !1,
        imageLink: n[t].support.touch
    }
}(jQuery);
top.location.hostname != self.location.hostname && (top.location.href = self.location.href);
document.addEventListener("", function(n) {
    n.preventDefault()
}, !1);
! function(n) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], n) : "undefined" != typeof exports ? module.exports = n(require("jquery")) : n(jQuery)
}(function(n) {
    "use strict";
    var t = window.Slick || {};
    t = function() {
        function t(t, r) {
            var f, e, u = this;
            if (u.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: n(t),
                    appendDots: n(t),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous<\/button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next">Next<\/button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(n, t) {
                        return '<button type="button" data-role="none">' + (t + 1) + "<\/button>"
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    onBeforeChange: null,
                    onAfterChange: null,
                    onInit: null,
                    onReInit: null,
                    onSetPosition: null,
                    pauseOnHover: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rtl: !1,
                    slide: "div",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    variableWidth: !1,
                    vertical: !1,
                    waitForAnimate: !0
                }, u.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1
                }, n.extend(u, u.initials), u.activeBreakpoint = null, u.animType = null, u.animProp = null, u.breakpoints = [], u.breakpointSettings = [], u.cssTransitions = !1, u.paused = !1, u.positionProp = null, u.respondTo = null, u.shouldClick = !0, u.$slider = n(t), u.$slidesCache = null, u.transformType = null, u.transitionType = null, u.windowWidth = 0, u.windowTimer = null, u.options = n.extend({}, u.defaults, r), u.currentSlide = u.options.initialSlide, u.originalSettings = u.options, f = u.options.responsive || null, f && f.length > -1) {
                u.respondTo = u.options.respondTo || "window";
                for (e in f) f.hasOwnProperty(e) && (u.breakpoints.push(f[e].breakpoint), u.breakpointSettings[f[e].breakpoint] = f[e].settings);
                u.breakpoints.sort(function(n, t) {
                    return t - n
                })
            }
            u.autoPlay = n.proxy(u.autoPlay, u);
            u.autoPlayClear = n.proxy(u.autoPlayClear, u);
            u.changeSlide = n.proxy(u.changeSlide, u);
            u.clickHandler = n.proxy(u.clickHandler, u);
            u.selectHandler = n.proxy(u.selectHandler, u);
            u.setPosition = n.proxy(u.setPosition, u);
            u.swipeHandler = n.proxy(u.swipeHandler, u);
            u.dragHandler = n.proxy(u.dragHandler, u);
            u.keyHandler = n.proxy(u.keyHandler, u);
            u.autoPlayIterator = n.proxy(u.autoPlayIterator, u);
            u.instanceUid = i++;
            u.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
            u.init();
            u.checkResponsive()
        }
        var i = 0;
        return t
    }();
    t.prototype.addSlide = function(t, i, r) {
        var u = this;
        if ("boolean" == typeof i) r = i, i = null;
        else if (0 > i || i >= u.slideCount) return !1;
        u.unload();
        "number" == typeof i ? 0 === i && 0 === u.$slides.length ? n(t).appendTo(u.$slideTrack) : r ? n(t).insertBefore(u.$slides.eq(i)) : n(t).insertAfter(u.$slides.eq(i)) : r === !0 ? n(t).prependTo(u.$slideTrack) : n(t).appendTo(u.$slideTrack);
        u.$slides = u.$slideTrack.children(this.options.slide);
        u.$slideTrack.children(this.options.slide).detach();
        u.$slideTrack.append(u.$slides);
        u.$slides.each(function(t, i) {
            n(i).attr("index", t)
        });
        u.$slidesCache = u.$slides;
        u.reinit()
    };
    t.prototype.animateSlide = function(t, i) {
        var u = {},
            r = this,
            f;
        1 === r.options.slidesToShow && r.options.adaptiveHeight === !0 && r.options.vertical === !1 && (f = r.$slides.eq(r.currentSlide).outerHeight(!0), r.$list.animate({
            height: f
        }, r.options.speed));
        r.options.rtl === !0 && r.options.vertical === !1 && (t = -t);
        r.transformsEnabled === !1 ? r.options.vertical === !1 ? r.$slideTrack.animate({
            left: t
        }, r.options.speed, r.options.easing, i) : r.$slideTrack.animate({
            top: t
        }, r.options.speed, r.options.easing, i) : r.cssTransitions === !1 ? n({
            animStart: r.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: r.options.speed,
            easing: r.options.easing,
            step: function(n) {
                r.options.vertical === !1 ? (u[r.animType] = "translate(" + n + "px, 0px)", r.$slideTrack.css(u)) : (u[r.animType] = "translate(0px," + n + "px)", r.$slideTrack.css(u))
            },
            complete: function() {
                i && i.call()
            }
        }) : (r.applyTransition(), u[r.animType] = r.options.vertical === !1 ? "translate3d(" + t + "px, 0px, 0px)" : "translate3d(0px," + t + "px, 0px)", r.$slideTrack.css(u), i && setTimeout(function() {
            r.disableTransition();
            i.call()
        }, r.options.speed))
    };
    t.prototype.asNavFor = function(t) {
        var i = this,
            r = null != i.options.asNavFor ? n(i.options.asNavFor).getSlick() : null;
        null != r && r.slideHandler(t, !0)
    };
    t.prototype.applyTransition = function(n) {
        var t = this,
            i = {};
        i[t.transitionType] = t.options.fade === !1 ? t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : "opacity " + t.options.speed + "ms " + t.options.cssEase;
        t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(n).css(i)
    };
    t.prototype.autoPlay = function() {
        var n = this;
        n.autoPlayTimer && clearInterval(n.autoPlayTimer);
        n.slideCount > n.options.slidesToShow && n.paused !== !0 && (n.autoPlayTimer = setInterval(n.autoPlayIterator, n.options.autoplaySpeed))
    };
    t.prototype.autoPlayClear = function() {
        var n = this;
        n.autoPlayTimer && clearInterval(n.autoPlayTimer)
    };
    t.prototype.autoPlayIterator = function() {
        var n = this;
        n.options.infinite === !1 ? 1 === n.direction ? (n.currentSlide + 1 === n.slideCount - 1 && (n.direction = 0), n.slideHandler(n.currentSlide + n.options.slidesToScroll)) : (0 == n.currentSlide - 1 && (n.direction = 1), n.slideHandler(n.currentSlide - n.options.slidesToScroll)) : n.slideHandler(n.currentSlide + n.options.slidesToScroll)
    };
    t.prototype.buildArrows = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow = n(t.options.prevArrow), t.$nextArrow = n(t.options.nextArrow), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.appendTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled"))
    };
    t.prototype.buildDots = function() {
        var i, r, t = this;
        if (t.options.dots === !0 && t.slideCount > t.options.slidesToShow) {
            for (r = '<ul class="' + t.options.dotsClass + '">', i = 0; i <= t.getDotCount(); i += 1) r += "<li>" + t.options.customPaging.call(this, t, i) + "<\/li>";
            r += "<\/ul>";
            t.$dots = n(r).appendTo(t.options.appendDots);
            t.$dots.find("li").first().addClass("slick-active")
        }
    };
    t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide");
        t.slideCount = t.$slides.length;
        t.$slides.each(function(t, i) {
            n(i).attr("index", t)
        });
        t.$slidesCache = t.$slides;
        t.$slider.addClass("slick-slider");
        t.$slideTrack = 0 === t.slideCount ? n('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent();
        t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent();
        t.$slideTrack.css("opacity", 0);
        t.options.centerMode === !0 && (t.options.slidesToScroll = 1);
        n("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading");
        t.setupInfinite();
        t.buildArrows();
        t.buildDots();
        t.updateDots();
        t.options.accessibility === !0 && t.$list.prop("tabIndex", 0);
        t.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0);
        t.options.draggable === !0 && t.$list.addClass("draggable")
    };
    t.prototype.checkResponsive = function() {
        var r, i, u, t = this,
            f = t.$slider.width(),
            e = window.innerWidth || n(window).width();
        if ("window" === t.respondTo ? u = e : "slider" === t.respondTo ? u = f : "min" === t.respondTo && (u = Math.min(e, f)), t.originalSettings.responsive && t.originalSettings.responsive.length > -1 && null !== t.originalSettings.responsive) {
            i = null;
            for (r in t.breakpoints) t.breakpoints.hasOwnProperty(r) && u < t.breakpoints[r] && (i = t.breakpoints[r]);
            null !== i ? null !== t.activeBreakpoint ? i !== t.activeBreakpoint && (t.activeBreakpoint = i, t.options = n.extend({}, t.originalSettings, t.breakpointSettings[i]), t.refresh()) : (t.activeBreakpoint = i, t.options = n.extend({}, t.originalSettings, t.breakpointSettings[i]), t.refresh()) : null !== t.activeBreakpoint && (t.activeBreakpoint = null, t.options = t.originalSettings, t.refresh())
        }
    };
    t.prototype.changeSlide = function(t, i) {
        var e, o, c, u, s, r = this,
            l = n(t.target),
            f, h;
        switch (l.is("a") && t.preventDefault(), c = 0 != r.slideCount % r.options.slidesToScroll, e = c ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
            case "previous":
                o = 0 === e ? r.options.slidesToScroll : r.options.slidesToShow - e;
                r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, i);
                break;
            case "next":
                o = 0 === e ? r.options.slidesToScroll : e;
                r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, i);
                break;
            case "index":
                if (f = 0 === t.data.index ? 0 : t.data.index || n(t.target).parent().index() * r.options.slidesToScroll, u = r.getNavigableIndexes(), s = 0, u[f] && u[f] === f)
                    if (f > u[u.length - 1]) f = u[u.length - 1];
                    else
                        for (h in u) {
                            if (f < u[h]) {
                                f = s;
                                break
                            }
                            s = u[h]
                        }
                r.slideHandler(f, !1, i);
            default:
                return
        }
    };
    t.prototype.clickHandler = function(n) {
        var t = this;
        t.shouldClick === !1 && (n.stopImmediatePropagation(), n.stopPropagation(), n.preventDefault())
    };
    t.prototype.destroy = function() {
        var t = this;
        t.autoPlayClear();
        t.touchObject = {};
        n(".slick-cloned", t.$slider).remove();
        t.$dots && t.$dots.remove();
        t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow.remove();
        t.$nextArrow && "object" != typeof t.options.nextArrow && t.$nextArrow.remove();
        t.$slides.parent().hasClass("slick-track") && t.$slides.unwrap().unwrap();
        t.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("index").css({
            position: "",
            left: "",
            top: "",
            zIndex: "",
            opacity: "",
            width: ""
        });
        t.$slider.removeClass("slick-slider");
        t.$slider.removeClass("slick-initialized");
        t.$list.off(".slick");
        n(window).off(".slick-" + t.instanceUid);
        n(document).off(".slick-" + t.instanceUid)
    };
    t.prototype.disableTransition = function(n) {
        var t = this,
            i = {};
        i[t.transitionType] = "";
        t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(n).css(i)
    };
    t.prototype.fadeSlide = function(n, t, i) {
        var r = this;
        r.cssTransitions === !1 ? (r.$slides.eq(t).css({
            zIndex: 1e3
        }), r.$slides.eq(t).animate({
            opacity: 1
        }, r.options.speed, r.options.easing, i), r.$slides.eq(n).animate({
            opacity: 0
        }, r.options.speed, r.options.easing)) : (r.applyTransition(t), r.applyTransition(n), r.$slides.eq(t).css({
            opacity: 1,
            zIndex: 1e3
        }), r.$slides.eq(n).css({
            opacity: 0
        }), i && setTimeout(function() {
            r.disableTransition(t);
            r.disableTransition(n);
            i.call()
        }, r.options.speed))
    };
    t.prototype.filterSlides = function(n) {
        var t = this;
        null !== n && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(n).appendTo(t.$slideTrack), t.reinit())
    };
    t.prototype.getCurrent = function() {
        var n = this;
        return n.currentSlide
    };
    t.prototype.getDotCount = function() {
        var n = this,
            i = 0,
            r = 0,
            t = 0;
        if (n.options.infinite === !0) t = Math.ceil(n.slideCount / n.options.slidesToScroll);
        else
            for (; i < n.slideCount;) ++t, i = r + n.options.slidesToShow, r += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow;
        return t - 1
    };
    t.prototype.getLeft = function(n) {
        var f, r, i, t = this,
            u = 0;
        return t.slideOffset = 0, r = t.$slides.first().outerHeight(), t.options.infinite === !0 ? (t.slideCount > t.options.slidesToShow && (t.slideOffset = -1 * t.slideWidth * t.options.slidesToShow, u = -1 * r * t.options.slidesToShow), 0 != t.slideCount % t.options.slidesToScroll && n + t.options.slidesToScroll > t.slideCount && t.slideCount > t.options.slidesToShow && (n > t.slideCount ? (t.slideOffset = -1 * (t.options.slidesToShow - (n - t.slideCount)) * t.slideWidth, u = -1 * (t.options.slidesToShow - (n - t.slideCount)) * r) : (t.slideOffset = -1 * t.slideCount % t.options.slidesToScroll * t.slideWidth, u = -1 * t.slideCount % t.options.slidesToScroll * r))) : n + t.options.slidesToShow > t.slideCount && (t.slideOffset = (n + t.options.slidesToShow - t.slideCount) * t.slideWidth, u = (n + t.options.slidesToShow - t.slideCount) * r), t.slideCount <= t.options.slidesToShow && (t.slideOffset = 0, u = 0), t.options.centerMode === !0 && t.options.infinite === !0 ? t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2) - t.slideWidth : t.options.centerMode === !0 && (t.slideOffset = 0, t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2)), f = t.options.vertical === !1 ? -1 * n * t.slideWidth + t.slideOffset : -1 * n * r + u, t.options.variableWidth === !0 && (i = t.slideCount <= t.options.slidesToShow || t.options.infinite === !1 ? t.$slideTrack.children(".slick-slide").eq(n) : t.$slideTrack.children(".slick-slide").eq(n + t.options.slidesToShow), f = i[0] ? -1 * i[0].offsetLeft : 0, t.options.centerMode === !0 && (i = t.options.infinite === !1 ? t.$slideTrack.children(".slick-slide").eq(n) : t.$slideTrack.children(".slick-slide").eq(n + t.options.slidesToShow + 1), f = i[0] ? -1 * i[0].offsetLeft : 0, f += (t.$list.width() - i.outerWidth()) / 2)), f
    };
    t.prototype.getNavigableIndexes = function() {
        for (var n = this, t = 0, i = 0, r = []; t < n.slideCount;) r.push(t), t = i + n.options.slidesToScroll, i += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow;
        return r
    };
    t.prototype.getSlideCount = function() {
        var r, t = this,
            i;
        return t.options.swipeToSlide === !0 ? (i = null, t.$slideTrack.find(".slick-slide").each(function(r, u) {
            if (u.offsetLeft + n(u).outerWidth() / 2 > -1 * t.swipeLeft) return (i = u, !1)
        }), r = Math.abs(n(i).attr("index") - t.currentSlide)) : t.options.slidesToScroll
    };
    t.prototype.init = function() {
        var t = this;
        n(t.$slider).hasClass("slick-initialized") || (n(t.$slider).addClass("slick-initialized"), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots());
        null !== t.options.onInit && t.options.onInit.call(this, t)
    };
    t.prototype.initArrowEvents = function() {
        var n = this;
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.on("click.slick", {
            message: "previous"
        }, n.changeSlide), n.$nextArrow.on("click.slick", {
            message: "next"
        }, n.changeSlide))
    };
    t.prototype.initDotEvents = function() {
        var t = this;
        t.options.dots === !0 && t.slideCount > t.options.slidesToShow && n("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide);
        t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && n("li", t.$dots).on("mouseenter.slick", function() {
            t.paused = !0;
            t.autoPlayClear()
        }).on("mouseleave.slick", function() {
            t.paused = !1;
            t.autoPlay()
        })
    };
    t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents();
        t.initDotEvents();
        t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler);
        t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler);
        t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler);
        t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler);
        t.$list.on("click.slick", t.clickHandler);
        t.options.pauseOnHover === !0 && t.options.autoplay === !0 && (t.$list.on("mouseenter.slick", function() {
            t.paused = !0;
            t.autoPlayClear()
        }), t.$list.on("mouseleave.slick", function() {
            t.paused = !1;
            t.autoPlay()
        }));
        t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler);
        t.options.focusOnSelect === !0 && n(t.options.slide, t.$slideTrack).on("click.slick", t.selectHandler);
        n(window).on("orientationchange.slick.slick-" + t.instanceUid, function() {
            t.checkResponsive();
            t.setPosition()
        });
        n(window).on("resize.slick.slick-" + t.instanceUid, function() {
            n(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                t.windowWidth = n(window).width();
                t.checkResponsive();
                t.setPosition()
            }, 50))
        });
        n("*[draggable!=true]", t.$slideTrack).on("dragstart", function(n) {
            n.preventDefault()
        });
        n(window).on("load.slick.slick-" + t.instanceUid, t.setPosition);
        n(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
    };
    t.prototype.initUI = function() {
        var n = this;
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.show(), n.$nextArrow.show());
        n.options.dots === !0 && n.slideCount > n.options.slidesToShow && n.$dots.show();
        n.options.autoplay === !0 && n.autoPlay()
    };
    t.prototype.keyHandler = function(n) {
        var t = this;
        37 === n.keyCode && t.options.accessibility === !0 ? t.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === n.keyCode && t.options.accessibility === !0 && t.changeSlide({
            data: {
                message: "next"
            }
        })
    };
    t.prototype.lazyLoad = function() {
        function f(t) {
            n("img[data-lazy]", t).each(function() {
                var t = n(this),
                    i = n(this).attr("data-lazy");
                t.load(function() {
                    t.animate({
                        opacity: 1
                    }, 200)
                }).css({
                    opacity: 0
                }).attr("src", i).removeAttr("data-lazy").removeClass("slick-loading")
            })
        }
        var e, r, i, u, t = this;
        t.options.centerMode === !0 ? t.options.infinite === !0 ? (i = t.currentSlide + (t.options.slidesToShow / 2 + 1), u = i + t.options.slidesToShow + 2) : (i = Math.max(0, t.currentSlide - (t.options.slidesToShow / 2 + 1)), u = 2 + (t.options.slidesToShow / 2 + 1) + t.currentSlide) : (i = t.options.infinite ? t.options.slidesToShow + t.currentSlide : t.currentSlide, u = i + t.options.slidesToShow, t.options.fade === !0 && (i > 0 && i--, u <= t.slideCount && u++));
        e = t.$slider.find(".slick-slide").slice(i, u);
        f(e);
        t.slideCount <= t.options.slidesToShow ? (r = t.$slider.find(".slick-slide"), f(r)) : t.currentSlide >= t.slideCount - t.options.slidesToShow ? (r = t.$slider.find(".slick-cloned").slice(0, t.options.slidesToShow), f(r)) : 0 === t.currentSlide && (r = t.$slider.find(".slick-cloned").slice(-1 * t.options.slidesToShow), f(r))
    };
    t.prototype.loadSlider = function() {
        var n = this;
        n.setPosition();
        n.$slideTrack.css({
            opacity: 1
        });
        n.$slider.removeClass("slick-loading");
        n.initUI();
        "progressive" === n.options.lazyLoad && n.progressiveLazyLoad()
    };
    t.prototype.postSlide = function(n) {
        var t = this;
        null !== t.options.onAfterChange && t.options.onAfterChange.call(this, t, n);
        t.animating = !1;
        t.setPosition();
        t.swipeLeft = null;
        t.options.autoplay === !0 && t.paused === !1 && t.autoPlay()
    };
    t.prototype.progressiveLazyLoad = function() {
        var r, t, i = this;
        r = n("img[data-lazy]", i.$slider).length;
        r > 0 && (t = n("img[data-lazy]", i.$slider).first(), t.attr("src", t.attr("data-lazy")).removeClass("slick-loading").load(function() {
            t.removeAttr("data-lazy");
            i.progressiveLazyLoad()
        }).error(function() {
            t.removeAttr("data-lazy");
            i.progressiveLazyLoad()
        }))
    };
    t.prototype.refresh = function() {
        var t = this,
            i = t.currentSlide;
        t.destroy();
        n.extend(t, t.initials);
        t.init();
        t.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !0)
    };
    t.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide");
        t.slideCount = t.$slides.length;
        t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll);
        t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0);
        t.setProps();
        t.setupInfinite();
        t.buildArrows();
        t.updateArrows();
        t.initArrowEvents();
        t.buildDots();
        t.updateDots();
        t.initDotEvents();
        t.options.focusOnSelect === !0 && n(t.options.slide, t.$slideTrack).on("click.slick", t.selectHandler);
        t.setSlideClasses(0);
        t.setPosition();
        null !== t.options.onReInit && t.options.onReInit.call(this, t)
    };
    t.prototype.removeSlide = function(n, t, i) {
        var r = this;
        return "boolean" == typeof n ? (t = n, n = t === !0 ? 0 : r.slideCount - 1) : n = t === !0 ? --n : n, r.slideCount < 1 || 0 > n || n > r.slideCount - 1 ? !1 : (r.unload(), i === !0 ? r.$slideTrack.children().remove() : r.$slideTrack.children(this.options.slide).eq(n).remove(), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slidesCache = r.$slides, r.reinit(), void 0)
    };
    t.prototype.setCSS = function(n) {
        var r, u, t = this,
            i = {};
        t.options.rtl === !0 && (n = -n);
        r = "left" == t.positionProp ? n + "px" : "0px";
        u = "top" == t.positionProp ? n + "px" : "0px";
        i[t.positionProp] = n;
        t.transformsEnabled === !1 ? t.$slideTrack.css(i) : (i = {}, t.cssTransitions === !1 ? (i[t.animType] = "translate(" + r + ", " + u + ")", t.$slideTrack.css(i)) : (i[t.animType] = "translate3d(" + r + ", " + u + ", 0px)", t.$slideTrack.css(i)))
    };
    t.prototype.setDimensions = function() {
        var t = this,
            i, r;
        (t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
            padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({
            padding: t.options.centerPadding + " 0px"
        })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1) ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? (i = 0, t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.children(".slick-slide").each(function() {
            i += Math.ceil(n(this).outerWidth(!0))
        }), t.$slideTrack.width(Math.ceil(i) + 1)) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        r = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - r)
    };
    t.prototype.setFade = function() {
        var i, t = this;
        t.$slides.each(function(r, u) {
            i = -1 * t.slideWidth * r;
            t.options.rtl === !0 ? n(u).css({
                position: "relative",
                right: i,
                top: 0,
                zIndex: 800,
                opacity: 0
            }) : n(u).css({
                position: "relative",
                left: i,
                top: 0,
                zIndex: 800,
                opacity: 0
            })
        });
        t.$slides.eq(t.currentSlide).css({
            zIndex: 900,
            opacity: 1
        })
    };
    t.prototype.setHeight = function() {
        var n = this,
            t;
        1 === n.options.slidesToShow && n.options.adaptiveHeight === !0 && n.options.vertical === !1 && (t = n.$slides.eq(n.currentSlide).outerHeight(!0), n.$list.css("height", t))
    };
    t.prototype.setPosition = function() {
        var n = this;
        n.setDimensions();
        n.setHeight();
        n.options.fade === !1 ? n.setCSS(n.getLeft(n.currentSlide)) : n.setFade();
        null !== n.options.onSetPosition && n.options.onSetPosition.call(this, n)
    };
    t.prototype.setProps = function() {
        var n = this,
            t = document.body.style;
        n.positionProp = n.options.vertical === !0 ? "top" : "left";
        "top" === n.positionProp ? n.$slider.addClass("slick-vertical") : n.$slider.removeClass("slick-vertical");
        (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && n.options.useCSS === !0 && (n.cssTransitions = !0);
        void 0 !== t.OTransform && (n.animType = "OTransform", n.transformType = "-o-transform", n.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (n.animType = !1));
        void 0 !== t.MozTransform && (n.animType = "MozTransform", n.transformType = "-moz-transform", n.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (n.animType = !1));
        void 0 !== t.webkitTransform && (n.animType = "webkitTransform", n.transformType = "-webkit-transform", n.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (n.animType = !1));
        void 0 !== t.msTransform && (n.animType = "msTransform", n.transformType = "-ms-transform", n.transitionType = "msTransition", void 0 === t.msTransform && (n.animType = !1));
        void 0 !== t.transform && n.animType !== !1 && (n.animType = "transform", n.transformType = "transform", n.transitionType = "transition");
        n.transformsEnabled = null !== n.animType && n.animType !== !1
    };
    t.prototype.setSlideClasses = function(n) {
        var u, i, r, f, t = this;
        t.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center");
        i = t.$slider.find(".slick-slide");
        t.options.centerMode === !0 ? (u = Math.floor(t.options.slidesToShow / 2), t.options.infinite === !0 && (n >= u && n <= t.slideCount - 1 - u ? t.$slides.slice(n - u, n + u + 1).addClass("slick-active") : (r = t.options.slidesToShow + n, i.slice(r - u + 1, r + u + 2).addClass("slick-active")), 0 === n ? i.eq(i.length - 1 - t.options.slidesToShow).addClass("slick-center") : n === t.slideCount - 1 && i.eq(t.options.slidesToShow).addClass("slick-center")), t.$slides.eq(n).addClass("slick-center")) : n >= 0 && n <= t.slideCount - t.options.slidesToShow ? t.$slides.slice(n, n + t.options.slidesToShow).addClass("slick-active") : i.length <= t.options.slidesToShow ? i.addClass("slick-active") : (f = t.slideCount % t.options.slidesToShow, r = t.options.infinite === !0 ? t.options.slidesToShow + n : n, t.options.slidesToShow == t.options.slidesToScroll && t.slideCount - n < t.options.slidesToShow ? i.slice(r - (t.options.slidesToShow - f), r + f).addClass("slick-active") : i.slice(r, r + t.options.slidesToShow).addClass("slick-active"));
        "ondemand" === t.options.lazyLoad && t.lazyLoad()
    };
    t.prototype.setupInfinite = function() {
        var i, r, u, t = this;
        if (t.options.fade === !0 && (t.options.centerMode = !1), t.options.infinite === !0 && t.options.fade === !1 && (r = null, t.slideCount > t.options.slidesToShow)) {
            for (u = t.options.centerMode === !0 ? t.options.slidesToShow + 1 : t.options.slidesToShow, i = t.slideCount; i > t.slideCount - u; i -= 1) r = i - 1, n(t.$slides[r]).clone(!0).attr("id", "").attr("index", r - t.slideCount).prependTo(t.$slideTrack).addClass("slick-cloned");
            for (i = 0; u > i; i += 1) r = i, n(t.$slides[r]).clone(!0).attr("id", "").attr("index", r + t.slideCount).appendTo(t.$slideTrack).addClass("slick-cloned");
            t.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                n(this).attr("id", "")
            })
        }
    };
    t.prototype.selectHandler = function(t) {
        var i = this,
            r = parseInt(n(t.target).parents(".slick-slide").attr("index"));
        return r || (r = 0), i.slideCount <= i.options.slidesToShow ? (i.$slider.find(".slick-slide").removeClass("slick-active"), i.$slides.eq(r).addClass("slick-active"), i.options.centerMode === !0 && (i.$slider.find(".slick-slide").removeClass("slick-center"), i.$slides.eq(r).addClass("slick-center")), i.asNavFor(r), void 0) : (i.slideHandler(r), void 0)
    };
    t.prototype.slideHandler = function(n, t, i) {
        var u, f, o, e, s = null,
            r = this;
        return t = t || !1, r.animating === !0 && r.options.waitForAnimate === !0 || r.options.fade === !0 && r.currentSlide === n || r.slideCount <= r.options.slidesToShow ? void 0 : (t === !1 && r.asNavFor(n), u = n, s = r.getLeft(u), e = r.getLeft(r.currentSlide), r.currentLeft = null === r.swipeLeft ? e : r.swipeLeft, r.options.infinite === !1 && r.options.centerMode === !1 && (0 > n || n > r.getDotCount() * r.options.slidesToScroll) ? (r.options.fade === !1 && (u = r.currentSlide, i !== !0 ? r.animateSlide(e, function() {
            r.postSlide(u)
        }) : r.postSlide(u)), void 0) : r.options.infinite === !1 && r.options.centerMode === !0 && (0 > n || n > r.slideCount - r.options.slidesToScroll) ? (r.options.fade === !1 && (u = r.currentSlide, i !== !0 ? r.animateSlide(e, function() {
            r.postSlide(u)
        }) : r.postSlide(u)), void 0) : (r.options.autoplay === !0 && clearInterval(r.autoPlayTimer), f = 0 > u ? 0 != r.slideCount % r.options.slidesToScroll ? r.slideCount - r.slideCount % r.options.slidesToScroll : r.slideCount + u : u >= r.slideCount ? 0 != r.slideCount % r.options.slidesToScroll ? 0 : u - r.slideCount : u, r.animating = !0, null !== r.options.onBeforeChange && n !== r.currentSlide && r.options.onBeforeChange.call(this, r, r.currentSlide, f), o = r.currentSlide, r.currentSlide = f, r.setSlideClasses(r.currentSlide), r.updateDots(), r.updateArrows(), r.options.fade === !0 ? (i !== !0 ? r.fadeSlide(o, f, function() {
            r.postSlide(f)
        }) : r.postSlide(f), void 0) : (i !== !0 ? r.animateSlide(s, function() {
            r.postSlide(f)
        }) : r.postSlide(f), void 0)))
    };
    t.prototype.startLoad = function() {
        var n = this;
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.hide(), n.$nextArrow.hide());
        n.options.dots === !0 && n.slideCount > n.options.slidesToShow && n.$dots.hide();
        n.$slider.addClass("slick-loading")
    };
    t.prototype.swipeDirection = function() {
        var i, r, u, n, t = this;
        return i = t.touchObject.startX - t.touchObject.curX, r = t.touchObject.startY - t.touchObject.curY, u = Math.atan2(r, i), n = Math.round(180 * u / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? t.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? t.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? t.options.rtl === !1 ? "right" : "left" : "vertical"
    };
    t.prototype.swipeEnd = function() {
        var n = this;
        if (n.dragging = !1, n.shouldClick = n.touchObject.swipeLength > 10 ? !1 : !0, void 0 === n.touchObject.curX) return !1;
        if (n.touchObject.swipeLength >= n.touchObject.minSwipe) switch (n.swipeDirection()) {
            case "left":
                n.slideHandler(n.currentSlide + n.getSlideCount());
                n.currentDirection = 0;
                n.touchObject = {};
                break;
            case "right":
                n.slideHandler(n.currentSlide - n.getSlideCount());
                n.currentDirection = 1;
                n.touchObject = {}
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    };
    t.prototype.swipeHandler = function(n) {
        var t = this;
        if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== n.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = n.originalEvent && void 0 !== n.originalEvent.touches ? n.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, n.data.action) {
            case "start":
                t.swipeStart(n);
                break;
            case "move":
                t.swipeMove(n);
                break;
            case "end":
                t.swipeEnd(n)
        }
    };
    t.prototype.swipeMove = function(n) {
        var r, f, u, i, t = this;
        return i = void 0 !== n.originalEvent ? n.originalEvent.touches : null, !t.dragging || i && 1 !== i.length ? !1 : (r = t.getLeft(t.currentSlide), t.touchObject.curX = void 0 !== i ? i[0].pageX : n.clientX, t.touchObject.curY = void 0 !== i ? i[0].pageY : n.clientY, t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curX - t.touchObject.startX, 2))), f = t.swipeDirection(), "vertical" !== f ? (void 0 !== n.originalEvent && t.touchObject.swipeLength > 4 && n.preventDefault(), u = (t.options.rtl === !1 ? 1 : -1) * (t.touchObject.curX > t.touchObject.startX ? 1 : -1), t.swipeLeft = t.options.vertical === !1 ? r + t.touchObject.swipeLength * u : r + t.touchObject.swipeLength * (t.$list.height() / t.listWidth) * u, t.options.fade === !0 || t.options.touchMove === !1 ? !1 : t.animating === !0 ? (t.swipeLeft = null, !1) : (t.setCSS(t.swipeLeft), void 0)) : void 0)
    };
    t.prototype.swipeStart = function(n) {
        var i, t = this;
        return 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {}, !1) : (void 0 !== n.originalEvent && void 0 !== n.originalEvent.touches && (i = n.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== i ? i.pageX : n.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== i ? i.pageY : n.clientY, t.dragging = !0, void 0)
    };
    t.prototype.unfilterSlides = function() {
        var n = this;
        null !== n.$slidesCache && (n.unload(), n.$slideTrack.children(this.options.slide).detach(), n.$slidesCache.appendTo(n.$slideTrack), n.reinit())
    };
    t.prototype.unload = function() {
        var t = this;
        n(".slick-cloned", t.$slider).remove();
        t.$dots && t.$dots.remove();
        t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow.remove();
        t.$nextArrow && "object" != typeof t.options.nextArrow && t.$nextArrow.remove();
        t.$slides.removeClass("slick-slide slick-active slick-visible").css("width", "")
    };
    t.prototype.updateArrows = function() {
        var t, n = this;
        t = Math.floor(n.options.slidesToShow / 2);
        n.options.arrows === !0 && n.options.infinite !== !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.removeClass("slick-disabled"), n.$nextArrow.removeClass("slick-disabled"), 0 === n.currentSlide ? (n.$prevArrow.addClass("slick-disabled"), n.$nextArrow.removeClass("slick-disabled")) : n.currentSlide >= n.slideCount - n.options.slidesToShow && n.options.centerMode === !1 ? (n.$nextArrow.addClass("slick-disabled"), n.$prevArrow.removeClass("slick-disabled")) : n.currentSlide > n.slideCount - n.options.slidesToShow + t && n.options.centerMode === !0 && (n.$nextArrow.addClass("slick-disabled"), n.$prevArrow.removeClass("slick-disabled")))
    };
    t.prototype.updateDots = function() {
        var n = this;
        null !== n.$dots && (n.$dots.find("li").removeClass("slick-active"), n.$dots.find("li").eq(Math.floor(n.currentSlide / n.options.slidesToScroll)).addClass("slick-active"))
    };
    n.fn.slick = function(n) {
        var i = this;
        return i.each(function(i, r) {
            r.slick = new t(r, n)
        })
    };
    n.fn.slickAdd = function(n, t, i) {
        var r = this;
        return r.each(function(r, u) {
            u.slick.addSlide(n, t, i)
        })
    };
    n.fn.slickCurrentSlide = function() {
        var n = this;
        return n.get(0).slick.getCurrent()
    };
    n.fn.slickFilter = function(n) {
        var t = this;
        return t.each(function(t, i) {
            i.slick.filterSlides(n)
        })
    };
    n.fn.slickGoTo = function(n, t) {
        var i = this;
        return i.each(function(i, r) {
            r.slick.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(n)
                }
            }, t)
        })
    };
    n.fn.slickNext = function() {
        var n = this;
        return n.each(function(n, t) {
            t.slick.changeSlide({
                data: {
                    message: "next"
                }
            })
        })
    };
    n.fn.slickPause = function() {
        var n = this;
        return n.each(function(n, t) {
            t.slick.autoPlayClear();
            t.slick.paused = !0
        })
    };
    n.fn.slickPlay = function() {
        var n = this;
        return n.each(function(n, t) {
            t.slick.paused = !1;
            t.slick.autoPlay()
        })
    };
    n.fn.slickPrev = function() {
        var n = this;
        return n.each(function(n, t) {
            t.slick.changeSlide({
                data: {
                    message: "previous"
                }
            })
        })
    };
    n.fn.slickRemove = function(n, t) {
        var i = this;
        return i.each(function(i, r) {
            r.slick.removeSlide(n, t)
        })
    };
    n.fn.slickRemoveAll = function() {
        var n = this;
        return n.each(function(n, t) {
            t.slick.removeSlide(null, null, !0)
        })
    };
    n.fn.slickGetOption = function(n) {
        var t = this;
        return t.get(0).slick.options[n]
    };
    n.fn.slickSetOption = function(n, t, i) {
        var r = this;
        return r.each(function(r, u) {
            u.slick.options[n] = t;
            i === !0 && (u.slick.unload(), u.slick.reinit())
        })
    };
    n.fn.slickUnfilter = function() {
        var n = this;
        return n.each(function(n, t) {
            t.slick.unfilterSlides()
        })
    };
    n.fn.unslick = function() {
        var n = this;
        return n.each(function(n, t) {
            t.slick && t.slick.destroy()
        })
    };
    n.fn.getSlick = function() {
        var n = null,
            t = this;
        return t.each(function(t, i) {
            n = i.slick
        }), n
    }
}),
function() {
    var n, f, t, i, r, u = function(n, t) {
            return function() {
                return n.apply(t, arguments)
            }
        },
        e = [].indexOf || function(n) {
            for (var t = 0, i = this.length; i > t; t++)
                if (t in this && this[t] === n) return t;
            return -1
        };
    f = function() {
        function n() {}
        return n.prototype.extend = function(n, t) {
            var i, r;
            for (i in t) r = t[i], null == n[i] && (n[i] = r);
            return n
        }, n.prototype.isMobile = function(n) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(n)
        }, n.prototype.addEvent = function(n, t, i) {
            return null != n.addEventListener ? n.addEventListener(t, i, !1) : null != n.attachEvent ? n.attachEvent("on" + t, i) : n[t] = i
        }, n.prototype.removeEvent = function(n, t, i) {
            return null != n.removeEventListener ? n.removeEventListener(t, i, !1) : null != n.detachEvent ? n.detachEvent("on" + t, i) : delete n[t]
        }, n.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, n
    }();
    t = this.WeakMap || this.MozWeakMap || (t = function() {
        function n() {
            this.keys = [];
            this.values = []
        }
        return n.prototype.get = function(n) {
            var t, u, i, f, r;
            for (r = this.keys, t = i = 0, f = r.length; f > i; t = ++i)
                if (u = r[t], u === n) return this.values[t]
        }, n.prototype.set = function(n, t) {
            var i, f, r, e, u;
            for (u = this.keys, i = r = 0, e = u.length; e > r; i = ++r)
                if (f = u[i], f === n) return void(this.values[i] = t);
            return this.keys.push(n), this.values.push(t)
        }, n
    }());
    n = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (n = function() {
        function n() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser.");
            "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return n.notSupported = !0, n.prototype.observe = function() {}, n
    }());
    i = this.getComputedStyle || function(n) {
        return this.getPropertyValue = function(t) {
            var i;
            return "float" === t && (t = "styleFloat"), r.test(t) && t.replace(r, function(n, t) {
                return t.toUpperCase()
            }), (null != (i = n.currentStyle) ? i[t] : void 0) || null
        }, this
    };
    r = /(\-([a-z]){1})/g;
    this.WOW = function() {
        function r(n) {
            null == n && (n = {});
            this.scrollCallback = u(this.scrollCallback, this);
            this.scrollHandler = u(this.scrollHandler, this);
            this.start = u(this.start, this);
            this.scrolled = !0;
            this.config = this.util().extend(n, this.defaults);
            this.animationNameCache = new t
        }
        return r.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0
        }, r.prototype.init = function() {
            var n;
            return this.element = window.document.documentElement, "interactive" === (n = document.readyState) || "complete" === n ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, r.prototype.start = function() {
            var t, i, u, r;
            if (this.stopped = !1, this.boxes = function() {
                    var n, u, i, r;
                    for (i = this.element.querySelectorAll("." + this.config.boxClass), r = [], n = 0, u = i.length; u > n; n++) t = i[n], r.push(t);
                    return r
                }.call(this), this.all = function() {
                    var n, u, i, r;
                    for (i = this.boxes, r = [], n = 0, u = i.length; u > n; n++) t = i[n], r.push(t);
                    return r
                }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (r = this.boxes, i = 0, u = r.length; u > i; i++) t = r[i], this.applyStyle(t, !0);
            return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new n(function(n) {
                return function(t) {
                    var u, f, i, e, r;
                    for (r = [], i = 0, e = t.length; e > i; i++) f = t[i], r.push(function() {
                        var n, r, t, i;
                        for (t = f.addedNodes || [], i = [], n = 0, r = t.length; r > n; n++) u = t[n], i.push(this.doSync(u));
                        return i
                    }.call(n));
                    return r
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, r.prototype.stop = function() {
            return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, r.prototype.sync = function() {
            if (n.notSupported) return this.doSync(this.element)
        }, r.prototype.doSync = function(n) {
            var t, i, f, u, r;
            if (null == n && (n = this.element), 1 === n.nodeType) {
                for (n = n.parentNode || n, u = n.querySelectorAll("." + this.config.boxClass), r = [], i = 0, f = u.length; f > i; i++) t = u[i], e.call(this.all, t) < 0 ? (this.boxes.push(t), this.all.push(t), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0), r.push(this.scrolled = !0)) : r.push(void 0);
                return r
            }
        }, r.prototype.show = function(n) {
            return this.applyStyle(n), n.className = "" + n.className + " " + this.config.animateClass
        }, r.prototype.applyStyle = function(n, t) {
            var i, r, u;
            return r = n.getAttribute("data-wow-duration"), i = n.getAttribute("data-wow-delay"), u = n.getAttribute("data-wow-iteration"), this.animate(function(f) {
                return function() {
                    return f.customStyle(n, t, r, i, u)
                }
            }(this))
        }, r.prototype.animate = function() {
            return "requestAnimationFrame" in window ? function(n) {
                return window.requestAnimationFrame(n)
            } : function(n) {
                return n()
            }
        }(), r.prototype.resetStyle = function() {
            var r, n, u, t, i;
            for (t = this.boxes, i = [], n = 0, u = t.length; u > n; n++) r = t[n], i.push(r.style.visibility = "visible");
            return i
        }, r.prototype.customStyle = function(n, t, i, r, u) {
            return t && this.cacheAnimationName(n), n.style.visibility = t ? "hidden" : "visible", i && this.vendorSet(n.style, {
                animationDuration: i
            }), r && this.vendorSet(n.style, {
                animationDelay: r
            }), u && this.vendorSet(n.style, {
                animationIterationCount: u
            }), this.vendorSet(n.style, {
                animationName: t ? "none" : this.cachedAnimationName(n)
            }), n
        }, r.prototype.vendors = ["moz", "webkit"], r.prototype.vendorSet = function(n, t) {
            var i, r, u, f = [];
            for (i in t) r = t[i], n["" + i] = r, f.push(function() {
                var t, o, f, e;
                for (f = this.vendors, e = [], t = 0, o = f.length; o > t; t++) u = f[t], e.push(n["" + u + i.charAt(0).toUpperCase() + i.substr(1)] = r);
                return e
            }.call(this));
            return f
        }, r.prototype.vendorCSS = function(n, t) {
            var r, f, o, u, s, e;
            for (f = i(n), r = f.getPropertyCSSValue(t), e = this.vendors, u = 0, s = e.length; s > u; u++) o = e[u], r = r || f.getPropertyCSSValue("-" + o + "-" + t);
            return r
        }, r.prototype.animationName = function(n) {
            var t;
            try {
                t = this.vendorCSS(n, "animation-name").cssText
            } catch (r) {
                t = i(n).getPropertyValue("animation-name")
            }
            return "none" === t ? "" : t
        }, r.prototype.cacheAnimationName = function(n) {
            return this.animationNameCache.set(n, this.animationName(n))
        }, r.prototype.cachedAnimationName = function(n) {
            return this.animationNameCache.get(n)
        }, r.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, r.prototype.scrollCallback = function() {
            var n;
            if (this.scrolled && !(this.scrolled = !1, this.boxes = function() {
                    var t, u, i, r;
                    for (i = this.boxes, r = [], t = 0, u = i.length; u > t; t++) n = i[t], n && (this.isVisible(n) ? this.show(n) : r.push(n));
                    return r
                }.call(this), this.boxes.length || this.config.live)) return this.stop()
        }, r.prototype.offsetTop = function(n) {
            for (var t; void 0 === n.offsetTop;) n = n.parentNode;
            for (t = n.offsetTop; n = n.offsetParent;) t += n.offsetTop;
            return t
        }, r.prototype.isVisible = function(n) {
            var r, u, t, f, i;
            return u = n.getAttribute("data-wow-offset") || this.config.offset, i = window.pageYOffset, f = i + Math.min(this.element.clientHeight, this.util().innerHeight()) - u, t = this.offsetTop(n), r = t + n.clientHeight, f >= t && r >= i
        }, r.prototype.util = function() {
            return null != this._util ? this._util : this._util = new f
        }, r.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, r
    }()
}.call(this)
