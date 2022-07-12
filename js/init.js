//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "07 oct 2022 00:00:01",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	