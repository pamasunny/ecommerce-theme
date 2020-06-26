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

	} else {
		// console.log("large");
		$("#icon-nav").removeClass("bg-light fixed-top h-100");		
		out.html(out.hide());
		outer.show().html();

	}
	}
	// console.log("live");
});

//slick-carousel
$(document).ready(function(){
  $('.hero-carousel').slick({
    accessblity: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
});
				

	
	
		

		
		

	

	 

