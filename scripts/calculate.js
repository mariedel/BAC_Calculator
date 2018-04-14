
//Formula
// BAC = [Alcohol consumed in grams/(Bodyweight in grams * gender constant)] * 100

// # regular drinks * 14 = grams of alcohol

// body weight in grams   lbs / 0.0022046

// Gender constant Male = .68  Female = .55

// elapsed time in hours * 0.015


$(document).ready(function() {
	
$('#calculate').click(function(){
	var bac = 0;
	var gender = $('input[name="gender"]:checked').val();
	var weight = parseInt($("#weight").val());
	var drinks = parseInt($("#drinks").val());
	var time = parseInt($("#time").val());
	
	
	if (gender == "male") {
		var x = (time * 0.015);
		var y = ((((drinks * 14) / ((weight * 454) * .68))) * 100);
		bac= round(y - x, 4);
	}
	
	else {
		var x = (time * 0.015);
		var y = ((((drinks * 14) / ((weight * 454) * .55))) * 100);
		bac= round(y-x, 4);
	}
	
	$("#bac").val(bac);
	
	

	//loop to subtract time * 0.015 from bac calculation until it hits .o8
	// if it is already at .08 or below text statement Your BAC is already at .08 which is the legal limit in all 50 states
	// if not already at .08 say show text that says you will need ____ additional hours before you can drive.
	
	if (bac <= .08) {
		$("#more").val("Your BAC is .08 or below which is the legal limit");
	}
	else if (bac > .08) {
		$("#more").val("Your BAC is over .08 " + "\n" +"You will need to wait at least " + checkAlcohol(bac) + " hours before you can drive.");
		
	}
	
	
			
	});
var checkAlcohol = function(alcoholNumber){
	var text;
	alcoholNumber -= 0.08;
	var time = 0.015;
	
	text = (alcoholNumber/time);
	return Math.round(text);


}

function round(number, precision) {
	  var shift = function (number, precision, reverseShift) {
	    if (reverseShift) {
	      precision = -precision;
	    }  
	    numArray = ("" + number).split("e");
	    return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
	  };
	  return shift(Math.round(shift(number, precision, false)), precision, true);
	}


});





