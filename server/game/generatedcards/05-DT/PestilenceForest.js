const Card = require('../../Card.js');

class PestilenceForest extends Card {
    //Each creature enters play enraged.
    //This card has been translated from Chinese and is subject to change.
    setupCardAbilities(ability) {
        this.persistentEffect({
            location: 'any',
            match: (card) => card.type === 'creature',
            effect: ability.effects.entersPlayEnraged()
        });
        /*{
          "name": "reminderText",
          "keywords": [
            "This card has been translated from Chinese and is subject to change."
          ]
        }*/
    }
}

PestilenceForest.id = 'pestilence-forest';

module.exports = PestilenceForest;
