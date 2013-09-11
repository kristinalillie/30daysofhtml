$(document).ready(function(){
  $('div #green').click(function(){ 
    $(this).animate({'width': '100'}, {'duration': '5000', 'easing': 'easeInQuad', 'complete': 'callback'});
  })
})
$(document).ready(function(){
  $('div #red').click(function(){
    $(this).animate({'width': '100'}, {'duration': '5000', 'easing': 'easeOutCubic'});
  })
})
$(document).ready(function(){
  $('div #orange').click(function(){
    $(this).animate({'width': '100'}, {'duration': '5000', 'easing': 'easeInOutCubic'});
  })
})
$(document).ready(function(){
  $('div #blue').click(function(){
    $(this).animate({'width': '100'}, {'duration': '5000', 'easing': 'easeInQuart'});
  })
})
$(document).ready(function(){
  $('div #purple').click(function(){
    $(this).animate({'width': '100'}, {'duration': '5000', 'easing': 'easeOutSine'});
  })
})
$(document).ready(function(){
  $('div #black').click(function(){
    $(this).animate({'width': '100'}, {'duration': '5000', 'easing': 'easeInExpo'});
  })
})
$(document).ready(function(){
  $('div #yellow').click(function(){
    $(this).animate({'width': '100'}, {'duration': '5000', 'easing': 'easeInCirc'});
  })
})
$(document).ready(function(){
  $('div #pink').click(function(){
    $(this).animate({'width': '100'}, {'duration': '5000', 'easing': 'easeInBounce'});
  })
})
$(document).ready(function(){
  $('div #brown').click(function(){
    $(this).animate({'width': '100'}, {'duration': '5000', 'easing': 'easeOutBounce'});
  })
})
$(document).ready(function(){
  $('div #gray').click(function(){
    $(this).animate({'width': '100'}, {'duration': '5000', 'easing': 'easeInOutBounce'});
  })
})