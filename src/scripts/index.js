$(function () {
  fadeInAll()
  changeImg()
})

var i = 0
var imgArr = ['./images/valley.jpg', './images/el-capitan-mountain.jpg', './images/Mountain-wallpaper-HD.jpeg']
var imgs = ['https://s-media-cache-ak0.pinimg.com/236x/f7/de/ed/f7deedb246866ed4b0b2aab9bd3b7676.jpg', 'http://2.bp.blogspot.com/-u66toyzKzUo/VCStwUNksjI/AAAAAAAABH0/h2WAJYGiasY/s1600/Rainbow%2Blighted%2Bping%2Bpong%2Btable.jpg', 'http://assets.nydailynews.com/polopoly_fs/1.2155594.1426789136!/img/httpImage/image.jpg_gen/derivatives/landscape_1200/glass-ping-pong-table.jpg', 'http://slippedydodah.com/images/table/Poly%20Pong%204way-ping%20pong.jpg', 'https://www.iwantmoretoys.com/images/products/floating-pool-ping-pong-table.jpg', 'http://www.toxel.com/wp-content/uploads/2009/08/pingpong02.jpg', 'https://playenthusiast.files.wordpress.com/2011/06/table-tennis-003.jpg', 'http://odditymall.com/includes/content/table-tennis-door-thumb.jpg', 'http://www.earthlymission.com/wp-content/uploads/2015/03/circular-ping-pong-table-1.jpg', 'https://metrouk2.files.wordpress.com/2016/07/ad213894936pic_shows_ping_.jpg', 'http://static4.businessinsider.com/image/4fb129d3eab8ea9c09000002-900/were-not-sure-if-this-is-just-a-regular-table-or-if-its-a-six-person-ping-pong-table.jpg', 'http://67.media.tumblr.com/50df10f236e47183738231880d5f4c12/tumblr_mx65t2QSjW1rouua1o6_1280.jpg', 'http://tabletennisnation.com/wp-content/uploads/2013/09/Full-table+Medium.jpg']

for(var j = 0; j <= 2; j++) {
  $('.prod' + j).attr('src', imgs[Math.floor(Math.random() * 12)])
}

$('#imgLeft').on('click', function () {
  $('.carouselPic').attr('src', imgArr[i]).fadeOut(1)
  i--
  if (i < 0) {
    i = imgArr.length - 1
  }
  $('.carouselPic').attr('src', imgArr[i]).fadeIn(500)
})

$('#imgRight').on('click', function () {
  $('.carouselPic').attr('src', imgArr[i]).fadeOut(1)
  i++
  if (i > imgArr.length - 1) {
    i = 0
  }
  $('.carouselPic').attr('src', imgArr[i]).fadeIn(500)
})

$('#input').on('input', function (event) {
  event.preventDefault()
    var input = $('#input').val()
    if(input.indexOf('@') >= 1 && input.indexOf('.com') > input.indexOf('@') + 1) {
      $('#input').css({ 'border': 'none', 'outline': 'none'
      })
      $('#input').css({ 'border': '1px solid blue', 'box-shadow': '0 0 5px blue' })
    } else {
      $('#input').css('outline', 'none')
      $('#input').css({ 'border': '1px solid red', 'box-shadow': '0 0 5px red' })
    }
  })
  $('#button').click(function () {
    var input = $('#input').val()
    if(input.indexOf('@') >= 1 && input.indexOf('.com') > input.indexOf('@') + 1) {
      $('form')[0].reset()
      $('#input').css({ 'outline': 'none', 'box-shadow': 'none', 'border': '1px solid lightgrey' })
    } else {
      $('form').animate({ 'marginLeft': '+=10px' }, 100).animate({ 'marginLeft': '-=10px' }, 100)
      $('#input').css({'border': '1px solid red', 'box-shadow': '0 0 5px red'})
    }
  })
function changeImg () {
  $('.carouselPic').attr('src', imgArr[i])
  setTimeout(function () {
    if ((i < imgArr.length - 1) && (i >= 0)) {
        $('.carouselPic').attr('src', imgArr[i]).fadeOut(1)
        i++
        $('.carouselPic').attr('src', imgArr[i]).fadeIn(700)
    } else {
        $('.carouselPic').attr('src', imgArr[i]).fadeOut(1)
        i = 0
        $('.carouselPic').attr('src', imgArr[0]).fadeIn(700)
    }
      changeImg()
  }, 5000)
}
function fadeInAll () {
  $('#fade').fadeIn(700)
  $('#header').fadeIn(400)
  $('#main').fadeIn(500)

}
