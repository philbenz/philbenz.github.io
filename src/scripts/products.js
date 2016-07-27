$(function () {
  console.log('hello!');
  var promise = Promise.resolve($.ajax({
    url:'http://galvanize-student-apis.herokuapp.com/gcommerce/products/',
    method: 'GET'
  }))
  .then(function(data){
    var products = []
    var myData = data
    console.log(myData);
    for(var i = 0; i < data.length; i++){
      products.push('<div class="productDiv" id="product' + i + '"><img/> <p>' + data[i].description + '</p><br><p class="valueOf">' + data[i].price + '</p>')
      $('.productHolder').append(products[i])
      loadLow()
    }
    console.log(parseFloat($('#product4 > .valueOf').text().substr(1)));

    function loadLow(){
      //if radio button selected and other options are selected
      var arrLowHigh = []
      var objLowHigh = {}
      console.log($('productHolder').children());
      data.forEach(function(obj){
        arrLowHigh.push(obj.price.substr(1))
      })
      $('.productHolder').empty()
      for(var i = 0; i < arrLowHigh.length; i++){
        objLowHigh[arrLowHigh[i]] = i+1
      }
      arrLowHigh.sort()
      arrLowHigh.forEach(function(price){
        $('.productHolder').append(products[objLowHigh[price]-1])
      })
    }

    $('#lowHigh, #highLow').click(function(){
      var arrhigLow = $('.productDiv')
      $('.productHolder').empty()
      for(var i = 0; i < arrhigLow.length; i++){
        $('.productHolder').prepend(arrhigLow[i])

      }
    })


    $('#filtereds').change(function(){
      var firstNum = parseFloat($('input[name=filtered]:radio:checked').val().split('-')[0])
      var secNum = parseFloat($('input[name=filtered]:radio:checked').val().split('-')[1])
      var products = []
      var highOrlow = {}
      $('.productHolder').empty()
      var firstFilter = data.filter(function(obj){
        if(firstNum < parseFloat(obj.price.substr(1)) && parseFloat(obj.price.substr(1)) <= secNum){
          highOrlow[obj.price.substr(1)] = obj
          return obj
        }
      })
      console.log(highOrlow);
      var myarr = Object.keys(highOrlow)
      if($('#lowHigh').is(':checked')){
      myarr.sort()

      for(var i = 0; i < myarr.length; i++){
        products.push('<div class="productDiv" id="product' + i + '"><img/> <p>' + highOrlow[myarr[i]].description + '</p><br><p class="valueOf">' + highOrlow[myarr[i]].price + '</p>')
        $('.productHolder').append(products[i])
      }

      }else if($('#highLow').is(':checked')){
      myarr.sort().reverse()


      for(var i = 0; i < myarr.length; i++){
        products.push('<div class="productDiv" id="product' + i + '"><img/> <p>' + highOrlow[myarr[i]].description + '</p><br><p class="valueOf">' + highOrlow[myarr[i]].price + '</p>')
        $('.productHolder').append(products[i])
        }
      }
    })
  })
})
