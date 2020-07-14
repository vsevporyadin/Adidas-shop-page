var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;
var sliderbox = $('#block-for-slider');
var slidermobile = $('.slider_box');
var slider = $('#viewport');
var sliderImg = $('#slidewrapper li');

$(document).ready(function() {
    /* var switchInterval = setInterval(nextSlide, slideInterval);
    
    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
		}); */
		
		sliderbox.before('<div id="' + 'pager' + '"></div>');
		var dataVal = 1;
		sliderImg.each(
			function(){
				$(this).attr('data-img',dataVal);
				$('#pager').append('<a class="prev" data-img="' + dataVal + '"><img class="prev_img" src=' + $('img', this).attr('src') + ' width="60px"></a>');
			dataVal++;
		});

		slidermobile.after('<div id="' + 'pager-mobile' + '"></div>');
		sliderImg.each(
			function(){
				$(this).attr('data-img',dataVal);
				$('#pager-mobile').append('<a class="prev" data-img="' + dataVal + '"><img class="prev_img" src=' + $('img', this).attr('src') + ' width="60px"></a>');
			dataVal++;
		});

    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });

    $('.prev').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
});

function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}