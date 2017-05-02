// all dungeun master function in here
	// tart units to normal units

	// Straight from the hood again
	var euUnits = document.querySelector('.euUnits');
	var metric = document.querySelector('.metric'); // or whatever triggers the toggle
	metric.addEventListener('click', function(e) {
	    e.preventDefault();
	    euUnits.classList.toggle('active2'); // or whatever your active class is
	});


// feet to meter calc
function feetToMeter() {
	var feet = document.querySelector(".feetInput").value;
	var floormeter = feet * 0.3048;
	var meter = floormeter.toFixed(2);
	console.log(meter);
	document.querySelector(".feet p").innerHTML = "<p>" + meter + "M" + "</p>";
}

function whatTheFuckIsaPint() {
	var pint = document.querySelector(".pintInput").value;
		// look at this wtf murica
	var floorliter = pint * 0.473176473;
	var liters = floorliter.toFixed(2);
	document.querySelector(".pint p").innerHTML = "<p>" + liters + "L" +"</p>";
	console.log(liters);
}

// since i dont return the value i can use the same varable name
//event listener
function giveMeGallons(){
	var gallons = document.querySelector(".gallonInput").value;
	var liters = gallonToLiter(gallons);
	document.querySelector(".gallon p").innerHTML = "<p>" + liters + "L" +"</p>";
}

function gallonToLiter(gallons) {
	var floorliter = gallons * 3.78541178;
	var liters = floorliter.toFixed(2);
	return liters;
}

// console.log(gallonToLiter(16));
// var userGallons = document.querySelector(".gallonInput").value;
// document.querySelector(".gallon p").innerHTML = "<p>" + gallonToLiter(16) + "L" +"</p>";

function ounceToGram() {
	var ounce = document.querySelector(".ounceInput").value;
// cool measurements GB ounce is not a eu ounce
	var floorOunce = ounce * 28.3495231;
	var gram = floorOunce.toFixed(2);
	document.querySelector(".ounce p").innerHTML = "<p>" + gram + "GR" + "</p>";
}

function lbToKg() {
	var lb = document.querySelector(".lbInput").value;
	var floorLb = lb * 0.45359237;
	var kg = floorLb.toFixed(2);
	console.log(kg);
	document.querySelector(".lb p").innerHTML = "<p>" + kg + "KG" + "</p>";
}


document.querySelector(".feet").addEventListener("change", feetToMeter);
document.querySelector(".pint").addEventListener("change", whatTheFuckIsaPint);
document.querySelector(".gallon").addEventListener("change", gallonToLiter);
document.querySelector(".ounce").addEventListener("change", ounceToGram);
document.querySelector(".lb").addEventListener("change", lbToKg);
