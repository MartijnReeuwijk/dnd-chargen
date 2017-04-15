//jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true

console.log("Let's roll");

// premade mods becuase i cant take them from the rolls this will be seen later in the code.
var role = "Barbarian"; // need to select roll from user slect this is just a fallback default enjoy being a OP Wizard
var hitpoints = 0;
var dexterityMod = 2;
var constitutionMod = 3;
var wisdomMod = 3;


// premade chars for insta play
var premade1 = {
	// none game rules
	// stats can change but dont affect the age
	// these stats dont affect the game only the rollplay
	name: "Conan",
	lastName: " ",
	age: 35,
	gender: "Male",

	// class & background
	// affect stats and rollplay
	// backgrounds affect your character traints
	class: "Barbarian",
	background: "Gladiator",
	race: "Human",

	// Character traints
	// none active game rules
	// stats can change but dont change often / dont change at all
	// doesnt affect the rolls of the game / the mechanics only the rollplay
	alignment: "Lawful good",
	personality: "Something cool", // roll from the personality list in the book
	ideals: "Respect is due to me but all are equal", // roll from the ideals list in the book
	bonds: "I will do anything to prove myself superior to my hated rival.",
	flaws: "I will do all to destroy my enemies",

	// active game rules
	// stats that change a lot
	hitpoints: 10,
	temphitpoints: 0,
	armorclass: 14,
	initiative: 2,
	speed: 30,

	// attribute core of the stats
	strength: 20,
	dexterity: 14,
	constitution: 15,
	intelligence: 12,
	wisdom: 12,
	charisma: 14,

	passiveperception: 13,

}
console.log(premade1);



function character(
	name,lastName,age,gender,role,background,race,
	alignment,personality,personality,ideals,bonds,flaws,hitpoints,temphitpoints,
	armorclass,initiative,speed,strength,dexterity,constitution,intelligence,wisdom,charisma,
	passiveperception,level,proficiencyBonus
	)
{
	this.name = name;
	this.lastName = lastName;
	this.age = age;
	this.gender = gender;

	this.role = role;
	this.background = background;
	this.race = race;

	this.alignment = alignment;
	this.personality = personality;
	this.ideals = ideals;
	this.bonds = bonds;
	this.flaws = flaws;

	this.level = level;
	this.proficiencyBonus = proficiencyBonus;
	this.hitpoints = hitpoints;
	this.temphitpoints = temphitpoints;
	this.armorclass = armorclass;
	this.initiative = initiative;
	this.speed = speed;

	this.strength = strength;
	this.dexterity = dexterity;
	this.constitution = constitution;
	this.intelligence = intelligence;
	this.wisdom = wisdom;
	this.charisma = charisma;
	this.passiveperception = passiveperception;

	// this.createCharacter  = function() {
	//  ??? what here
	// }


	// so i can return 1 thing
	// idk how to make i all the things
	return hitpoints;

};

// var myCharacter = new character()

// character.prototype.sayHello = function()
// {
// 	alert(this.hello);
// }

// var myCharacter = new character(
// name,lastName,age,gender,role,background,race,
// alignment,personality,personality,ideals,bonds,flaws,hitpoints,temphitpoints,
// armorclass,initiative,speed,strength,dexterity,constitution,intelligence,wisdom,charisma,
// passiveperception);
// character.createCharacter();

// starts by 0
document.getElementById("send").addEventListener("click", function getAllValues() {
	var name = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var age = document.getElementById("age").value;

	// var role = document.querySelector("classpicker").value;
	// var role = document.querySelector("classpicker").options[document.querySelector("classpicker").selectedIndex ].text	// var class = document.getElementById("classpicker").options[class.selectedIndex].value;
	// class.test + "test2";

	console.log(name);
	console.log(lastName);
	console.log(age);
	// console.log(role);

	// get all vars how to objects
});


document.getElementById("xp").addEventListener("blur",function levelCalc(){
	// one spelling error 30m of crying :"(   getElementsById -->  getElementById
	var xp = document.getElementById("xp").value;
	var level = 0;
	var proficiencyBonus = 2;
	// console.log("test");
	// console.log(xp);

	// This if does not work properly it does all below the number
	// logic gate operators = stuff not broken
	// all the logs probably a better way
	// and the proficiencyBonus in each thing can be beter dont know how

	if (xp < 300) {
		level = 1;
		// console.log("Ik ben leven " + level);
		// console.log("mijn bonus is + " + proficiencyBonus);
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
	return [level, proficiencyBonus];

});

// var lvlbonus = levelCalc();
// var level = levelCalc[0];
// var proficiencyBonus = levelCalc[1];

console.log("iets hier onder"); // points out my object in the 100000 logs
console.log(character.prototype.proficiencyBonus);

// undefined why? am i rip?

console.log(character("martijn","reeuwijk","22","male","Sorcerer","Acoltye","Human",
"Trueneutral","iets","personality","ideals","bonds","flaws",10,0,
13,2,20,10,10,10,10,10,10,
10));

// this return empty because its empty so it works.
// now fill the Object
console.log(Object.values(character));



// hitpoint
if (hitpoints <= 0) {
	alert("Je heb teweinig levens punten")
}



// cant think of anything for a loop

document.querySelector(".attributeholder article").addEventListener("click", function roll() {
	// i know i can do it with one but not how
	// var rollrandom = Math.floor((Math.random() * 6)+1);
	// var roll = rollrandom;
	// now you get 4x the same number
	var roll = Math.floor((Math.random() * 6)+1);
	var roll1 = Math.floor((Math.random() * 6)+1);
	var roll2 = Math.floor((Math.random() * 6)+1);
	var roll3 = Math.floor((Math.random() * 6)+1);

	var allrolls = [roll, roll1, roll2, roll3];

	var resultroll = roll + roll1 + roll2 + roll3;
	var lowestValue =  Math.min.apply( Math, allrolls );
	// use resultroll and not the allrolls you will get NAN
	var abilityScores = resultroll - lowestValue ;
	var modifier = 0;

	// console.log(lowestValue);
	// console.log(resultroll);
	// console.log(abilityScores);

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
});

// i can use this with THIS but dont know how to do that
// document.querySelector(".attributeholder article:nth-of-type(2)").addEventListener("click", function roll() {});


// calc hitpoints
document.querySelector(".hitpoints").addEventListener("click",function calcHitpoints(level){
	//need to get the constitutionMod from the abilityScores function from the 3rd roll but dont know how.
	var d6 = Math.floor((Math.random() * 6)+1);
	var d8 = Math.floor((Math.random() * 8)+1);
	var d10 = Math.floor((Math.random() * 8)+1);
	var d12 = Math.floor((Math.random() * 12)+1);


	// Doesnt work good properly
	if ((role === "Wizard" || "Cleric" || "Sorcerer")) {
		hitpoints = d6 + constitutionMod;
		// console.log("wiz");
	}
	if ((role === "Rogue" || "Warlock" || "Bard")) {
		hitpoints = d8 + constitutionMod;
		// console.log("rogue");
	}
	if ((role === "Paladin" || "Fighter" || "Ranger" )) {
		hitpoints = d10 + constitutionMod;
		// console.log("pala");
	}
	// console.log(hitpoints);
	// var asd =  d6 + (d6 * levelCalc[0]) + constitutionMod;
	// console.log(asd);

	document.querySelector(".hitpoints .center").innerHTML = "<h2>" + "hitpoints" + "</h2>" + "<p>" + hitpoints + "</p>";
	character.hitpoints = hitpoints;

	// always return last
	return hitpoints;

});


document.querySelector(".armorclass").addEventListener("click",function calcArmorclass(role){
	var armorclass = 10 + dexterityMod;

	// This if wont work idk why
	if (role === "Barbarian") {
		armorclass = 10 + dexterityMod + constitutionMod;
	}
	else {
		armorclass = 10 + dexterityMod;
	}

	document.querySelector(".armorclass .center").innerHTML = "<h2>" + "Armorclass" + "</h2>" + "<p>" + armorclass + "</p>";
	character.armorclass = armorclass;

	// always return last
	return hitpoints;

});


// need to knows for the rest of the dnd stuff
		// how to use This
		// Needs to use role on more thing in 1 click
				// So i can use the rols in the rest of the mods
		// how to select options for select
		// Write to object

// Sources:

// Dungeons & dragons sources
// https://en.wikipedia.org/wiki/Alignment_(Dungeons_%26_Dragons)#Lawful_good
// https://en.wikipedia.org/wiki/Attribute_(role-playing_games)
// https://www.bol.com/nl/p/dungeons-dragons-player-s-handbook-strategy-game-guide/9200000028423878/?suggestionType=suggestedsearch
// http://dnd.wizards.com/

// Names and movie references
// Conan the Barbarian http://www.imdb.com/title/tt0082198/
// John lennon https://nl.wikipedia.org/wiki/John_Lennon

// JavaScript

// Object sources 08-04-2017 / 09-04-2017
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
// https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf
// http://helephant.com/2009/01/18/javascript-object-prototype/
// https://www.codecademy.com
// https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Object/values
