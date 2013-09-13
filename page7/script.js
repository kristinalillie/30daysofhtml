$(document).ready(function() {
  $('[data-easing]').click(function(){
    var easing = $(this).attr('data-easing'); // 'animated swing'
    $(this).removeClass(easing);
    this.offsetWidth = this.offsetWidth;
    $(this).addClass(easing);
  });
});


