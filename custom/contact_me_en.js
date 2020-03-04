$(function () {

    $("#contactFormEn input,#contactFormEn textarea").jqBootstrapValidation({
      preventSubmit: true,
      submitError: function ($form, event, errors) {
        // additional error messages or events
      },
      submitSuccess: function ($form, event) {
        event.preventDefault(); // prevent default submit behaviour
        // get values from FORM
        var name = $("input#nameEn").val();
        var email = $("input#emailEn").val();
        var phone = $("input#phoneEn").val();
        var message = $("textarea#messageEn").val();
        var firstName = name; // For Success/Failure Message
        // Check for white space in name for Success/Fail message
        if (firstName.indexOf(' ') >= 0) {
          firstName = name.split(' ').slice(0, -1).join(' ');
        }
        $this = $("#sendMessageButtonEn");
        $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
        $.ajax({
          headers: {
            "Content-Type": 'application/x-www-form-urlencoded'
          },
          url: "https://script.google.com/macros/s/AKfycbwlvoFcIKlwKaDllprrFm1hmJdxy6Wz_joDzlh2Lw_q_ai4Dms/exec",
          type: "POST",
          data: {
            name: name,
            phone: phone,
            email: email,
            message: message
          },
          cache: false,
          success: function () {
            // Success message
            $('#successEn').html("<div class='alert alert-success'>");
            $('#successEn > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
              .append("</button>");
            $('#successEn > .alert-success')
              .append("<strong>Your message has been sent. </strong>");
            $('#successEn > .alert-success')
              .append('</div>');
            //clear all fields
            $('#contactFormEn').trigger("reset");
          },
          error: function () {
            // Fail message
            $('#successEn').html("<div class='alert alert-danger'>");
            $('#successEn > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
              .append("</button>");
            $('#successEn > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
            $('#successEn > .alert-danger').append('</div>');
            //clear all fields
            $('#contactFormEn').trigger("reset");
          },
          complete: function () {
            setTimeout(function () {
              $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
            }, 1000);
          }
        });
      },
      filter: function () {
        return $(this).is(":visible");
      },
    });
  
    $("a[data-toggle=\"tab\"]").click(function (e) {
      e.preventDefault();
      $(this).tab("show");
    });
  });
  
  /*When clicking on Full hide fail/success boxes */
  $('#nameEn').focus(function () {
    $('#successEn').html('');
  });
  