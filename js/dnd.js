// for (var i = 0; i <=5; i++) {
//   roll()
//   console.log(i);
// }
//
var character = new Object();

// all placeholders
// get value from Object so the role var is the one from characterValue;
var role = character[role];
var hitpoints = 0;
var strengthMod = 3;
var dexterityMod = 2;
var constitutionMod = 3;
var intelligenceMod = 3;
var wisdomMod = 3;
var charismaMod = 4;

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

  // moved in the loop now i calculate lvl and appropriate hitpoints
  // var d6 = Math.floor((Math.random() * 6)+1);
  // var d8 = Math.floor((Math.random() * 8)+1);
  // var d10 = Math.floor((Math.random() * 10)+1);
  // var d12 = Math.floor((Math.random() * 12)+1);

// get that levelCalc magic
  var level = levelCalc(level);

  switch (role) {
    case "Wizard" || "Cleric" || "Sorcerer":
    var allrolls = [];
    // probably some magic since the increment is +2
    for (var i = 1; i <= level; i++) {
      roll[i] = d6 = Math.floor((Math.random() * 6)+1) + constitutionMod;
      allrolls.push(roll[i]);
      // this works found it online how the fuck could i have know.
      var hitpoints = allrolls.reduce(function (a, b) {
        return a + b;
      });
    }
    
    break;

    case "Rogue" || "Warlock" || "Bard":
    var allrolls = [];

    for (var i = 1; i <= level; i++) {
      roll[i] = d8 = Math.floor((Math.random() * 8)+1) + constitutionMod;
      allrolls.push(roll[i]);
      // this works found it online how the fuck could i have know.
      var hitpoints = allrolls.reduce(function (a, b) {
        return a + b;
      });
    }
    
    break;

    case "Paladin" || "Fighter" || "Ranger":
    var allrolls = [];

    for (var i = 1; i <= level; i++) {
      roll[i] = d10 = Math.floor((Math.random() * 10)+1); + constitutionMod;
      allrolls.push(roll[i]);
      // this works found it online how the fuck could i have know.
      var hitpoints = allrolls.reduce(function (a, b) {
        return a + b;
      });
    }
    
    break;

    // default is the Barbarian im so smart
    default:
    var allrolls = [];

    for (var i = 1; i <= level; i++) {
      roll[i] = d12 = Math.floor((Math.random() * 12)+1) + constitutionMod;
      allrolls.push(roll[i]);
      // this works found it online how the fuck could i have know.
      var hitpoints = allrolls.reduce(function (a, b) {
        return a + b;
      });
    }

    character.hitpoints = hitpoints;

  }

  document.querySelector(".hitpoints .center").innerHTML = "<h2>" + "hitpoints" + "</h2>" + "<p>" + hitpoints + "</p>";
  character.hitpoints = hitpoints;

  // always return last
  return hitpoints;

};
function levelCalc(level){
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
  return level;
};
function placeMods(){

  var strModPlace = document.querySelectorAll(".str p");
  for (var i = 0; i < strModPlace.length; i++) {
    strModPlace[i].innerHTML = "<p>" + strengthMod + "</p>";
  }

  var dexModPlace = document.querySelectorAll(".dex p");
  for (var i = 0; i < dexModPlace.length; i++) {
    dexModPlace[i].innerHTML = "<p>" + dexterityMod + "</p>";
  }

  var conModPlace = document.querySelectorAll(".con p");
  for (var i = 0; i < conModPlace.length; i++) {
    conModPlace[i].innerHTML = "<p>" + constitutionMod + "</p>";
  }

  var intModPlace = document.querySelectorAll(".int p");
  for (var i = 0; i < intModPlace.length; i++) {
    intModPlace[i].innerHTML = "<p>" + intelligenceMod + "</p>";
  }

  var wisModPlace = document.querySelectorAll(".wis p");
  for (var i = 0; i < wisModPlace.length; i++) {
    wisModPlace[i].innerHTML = "<p>" + wisdomMod + "</p>";
  }

  var charModPlace = document.querySelectorAll(".cha p");
  for (var i = 0; i < charModPlace.length; i++) {
    charModPlace[i].innerHTML = "<p>" + charismaMod + "</p>";
  }

}

// now + proficiencyBonus on the selected checkbox
// need THIS element need it for
function proficiencyBonusMod(){
}

// why doesnt this trigger all functions?
document.getElementById("bigRedButton").addEventListener("click",characterValue,
roll,
calcArmorclass,
playerValue,
calcHitpoints,
placeMods,
proficiencyBonusMod,
levelCalc);

document.querySelector(".skills button ").addEventListener("click", placeMods);

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
