$(function () {
  changeImg()
})

var i = 0
var imgArr = ['./images/valley.jpg', './images/el-capitan-mountain.jpg', './images/Mountain-wallpaper-HD.jpeg']
var imgs = ['https://s-media-cache-ak0.pinimg.com/236x/f7/de/ed/f7deedb246866ed4b0b2aab9bd3b7676.jpg','http://2.bp.blogspot.com/-u66toyzKzUo/VCStwUNksjI/AAAAAAAABH0/h2WAJYGiasY/s1600/Rainbow%2Blighted%2Bping%2Bpong%2Btable.jpg','http://assets.nydailynews.com/polopoly_fs/1.2155594.1426789136!/img/httpImage/image.jpg_gen/derivatives/landscape_1200/glass-ping-pong-table.jpg','http://slippedydodah.com/images/table/Poly%20Pong%204way-ping%20pong.jpg','https://www.iwantmoretoys.com/images/products/floating-pool-ping-pong-table.jpg','http://www.toxel.com/wp-content/uploads/2009/08/pingpong02.jpg','https://playenthusiast.files.wordpress.com/2011/06/table-tennis-003.jpg','http://odditymall.com/includes/content/table-tennis-door-thumb.jpg','http://www.earthlymission.com/wp-content/uploads/2015/03/circular-ping-pong-table-1.jpg','https://metrouk2.files.wordpress.com/2016/07/ad213894936pic_shows_ping_.jpg','http://static4.businessinsider.com/image/4fb129d3eab8ea9c09000002-900/were-not-sure-if-this-is-just-a-regular-table-or-if-its-a-six-person-ping-pong-table.jpg','http://67.media.tumblr.com/50df10f236e47183738231880d5f4c12/tumblr_mx65t2QSjW1rouua1o6_1280.jpg', 'http://tabletennisnation.com/wp-content/uploads/2013/09/Full-table+Medium.jpg']



$('#imgLeft').on('click', function () {
  i--
  if (i < 0) {
    i = imgArr.length - 1
  }
  $('.carouselPic').attr('src', imgArr[i])
})

$('#imgRight').on('click', function () {
  i++
  if (i > imgArr.length - 1) {
    i = 0
  }
  $('.carouselPic').attr('src', imgArr[i])
})

for(var j = 0; j <= 2; j++){
  $('.prod' + j).attr('src', imgs[Math.floor(Math.random() * 12)])
}


function changeImg () {
  $('.carouselPic').attr('src', imgArr[i])
  setTimeout(function () {
    if ((i < imgArr.length) && (i >= 0)) {
        i++
    } else {
      i = 0
    }
    $('.carouselPic').attr('src', imgArr[i])
      changeImg()
  }, 5000)
}
