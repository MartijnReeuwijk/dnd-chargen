// all dungeun master function in here

// feet to meter calc
function feetToMeter() {
	var feet = document.querySelector(".feet").value;
	var floormeter = feet * 0.3048;
	var meter = floormeter.toFixed(2);
	console.log(meter);
}
document.querySelector(".feet").addEventListener("change", feetToMeter);


// scale map to show the size of spells.
