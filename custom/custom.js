// main english and spanish buttons
$(document).ready(function() {
  $("#mainNav").addClass("navbar-shrink");
});

$(document).on("click", 'a[href^="#"]', function(e) {
  e.preventDefault();
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $($(this).attr("href")).offset().top
      },
      1000
    );
});
