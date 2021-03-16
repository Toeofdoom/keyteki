const Card = require('../../Card.js');

class DeepwaterGruen extends Card {
    //Play/Reap: If the tide is low, your opponent gains 1A.
    //This card has been translated from Chinese and is subject to change.
    setupCardAbilities(ability) {
        this.play({
            reap: true,
            condition: (context) => context.player.isTideLow(),
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

DeepwaterGruen.id = 'deepwater-gruen';

module.exports = DeepwaterGruen;
