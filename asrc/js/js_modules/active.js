//MASKS//
//'+7(999) 999 9999'
//'+38(999) 999 9999'
//'+375(99)999-99-99'
$.each($('input.phone'), function(index, val) {
    $(this).attr('type','tel');
    $(this).focus(function(){
        $(this).inputmask('+375(99)999-99-99',{clearIncomplete: true,clearMaskOnLostFocus: false,
            "onincomplete": function(){maskclear($(this));}
        });
        $(this).addClass('focus');
        $(this).parent().addClass('focus');
        $(this).parent().removeClass('err');
        $(this).removeClass('err');
    });
});
$('input.phone').focusout(function(event) {
    maskclear($(this));
});

//SLIDERS
if($('.slider').length>0){
	$('.slider').slick({
	//autoplay: true,
	infinite: false,
	// dots: true,
	arrows: true,
	accessibility:false,
	slidesToShow:4,
	autoplaySpeed: 3000,
	//asNavFor:'',
	adaptiveHeight: true,
	swipe: false,
	//appendDots:
	appendArrows:$('.slider__btn-group'),
	nextArrow:'<button type="button" class="slick-next"></button>',
	prevArrow:'<button type="button" class="slick-prev"></button>',
	responsive: [{
		breakpoint: 1200,
		settings: {
		slidesToShow: 3,}
		},{
		breakpoint: 991,
		settings: {
		slidesToShow: 2,}
		},
		{
		breakpoint: 670,
		settings: {
		slidesToShow: 1}
		}
	]
		
	});
	const slider = document.querySelector('.slider');
	const slickActive = slider.querySelectorAll('.slick-active');
	const sliderIndicators = document.querySelector('.slider__indicators');
	const lenghtSlider = $('.slider__item').length;
	for(let i = 0; i<lenghtSlider; i++){
		sliderIndicators.insertAdjacentHTML('beforeend','<span class="slider-indicator"></span>');
	};
	slickActive.forEach(item=>{
		var newItem = $(item).data('slickIndex');
		$('.slider-indicator').eq(newItem).addClass("slider-indicator_active");
	});
	$('.slider__btn-group .slick-arrow').click(function() {
				$('.slider-indicator').removeClass("slider-indicator_active");
				const slickActive = slider.querySelectorAll('.slick-active');
				slickActive.forEach(item=>{
					var newItem = $(item).data('slickIndex');
					
					$('.slider-indicator').eq(newItem).addClass("slider-indicator_active");
				});
			  });
};


if($('.our-controls__uls').length>0){
	$('.our-controls__uls').slick({
	// autoplay: true,
	infinite: false,
	dots: false,
	arrows: true,
	slidesToShow: 6,
	speed: 500,
	autoplaySpeed: 3000,
	adaptiveHeight: true,
	//asNavFor:'',
	// appendDots:$('.step-slider__controls'),
	appendArrows:$('.our-controls__btn-group'),
	nextArrow:'<button type="button" class="slick__next"></button>',
	prevArrow:'<button type="button" class="slick__prev"></button>',
	responsive: [
		{
		breakpoint: 1200,
		settings: {	slidesToShow: 4}
		},{
		breakpoint: 991,
		settings: {	slidesToShow: 3}
		},{
		breakpoint: 768,
		settings: {	slidesToShow: 2}
		},{
		breakpoint: 576,
		settings: {	slidesToShow: 1}
		}]
	});

	  
};

if($('.feedback__slider').length>0){
	$('.feedback__slider').slick({
	//autoplay: true,
	infinite: true,
	// dots: true,
	arrows: true,
	accessibility:false,
	slidesToShow:4,
	autoplaySpeed: 3000,
	//asNavFor:'',
	adaptiveHeight: true,
	swipe: false,
	//appendDots:
	appendArrows:$('.feedback__btn-group'),
	nextArrow:'<button type="button" class="slick-next"></button>',
	prevArrow:'<button type="button" class="slick-prev"></button>',
	// variableWidth: true,
	// centerMode: true,
	responsive: [{
		breakpoint: 1200,
		settings: {
		slidesToShow: 3,}
		},{
		breakpoint: 670,
		settings: {
		slidesToShow: 2}
		}
	]
		
	});

};



if($('.service-page__slider').length>0){
	const servicePagesItem = document.querySelectorAll('.service__item');
		
		if(servicePagesItem){
			servicePagesItem.forEach((item, num)=>{
				item.addEventListener('click',()=>{
					$(".popup-service-page__row").addClass("display_none");
					$(".popup-service-page__row").eq(num).removeClass("display_none");
					
				})
			})
		}
	const sliders = document.querySelectorAll('.service-page__sliders');
	
	sliders.forEach(item=>{
		
		const slider = item.querySelector('.service-page__slider');
		const buttons = item.querySelector('.service-page__btn-group');
		$(slider).slick({
		//autoplay: true,
		infinite: true,
		// dots: true,
		arrows: true,
		accessibility:false,
		fade: true,
		slidesToShow:1,
		autoplaySpeed: 3000,
		//asNavFor:'',
		adaptiveHeight: false,
		swipe: false,
		//appendDots:
		appendArrows:$(buttons),
		nextArrow:'<button type="button" class="slick-next"></button>',
		prevArrow:'<button type="button" class="slick-prev"></button>',
		// variableWidth: true,
		// centerMode: true,
			
		});
		const numberCurrent = item.querySelector('.service-page__number_current');
		const numberLenght = item.querySelector('.service-page__number_lenght');
		const itemLenght = item.querySelectorAll('.service-page-slider__item');		
		numberLenght.textContent = itemLenght.length;
		$(slider).on('afterChange', function (event, slick, currentSlide) {
			$(numberCurrent).text(currentSlide+1);
			});

	})

};


if($('.card-slider__body').length>0){

	const cardSliderControl = document.querySelectorAll('.card-slider__control');
		
	if(cardSliderControl){
		cardSliderControl.forEach((item, num)=>{
			item.addEventListener('click',()=>{
				$(".card-slider__body").removeClass("hide");
				$(".card-slider__body").addClass("display_none");
				$(".card-slider__body").eq(num).removeClass("display_none");
				$(".card-slider__control").removeClass("card-slider__control_active");
				$(".card-slider__control").eq(num).addClass("card-slider__control_active");
			})
		})
	}
	const sliders = document.querySelectorAll('.card-slider__body');
	sliders.forEach(item=>{

	
	const left = item.querySelector('.card-slider__left-body');
	const right = item.querySelector('.card-slider__right');
	const buttons = item.querySelector('.card-slider__btn-group');

	$(left).slick({
	//autoplay: true,
	infinite: true,
	// dots: true,
	arrows: true,
	fade: true,
	accessibility:false,
	slidesToShow:1,
	autoplaySpeed: 3000,
	asNavFor:right,
	// adaptiveHeight: true,
	swipe: false,
	//appendDots:
	appendArrows:$(buttons),
	nextArrow:'<button type="button" class="slick-next"></button>',
	prevArrow:'<button type="button" class="slick-prev"></button>',
	// variableWidth: true,
	// centerMode: true,

		
	});

	$(right).slick({
		//autoplay: true,
		infinite: true,
		dots: false,
		arrows: false,
		accessibility:false,
		slidesToShow:4,
		autoplaySpeed: 3000,
		asNavFor:left,
		// adaptiveHeight: true,
		vertical: true,
		swipe: false,
		//appendDots:
		// appendArrows:$('.feedback__btn-group'),
		// nextArrow:'<button type="button" class="slick-next"></button>',
		// prevArrow:'<button type="button" class="slick-prev"></button>',
		// variableWidth: true,
		// centerMode: true,
		responsive: [{
			breakpoint: 992,
			settings: {
			vertical: false,
			slidesToShow: 3,}
			},{
			breakpoint: 670,
			settings: {
			vertical: false,
			slidesToShow: 2}
			}
		]
			
		});
	})
};





// //ibg

function ibg(){

	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
	if(ibg[i].querySelector('img')){
	ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
	}
	}
}
	
	ibg();


// Scrollsmooth

var Scrollbar = window.Scrollbar;
	const scrollbar = document.querySelectorAll('.my-scrollbar');
	scrollbar.forEach(item=>{
		Scrollbar.init(item, {
			alwaysShowTracks:true});
	});

baguetteBox.run('.baguetteBoxOne');


$(document).ready(()=> {$(".arrow__link").click(function (e) {var elementClick = $(this).attr("href");var destination = $(elementClick).offset().top;jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);e.preventDefault();return false;});})