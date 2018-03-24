$(document).ready(function(){
    $('#about_me').load("https://raw.githubusercontent.com/hanuor/shanjohri/gh-pages/data/about-me.md");
    $('#footer_note').load("https://raw.githubusercontent.com/hanuor/shanjohri/gh-pages/data/footer-notes.md");
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