// start with spanish
$(document).ready(function() {
  $("#toggleAllEs").show();
  $("#contact").show();
  $("#contactEn").hide();
});

// main english and spanish buttons
$(document).ready(function() {
  $("#toggleClickSpanish").click(function() {
    $("#toggleAllEs").show();
    $("#contact").show();
    $("#toggleAllEn").hide();
    $("#contactEn").hide();
  });
});

// $(document).ready(function() {
//   $("#toggleClickEnglish").click(function() {
//     $("#contactEn").show();
//     $("#toggleAllEn").show();
//     $("#toggleAllEs").hide();
//     $("#contact").hide();
//   });
// });

// show services
$(document).ready(function() {
  $("#clickShowServicesEn").click(function() {
    $("#toggleAllEn").show();
    $("#contactEn").show();
    $("#toggleAllEs").hide();
    $("#contact").hide();
  });
});

$(document).ready(function() {
  $("#clickShowServicesEs").click(function() {
    $("#toggleAllEs").show();
    $("#contact").show();
    $("#toggleAllEn").hide();
    $("#contactEn").hide();
  });
});

// show about
$(document).ready(function() {
  $("#clickShowAboutEn").click(function() {
    $("#contactEn").show();
    $("#toggleAllEn").show();
    $("#toggleAllEs").hide();
    $("#contact").hide();
  });
});

$(document).ready(function() {
  $("#clickShowAboutEs").click(function() {
    $("#toggleAllEs").show();
    $("#contact").show();
    $("#toggleAllEn").hide();
    $("#contactEn").hide();
  });
});

// contact shows
$(document).ready(function() {
  $("#clickShowContactEn").click(function() {
    $("#toggleAllEn").show();
    $("#contactEn").show();
    $("#toggleAllEs").hide();
    $("#contact").hide();
  });
});

$(document).ready(function() {
  $("#clickShowContactEs").click(function() {
    $("#contact").show();
    $("#toggleAllEs").show();
    $("#toggleAllEn").hide();
    $("#contactEn").hide();
  });
});
