$(document).ready(function() {
  $('div div').click(function(){
    $('#green').addClass('animated bounceOutLeft');
    $('#red').addClass('animated bounceOutRight'); 
    $('#orange').addClass('animated swing');
    $('#blue').addClass('animated wobble');
    $('#purple').addClass('animated pulse');
    $('#black').addClass('animated flip');
    $('#yellow').addClass('animated flipInX');
    $('#pink').addClass('animated flipOutX');
    $('#brown').addClass('animated flipInY');
    $('#gray').addClass('animated fadeInDown');
    $('#lgreen').addClass('animated fadeInRightBig');
    $('#lred').addClass('animated fadeOutDown');
    $('#lorange').addClass('animated fadeOutDownBig');
    $('#lblue').addClass('animated rotateOutUpLeft'); 
    $('#lpurple').addClass('animated flash');
    $('#lyellow').addClass('animated lightSpeedIn');
    $('#lbrown').addClass('animated hinge');
    $('#lgray').addClass('animated rollOut');
  });  
});