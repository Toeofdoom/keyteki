const Card = require('../../Card.js');

class B4Th05 extends Card {
    //While the tide is high, this creature gains skirmish.
    //While the tide is low, this creature gains elusive.
    //This card has been translated from Polish and is subject to change.
    setupCardAbilities(ability) {
        this.whileAttached({
            condition: (context) => context.player.isTideHigh(),
            effect: ability.effects.addKeyword({
                skirmish: 1
            })
        });
        this.whileAttached({
            condition: (context) => context.player.isTideLow(),
            effect: ability.effects.addKeyword({
                elusive: 1
            })
        });
        /*{
          "name": "reminderText",
          "keywords": [
            "This card has been translated from Polish and is subject to change."
          ]
        }*/
    }
}

B4Th05.id = 'b4-th05';

module.exports = B4Th05;
