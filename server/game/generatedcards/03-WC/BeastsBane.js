const Card = require('../../Card.js');

class BeastsBane extends Card {
    //Play: Destroy a Beast creature.
    //
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                cardCondition: (card) => card.hasTrait('beast'),
                gameAction: ability.actions.destroy()
            }
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "play",
    "actions": {
      "targets": [
        {
          "type": "creature",
          "conditions": [
            {
              "name": "trait",
              "trait": "beast"
            }
          ],
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "name": "destroy"
            }
          ]
        }
      ]
    }
  }
]
*/

BeastsBane.id = 'beasts--bane';

module.exports = BeastsBane;
