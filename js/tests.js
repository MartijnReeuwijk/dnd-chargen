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
