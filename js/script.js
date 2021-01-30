var startCampaign = function(name, partyColor) {
	var politician = {};
	  politician.name = name;
	  politician.results = null;
	  politician.totalVotes = 0;  
    politician.partyColor = partyColor;
	  politician.announcePolitician = function()
	  {
	  console.log( this.name + " is running for US President!");
	  };
  
	politician.announcePolitician();
	
	politician.totalVotes = function() {
	  this.totalVotes = 0;
  
	  for (var i = 0; i < this.results.length; i++) {
		this.totalVotes = this.totalVotes + this.results[i];
	  }
	};
	
  return politician; 
};
  
var biden = startCampaign("Joe Biden", [19, 19, 103]);
	biden.results = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];
	biden.results[9] = 28;
	biden.results[4] = 38;
	biden.results[43] = 27;
  
var trump = startCampaign("Donald Trump", [204, 0, 0]);
	trump.results = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
	trump.results[9] = 1;
	trump.results[4] = 17;
	trump.results[43] = 11;

console.log("Joe Biden's color is: " + biden.partyColor);
console.log("Donald Trump's color is: " + trump.partyColor);

var winner = " ";
  
setStateResults = function(state){
  theStates[state].winner = null;
  if (biden.results[state] > trump.results[state]) {
    theStates[state].winner = biden;
    } else if (biden.results[state] < trump.results[state]) {
      theStates[state].winner = trump;
    }
   
var stateWinner = theStates[state].winner; 

if (stateWinner !== null) {
  theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [128, 128, 128];
  }

var stateResultsTable = document.getElementById('stateResults');
var header = stateResultsTable.children[0];
var body = stateResultsTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnerName = body.children[2].children[1];
stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

candidate1Name.innerText = biden.name;
candidate2Name.innerText = trump.name;
candidate1Results.innerText = biden.results[state];
candidate2Results.innerText = trump.results[state];

if (theStates[state].winner === null){
  winnerName.innerText = "TIED";
  } else {
    winnerName.innerText = theStates[state].winner.name;
    }

var winnerTable = document.getElementById('winner');
if (stateWinner !== null) {
  winner.rgbColor = stateWinner.partyColor;
  } else {
    winner.rgbColor = [128, 128, 128];
  }
}

biden.totalVotes();
trump.totalVotes();

if (biden.totalVotes > trump.totalVotes){
winner = biden.name;
} else if (trump.totalVotes > biden.totalVotes){
  winner = trump.name;
} else {
winner = "No one";
}
console.log(biden.totalVotes + " votes for Joe Biden!");
console.log(trump.totalVotes + " votes for Donald Trump.");
console.log(winner + " wins the Presidency!");

var countryResultsTable = document.getElementById('countryResults');
var row = countryResultsTable.children[0];

row.children[0].children[0].innerText = biden.name;
row.children[0].children[1].innerText = biden.totalVotes;
row.children[0].children[2].innerText = trump.name;
row.children[0].children[3].innerText = trump.totalVotes;
row.children[0].children[5].innerText = winner;
row.children[0].children[5].rgbColor = stateWinner.partyColor;
row.children[0].children[5].rgbColor = [128, 128, 128];

if (winner = biden){
console.log ("Who's the snowflake now?!");
}