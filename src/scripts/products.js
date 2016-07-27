$(function () {
  console.log('hello!');
  var promise = Promise.resolve($.ajax({
    url:'http://galvanize-student-apis.herokuapp.com/gcommerce/products/',
    method: 'GET'
  }))
  .then(function(data){
    var imgs = ['https://s-media-cache-ak0.pinimg.com/236x/f7/de/ed/f7deedb246866ed4b0b2aab9bd3b7676.jpg','http://2.bp.blogspot.com/-u66toyzKzUo/VCStwUNksjI/AAAAAAAABH0/h2WAJYGiasY/s1600/Rainbow%2Blighted%2Bping%2Bpong%2Btable.jpg','http://assets.nydailynews.com/polopoly_fs/1.2155594.1426789136!/img/httpImage/image.jpg_gen/derivatives/landscape_1200/glass-ping-pong-table.jpg','http://slippedydodah.com/images/table/Poly%20Pong%204way-ping%20pong.jpg','https://www.iwantmoretoys.com/images/products/floating-pool-ping-pong-table.jpg','http://www.toxel.com/wp-content/uploads/2009/08/pingpong02.jpg','https://playenthusiast.files.wordpress.com/2011/06/table-tennis-003.jpg','http://odditymall.com/includes/content/table-tennis-door-thumb.jpg','http://www.earthlymission.com/wp-content/uploads/2015/03/circular-ping-pong-table-1.jpg','https://metrouk2.files.wordpress.com/2016/07/ad213894936pic_shows_ping_.jpg','http://static4.businessinsider.com/image/4fb129d3eab8ea9c09000002-900/were-not-sure-if-this-is-just-a-regular-table-or-if-its-a-six-person-ping-pong-table.jpg','http://67.media.tumblr.com/50df10f236e47183738231880d5f4c12/tumblr_mx65t2QSjW1rouua1o6_1280.jpg', 'http://tabletennisnation.com/wp-content/uploads/2013/09/Full-table+Medium.jpg']
    console.log(imgs.length);
    var products = []
    var myData = data
    console.log(myData);
    for(var i = 0; i < data.length; i++){
      products.push('<div class="productDiv" id="product' + i + '"><img src="' + imgs[i] +'"/> <p>' + data[i].description + '</p><br><p class="valueOf">' + data[i].price + '</p>')
      $('.productHolder').append(products[i])
      loadLow()
    }
    var allProducts = $('.productDiv')
    console.log(allProducts);

    function loadLow(){
      var arrLowHigh = []
      var objLowHigh = {}
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

    $('#highorlow').change(function(){
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
      for(var i = 0; i < allProducts.length; i++){
        if(firstNum < parseFloat(allProducts[i].lastChild.textContent.substr(1)) && parseFloat(allProducts[i].lastChild.textContent.substr(1)) < secNum ){
          console.log(parseFloat(allProducts[i].lastChild.textContent.substr(1)));
          products.push(allProducts[i])
        }
      }
      console.log(products);
      $('.productHolder').empty()
      products.forEach(function(divsWPic){
        $('.productHolder').append(divsWPic)
      })

    })
  })
})
