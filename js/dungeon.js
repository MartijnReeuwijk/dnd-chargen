// here i generate a dungeon idee from the DMG
// i changed the rolls a little bit i wont role a d20 and ge that number il  just get a random from array
var dungeon = new Object();
var settlement = new Object();

function makeDungeon() {
  // added this on top due the if statement

  document.querySelector(".dungeonCreated").innerHTML += "<h1> Dungeon generator </h1>";
  // add more later when time
  var dungeonLocationOption = ["A building in a city","Catacombs or server beneath a city","Beneath a farmhous","Beneath a graveyard","Beneath a ruined castle","Beneath a ruined city","Beneath a city","In a chasm","In a cliff face","In a Glacier","In a gorge","In an mounten pass","In a swamp","Beneath or on top of a mesa","In sea cave","In serveral connected mesas","On a mountain peak","On a promontory","On an island","Underwater","Exotic table"];

  var dungeonCreatorOption = ["Beholder","Cult or religious group","Dwarfs","Elves(inc drow)","Giants","Hobgoblins","Humans","Kuo-toa","Lich","Mind flayer","Yuan-ti","No creator(Natural caverns)"];

  var dungeonPurposeOption = ["Death trap","Lair","Maze","Mine","Planar gate","Stronghold","Temple or shire","Tomb","Treasure vault"];

  var dungeonHistoryOption = ["Abandoned by creator","Abandoned due to plague","Conquered by invaders","Creator destroyed by attacking raiders","Creator destroyed by discovery made within the site","Creator destroyed by internal conflict","Creator destroyed by magical catastrophe","Creator destroyed by natural disaster","Location cursed still in control","Overrun by planar creatures","Site of a great miracle"];

  var exoticLocationOption = ["Among the branches of a tree","atound a geyser","Behind a waterfall","Buried in an avalance","Buries in a sandstorm","Buried in a volcanic ash","Castle or structure sunken in a swamp","Castle or structure at the bottom of a sinkhole","floating on the sea","In a meteorite","On a demiplane of pocket dimension","In a area devastated by a magical catastrophe","On a cloud","In the feywild","In the shadowfell","On an island in an underground sea","In a volcano","On the back of an Gargantuan living creature","Sealed inside a magical dome of force","Inside a Mordenkainen's magnificent mansion"]

  // npc's
  var cultOrGroupOption = ["Demon-worshiping cult","Devil-worshiping cult","Elemental Air cult","Elemental earth cult","Elemental Fire cult","Elemental Water cult","Worshippers of evil deity","Worshippers of good deity","Worshippers of neutral deity"];
  var npcAlignmentOption = ["Good","Evil","Neutral","Chaotic Neutral","Lawful Evil","Lawful Good","Neutral good","Chaotic good","Lawful neutral","Chaotic neutral","Neutral evil","Chaotic evil"];
  var npcClassOption = ["Barbarian","Bard","Cleric","Druid","Fighter","Monk","Paladin","Ranger","Rogue","Sorcerer","Warlock","Wizard"];

  // part on being new to JS is knowing what to do but not 100% sure how to make it form scratsh
  // probs can use some magic so i dont need to make a var for each array
  // Can use magic to make nice but don't know how.
  var getDungeonLocationOption = Math.floor((Math.random() * dungeonLocationOption.length));
  var getDungeonCreatorOption = Math.floor((Math.random() * dungeonCreatorOption.length));
  var getDungeonPurposeOption = Math.floor((Math.random() * dungeonPurposeOption.length));
  var getDungeonHistoryOption = Math.floor((Math.random() * dungeonHistoryOption.length));

  // align values
  // take the random value from the array
  // pretty sure thise can be smaller
  // why does it give me the .value when i look online when this works just fine
  var dungeonLocation = dungeonLocationOption[getDungeonLocationOption];
  var dungeonCreator = dungeonCreatorOption[getDungeonCreatorOption];
  var dungeonPurpose = dungeonPurposeOption[getDungeonPurposeOption];
  var dungeonHistory = dungeonHistoryOption[getDungeonHistoryOption];
  dungeon.location = dungeonLocation;
  dungeon.creator = dungeonCreator;
  dungeon.purpose = dungeonPurpose;
  dungeon.history = dungeonHistory;

  // fucking naming it's the hardes part jezus
  // put it in the if statement so no need to do this code when you are online
  if (dungeonLocation === "Exotic table") {
    var getExoticLocation = Math.floor((Math.random() * exoticLocationOption.length));
    var exoticLocation = exoticLocationOption[getExoticLocation];
    dungeon.exoticLocation = exoticLocation;
    // how do i get the Exotic location in the array i mean its fine
    // works same as the book by first showing your first roll value
    document.querySelector(".dungeonCreated").innerHTML += "<p>" + "Location:" + dungeon.exoticLocation + "</p>" ;
    // Dont know to to use this in the function below it give undefined
  }

  if (dungeonCreator === "Cult or religious group") {
    var getCultOrGroupOption = Math.floor((Math.random() * cultOrGroupOption.length));
    var cultOrGroup = cultOrGroupOption[getDungeonHistoryOption];
    dungeon.cultOrGroup = cultOrGroup;
    document.querySelector(".dungeonCreated").innerHTML += "<p>" + "Cult:" + dungeon.cultOrGroup + "</p>" ;

  }

  if (dungeonCreator === "Humans") {
    var getNpcAlignmentOption = Math.floor((Math.random() * npcAlignmentOption.length));
    var getNpcClassOption = Math.floor((Math.random() * npcClassOption.length));
    var npcAlignment = npcAlignmentOption[getNpcAlignmentOption];
    var npcClass = npcClassOption[getNpcClassOption];
    dungeon.npcAlignment = npcAlignment;
    dungeon.npcClass = npcClass;

    document.querySelector(".dungeonCreated").innerHTML += "<p>" + "NPC Alignment:" + dungeon.npcAlignment + "</p>" ;
    document.querySelector(".dungeonCreated").innerHTML += "<p>" + "NPC class:" + dungeon.npcClass + "</p>" ;
  }
  showDungeon()

}
makeDungeon();
console.log(dungeon);


function wilderness(){
  var monument = ["Sealed burial mound or pyramid","Plundered burial mound of pyramid","Place carved into a mountenside or cliff"];
}

function makeSettlement() {
  settlementRace();
  settlementRuler();
  settlementTraints();
  settlementKnownfor();

}
function settlementRace() {
  // the ay this is made its more like the actual rules
  var d20 = Math.floor((Math.random() * 20) +1 );
  // damn < & >
  if (d20 <= 10 && d20 < 11) {
    var raceRelation = "Harmony";
  }
  if (d20 >= 11 && d20 < 15) {
    var raceRelation = "Tension or rivals";
  }
  if (d20 >= 15 && d20 < 17) {
    var raceRelation = "Racial minorities are conquers";
  }
  if (d20 === 17) {
    var raceRelation = "Racial minorities are rulers";
  }
  if (d20 === 18) {
    var raceRelation = "Racial minorities are refugies";
  }
  if (d20 === 19) {
    var raceRelation = "Racial majorities oppresses the minorities";
  }
  if (d20 === 20) {
    var raceRelation = "Racial minorities oppresses the majorities";
  }
  settlement.raceRelation = raceRelation;
  console.log(raceRelation);
  console.log(d20);
}
function settlementRuler() {
  var d20 = Math.floor((Math.random() * 20) +1 );
  if (d20 <= 5 && d20 < 6) {
    var ruler = "Respected, fair and just";
  }
  if (d20 >= 6 && d20 < 8) {
    var ruler = "Feard tyrant";
  }
  if (d20 === 9) {
    var ruler = "Weakling manipulated by others";

  }
  if (d20 === 10) {
    var ruler = "illegitimate ruler, simmering civil war";
  }
  if (d20 === 11) {
    var ruler = "Rules or controlled by powerfull monster";
  }
  if (d20 === 12) {
    var ruler = "Mysterious";
  }
  if (d20 === 13) {
    var ruler = "Contested leadership, open fighting";
  }
  if (d20 === 14) {
    var ruler = "Cabal seized power openly";
  }
  if (d20 === 15) {
    var ruler = "Doltish lout";
  }
  if (d20 === 16) {
    var ruler = "On deathbed, claimant compete for power";
  }
  if (d20 >= 17 && d20 < 19) {
    var ruler = "Iron-willed but respected";
  }
  if (d20 >= 19 && d20 < 21) {
    var ruler = "religious leader";
  }

  settlement.ruler = ruler;
}
function settlementTraints() {
  var Traints = ["Canals in placed of streets","Massive statue or monument","Grand temple","Large fortess","Verdant parks and orchards","River divides town","Major trade center","Headquarters of a powerful family or guild",
  "Population mostly wealthy","Rundown","Awfull smell (Tanneries, open sewers)","Center of trade of one specific good","Site of many battles","Site of a mythic of magical event","Important libary or archive",
  "Worship of all gods banned","Sinister reputation","Notable libary or academy","Notable library or academy","Site of important tomb or graveyard","Built atop anciend ruins"];
  var getTraints = Math.floor((Math.random() * Traints.length));
  settlement.Traints = getTraints;

}



console.log(settlement);
function showDungeon() {

  document.querySelector(".dungeonCreated").innerHTML += "<p>" + "Location:" + dungeon.location + "</p>";
  document.querySelector(".dungeonCreated").innerHTML += "<p>" + "Creator:" + dungeon.creator + "</p>" ;
  document.querySelector(".dungeonCreated").innerHTML += "<p>" + "Purpose:" + dungeon.purpose + "</p>" ;
  document.querySelector(".dungeonCreated").innerHTML += "<p>" + "History:" + dungeon.history + "</p>" ;




}
