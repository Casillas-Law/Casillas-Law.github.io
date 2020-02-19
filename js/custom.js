!function (e) {
    "use strict";

    // show/hide the menu when examples is clicked
    $(".dropdown-toggle").on("click", function () {
        $(".dropdown-menu").toggle();
    });

    // hide the menu when an exmple is clicked
    $(".dropdown-item").on("click", function () {
        $(".dropdown-menu").hide();
    });

    e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var a = e(this.hash);
            if ((a = a.length ? a : e("[name=" + this.hash.slice(1) + "]")).length)
                return e("html, body").animate({
                    scrollTop: a.offset().top - 54
                }, 1e3, "easeInOutExpo"),
                    !1
        }
    }),
        e(".js-scroll-trigger").click(function () {
            e(".navbar-collapse").collapse("hide")
        }),
        e("body").scrollspy({
            target: "#mainNav",
            offset: 56
        });
    function a() {
        100 < e("#mainNav").offset().top ? e("#mainNav").addClass("navbar-shrink") : e("#mainNav").removeClass("navbar-shrink")
    }
    a(),
        e(window).scroll(a)
}(jQuery);
//// End of use strict