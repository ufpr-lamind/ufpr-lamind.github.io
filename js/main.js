var showChar = 560;
var ellipsesText = "...";
var moreText = "Ler mais >";

$('.more').each(function() {
  // $(this).find('p').hide();
  $(this).find('h1').hide();
  $(this).find('h2').hide();
  $(this).find('ul').hide();

  var content = $(this).html();
  if(content.length > showChar) {
      var c = content.substr(0, showChar);
      var h = content.substr(showChar, content.length - showChar);
      var html = c + '<span class="moreellipses">' + ellipsesText+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a id="moreText" href="" class="morelink">' + moreText + '</a></span>';
      $(this).html(html);
  }
});

$(".morelink").click(function(){
  var local = $(this).closest('.post-content').find('h2 > a').attr('href');
  window.location.href = local;
  return false;
});
$(window).scroll(function() {
  if ($(this).scrollTop()) {
        $('#to-top').fadeIn()
    } else {
        $('#to-top').fadeOut()
    }
});
$("#to-top").click(function() {
    $("html, body").animate({
        scrollTop: 0
    }, 1000)
});
