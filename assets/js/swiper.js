     
  var mySwiper = new Swiper ('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    initialSlide: 0,
    //truewrapper adoptsheight of active slide
		autoHeight: true,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    paginationType: "bullets",
    pagination: {
			el: '.swiper-pagination',
			clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'slide',
    // Distance between slides in px.
    spaceBetween: 15,
    //
    slidesPerView: 4,
    //
    centeredSlides: true,
    //
    slidesOffsetBefore: 0,
    //
		grabCursor: true,
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 3,
				spaceBetween: 30
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 4,
				spaceBetween: 40
			}
		}
  })        
