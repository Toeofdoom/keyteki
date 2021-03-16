const Card = require('../../Card.js');

class OneEyedWillaEvilTwin extends Card {
    //Elusive. Skirmish.
    //Fight: If the tide is high, your opponent loses 2A.
    //This card has been translated from Chinese and is subject to change.
    setupCardAbilities(ability) {
        //Keywords: elusive, skirmish
        this.fight({
            condition: (context) => context.player.isTideHigh(),
            gameAction: ability.actions.loseAmber({ amount: 2 })
        });
        /*{
          "name": "reminderText",
          "keywords": [
            "This card has been translated from Chinese and is subject to change."
          ]
        }*/
    }
}

OneEyedWillaEvilTwin.id = 'one-eyed-willa-evil-twin';

module.exports = OneEyedWillaEvilTwin;
