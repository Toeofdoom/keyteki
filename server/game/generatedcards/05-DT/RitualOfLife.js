const Card = require('../../Card.js');

class RitualOfLife extends Card {
    //Action: Destroy a friendly creature. If you do, return a different creature from your discard pile to your hand.
    //This card is translated from Chinese and is subject to change.
    setupCardAbilities(ability) {
        this.action({
            target: {
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.destroy()
            },
            then: (preThenContext) => ({
                target: {
                    cardType: 'creature',
                    controller: 'self',
                    location: 'discard',
                    cardCondition: (card) => card !== preThenContext.target,
                    gameAction: ability.actions.returnToHand({ location: 'discard' })
                }
            })
        });
        /*{
          "name": "reminderText",
          "keywords": [
            "This card is translated from Chinese and is subject to change."
          ]
        }*/
    }
}

RitualOfLife.id = 'ritual-of-life';

module.exports = RitualOfLife;
