let firstCard =10;
let secondCard=4;
let cards = [firstCard,secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message =""
let messageEl = document.getElementById('message-el');
let sumEL = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
function startGame(){
    renderGame();
}
function renderGame(){
    cardsEl.textContent= "Cards: "+ cards[0] +" " +cards[1];
    sumEL.textContent = "Sum : "+sum;
    if(sum<21){
        message= 'Do you want to draw a new card? 🙂';
    }
    else if (sum==2){
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true;
    }
    else{
        message = 'u r out of the game 😭';
        isAlive = false;
    }
    messageEl.textContent = message
}
function newCard(){
    console.log("Drawing a new card from the deck!");
    let card = 7 ;
    sum+=card;
    cards.push(card);
    console.log(cards);
    renderGame();
}
