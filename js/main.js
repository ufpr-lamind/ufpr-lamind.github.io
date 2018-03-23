document.getElementById('logo').addEventListener('click', function() {
  window.location.href = "/";
});
var showChar = 700;
var ellipsestext = "...";
var moretext = "Ler mais >";
var lesstext = "Mostrar menos";


$('.more').each(function() {
    var content = $(this).html();
    if(content.length > showChar) {
        var c = content.substr(0, showChar);
        var h = content.substr(showChar, content.length - showChar);
        var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a id="moretext" href="" class="morelink">' + moretext + '</a></span>';
        $(this).html(html);
    }
});

$(".morelink").click(function(){
  var local = $(this).closest('.post-content').find('h2 > a').attr('href');
  window.location.href = local;
  return false;
});
