const Card = require('../../Card.js');

class MeccaBuoy extends Card {
    //At the start of each player's turn, if the tide is high, they gain 1A.
    //This card has been translated from Chinese and is subject to change.
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onBeginRound: () => true
            },
            condition: (context) => context.player.isTideHigh(),
            gameAction: ability.actions.gainAmber((context) => ({
                amount: 1,
                target: context.player.opponent
            }))
        });
        /*{
          "name": "reminderText",
          "keywords": [
            "This card has been translated from Chinese and is subject to change."
          ]
        }*/
    }
}

MeccaBuoy.id = 'mecca-buoy';

module.exports = MeccaBuoy;
