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
  $('.hero').slick({
    accessblity: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  });
});

//slick-carousel for sale

// $('.sale').slick({
//   dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 4,
//   //slidesToScroll: 4,
//   responsive: [
//     // {
//     //   breakpoint: 1024,
//     //   settings: {
//     //     slidesToShow: 3,
//     //     slidesToScroll: 3,
//     //     infinite: true,
//     //     dots: true
//     //   }
//     // },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 3,
//         //slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });
				

	
	
		

		
		

	

	 

