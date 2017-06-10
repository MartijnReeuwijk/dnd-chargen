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
var firstNameArrayHuman = ["John","Arnold","Bill","Jan","Bradd","Donald"];
var lastNameArrayHuman = ["Lennon","Schwarzenegger","Clinton","Smith","Pit","Trump"]




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
