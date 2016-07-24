//dom manipulation - needs to be done in the IFFE
$(document).ready(function() {
  //sanity check
  console.log('sanity check: galvanize personnel');
  //this prevents the default post request to the server.  Instead - this hijacks that effort in order for form validation.
  $('#save').on('click', function(event) {
      event.preventDefault();

      if (validateSubmit()) {

        var payloadObj = postString();

        $.ajax({
          type: 'POST',
          url:'https://galvanize-student-apis.herokuapp.com/gpersonnel/users',
          data:  payloadObj
        }).done(function(results) {
            console.log(results);
            returnMessage('Success!', 1);
          }).fail(function(error) {
          console.log(error);
          returnMessage('Not quite.', 0);
        });
      } //end validateSubmit
    });

  //postString is used to create the object for the POST request
  function postString() {
    var obj = {};

    obj.firstName = $('#firstName').val();
    obj.lastName = $('#lastName').val();
    obj.role = $('.target option:selected').text();

    return obj;
  }

  //validate that the names are filled in and that the roles are valid.
  function validateSubmit() {

    var log_message = '';

    if (($('#lastName').val()) === '') {
      log_message = 'Please provide a last name';
      $('#lastName').focus();
    }
    if (($('#firstName').val()) === '') {
      log_message = 'Please provide a first name';
      $('#firstName').focus();
    }

    if ($('.target option:selected').text() === 'Select an option here') {
      log_message = 'Please select a valid role';
    }

    //make sure that the selected role is correct
    if (log_message > '') {
      returnMessage(log_message, 0);
      return 0;
    }

    return 1;
  }

  //returnMessage is used to both color and narrate any errors or successes to the user.
  function returnMessage(message, code) {
    if (code === 0) {
      $('#valid-callout').css('background-color', 'red');
    } else {
      //1 is passed
      $('#valid-callout').css('background-color', 'green');
    }

    $('#valid-callout').text(message);
    $('#valid-callout').css('visibility', 'visible');
    $('#valid-callout').fadeIn(500);
    $('#valid-callout').fadeOut(2500,  function() {
        $('#valid-callout').css('visibility', 'hidden');
      });

    return;

  }

  //function to pull image file from path
  function setPicture(path) {
    //set the photo the path
    $('img').attr('src', path);
  }

  //immediately after page is loaded, call service to retrieve the ROLE and PATH.
  function getRoles() {

    $.ajax({
      method: 'GET',
      url: 'https://galvanize-student-apis.herokuapp.com/gpersonnel/roles'
    }).done(function(results) {

      //populate options in the select from the api call
      for (var i = 0; i < results.length; i++) {
        $('.target').append('<option>' + results[i].title + '</option>');
      }

      //have event handler for change in select
      $('.target').change(function(event) {

        //when changed - adjust the picture by changing the path

        var imagePath = '';
        for (var i = 0; i < results.length; i++) {
          if (results[i].title === $('.target option:selected').text()) {
            imagePath = './src/' + results[i].img;
          }
        }

        setPicture(imagePath);
      });

      //have event handler for clicking 'save'
      $('#save').change(function(event) {
          validateSubmit();
        });

    });
  }

  var rolesObject = getRoles();

});
