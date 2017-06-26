function giveMeCarry() {
  var strength = document.querySelector(".carryWeightInput").value;
  var carryCapacity = strengthToCarryCapacity(strength);
  document.querySelector(".carryWeight p").innerHTML = "<p>" + carryCapacity + "Lb" + "</p>";
}
// Didnt  clac to Kg because all items are in LB so it easyers to see on the item in the list can always change bit the function to Kg.
// ow and naming is halve the battle

// forgot the strength as a parameter noice
function strengthToCarryCapacity(strength) {
  var carryCapacity = strength * 15;
  return carryCapacity;
}

// name generator
function nameGenhuman() {
  // Small amount of the names and only from one region of the swordcoast
  var firstNameArrayHuman = ["John","Arnold","Bill","Jan","Bradd","Donald","Darvin","Dorn","Evendur","Gorstag","Grim","Helm","Malark","Jhessail","Buckman","Fodel","Shemov"];
  var lastNameArrayHuman = ["Lennon","Schwarzenegger","Clinton","Smith","Pit","Trump","Black","Frost","Mccain","Winter","Castel","Deep","Waterdeep","Of the mountain","South","North","Sea","*Use ingame location*"]

  var getFirstName = firstNameArrayHuman[Math.floor((Math.random() * firstNameArrayHuman.length))];
  var getLastName = lastNameArrayHuman[Math.floor((Math.random() * lastNameArrayHuman.length))];

  document.querySelector(".nameGenerator p").innerHTML = "<p>" + getFirstName + " " + getLastName + "</p>";
}
// This can be one function with the click determenting the array used
function nameGenDwarf() {
  // Small amount of the names and only from one region of the swordcoast
  var firstNameArrayDwarf = ["Adrik","Alberich","Baern","Brottor","Barendd","Harbek","Traubon","Morgran","Evendur","Oskar","Thoradin","Flint","Bruenor"];
// Dwarfs dont have last names they use Clan names but for the function it doesnt matter
  var lastNameArrayDwarf = ["Balderk","Battlehammer","Brawnanvil","Dankil","Fireforge","Frostbeard","Gorunn","Holderhek","Ironfist","Loderr","Lutgehr","Rumnaheim","Strakeln","Torunn","Ungart","Dark Hammer","Gem Delver"]

  var getFirstName = firstNameArrayDwarf[Math.floor((Math.random() * firstNameArrayDwarf.length))];
  var getLastName = lastNameArrayDwarf[Math.floor((Math.random() * lastNameArrayDwarf.length))];

  document.querySelector(".nameGenerator p").innerHTML = "<p>" + getFirstName + " " + getLastName + "</p>";
}
function nameGenTest() {

}


// <article class="">
//   <input type="text" name="" value="" placeholder="Player or creature">
//   <input type="number" name="" value="" placeholder="0">
// </article>

function addMoreInitiative() {
  // pff margin why? the element has all the same css idk
  // this can be beter
var initiative =  document.querySelector(".initiative");
var initiativeAddArticle = document.createElement("article");
var initiativeAddInput = document.createElement("input");
var initiativeAddInputNumber = document.createElement("input");
initiative.appendChild(initiativeAddArticle);
initiativeAddArticle.appendChild(initiativeAddInput);
initiativeAddArticle.appendChild(initiativeAddInputNumber);
}


// Need to find something so i dont need to make this 600 times so i need the this finction but i dont know how.
var condisionsWrapper = document.querySelector('.condisionsWrapper');
var condisionsWrapperButton = document.querySelector('.condisionsWrapperButton'); // or whatever triggers the toggle
condisionsWrapperButton.addEventListener('click', function(e) {
	e.preventDefault();
	condisionsWrapper.classList.toggle('display'); // or whatever your active class is
});


document.querySelector(".carryWeightInput").addEventListener("change", giveMeCarry);
document.querySelector(".initiativeMore").addEventListener("click", addMoreInitiative);
document.querySelector(".nameGen").addEventListener("click", nameGenhuman);
document.querySelector(".nameGenDwarf").addEventListener("click", nameGenDwarf);
