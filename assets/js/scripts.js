( function( $ ) {
	
	$('.mini-toggle').on('click', function(){
	   $(this).parent().toggleClass('menushow');
	});

	$.fn.asthirAccessibleDropDown = function () {
		 var el = $(this);

			    /* Make dropdown menus keyboard accessible */

			  $("button.mini-toggle", el).focus(function() {
			        $(this).parents("li").addClass("befocus");
			  })/*.blur(function() {
			        $(this).parents("li").removeClass("befocus");
			  });*/
	}
	 $("#primary-menu").asthirAccessibleDropDown();
	
}( jQuery ) );