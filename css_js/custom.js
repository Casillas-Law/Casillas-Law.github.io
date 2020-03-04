!(function(n) {
  "use strict";
  function o() {
    n("#mainNav").addClass("navbar-shrink");
  }
  $(".dropdown-toggle").on("click", function() {
    $(".dropdown-menu").toggle();
  }),
    $(".dropdown-item").on("click", function() {
      $(".dropdown-menu").hide();
    }),
    n('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var o = n(this.hash);
        if ((o = o.length ? o : n("[name=" + this.hash.slice(1) + "]")).length)
          return (
            n("html, body").animate(
              { scrollTop: o.offset().top - 54 },
              1e3,
              "easeInOutExpo"
            ),
            !1
          );
      }
    }),
    n(".js-scroll-trigger").click(function() {
      n(".navbar-collapse").collapse("hide");
    }),
    n("body").scrollspy({ target: "#home", offset: 56 }),
    o(),
    n(window).scroll(o);
})(jQuery);
