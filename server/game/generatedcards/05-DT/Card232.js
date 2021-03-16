const Card = require('../../Card.js');

class Card232 extends Card {
    //Play: Use an opponent's artifact as if it were yours.
    //This card has been translated from Chinese and is subject to change.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'artifact',
                controller: 'opponent',
                gameAction: ability.actions.use()
            }
        });
        /*{
          "name": "reminderText",
          "keywords": [
            "This card has been translated from Chinese and is subject to change."
          ]
        }*/
    }
}

Card232.id = 'card-232';

module.exports = Card232;
