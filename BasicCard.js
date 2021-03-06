var inquirer = require("inquirer");
var cards = []
var cardCount = 0

function BasicCard(front, back) {
    this.front = front
    this.back = back
}

var card1 = new BasicCard("Who was the first president of the United States?", "George Washington");

cards.push(card1);

function studyCards() {
    //recursion loop to prompt each question individually w/inquirer
    if (cardCount < cards.length) {

        inquirer.prompt([{
            name: "question",
            message: cards[cardCount].front
        }]).then(function(answer) {

            if ((answer.question).toLowerCase() === cards[cardCount].back) {
                console.log("correct");
                //increase card count per loop
                cardCount++
                //continue recursion 
                studyCards();
            } else {
                //state back of card
                console.log("incorrect");
                console.log("BACK READS:  " + cards[cardCount].back);
                //increase card count per loop
                cardCount++
                //continue recursion
                studyCards();
            }

        }); //then function

    } //recursion if statement


} //studyCards function

studyCards();

// Could not get the CLOZE MODULE integrated into BasicCard.js and get it to work properly