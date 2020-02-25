
$(document).ready(function () {
    $('#toggleAllEs').show();
});

$(document).ready(function () {
    $('#toggleClickSpanish').click(function () {
        $('#toggleAllEn').hide();
        $('#toggleAllEs').show();
    });
});

$(document).ready(function () {
    $('#toggleClickEnglish').click(function () {
        $('#toggleAllEs').hide();
        $('#toggleAllEn').show();
    });
});

///////////////Navbar Selects////////////////////

$(document).ready(function () {
    $('#showHideEn').click(function () {
        $('#toggleAllEs').hide();
        $('#toggleAllEn').show();
    });
});

$(document).ready(function () {
    $('#showHideEs').click(function () {
        $('#toggleAllEn').hide();
        $('#toggleAllEs').show();

    });
});

// $(document).ready(function () {
//     $('#toggleClickSpanish').click(function () {
//         $('#toggleAllEn').hide();
//         $('#aboutEn').hide();
//         $('#servicesEn').hide();
//         $('#servicesEs').show();
//         $('#toggleAllEs').show();
//         $('#aboutEs').show();
//     });
// });

// $(document).ready(function () {
//     $('#showHideEn').click(function () {
//         $('#servicesEs').hide();
//         $('#toggleAllEs').hide();
//         $('#aboutEs').hide();
//         $('#toggleAllEn').show();
//         $('#aboutEn').show();
//         $('#servicesEn').show();
//     });
// });


