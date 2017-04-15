// for (var i = 0; i <=5; i++) {
//   roll()
//   console.log(i);
// }
//
var character = new Object();


// get value from Object so the role var is the one from characterValue;
var role = character[role];
var hitpoints = 0;
var dexterityMod = 2;
var constitutionMod = 3;
var wisdomMod = 3;
var level = 0;
var proficiencyBonus = 2;

function characterValue(){
  // Age
  var age = document.getElementById("age").value;
  // Alignment
  var alignselect = document.querySelector(".alignmentpicker");
  var alignment = alignselect.options[alignselect.selectedIndex].value;
  // Race
  var raceselect = document.querySelector(".racepicker");
  var race = raceselect.options[raceselect.selectedIndex].value;
  // Background
  var backgroundselect = document.querySelector(".backgroundpicker");
  var background = backgroundselect.options[backgroundselect.selectedIndex].value;
  // Role
    // this needs to go to my switch statement but return wont do it.
  var roleSelect = document.querySelector(".classpicker");
  var role = roleSelect.options[roleSelect.selectedIndex].value;

  character.age = age;
  character.alignment = alignment;
  character.race = race;
  character.background = background;
  character.role = role;
}
function roll(){
  var roll = Math.floor((Math.random() * 6)+1);
  var roll1 = Math.floor((Math.random() * 6)+1);
  var roll2 = Math.floor((Math.random() * 6)+1);
  var roll3 = Math.floor((Math.random() * 6)+1);
  var allrolls = [roll, roll1, roll2, roll3];
  var resultroll = roll + roll1 + roll2 + roll3;
  var lowestValue =  Math.min.apply( Math, allrolls );
  var abilityScores = resultroll - lowestValue ;
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
  // var name = exampleElement.name;

  // i want the selected element and add the name of the selected element so i know if its strength / dexterity

  // this can be done with the THIs element but dont  know how
  document.querySelector(".strength").innerHTML = "<p>" + abilityScores + "</p>" + "<p>" + modifier + "</p>";
  character.abilityScores = abilityScores;
  character.modifier = modifier;
};
function calcArmorclass(){
  switch (role) {
    case "Barbarian":
    var armorclass = 10 + dexterityMod + constitutionMod;
    break;
    default:
    var armorclass = 10 + dexterityMod;
  }
  document.querySelector(".armorclass .center").innerHTML = "<h2>" + "Armorclass" + "</h2>" + "<p>" + armorclass + "</p>";
  character.armorclass = armorclass;
};
function playerValue(){
  var name = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;



  character.playerName = name;
  character.playerLastName = lastName;

};
function calcHitpoints(){
  var d6 = Math.floor((Math.random() * 6)+1);
  var d8 = Math.floor((Math.random() * 8)+1);
  var d10 = Math.floor((Math.random() * 8)+1);
  var d12 = Math.floor((Math.random() * 12)+1);

  switch (role) {
    case "Wizard" || "Cleric" || "Sorcerer":
    hitpoints = d6 + constitutionMod;
    console.log(hitpoints);
    break;

    case "Rogue" || "Warlock" || "Bard":
    hitpoints = d8 + constitutionMod;
    console.log(hitpoints);
    break;

    case "Paladin" || "Fighter" || "Ranger":
    hitpoints = d10 + constitutionMod;
    console.log(hitpoints);
    break;

    // default is the Barbarian im so smart
    default:
    hitpoints = d12 + constitutionMod;
    character.hitpoints = hitpoints;


  }


  document.querySelector(".hitpoints .center").innerHTML = "<h2>" + "hitpoints" + "</h2>" + "<p>" + hitpoints + "</p>";
  character.hitpoints = hitpoints;

  // always return last
  return hitpoints;

};
function levelCalc(){
  // one spelling error 30m of crying :"(   getElementsById -->  getElementById
  var xp = document.getElementById("xp").value;

  if (xp < 300) {
    level = 1;
  }
  // forgot the > RIP life
  if (xp >= 300 && xp < 900) {
    level = 2;
  }
  if (xp >= 900 && xp < 2700) {
    level = 3;
  }
  if (xp >= 2700 && xp < 6500) {
    level = 4;
  }
  if (xp >= 6500 && xp < 14000) {
    level = 5;
    proficiencyBonus = 3;
  }
  if (xp >= 14000 && xp < 23000) {
    level = 6;
    proficiencyBonus = 3;
  }
  if (xp >= 23000 && xp < 34000) {
    level = 7;
    proficiencyBonus = 3;
  }
  if (xp >= 34000 && xp < 48000) {
    level = 8;
    proficiencyBonus = 3;
  }
  if (xp >= 48000 && xp < 64000) {
    level = 9;
    proficiencyBonus = 4;
  }
  if (xp >= 64000) {
    level = 10;
    proficiencyBonus = 4;
  }

  document.getElementById("mylevel").innerHTML ="<p>" + level + "</p>";
  document.getElementById("proficiencyBonus").innerHTML = "<p> +" + proficiencyBonus + "</p>";

  character.level = level;
  character.proficiencyBonus = proficiencyBonus;
};


// why doesnt this trigger all functions?
document.getElementById("bigRedButton").addEventListener("click",characterValue,
roll,
calcArmorclass,
playerValue,
calcHitpoints,
levelCalc);

document.getElementById("xp").addEventListener("blur", levelCalc);
document.querySelector(".hitpoints").addEventListener("click",calcHitpoints);
document.querySelector(".armorclass").addEventListener("click", calcArmorclass);
document.getElementById("send").addEventListener("click", playerValue);

// THIS can be one function
document.querySelector(".strength").addEventListener("click",roll);
document.querySelector(".dexterity").addEventListener("click",roll);
document.querySelector(".wisdom").addEventListener("click",roll);
document.querySelector(".intelligence").addEventListener("click",roll);
document.querySelector(".constitution").addEventListener("click",roll);
document.querySelector(".charisma").addEventListener("click",roll);
console.log(character);
