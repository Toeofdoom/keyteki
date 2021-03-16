const Card = require('../../Card.js');

class LexEvilTwin extends Card {
    //Play/Fight: If the tide is low, you may exalt a creature.
    //This card has been translated from Chinese and is subject to change.
    setupCardAbilities(ability) {
        this.play({
            fight: true,
            condition: (context) => context.player.isTideLow(),
            target: {
                optional: true,
                cardType: 'creature',
                gameAction: ability.actions.exalt({ amount: 1 })
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

LexEvilTwin.id = 'lex-evil-twin';

module.exports = LexEvilTwin;
