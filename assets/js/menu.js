$(document).ready(function() {

	// "use strict";

	// $('.menu > ol > li:has( > ul)').addClass('menu-dropdown-icon');
	
  $('.menu > ol > li > ul:not(:has(ul))').addClass('normal-sub');

  // $(".menu > ol").before("<a href=\"#\" class=\"menu-mobile\">Navigation</a>");

  $(".menu > ol > li").hover(function(e) {
    if ($(window).width() > 943) {
      $(this).children("ul").stop(true, false).fadeToggle(150);
      e.preventDefault();
    }
	});

	// $('.menu > ol > li a').hover(function(){
	// 	$('.menu > ol > li a').css('color', '#000');
	// },function(){
	// 	$('.menu > ol > li a').css('color', '#fff');
	// });

	// $('.menu > ol > li > ul').hover(function(){
	// 	$('.menu > ol > li a').css('color', '#000');
	// },function(){
	// 	$('.menu > ol > li a').css('color', '#fff');
	// });

  $(".menu > ol > li").click(function() {
    if ($(window).width() <= 943) {
      $(this).children("ul").fadeToggle(150);
    }
  });

  $(".menu_logo_mobile").click(function(e) {
    $(".menu > ol").toggleClass('show-on-mobile');
    e.preventDefault();
  });

});