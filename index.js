let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
var person = "Player"
let player = ""
// let rules = ""
let rulesEl = document.getElementById("rules-el")

function displayGreeting(){
	if (person != "" && person != "Player") {
		document.getElementById("greeting-el").innerHTML =
		"Hello " + person + "! Pleasure to have you!";
	}
	else {
		document.getElementById("greeting-el").innerHTML =
		"Pleasure to have you!";
	}
	document.getElementById("rules-el").innerHTML =
	"The stake is a minimum $20 per round. You'll double your stake if you win.";
}

function showPlayerBudget() {
	player = {name: person, chips: 200}
	playerEl.textContent = player.name + ": $" + player.chips
}

function hideInputField() 
{
	var div = document.getElementById("hide");  
	if (div.style.display !== "none") {  
		div.style.display = "none";  
	}  
	else {  
		div.style.display = "block";  
	}  
} 

function showStakesField() 
{
	document.getElementById("stakes-div").style.display = "block";
} 

function hideStakesField() 
{
	var div = document.getElementById("stakes-div");  
	if (div.style.display !== "none") {  
		div.style.display = "none";  
	}  
	else {  
		div.style.display = "block";  
	}  
} 

function getName() {
	person = document.getElementById("name").value;
	if (person === "")
	{
		person = "Player"
	}
	displayGreeting();
	showPlayerBudget(); 
	hideInputField();
	showStakesField() 
}

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
	document.getElementById("greeting-el").innerHTML =
	"Good luck, " + person + "!";
	hideStakesField();
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "You're on fire! 🔥 Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack! Congratulations! 🎉"
        hasBlackJack = true
    } else {
        message = "Oh no, that's too much - you're out of the game! 😧"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
