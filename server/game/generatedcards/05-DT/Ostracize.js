const Card = require('../../Card.js');

class Ostracize extends Card {
    //Play: Lose 1A. If you do, purge a creature.
    //This card has been translated from Chinese and is subject to change.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.loseAmber((context) => ({
                amount: 1,
                target: context.player
            })),
            then: {
                target: {
                    cardType: 'creature',
                    gameAction: ability.actions.purge()
                }
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

Ostracize.id = 'ostracize';

module.exports = Ostracize;
