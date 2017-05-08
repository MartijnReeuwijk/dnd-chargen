// here i generate a dungeon idee from the DMG
// i changed the rolls a little bit i wont role a d20 and ge that number il  just get a random from array
var dungeon = new Object();


function makeDungeon() {
  // add more later when time
  var dungeonLocationOption = ["A building in a city","Catacombs or server beneath a city","Beneath a farmhous","Beneath a graveyard","Beneath a ruined castle","Beneath a ruined city","Beneath a city","In a chasm"];
  var dungeonCreatorOption = ["Beholder","Cult or religious group","Dwarfs","Elves(inc drow)","Giants","Hobgoblins","Humans"];
  var dungeonPurposeOption = ["Death trap","Lair","Maze","Mine","Planar gate","Stronghold","Temple or shire","Tomb","Treasure vault"];
  var dungeonHistoryOption = ["Abandoned by creator","Abandoned due to plague","Conquered by invaders","Creator destroyed by attacking raiders"];


  // npc's
  var cultOrGroupOption = ["Demon-worshiping cult","Devil-worshiping cult","Elemntal Air cult","Elemntal earth cult","Elemntal Fire cult","Elemntal Water cult","Worshippers of evil deity","Worshippers of good deity","Worshippers of neutral deity"];
  var npcAlignmentOption = ["Good","Evil","Neutral","Chaotic Neutral","Lawful Evil","Lawful Good"];
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


// fucking naming
  if (dungeonCreator === "Cult or religious group") {
    var getCultOrGroupOption = Math.floor((Math.random() * cultOrGroupOption.length));
    var cultOrGroup = cultOrGroupOption[getDungeonHistoryOption];

    dungeon.cult = cultOrGroup;
  }
  if (dungeonCreator === "Humans") {
    var getNpcAlignmentOption = Math.floor((Math.random() * npcAlignmentOption.length));
    var getNpcClassOption = Math.floor((Math.random() * npcClassOption.length));
    var npcAlignment = npcAlignmentOption[getNpcAlignmentOption];
    var npcClass = npcClassOption[getNpcClassOption];

    dungeon.npcAlignment = npcAlignment;
    dungeon.npcClass = npcClass;
  }

}
makeDungeon();
console.log(dungeon);

function wilderness(){
  var monument = ["Sealed burial mound or pyramid","Plundered burial mound of pyramid","PLace carved into a mountenside or cliff"];
}
