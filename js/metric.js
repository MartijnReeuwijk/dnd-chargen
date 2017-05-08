// all dungeun master function in here
	// tart units to normal units

	// Straight from the hood again
	var euUnits = document.querySelector('.euUnits');
	var metric = document.querySelector('.metric'); // or whatever triggers the toggle
	metric.addEventListener('click', function(e) {
	    e.preventDefault();
	    euUnits.classList.toggle('active2'); // or whatever your active class is
	});

function giveMeMeters() {
	var feets = document.querySelector(".feetInput").value;
	var meters = feetToMeter(feets);
	document.querySelector(".feet p").innerHTML = "<p>" + meters + "M" + "</p>";

}

function feetToMeter(feets) {
	var floormeters = feets * 0.3048;
	var meters = floormeters.toFixed(2);
return meters
}

function giveMePints(){ // please i can use one
	var pints = document.querySelector(".pintInput").value;
	var liters = whatTheFuckIsaPint(pints);
	document.querySelector(".pint p").innerHTML = "<p>" + liters + "L" +"</p>";

}
function whatTheFuckIsaPint(pints) {
	var floorliters = pints * 0.473176473;
	var liters = floorliters.toFixed(2);
	return liters;
}

function giveMeGallons(){
	var gallons = document.querySelector(".gallonInput").value;
	var liters = gallonToLiter(gallons);
	document.querySelector(".gallon p").innerHTML = "<p>" + liters + "L" +"</p>";
}
function gallonToLiter(gallons) {
	var floorliters = gallons * 3.78541178;
	var liters = floorliters.toFixed(2);
	return liters;
}

// My understanding make a function to get the variables then use var grams why
// triggers the ounceToGram which the input value from var ounce which return the calculated ounceToGram
// which is the amount of grams i need to place in the html
// now i have dissected i understand why this is better you can still use the ounceToGram annywhere
function giveMeGrams(){
	var ounces = document.querySelector(".ounceInput").value;
	var grams = ounceToGram(ounces)
	document.querySelector(".ounce p").innerHTML = "<p>" + grams + "GR" + "</p>";
}

function ounceToGram(ounces) {
	var floorOunces = ounces * 28.3495231;
	var grams = floorOunces.toFixed(2);
	return grams;
}
function giveMeKg(){
	var lbs = document.querySelector(".lbInput").value;
	var kgs = lbToKg(lbs);
	document.querySelector(".lb p").innerHTML = "<p>" + kgs + "KG" + "</p>";

}
function lbToKg(lbs) {
	var floorLbs = lbs * 0.45359237;
	var kgs = floorLbs.toFixed(2);
	return kgs;
}


document.querySelector(".feet").addEventListener("change", giveMeMeters);
document.querySelector(".pint").addEventListener("change", giveMePints);
document.querySelector(".gallon").addEventListener("change", giveMeGallons);
document.querySelector(".ounce").addEventListener("change", giveMeGrams);
document.querySelector(".lb").addEventListener("change", giveMeKg);
