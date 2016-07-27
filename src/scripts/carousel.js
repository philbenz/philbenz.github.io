$(function () {
  changeImg()
})
var i = 0
var imgArr = ['./images/valley.jpg', './images/el-capitan-mountain.jpg', './images/Mountain-wallpaper-HD.jpeg']
$('.carouselPic').attr('src', imgArr[0])

$('#imgLeft').on('click', function () {
  i--
  if ( i < 0) {
    i = 2
  }
  $('.carouselPic').attr('src', imgArr[i])
})
$('#imgRight').on('click', function () {
  i++
  if (i > 2) {
    i = 0
  }
  $('.carouselPic').attr('src', imgArr[i])
})
function changeImg () {
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
