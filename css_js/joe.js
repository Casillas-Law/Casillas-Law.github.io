// start with spanish

$(document).ready(function () {
    $('#contactEn').hide();
    $('#toggleAllEs').show();
    $('#contct').show();
});

// main english and spanish buttons
$(document).ready(function () {
    $('#toggleClickSpanish').click(function () {
        $('#toggleAllEn').hide();
        $('#toggleAllEs').show();
        $('#contactEn').hide();
        $('#contct').show();
    });
});

$(document).ready(function () {
    $('#toggleClickEnglish').click(function () {
        $('#toggleAllEs').hide();
        $('#toggleAllEn').show();
        $('#contact').hide();
        $('#contctEn').show();
    });
});

// show services
$(document).ready(function () {
    $('#clickShowServicesEn').click(function () {
        $('#toggleAllEs').hide();
        $('#toggleAllEn').show();
        $('#contact').hide();
        $('#contctEn').show();
    });
});

$(document).ready(function () {
    $('#clickShowServicesEs').click(function () {
        $('#toggleAllEn').hide();
        $('#toggleAllEs').show();
        $('#contactEn').hide();
        $('#contct').show();
    });
});

// show about
$(document).ready(function () {
    $('#clickShowAboutEn').click(function () {
        $('#toggleAllEs').hide();
        $('#toggleAllEn').show();
        $('#contact').hide();
        $('#contctEn').show();
    });
});

$(document).ready(function () {
    $('#clickShowAboutEs').click(function () {
        $('#toggleAllEn').hide();
        $('#toggleAllEs').show();
        $('#contactEn').hide();
        $('#contct').show();
    });
});