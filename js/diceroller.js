// var d4 = Math.floor((Math.random() * 4)+1);
// var d6 = Math.floor((Math.random() * 6)+1);
// var d8 = Math.floor((Math.random() * 8)+1);
// var d10 = Math.floor((Math.random() * 10)+1);
// var d12 = Math.floor((Math.random() * 12)+1);
// var d20 = Math.floor((Math.random() * 20)+1);
// var d100 = Math.floor((Math.random() * 100)+1);
function rolld2(){
  var d2 = Math.floor((Math.random() * 2)+1);
  document.querySelector(".d2Space").innerHTML = "<h2>" + d2 + "</h2>";

};
function rolld4(){
  var d4 = Math.floor((Math.random() * 4)+1);
  document.querySelector(".d4Space").innerHTML = "<h2>" + d4 + "</h2>";

};
function rolld6(){
  var d6 = Math.floor((Math.random() * 6)+1);
  document.querySelector(".d6Space").innerHTML = "<h2>" + d6 + "</h2>";

};
function rolld8(){
  var d8 = Math.floor((Math.random() * 8)+1);
  document.querySelector(".d8Space").innerHTML = "<h2>" + d8 + "</h2>";

};
function rolld10(){
  var d10 = Math.floor((Math.random() * 10)+1);
  document.querySelector(".d10Space").innerHTML = "<h2>" + d10 + "</h2>";

};
function rolld12(){
  var d12 = Math.floor((Math.random() * 12)+1);
  document.querySelector(".d12Space").innerHTML = "<h2>" + d12 + "</h2>";

};
function rolld20(){
  var d20 = Math.floor((Math.random() * 20)+1);
  document.querySelector(".d20Space").innerHTML = "<h2>" + d20 + "</h2>";

};
function rolld100(){
  var d100 = Math.floor((Math.random() * 100)+1);
  document.querySelector(".d100Space").innerHTML = "<h2>" + d100 + "</h2>";

};


// Straight from the hood
var element = document.querySelector('.rollSpace');
var trigger = document.querySelector('.dicecion'); // or whatever triggers the toggle
trigger.addEventListener('click', function(e) {
    e.preventDefault();
    element.classList.toggle('active'); // or whatever your active class is
});


document.querySelector(".d2").addEventListener("click", rolld2);
document.querySelector(".d4").addEventListener("click", rolld4);
document.querySelector(".d6").addEventListener("click", rolld6);
document.querySelector(".d8").addEventListener("click", rolld8);
document.querySelector(".d10").addEventListener("click", rolld10);
document.querySelector(".d12").addEventListener("click", rolld12);
document.querySelector(".d20").addEventListener("click", rolld20);
document.querySelector(".d100").addEventListener("click", rolld100);
