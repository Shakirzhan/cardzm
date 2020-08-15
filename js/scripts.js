jQuery('.page-header__button--right').click(function(){
	jQuery('html, body').animate({scrollTop:jQuery('.page-main').position().top}, 2000);
});

jQuery( ".page-header__button--bg" ).click(function() {
	jQuery( '.pregionss' ).slideToggle();
});

jQuery( '.js-close-pregionss' ).click(function() {
	jQuery( '.pregionss' ).slideToggle();
});