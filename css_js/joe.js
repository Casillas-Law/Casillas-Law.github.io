debugger;

$(function () {
    $('#showEnglish').click(function() {
      $('#showHideEn').show();
      $('#showHideEs').hide();
    });
    $('.showSingle').click(function() {
      $('.targetDiv').hide();
      $('#div' + $(this).attr('target')).show();
    });
  });