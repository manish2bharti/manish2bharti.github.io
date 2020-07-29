jQuery.easing["jswing"] = jQuery.easing["swing"];
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, t, n, r, i) {
        return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
    },
    easeInQuad: function(e, t, n, r, i) {
        return r * (t /= i) * t + n
    },
    easeOutQuad: function(e, t, n, r, i) {
        return -r * (t /= i) * (t - 2) + n
    },
    easeInOutQuad: function(e, t, n, r, i) {
        if ((t /= i / 2) < 1) return r / 2 * t * t + n;
        return -r / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function(e, t, n, r, i) {
        return r * (t /= i) * t * t + n
    },
    easeOutCubic: function(e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t + 1) + n
    },
    easeInOutCubic: function(e, t, n, r, i) {
        if ((t /= i / 2) < 1) return r / 2 * t * t * t + n;
        return r / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function(e, t, n, r, i) {
        return r * (t /= i) * t * t * t + n
    },
    easeOutQuart: function(e, t, n, r, i) {
        return -r * ((t = t / i - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function(e, t, n, r, i) {
        if ((t /= i / 2) < 1) return r / 2 * t * t * t * t + n;
        return -r / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function(e, t, n, r, i) {
        return r * (t /= i) * t * t * t * t + n
    },
    easeOutQuint: function(e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function(e, t, n, r, i) {
        if ((t /= i / 2) < 1) return r / 2 * t * t * t * t * t + n;
        return r / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function(e, t, n, r, i) {
        return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
    },
    easeOutSine: function(e, t, n, r, i) {
        return r * Math.sin(t / i * (Math.PI / 2)) + n
    },
    easeInOutSine: function(e, t, n, r, i) {
        return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
    },
    easeInExpo: function(e, t, n, r, i) {
        return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
    },
    easeOutExpo: function(e, t, n, r, i) {
        return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
    },
    easeInOutExpo: function(e, t, n, r, i) {
        if (t == 0) return n;
        if (t == i) return n + r;
        if ((t /= i / 2) < 1) return r / 2 * Math.pow(2, 10 * (t - 1)) + n;
        return r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
    },
    easeInCirc: function(e, t, n, r, i) {
        return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
    },
    easeOutCirc: function(e, t, n, r, i) {
        return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
    },
    easeInOutCirc: function(e, t, n, r, i) {
        if ((t /= i / 2) < 1) return -r / 2 * (Math.sqrt(1 - t * t) - 1) + n;
        return r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function(e, t, n, r, i) {
        var s = 1.70158;
        var o = 0;
        var u = r;
        if (t == 0) return n;
        if ((t /= i) == 1) return n + r;
        if (!o) o = i * .3;
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n
    },
    easeOutElastic: function(e, t, n, r, i) {
        var s = 1.70158;
        var o = 0;
        var u = r;
        if (t == 0) return n;
        if ((t /= i) == 1) return n + r;
        if (!o) o = i * .3;
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n
    },
    easeInOutElastic: function(e, t, n, r, i) {
        var s = 1.70158;
        var o = 0;
        var u = r;
        if (t == 0) return n;
        if ((t /= i / 2) == 2) return n + r;
        if (!o) o = i * .3 * 1.5;
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        if (t < 1) return -.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n;
        return u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n
    },
    easeInBack: function(e, t, n, r, i, s) {
        if (s == undefined) s = 1.70158;
        return r * (t /= i) * t * ((s + 1) * t - s) + n
    },
    easeOutBack: function(e, t, n, r, i, s) {
        if (s == undefined) s = 1.70158;
        return r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n
    },
    easeInOutBack: function(e, t, n, r, i, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= i / 2) < 1) return r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n;
        return r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
    },
    easeInBounce: function(e, t, n, r, i) {
        return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
    },
    easeOutBounce: function(e, t, n, r, i) {
        if ((t /= i) < 1 / 2.75) {
            return r * 7.5625 * t * t + n
        } else if (t < 2 / 2.75) {
            return r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n
        } else if (t < 2.5 / 2.75) {
            return r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n
        } else {
            return r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        }
    },
    easeInOutBounce: function(e, t, n, r, i) {
        if (t < i / 2) return jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n;
        return jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n
    }
});
(function(e, t, n, r) {
    var s = false;
    var o = function() {
        if (s) {
            return s
        }
        if ("ontouchstart" in t) {
            return s = true
        } else {
            return s = false
        }
    };
    var u = function() {
        if (o()) {
            return {
                start: "touchstart",
                move: "touchmove",
                end: "touchend",
                cancel: "touchcancel"
            }
        } else {
            return {
                start: "mousedown",
                move: "mousemove",
                end: "mouseup"
            }
        }
    };
    var a = {};
    var f = function(e, t) {
        this._gestures = u();
        this.el = e;
        this.options = t;
        a = this;
        return this
    };
    f.prototype = {
        defaults: {
            direction: "horizontal",
            transitionSpeed: 500,
            keyControl: false,
            arrows: false,
            pagination: false,
            paginationEl: "",
            hotClass: true,
            tapToReturn: false,
            callback: null
        },
        init: function() {
            a.opts = e.extend({}, a.defaults, a.options);
            a.state = {};
            a.$el = e(a.el);
            a.$listWrapper = a.$el.children(".rcWrapper");
            a.$list = a.$listWrapper.children("ul");
            a.$slides = a.$list.children("li");
            a.offsetUnit = a.$listWrapper.width();
            a.slidesPerPage = Math.round(a.offsetUnit / e(a.$slides[0]).width());
            a.totalPages = a.$slides.length / a.slidesPerPage;
            a.state.curPage = 1;
            a.state.$curPage = e(a.$slides[0]);
            a.state.curPageOffset = 0;
            a.$list.css("margin-left", 0);
            a.$list.on(a._gestures.start, a.gestureStart);
            if (a.opts.keyControl) {
                a.keyControl()
            }
            if (a.opts.arrows) {
                a.initArrows()
            }
            if (a.opts.pagination) {
                a.initPagination()
            }
            if (a.opts.hotClass) {
                a.initHotClass()
            }
            if (a.opts.tapToReturn) {
                a.initTapToReturn()
            }
            if (a.opts.callback && typeof a.opts.callback == "function") {
                a.initCallback()
            }
            e(t).on("resize", a.resizeListener);
            a.$el.trigger("rcPageChange");
            e(t).trigger("resize");
            return a
        },
        gestureStart: function(t) {
            a.gesture = {};
            a.gesture.startTime = new Date;
            a.gesture.xstart = t.originalEvent instanceof MouseEvent ? t.clientX : t.originalEvent.touches[0].pageX;
            a.gesture.ystart = t.originalEvent instanceof MouseEvent ? t.clientY : t.originalEvent.touches[0].pageY;
            a.originalTarget = e(t.originalEvent.target);
            a.$list.on(a._gestures.move, a.gestureMove);
            a.$list.on(a._gestures.end, a.gestureEnd);
            if (t.originalEvent instanceof MouseEvent) {
                e("body").on("mouseleave", a.gestureEnd)
            }
            return false
        },
        gestureMove: function(e) {
            var n, r;
            e.originalEvent.preventDefault();
            e.originalEvent.stopPropagation();
            e.preventDefault();
            e.stopPropagation();
            var i = function(e) {
                e.preventDefault();
                e.stopPropagation();
                t.removeEventListener("click", i, true)
            };
            t.addEventListener("click", i, true);
            a.gesture.lastX = e.originalEvent instanceof MouseEvent ? e.clientX : e.originalEvent.touches[0].pageX;
            a.gesture.lastY = e.originalEvent instanceof MouseEvent ? e.clientY : e.originalEvent.touches[0].pageY;
            a.gesture.xd = a.gesture.lastX - a.gesture.xstart;
            if (!(a.state.curPage == 1 && a.gesture.xd > 0) && !(a.state.curPage == a.totalPages && a.gesture.xd < 0)) {
                r = a.state.curPageOffset + a.gesture.xd;
                a.$list.css("margin-left", r);
                return false
            } else {
                var s = a.gesture.xd * .35;
                r = a.state.curPageOffset + s;
                a.$list.css("margin-left", r);
                return false
            }
        },
        gestureEnd: function(r) {
            a.gesture.endTime = new Date;
            a.$list.off(a._gestures.move, a.gestureMove);
            a.$list.off(a._gestures.end, a.gestureEnd);
            e("body").off("mouseleave");
            if (Math.abs(a.gesture.xd) >= 10) {
                r.originalEvent.preventDefault();
                r.preventDefault();
                if (a.gesture.lastX < a.gesture.xstart - 40) {
                    a.swipeRight()
                } else if (a.gesture.lastX > a.gesture.xstart + 40) {
                    a.swipeLeft()
                } else {
                    a.swipeReturn()
                }
                return false
            } else {
                var i = e(r.originalEvent.target).get(0);
                var s = n.createEvent("MouseEvents");
                s.initMouseEvent("click", true, true, t, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                i.dispatchEvent(s)
            }
        },
        swipeRight: function() {
            if (a.state.curPage < a.totalPages) {
                a.showNext()
            } else {
                a.$list.stop().animate({
                    "margin-left": a.state.curPageOffset + "px"
                }, 400)
            }
        },
        swipeLeft: function() {
            if (a.state.curPage > 1) {
                a.showPrev()
            } else {
                a.$list.stop().animate({
                    "margin-left": 0 + "px"
                }, 400)
            }
        },
        swipeReturn: function() {
            a.$list.stop().animate({
                "margin-left": a.state.curPageOffset + "px"
            }, 400)
        },
        ifPrev: function() {
            if (a.state.curPage > 1) {
                return a.showPrev()
            } else {}
        },
        ifNext: function() {
            if (a.state.curPage < a.totalPages) {
                return a.showNext()
            } else {}
        },
        showFirst: function() {
            a.$list.stop().animate({
                "margin-left": 0 + "px"
            }, 400);
            a.state.curPage = 1;
            a.state.$curPage = e(a.$slides[0]);
            a.state.curPageOffset = 0;
            curShowItem = a.state.curPage;
            a.$el.trigger("rcPageChange")
        },
        showLast: function() {
            a.state.curPage = parseInt(a.totalPages, 10);
            var t = (a.state.curPage - 1) * a.offsetUnit;
            a.state.$curPage = e(a.$slides[a.state.curPage - 1]);
            a.state.curPageOffset = -t;
            a.$list.stop().animate({
                "margin-left": "-" + t + "px"
            }, 400, function() {
                if (a.state.curPage == parseInt(a.totalPages, 10)) {
                    _gaq.push(["_trackEvent", "Links", "click", "contact"])
                }
            });
            curShowItem = a.state.curPage;
            a.$el.trigger("rcPageChange")
        },
        showNext: function() {
            var t = a.state.curPage * a.offsetUnit;
            a.$list.stop().animate({
                "margin-left": "-" + t + "px"
            }, 400);
            a.state.curPage++;
            a.state.$curPage = e(a.$slides[a.state.curPage - 1]);
            a.state.curPageOffset = -t;
            curShowItem = a.state.curPage;
            console.log(curShowItem);
            a.$el.trigger("rcPageChange");
            if (a.state.curPage == parseInt(a.totalPages, 10)) {
                _gaq.push(["_trackEvent", "Links", "click", "contact"])
            }
        },
        showPrev: function() {
            var t = (a.state.curPage - 2) * a.offsetUnit;
            a.$list.stop().animate({
                "margin-left": "-" + t + "px"
            }, 400);
            a.state.curPage--;
            a.state.$curPage = e(a.$slides[a.state.curPage - 1]);
            a.state.curPageOffset = -t;
            curShowItem = a.state.curPage;
            a.$el.trigger("rcPageChange");
            if (a.state.curPage == parseInt(a.totalPages, 10)) {
                _gaq.push(["_trackEvent", "Links", "click", "contact"])
            }
        },
        showPage: function(t) {
            a.state.curPage = parseInt(t, 10);
            var n = (a.state.curPage - 1) * a.offsetUnit;
            a.state.$curPage = e(a.$slides[a.state.curPage - 1]);
            a.state.curPageOffset = -n;
            curShowItem = a.state.curPage;
            a.$list.css("margin-left", "-" + n + "px");
            a.$el.trigger("rcPageChange")
        },
        gotoPage: function(t) {
            a.state.curPage = parseInt(t, 10);
            var n = (a.state.curPage - 1) * a.offsetUnit;
            a.state.$curPage = e(a.$slides[a.state.curPage - 1]);
            a.state.curPageOffset = -n;
            curShowItem = a.state.curPage;
            a.$list.stop().animate({
                "margin-left": "-" + n + "px"
            }, 400);
            a.$el.trigger("rcPageChange");
            if (a.state.curPage == parseInt(a.totalPages, 10)) {
                _gaq.push(["_trackEvent", "Links", "click", "contact"])
            }
        },
        keyControl: function() {
            e(n).keydown(function(e) {
                var t = e.keyCode || e.which,
                    n = {
                        left: 37,
                        up: 38,
                        right: 39,
                        down: 40
                    };
                switch (t) {
                    case n.left:
                        a.ifPrev();
                        break;
                    case n.up:
                        break;
                    case n.right:
                        a.ifNext();
                        break;
                    case n.down:
                        break
                }
            })
        },
        reload: function() {
            a.offsetUnit = a.$listWrapper.width();
            a.slidesPerPage = Math.round(a.offsetUnit / a.$list.children(":first").width());
            a.totalPages = a.$slides.length / a.slidesPerPage;
            var e = (a.state.curPage - 1) * a.offsetUnit;
            a.$list.css("margin-left", "-" + e + "px")
        },
        resizeListener: function() {
            if (a.resizeTimer) {
                clearTimeout(a.resizeTimer)
            }
            a.resizeTimer = setTimeout(function() {
                a.reload()
            }, 100)
        },
        initArrows: function() {
            a.$leftArrow = e(".rcL").addClass("rcHide");
            a.$rightArrow = e(".rcR").addClass("rcHide");
            a.$leftArrow.on("click", a.ifPrev);
            a.$rightArrow.on("click", a.ifNext);
            a.$el.on("rcPageChange", function() {
                a.toggleArrows(a)
            })
        },
        toggleArrows: function(e) {
            e.$leftArrow.removeClass("rcHide");
            e.$rightArrow.removeClass("rcHide");
            if (e.state.curPage == 1) {
                e.$leftArrow.addClass("rcHide")
            } else if (e.state.curPage == e.totalPages) {
                e.$rightArrow.addClass("rcHide")
            }
        },
        initPagination: function() {
            var t;
            var n;
            a.$paginationEl = e("." + a.opts.paginationEl);
            t = "";
            n = 1;
            for (i = 0; i < a.totalPages; i++) {
                t += "<li>" + n + "</li>";
                n++
            }
            a.$paginationEl.html(t);
            a.$paginationEl.find("li").click(function() {
                var t = e(this);
                var n = a.$paginationEl.find("li").index(t);
                a.gotoPage(n + 1)
            });
            a.$paginationEl.find("li").css("width", 85 / (a.totalPages - 3) + "%");
            a.$el.on("rcPageChange", function() {
                a.$paginationEl.children("li").removeClass("rcPaginationHot");
                a.$paginationEl.children("li:nth-child(" + a.state.curPage + ")").addClass("rcPaginationHot")
            })
        },
        initHotClass: function() {
            a.$el.on("rcPageChange", function() {
                a.$slides.removeClass("rcPageHot");
                a.state.$curPage.addClass("rcPageHot")
            })
        },
        initTapToReturn: function() {
            a.$el.on("click", ".rcReturn", function() {
                a.showFirst()
            })
        },
        initCallback: function() {
            a.$el.on("rcPageChange", function() {
                a.opts.callback.call(a)
            })
        }
    };
    f.defaults = f.prototype.defaults;
    e.fn.responsiveCarousel = function(e, t) {
        t = t ? t : null;
        return (new f(this, e, t)).init()
    };
    t.ResponsiveCarousel = f
})(jQuery, window, document)