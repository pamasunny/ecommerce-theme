import "bootstrap";
import $ from "jquery";
import "slick-carousel";




$(document).ready(function() {
	
	// variable init
	var wid;
	var outer = $("#outer-menu");
	var out = $("#out-menu");

	// intial function call
	sizeCheck();
	
	// resize global function
	$(window).resize(sizeCheck);
	
	// sizecheck function
	function sizeCheck(){

	wid = $(window).width();
	//console.log(wid);

	// bootstap lg size 
	if (wid < 992 ) {
	//	console.log("small");
		outer.hide();
		
		out.addClass("navbar-nav d-flex flex-row ");
		out.html(outer.html());
		
		$("#icon-nav").addClass("bg-light fixed-top h-100");


		//best-seller-grid-layout 4-in-1-line
		$(".width-seller").show();


		//slick-carousel sale in down from md
		
		$('.sale-slider').slick({
  			infinite: true,
  			slidesToShow: 2,
  			slidesToScroll: 1,
  			autoplay: true
		});

		//slick-carousel-blog-section
		$('.blog-inner').slick({
  			infinite: false,
  			//slidesToShow: 1,
  			//slidesToScroll: 1,
  			centerMode: true,
  			swipeToSlide: true
  			//variableWidth: true
  			//autoplay: true
		});		

	} else {
		// console.log("large");
		

		
		$("#icon-nav").removeClass("bg-light fixed-top h-100");		
		out.html(out.hide());
		outer.show().html();

		//best-seller-grid-layout 4-in-1-line
		$(".width-seller").hide();


	}
	}
	// console.log("live");
});

//slick-carousel-hero
$(document).ready(function(){
  $('.hero').slick({
    accessblity: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  });
});

//slick-carousel-new-arrival
//
$('.new-arr').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true
});

				

	
	
		

		
		

	

	 

