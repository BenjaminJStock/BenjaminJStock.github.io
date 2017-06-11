function initMenu ()
{ 
		$("#menu").hide();
		$("#menu ul").hide();
		$("#menu_button").show();
		$("#menu_button span").css({ opacity: 0 }).fadeTo("slow", 0.4);
		//$("#menu_button span").hide().fadeIn("slow");				
		
		$('#menu_button').hover( 
			function() 
			{			
				var bg_span = $(this).children("span");
				if (bg_span.hasClass("show"))
					bg_span.animate({ top: "10px", opacity: 1}, 200);
				else
					bg_span.animate({ top: "0px", opacity: 1}, 200);	
			},
			function() 
			{
				var bg_span = $(this).children("span");
				if (bg_span.hasClass("show"))
					bg_span.animate({ top: "0px", opacity: 0.4}, 200);
				else
					bg_span.animate({ top: "10px", opacity: 0.4}, 200);
			});
			
		$('#menu_button').toggle(
			function()
			{
				$("#menu_button span").fadeOut("fast", function() {
						$(this).removeClass("show").addClass("hide")
								.css({ top: "0px", opacity: 1})
								.fadeIn("fast");
					});
				$('#menu').fadeIn("fast", function(){ $("#menu ul").fadeIn("fast"); });
			},
			function()
			{
				$("#menu_button span").fadeOut("fast", function() {
						$(this).removeClass("hide").addClass("show")
								.css({ top: "10px", opacity: 1})
								.fadeIn("fast");
					});
				$("#menu").fadeOut("fast", function(){ $("#menu ul").hide(); });
			});
}

function animateBGColor(lastIndex, rand)
{	
	var color_array = [	"#bbf7fc",
						"#fff5bd",
						"#ffe9f4"									
						];
	var length = color_array.length;
	var next_color = "black", nextIndex=0;
	if (rand)
	{
		next_color = color_array[Math.floor(Math.random()*length)];
	} else {
		if (lastIndex >= length-1)
		{ 
			nextIndex = 0;
		} 
		else 
		{
			nextIndex = lastIndex+1;
		}
		next_color = color_array[nextIndex];
	}
	var fadeTime = 5000, pauseTime = 8000;
	$("img.bg").animate({ backgroundColor: next_color }, fadeTime, 
			function(){ 
				setTimeout( function() { animateBGColor(nextIndex, rand); }, pauseTime ); 
			});
}

function animateMenuItems() 
{
		$("#menu ul li").hover(
			function(){
				$(this).animate({ marginLeft: "0px"}, 100 );
			},
			function(){
				$(this).animate({ marginLeft: "35px"}, 100 );
			});
}