const Card = require('../../Card.js');

class FreebooterFayeEvilTwin extends Card {
    //Play: Raise the tide.
    //Before Fight: If the tide is high, steal 1A.
    //This card has been translated from Chinese and is subject to change.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.raiseTide()
        });
        this.beforeFight({
            condition: (context) => context.player.isTideHigh(),
            gameAction: ability.actions.steal({ amount: 1 })
        });
        /*{
          "name": "reminderText",
          "keywords": [
            "This card has been translated from Chinese and is subject to change."
          ]
        }*/
    }
}

FreebooterFayeEvilTwin.id = 'freebooter-faye-evil-twin';

module.exports = FreebooterFayeEvilTwin;
