$(document).on('ready', function() {
    //prevent the event default
    //event.preventDefault();

    //sanity check
    console.log('sanity check with billing js');
    //[[cost, quantity, ]]
    // var shoppingItems = [[]]

    //Stripe Public Keys
    //  test publishable: pk_test_hs0sBTr45jm1KOmFEE4bDAOU
    //  test secret: sk_test_C6yqB06zrJzrwQRDNDFVtl8T

    buildStatesSelector();

    checkShoppingCart();


    $('#purchaseButton').click('submit', function( event ) {
      //ensure that the submit doesn't go to a server
      event.preventDefault();

      var error = false;

      // Get the values:
      var ccNum = $('.creditCardNumber').val(),
          cvcNum = $('.cvc').val(),
          expMonth = $('.expMonth').val(),
          expYear = $('.expYear').val();

      // Validate the number:
      if (!Stripe.card.validateCardNumber(ccNum)) {
          error = true;
          //reportError('The credit card number appears to be invalid.');
          console.log('credit card number is invalid');
      }

      // Validate the CVC:
      if (!Stripe.card.validateCVC(cvcNum)) {
          error = true;
          //reportError('The CVC number appears to be invalid.');
          console.log('The CVC number appears to be invalid.');
      }

      // Validate the expiration:
      if (!Stripe.card.validateExpiry(expMonth, expYear)) {
          console.log('expiration date' + expMonth +'/' + expYear);
          error = true;
          console.log('The expiration date appears to be invalid.');

          //reportError('The expiration date appears to be invalid.');
      }

          if (!error) {
        // Get the Stripe token:
        Stripe.card.createToken({
            number: ccNum,
            cvc: cvcNum,
            exp_month: expMonth,
            exp_year: expYear
        }, stripeResponseHandler);
     }

     function stripeResponseHandler(status, response) {
       console.log('in stripe response handler');
          if (response.error) {
              console.log('in the response.error handler');
              reportError(response.error.message);
            } else { // No errors, submit the form.
              console.log('no errors submit the form.');
          }
      }


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

  function checkShoppingCart() {
    $('#shoppingCartTable').append('<thead>');
    $('#shoppingCartTable').append('<th id="item">Items</th>');
    $('#shoppingCartTable').append('<th id="item">Quantity</th>');
    $('#shoppingCartTable').append('<th></th>');
    $('#shoppingCartTable').append('<th id="cost">Cost</th>');
    $('#shoppingCartTable').append('<th></th>');
    $('#shoppingCartTable').append('</thead>');

    $('#shoppingCartTable').append('<tbody>');
    $('#shoppingCartTable').append('</tbody>');


  }

  // <tbody>
  //   <tr>
  //     <td>Ping Pong Paddles</td>
  //     <td>3</td>
  //     <td></td>
  //     <td>150</td>
  //     <td></td>
  //   </tr>
  //   <tr>
  //     <td>Super Coated Teflon Ninja Net</td>
  //     <td>2</td>
  //     <td></td>
  //     <td>30</td>
  //     <td></td>
  //   </tr>
  //   <tf>
  //     <td></td>
  //     <td></td>
  //     <td></td>
  //     <td></td>
  //     <td></td>
  //   </tr>
  //   <tfoot>
  //     <tr>
  //       <td></td>
  //       <td></td>
  //       <td id="sub">Total</td>
  //       <td id="total">$180</td>
  //       <td></td>
  //     </tr>
  //   </tfoot>
  function conformExpirationDate(date) {

  }

  function validateExpirationDate(conformed_date) {

  }
