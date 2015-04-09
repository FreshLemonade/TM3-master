
//Toggles de divs
	
	$(document).ready(function(){ 

	var toggleSide=0;
	var toggleBottom=0;
	 
	$(".arrow-left").click(function(){ 
	

	if (toggleSide==0) {
	var div = $(".sidebar");
	div.animate({width: '30%'}, "slow");
	toggleSide=1;
	}
	else {
	var div = $(".sidebar");
	div.animate({width: '10%'}, "slow");
	toggleSide=0;
	}
	});
	
	$(".arrow-up").click(function(){ 
	

	if (toggleBottom==0) {
	var div = $(".bottombar");
	div.animate({height: '18%'}, "slow");
	toggleBottom=1;
	}
	else {
	var div = $(".bottombar");
	div.animate({height: '10%'}, "slow");
	toggleBottom=0;
	}
	});
	
	
	});

