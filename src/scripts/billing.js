$(document).on('ready', function() {
    //prevent the event default
    // event.preventDefault();

    //sanity check
    console.log('sanity check with billing js');

    buildStatesSelector();

    //jQuery for the movie title
    $('button').click('submit', function( event ) {
      //ensure that the submit doesn't go to a server
      event.preventDefault();


    });

    //ensure that shipping copies to billing
    //ensure that when uncheck billing is left blank
    $("#isSameAsShipping").click(function(){
      if(this.checked) {
        //populate billing info fields
        $('.billingFirstName').val($('.shippingFirstName').val());
        $('.billingLastName').val($('.shippingLastName').val());
        $('.billingCompany').val($('.shippingCompany').val());
        $('.billingAddressLine1').val($('.shippingAddressLine1').val());
        $('.billingAddressLine2').val($('.shippingAddressLine2').val());
        $('.billingCity').val($('.shippingCity').val());
        $('.billingState').val($('.shippingState').val());
        $('.billingZip').val($('.shippingZip').val());
      } else {
        //clear all billing info fields
        $('.billingFirstName').val('');
        $('.billingLastName').val('');
        $('.billingCompany').val('');
        $('.billingAddressLine1').val('');
        $('.billingAddressLine2').val('');
        $('.billingCity').val('');
        $('.billingState').val('');
        $('.billingZip').val('');
      }
    });

    //Validate Expiration Date
    // - make sure that expiration date fits the convention of "MM/YYYY" - for reasons of convenience - years will be four digits and not two.
    // - make sure that that the expiration date is equal or greater than today's date

  });

  function buildStatesSelector() {
    usStates.forEach(function(s){
      //limit the window of the state list
      $('.shippingState').attr('size', '1');
      $('.billingState').attr('size', '1');

      $('.shippingState').append('<option>' + s.abbreviation + '</option>');
      $('.billingState').append('<option>' + s.abbreviation + '</option>');
    });

    return;
  }

  function conformExpirationDate(date) {

  }

  function validateExpirationDate(conformed_date) {

  }
