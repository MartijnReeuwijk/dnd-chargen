function giveMeCarry() {
  var strengthInput = document.getElementById("carryWeightInput").value;
  carryCapacity = strengthToCarryCapacity(strengthInput);
  document.querySelector("mnslecotor").innerHTML = "<p>" + carryCapacity + "Lb" + "</p>";
}
// Didnt  clac ot Kg because all items are in LB so it easyers to see on teh item in the list can always change bit the function to Kg.
// ow and naming is halve the battle
function strengthToCarryCapacity() {
  var carryCapacity = strengthInput * 15;
  return carryCapacity
}

// name generator
var firstNameArrayHuman = ["John","Arnold","Bill","Jan","Bradd","Donald"];
var lastNameArrayHuman = ["Lennon","",]
