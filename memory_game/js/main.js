var cards=[
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}];
var cardsInPlay=[];

var checkForMatch=function(cardId) {
	if(cardsInPlay.length===2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	}
	this.setAttribute("src",(cards[cardId].cardImage));
};

var flipCard=function() {
	var cardId=this.getAttribute("data-id");
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch.bind(this)(cardId);
	console.log("User flipped "+cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
};

var resetGame=function() {
	var images=document.getElementsByTagName("img");
	for(var i=0;i<images.length;i++) {
		images[i].setAttribute("src","images/back.png");
	}
	cardsInPlay=[];
};

var createBoard=function() {
	document.getElementById("reset").addEventListener("click",resetGame);
	for(var i=0;i<cards.length;i++) {
		var newListItem=document.createElement("img");
		newListItem.setAttribute("src","images/back.png");
		newListItem.setAttribute("data-id",i);
		newListItem.addEventListener("click",flipCard);
		document.getElementById("game-board").appendChild(newListItem);
	}
};

createBoard();
