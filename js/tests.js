function roll() {

  for (var i = 0; i <= 3; i++) {
    // start at 0 so 0-4 = 5
    // roll[i] learnd
    roll[i] = Math.floor((Math.random() * 6)+1);
    allrolls.push(roll[i]);
  }

  var allrolls = [];
  var resultroll = roll[i] + roll[i] + roll[i] + roll[i];
  console.log(resultroll);
  var lowestValue =  Math.min.apply( Math, allrolls );
  var abilityScores = allrolls - lowestValue ;
  console.log(allrolls);
  console.log(abilityScores);

  var modifier = 0;

  if (abilityScores >= 3) {
    modifier = -4;
  }
  if (abilityScores <=5 && abilityScores >3) {
    modifier = -3;
  }
  if (abilityScores <=7 && abilityScores >6) {
    modifier = -2;
  }
  if (abilityScores <=9 && abilityScores >7) {
    modifier = -1;
  }
  if (abilityScores <=11 && abilityScores >9) {
    modifier = 0;
  }
  if (abilityScores <=13 && abilityScores >11) {
    modifier = +1;
  }
  if (abilityScores <=15 && abilityScores >13) {
    modifier = +2;
  }
  if (abilityScores <=17 && abilityScores >15) {
    modifier = +3;
  }
  if (abilityScores <=19 && abilityScores >17) {
    modifier = +4;
  }
  // else {
  // 	alert("Leed hacks dit kan je niet rollen met 4x6 - de laagste")
  // }



  // this can be done with the THIs element but dont  know how
  document.querySelector(".attributeholder article").innerHTML = "<p>" + abilityScores + "</p>" + "<p>" + modifier + "</p>";
  character.abilityScores = abilityScores;
  character.modifier = modifier;
};




// function roll() {
// 	var roll = Math.floor((Math.random() * 6)+1);
// 	var roll1 = Math.floor((Math.random() * 6)+1);
// 	var roll2 = Math.floor((Math.random() * 6)+1);
// 	var roll3 = Math.floor((Math.random() * 6)+1);
// 	var allrolls = [roll, roll1, roll2, roll3];
// 	var resultroll = roll + roll1 + roll2 + roll3;
// 	var lowestValue =  Math.min.apply( Math, allrolls );
// 	var abilityScores = resultroll - lowestValue ;
// 	var modifier = 0;
//
// 	if (abilityScores >= 3) {
// 		modifier = -4;
// 	}
// 	if (abilityScores <=5 && abilityScores >3) {
// 		modifier = -3;
// 	}
// 	if (abilityScores <=7 && abilityScores >6) {
// 		modifier = -2;
// 	}
// 	if (abilityScores <=9 && abilityScores >7) {
// 		modifier = -1;
// 	}
// 	if (abilityScores <=11 && abilityScores >9) {
// 		modifier = 0;
// 	}
// 	if (abilityScores <=13 && abilityScores >11) {
// 		modifier = +1;
// 	}
// 	if (abilityScores <=15 && abilityScores >13) {
// 		modifier = +2;
// 	}
// 	if (abilityScores <=17 && abilityScores >15) {
// 		modifier = +3;
// 	}
// 	if (abilityScores <=19 && abilityScores >17) {
// 		modifier = +4;
// 	}
// 	// else {
// 	// 	alert("Leed hacks dit kan je niet rollen met 4x6 - de laagste")
// 	// }
//
//
//
// 	// this can be done with the THIs element but dont  know how
// 	document.querySelector(".attributeholder article").innerHTML = "<p>" + abilityScores + "</p>" + "<p>" + modifier + "</p>";
// 	character.abilityScores = abilityScores;
// 	character.modifier = modifier;
// };































function feetToMeter() {
	var feet = document.querySelector(".feet").value;
	var floormeter = feet * 0.3048;
	var meter = floormeter.toFixed(2);
	// document.querySelector(".feet p").innerHTML = "<p>" + meter + "</p>";
	console.log(meter);
}

// thought to be smart but cant tofixed the calc

function ounceToGram() {
	var ounce = document.querySelector(".ounceInput").value * 28.3495231;
// cool measurements GB ounce is not a eu ounce
	var gram = ounce.toFixed(2);
	document.querySelector(".ounce p").innerHTML = "<p>" + gram + "</p>";
}





// all dungeun master function in here
	// tart units to normal units

// feet to meter calc
function feetToMeter() {
	var feet = document.querySelector(".feet").value;
	var floormeter = feet * 0.3048;
	var meter = floormeter.toFixed(2);
	// document.querySelector(".feet p").innerHTML = "<p>" + meter + "</p>";
	console.log(meter);
}

function whatTheFuckIsaPint() {
	var pint = document.querySelector(".pint").value;
		// look at this wtf murica
	var floorliter = pint * 0.473176473;
	var liters = floorliter.toFixed(2);
	document.querySelector(".pint p").innerHTML = "<p>" + liters + "</p>";
	console.log(liters);
}

// since i dont return the value i can use the same varable name
function gallonToLiter() {
	var gallon = document.querySelector(".gallon").value;
	var floorliter = gallon * 3.78541178;
	var liters = floorliter.toFixed(2);
	document.querySelector(".gallon p").innerHTML = "<p>" + liters + "</p>";
}


function ounceToGram() {
	var ounce = document.querySelector(".ounce").value;
// cool measurements GB ounce is not a eu ounce
	var floorOunce = ounce * 28.3495231;
	var gram = floorOunce.toFixed(2);
	document.querySelector(".ounce p").innerHTML = "<p>" + gram + "</p>";
}






document.querySelector(".feet").addEventListener("change", feetToMeter);
document.querySelector(".pint").addEventListener("change", whatTheFuckIsaPint);
document.querySelector(".gallon").addEventListener("change", gallonToLiter);
document.querySelector(".ounce").addEventListener("change", ounceToGram);



// scale map to show the size of spells.
