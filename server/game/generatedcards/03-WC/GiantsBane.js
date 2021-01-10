const Card = require('../../Card.js');

class GiantsBane extends Card {
    //Play: Destroy a Giant creature.
    //
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                cardCondition: (card) => card.hasTrait('giant'),
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
              "trait": "giant"
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

GiantsBane.id = 'giants--bane';

module.exports = GiantsBane;
