$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.dp').css({
    'transform':'translate(0px, '+ wScroll/5.4 +'%)'
  });

  $('.para1').css({
    'transform':'translate(0px, '+ wScroll /6.12 +'%)'
  });

  $('.para2').css({
    'transform':'translate(0px, -'+ wScroll /65 +'%)'
  });

  $('.para3').css({
    'transform':'translate(0px, -'+ wScroll /65 +'%)'
  });

  if(wScroll > $('.lang').offset().top - ($(window).height() / 1.5)){
    $('.lang .box').each(function(i){
      setTimeout(function(){
        $('.lang .box').eq(i).addClass('is_showing');
      },(700 * (Math.exp(i * 0.14))) - 700);
    });
  }

});
