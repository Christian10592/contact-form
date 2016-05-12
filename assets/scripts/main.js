$(document).ready(function(){
//==================== Selectors ===============//

var mainMenuSelector = $('nav.main .menu');
var mainMenuOverlay  = $('nav.main .right');

//==================== Globals ================//

//==================== Nav ====================//
var mobileMenuOpen = false;

$('#menu-icon').click(function(){
  if (mobileMenuOpen) {
    mainMenuSelector.animate({'right': '300px'});
    mainMenuOverlay.fadeOut();
    mobileMenuOpen = false;
  } else {
    mainMenuOverlay.fadeIn();
    mainMenuSelector.animate({'right': '0px'});
    mobileMenuOpen = true;
  }

});
//End Document.ready
});
