var chosenMonster = document.querySelector('.chosenMonster');
var closebutton = document.querySelector('.closebutton'); // or whatever trigger the toggle
closebutton.addEventListener('click', function(e) {
    e.preventDefault();
    chosenMonster.classList.toggle('display'); // or whatever your active class is
});
// need extra clicker
var testbutton = document.querySelector('.chosenMonster');
var reee = document.querySelector('.testbutton'); // or whatever trigger the toggle
reee.addEventListener('click', function(q) {
    q.preventDefault();
    testbutton.classList.toggle('display'); // or whatever your active class is
});

types = ["single", "team", "beast"]

function thisFunction(){
  ranStength = Math.random() * 8;
  ranType = types[Math.floor(Math.random()*2)];
  encounterGenerator(ranStength, ranType, 6);
}

var myStrength = 8;


encounterGenerator(strength, type, duration){
  showElement(encounterElement);
  
}

//Functions with parameters
