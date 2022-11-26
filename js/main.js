$(function() {
	// табс
  $(".set > h5").on("click", function(){
    if($(this).hasClass('active')){
      $(this).removeClass("active");
      $(this).siblings('.content').slideUp(200);
      $(".set > h5 span").removeClass("minus").addClass("plus");
    }else{
      $(".set > h5 span").removeClass("minus").addClass("plus");
      $(this).find("span").removeClass("plus").addClass("minus");
      $(".set > h5").removeClass("active");
      $(this).addClass("active");
      $('.content').slideUp(200);
      $(this).siblings('.content').slideDown(200);
    }
  });
  //Якоря для навигации(menu)
	$('.header_burger').click(function(){
		$('ul, header').toggleClass('open');
		$(this).toggleClass('active')
		return false;
	});
  $('.popup .blocker').click(function(){
		$('.popup').removeClass('open');
		$('#wrapper').removeClass('popup');
	});
  //homepage fv popup_catalog
  $('nav .call a, header nav .phone').click(function(){
		$('.popup_catalog').addClass('open');
		$('#wrapper').addClass('popup');
	});
  //homepage fv thnx catalog
  $('.request').click(function(){
		$('.popup_catalog').removeClass('open');
		$('.sent').addClass('open');
	});
  //popups
	//close popup
	$('.popup .close').click(function(){
		$('.popup').removeClass('open');
		$('#wrapper').removeClass('popup');
	});
});
