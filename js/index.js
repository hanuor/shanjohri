$(document).ready(function(){
  
    setBlinkingEffect();

});

var setBlinkingEffect = function(){
   setInterval(function() {
  $('.col-sm-4 h3 u').animate({
    opacity: 1
  }, 900).animate({
    opacity: 0
  }, 900)
}, 400);

};