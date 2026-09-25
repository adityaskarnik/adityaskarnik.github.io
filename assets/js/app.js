! function () {
    "use strict";
    var e = {
            9774: function (e, n, t) {
                t(8594), t(4124), t(8981), t(7327), t(9600), t(1539), t(8674), t(4916), t(3123), t(3210), t(5666);
                var r = t(2439);

                function i(e) {
                    return function (e) {
                        if (Array.isArray(e)) return o(e)
                    }(e) || function (e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                    }(e) || function (e, n) {
                        if (e) {
                            if ("string" == typeof e) return o(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? o(e, n) : void 0
                        }
                    }(e) || function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function o(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                    return r
                }

                function a(e, n, t, r, i, o, a) {
                    try {
                        var u = e[o](a),
                            s = u.value
                    } catch (e) {
                        return void t(e)
                    }
                    u.done ? n(s) : Promise.resolve(s).then(r, i)
                }

                function u(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var r = n[t];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                t(2222), t(4553), t(9554), t(1038), t(7042), t(561), t(9653), t(7941), t(8783), t(4747);
                var s = function () {
                        function e(n) {
                            var t, r, i = n.maxReelItems,
                                o = void 0 === i ? 30 : i,
                                a = n.removeWinner,
                                u = void 0 === a || a,
                                s = n.reelContainerSelector,
                                c = n.onSpinStart,
                                l = n.onSpinEnd,
                                d = n.onNameListChanged;
                            ! function (e, n) {
                                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                            }(this, e), this.nameList = [], this.havePreviousWinner = !1, this.reelContainer = document.querySelector(s), this.maxReelItems = o, this.shouldRemoveWinner = u, this.onSpinStart = c, this.onSpinEnd = l, this.onNameListChanged = d, this.reelAnimation = null === (t = this.reelContainer) || void 0 === t ? void 0 : t.animate([{
                                transform: "none",
                                filter: "blur(0)"
                            }, {
                                filter: "blur(1px)",
                                offset: .5
                            }, {
                                transform: "translateY(-".concat(120 * (this.maxReelItems - 1), "px)"),
                                filter: "blur(0)"
                            }], {
                                duration: 100 * this.maxReelItems,
                                easing: "ease-in-out",
                                iterations: 1
                            }), null === (r = this.reelAnimation) || void 0 === r || r.cancel()
                        }
                        var n, t, r, o, s;
                        return n = e, r = [{
                            key: "shuffleNames",
                            value: function (e) {
                                for (var n = Object.keys(e), t = [], r = 0, i = n.length; r < e.length && i > 0; r += 1) {
                                    var o = Math.random() * i | 0,
                                        a = n[o];
                                    t.push(e[a]);
                                    var u = n[i -= 1];
                                    n[i] = a, n[o] = u
                                }
                                return t
                            }
                        }], (t = [{
                            key: "names",
                            get: function () {
                                return this.nameList
                            },
                            set: function (e) {
                                var n;
                                this.nameList = e, ((null === (n = this.reelContainer) || void 0 === n ? void 0 : n.children) ? Array.from(this.reelContainer.children) : []).forEach((function (e) {
                                    return e.remove()
                                })), this.havePreviousWinner = !1, this.onNameListChanged && this.onNameListChanged()
                            }
                        }, {
                            key: "shouldRemoveWinnerFromNameList",
                            get: function () {
                                return this.shouldRemoveWinner
                            },
                            set: function (e) {
                                this.shouldRemoveWinner = e
                            }
                        }, {
                            key: "spin",
                            value: (o = regeneratorRuntime.mark((function n() {
                                var t, r, o, a, u, s;
                                return regeneratorRuntime.wrap((function (n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (this.nameList.length) {
                                                n.next = 3;
                                                break
                                            }
                                            return console.error("Name List is empty. Cannot start spinning."), n.abrupt("return", !1);
                                        case 3:
                                            if (this.onSpinStart && this.onSpinStart(), t = this.reelContainer, r = this.reelAnimation, o = this.shouldRemoveWinner, t && r) {
                                                n.next = 7;
                                                break
                                            }
                                            return n.abrupt("return", !1);
                                        case 7:
                                            for (a = e.shuffleNames(this.nameList); a.length && a.length < this.maxReelItems;) a = [].concat(i(a), i(a));
                                            return a = a.slice(0, this.maxReelItems - Number(this.havePreviousWinner)), u = document.createDocumentFragment(), a.forEach((function (e) {
                                                var n = document.createElement("div");
                                                n.innerHTML = e, u.appendChild(n)
                                            })), t.appendChild(u), o && this.nameList.splice(this.nameList.findIndex((function (e) {
                                                return e === a[a.length - 1]
                                            })), 1), s = new Promise((function (e) {
                                                r.onfinish = e
                                            })), r.play(), n.next = 18, s;
                                        case 18:
                                            return r.finish(), Array.from(t.children).slice(0, t.children.length - 1).forEach((function (e) {
                                                return e.remove()
                                            })), this.havePreviousWinner = !0, this.onSpinEnd && this.onSpinEnd(), n.abrupt("return", !0);
                                        case 23:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, this)
                            })), s = function () {
                                var e = this,
                                    n = arguments;
                                return new Promise((function (t, r) {
                                    var i = o.apply(e, n);

                                    function u(e) {
                                        a(i, t, r, u, s, "next", e)
                                    }

                                    function s(e) {
                                        a(i, t, r, u, s, "throw", e)
                                    }
                                    u(void 0)
                                }))
                            }, function () {
                                return s.apply(this, arguments)
                            })
                        }]) && u(n.prototype, t), r && u(n, r), e
                    }(),
                    c = (t(5827), {
                        B8: 7902.133,
                        "A#8": 7458.62,
                        A8: 7040,
                        "G#8": 6644.875,
                        G8: 6271.927,
                        "F#8": 5919.911,
                        F8: 5587.652,
                        E8: 5274.041,
                        "D#8": 4978.032,
                        D8: 4698.636,
                        "C#8": 4434.922,
                        C8: 4186.009,
                        B7: 3951.066,
                        "A#7": 3729.31,
                        A7: 3520,
                        "G#7": 3322.438,
                        G7: 3135.963,
                        "F#7": 2959.955,
                        F7: 2793.826,
                        E7: 2637.02,
                        "D#7": 2489.016,
                        D7: 2349.318,
                        "C#7": 2217.461,
                        C7: 2093.005,
                        B6: 1975.533,
                        "A#6": 1864.655,
                        A6: 1760,
                        "G#6": 1661.219,
                        G6: 1567.982,
                        "F#6": 1479.978,
                        F6: 1396.913,
                        E6: 1318.51,
                        "D#6": 1244.508,
                        D6: 1174.659,
                        "C#6": 1108.731,
                        C6: 1046.502,
                        B5: 987.7666,
                        "A#5": 932.3275,
                        A5: 880,
                        "G#5": 830.6094,
                        G5: 783.9909,
                        "F#5": 739.9888,
                        F5: 698.4565,
                        E5: 659.2551,
                        "D#5": 622.254,
                        D5: 587.3295,
                        "C#5": 554.3653,
                        C5: 523.2511,
                        B4: 493.8833,
                        "A#4": 466.1638,
                        A4: 440,
                        "G#4": 415.3047,
                        G4: 391.9954,
                        "F#4": 369.9944,
                        F4: 349.2282,
                        E4: 329.6276,
                        "D#4": 311.127,
                        D4: 293.6648,
                        "C#4": 277.1826,
                        C4: 261.6256,
                        B3: 246.9417,
                        "A#3": 233.0819,
                        A3: 220,
                        "G#3": 207.6523,
                        G3: 195.9977,
                        "F#3": 184.9972,
                        F3: 174.6141,
                        E3: 164.8138,
                        "D#3": 155.5635,
                        D3: 146.8324,
                        "C#3": 138.5913,
                        C3: 130.8128,
                        B2: 123.4708,
                        "A#2": 116.5409,
                        A2: 110,
                        "G#2": 103.8262,
                        G2: 97.99886,
                        "F#2": 92.49861,
                        F2: 87.30706,
                        E2: 82.40689,
                        "D#2": 77.78175,
                        D2: 73.41619,
                        "C#2": 69.29566,
                        C2: 65.40639,
                        B1: 61.73541,
                        "A#1": 58.27047,
                        A1: 55,
                        "G#1": 51.91309,
                        G1: 48.99943,
                        "F#1": 46.2493,
                        F1: 43.65353,
                        E1: 41.20344,
                        "D#1": 38.89087,
                        D1: 36.7081,
                        "C#1": 34.64783,
                        C1: 32.7032,
                        B0: 30.86771,
                        "A#0": 29.13524,
                        A0: 27.5,
                        "G#0": 25.95654,
                        G0: 24.49971,
                        "F#0": 23.12465,
                        F0: 21.82676,
                        E0: 20.60172,
                        "D#0": 19.44544,
                        D0: 18.35405,
                        "C#0": 17.32391,
                        C0: 16.3516
                    });

                function l(e, n) {
                    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                }

                function d(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var r = n[t];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                var f = function () {
                    function e() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        l(this, e), (window.AudioContext || window.webkitAudioContext) && (this.audioContext = new(window.AudioContext || window.webkitAudioContext)), this.isMuted = n
                    }
                    var n, t;
                    return n = e, (t = [{
                        key: "mute",
                        get: function () {
                            return this.isMuted
                        },
                        set: function (e) {
                            this.isMuted = e
                        }
                    }, {
                        key: "playSound",
                        value: function (e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                t = n.type,
                                r = void 0 === t ? "sine" : t,
                                i = n.easeOut,
                                o = void 0 === i || i,
                                a = n.volume,
                                u = void 0 === a ? .1 : a,
                                s = this.audioContext;
                            if (s) {
                                var l = s.createOscillator(),
                                    d = s.createGain();
                                l.connect(d), d.connect(s.destination), l.type = r, d.gain.value = u;
                                var f = s.currentTime,
                                    m = e.reduce((function (e, n) {
                                        var t = n.key,
                                            r = n.duration;
                                        return l.frequency.setValueAtTime(c[t], f + e), e + r
                                    }), 0);
                                o && (d.gain.exponentialRampToValueAtTime(u, f + m - .1), d.gain.exponentialRampToValueAtTime(.01, f + m)), l.start(f), l.stop(f + m)
                            }
                        }
                    }, {
                        key: "win",
                        value: function () {
                            if (this.isMuted) return Promise.resolve(!1);
                            var e = [{
                                    key: "C4",
                                    duration: .2
                                }, {
                                    key: "D4",
                                    duration: .2
                                }, {
                                    key: "E4",
                                    duration: .2
                                }, {
                                    key: "G4",
                                    duration: .225
                                }, {
                                    key: "E4",
                                    duration: .175
                                }, {
                                    key: "G4",
                                    duration: .9
                                }],
                                n = e.reduce((function (e, n) {
                                    return e + n.duration
                                }), 0);
                            return this.playSound(e, {
                                type: "triangle",
                                volume: 1,
                                easeOut: !0
                            }), new Promise((function (e) {
                                setTimeout((function () {
                                    e(!0)
                                }), 1e3 * n)
                            }))
                        }
                    }, {
                        key: "spin",
                        value: function (e) {
                            if (this.isMuted) return Promise.resolve(!1);
                            var n = [{
                                    key: "D#3",
                                    duration: .1
                                }, {
                                    key: "C#3",
                                    duration: .1
                                }, {
                                    key: "C3",
                                    duration: .1
                                }],
                                t = n.reduce((function (e, n) {
                                    return e + n.duration
                                }), 0),
                                r = Math.floor(10 * e);
                            return this.playSound(Array.from(Array(r), (function (e, t) {
                                return n[t % 3]
                            })), {
                                type: "triangle",
                                easeOut: !1,
                                volume: 2
                            }), new Promise((function (e) {
                                setTimeout((function () {
                                    e(!0)
                                }), 1e3 * t)
                            }))
                        }
                    }]) && d(n.prototype, t), e
                }();

                function m(e, n, t, r, i, o, a) {
                    try {
                        var u = e[o](a),
                            s = u.value
                    } catch (e) {
                        return void t(e)
                    }
                    u.done ? n(s) : Promise.resolve(s).then(r, i)
                }! function () {
                    var e = document.getElementById("draw-button"),
                        n = document.getElementById("fullscreen-button"),
                        t = document.getElementById("settings-button"),
                        i = document.getElementById("settings"),
                        o = document.getElementById("settings-panel"),
                        a = document.getElementById("settings-save"),
                        u = document.getElementById("settings-close"),
                        c = document.getElementById("sunburst"),
                        l = document.getElementById("confetti-canvas"),
                        d = document.getElementById("name-list"),
                        h = document.getElementById("remove-from-list"),
                        v = document.getElementById("enable-sound");
                    if (e && n && t && i && o && a && u && c && l && d && h && v)
                        if (l instanceof HTMLCanvasElement) {
                            var p, y = new f,
                                g = ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"],
                                b = r.Z.create(l, {
                                    resize: !0,
                                    useWorker: !0
                                }),
                                w = function e() {
                                    var n = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth,
                                        t = Math.max(.5, Math.min(1, n / 1100));
                                    b({
                                        particleCount: 1,
                                        gravity: .8,
                                        spread: 90,
                                        origin: {
                                            y: .6
                                        },
                                        colors: [g[Math.floor(Math.random() * g.length)]],
                                        scalar: t
                                    }), p = window.requestAnimationFrame(e)
                                },
                                C = function () {
                                    p && window.cancelAnimationFrame(p), c.style.display = "none"
                                },
                                E = new s({
                                    reelContainerSelector: "#reel",
                                    maxReelItems: 40,
                                    onSpinStart: function () {
                                        C(), e.disabled = !0, t.disabled = !0, y.spin(3.9)
                                    },
                                    onSpinEnd: function () {
                                        var n, r = (n = regeneratorRuntime.mark((function n() {
                                            return regeneratorRuntime.wrap((function (n) {
                                                for (;;) switch (n.prev = n.next) {
                                                    case 0:
                                                        return w(), c.style.display = "block", n.next = 4, y.win();
                                                    case 4:
                                                        e.disabled = !1, t.disabled = !1;
                                                    case 6:
                                                    case "end":
                                                        return n.stop()
                                                }
                                            }), n)
                                        })), function () {
                                            var e = this,
                                                t = arguments;
                                            return new Promise((function (r, i) {
                                                var o = n.apply(e, t);

                                                function a(e) {
                                                    m(o, r, i, a, u, "next", e)
                                                }

                                                function u(e) {
                                                    m(o, r, i, a, u, "throw", e)
                                                }
                                                a(void 0)
                                            }))
                                        });
                                        return function () {
                                            return r.apply(this, arguments)
                                        }
                                    }(),
                                    onNameListChanged: C
                                }),
                                k = function () {
                                    d.value = E.names.length ? E.names.join("\n") : "", h.checked = E.shouldRemoveWinnerFromNameList, v.checked = !y.mute, i.style.display = "block"
                                },
                                x = function () {
                                    o.scrollTop = 0, i.style.display = "none"
                                };
                            e.addEventListener("click", (function () {
                                E.names.length ? E.spin() : k()
                            })), document.documentElement.requestFullscreen && document.exitFullscreen || n.remove(), n.addEventListener("click", (function () {
                                document.fullscreenElement ? document.exitFullscreen && document.exitFullscreen() : document.documentElement.requestFullscreen()
                            })), t.addEventListener("click", k), a.addEventListener("click", (function () {
                                E.names = d.value ? d.value.split(/\n/).filter((function (e) {
                                    return Boolean(e.trim())
                                })) : [], E.shouldRemoveWinnerFromNameList = h.checked, y.mute = !v.checked, x()
                            })), u.addEventListener("click", x)
                        } else console.error("Confetti canvas is not an instance of Canvas. This is possibly a bug.");
                    else console.error("One or more Element ID is invalid. This is possibly a bug.")
                }(), "serviceWorker" in navigator && window.addEventListener("load", (function () {
                    navigator.serviceWorker.register("./service-worker.js").then((function (e) {})).catch((function (e) {}))
                }))
            }
        },
        n = {};

    function t(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            exports: {}
        };
        return e[r](i, i.exports, t), i.exports
    }
    t.m = e, t.x = function () {}, t.d = function (e, n) {
            for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: n[r]
            })
        }, t.g = function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), t.o = function (e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        },
        function () {
            var e = {
                    143: 0
                },
                n = [
                    [9774, 736]
                ],
                r = function () {},
                i = function (i, o) {
                    for (var a, u, s = o[0], c = o[1], l = o[2], d = o[3], f = 0, m = []; f < s.length; f++) u = s[f], t.o(e, u) && e[u] && m.push(e[u][0]), e[u] = 0;
                    for (a in c) t.o(c, a) && (t.m[a] = c[a]);
                    for (l && l(t), i && i(o); m.length;) m.shift()();
                    return d && n.push.apply(n, d), r()
                },
                o = self.webpackChunkrandom_name_picker = self.webpackChunkrandom_name_picker || [];

            function a() {
                for (var r, i = 0; i < n.length; i++) {
                    for (var o = n[i], a = !0, u = 1; u < o.length; u++) {
                        var s = o[u];
                        0 !== e[s] && (a = !1)
                    }
                    a && (n.splice(i--, 1), r = t(t.s = o[0]))
                }
                return 0 === n.length && (t.x(), t.x = function () {}), r
            }
            o.forEach(i.bind(null, 0)), o.push = i.bind(null, o.push.bind(o));
            var u = t.x;
            t.x = function () {
                return t.x = u || function () {}, (r = a)()
            }
        }(), t.x()
}();