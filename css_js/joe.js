// start with spanish
$(document).ready(function () {
    $('#toggleAllEs').show();
});

// main english and spanish buttons
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

// show services
$(document).ready(function () {
    $('#clickShowServicesEn').click(function () {
        $('#toggleAllEs').hide();
        $('#toggleAllEn').show();
    });
});

$(document).ready(function () {
    $('#clickShowServicesEs').click(function () {
        $('#toggleAllEn').hide();
        $('#toggleAllEs').show();
    });
});

// show about
$(document).ready(function () {
    $('#clickShowAboutEn').click(function () {
        $('#toggleAllEs').hide();
        $('#toggleAllEn').show();
    });
});

$(document).ready(function () {
    $('#clickShowAboutEs').click(function () {
        $('#toggleAllEn').hide();
        $('#toggleAllEs').show();
    });
});