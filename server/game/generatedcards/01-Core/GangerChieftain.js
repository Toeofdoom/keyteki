const Card = require('../../Card.js');

class GangerChieftain extends Card {
    //Play: You may ready and fight with a neighboring creature.
    //
    setupCardAbilities(ability) {
        this.play({
            target: {
                optional: true,
                cardType: 'creature',
                cardCondition: (card, context) => context.source.neighbors.includes(card),
                gameAction: ability.actions.sequential([
                    ability.actions.ready(),
                    ability.actions.fight()
                ])
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
      "optional": true,
      "targets": [
        {
          "type": "creature",
          "conditions": [
            {
              "name": "neighboring"
            }
          ],
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "name": "sequential",
              "actions": [
                {
                  "name": "ready"
                },
                {
                  "name": "fight"
                }
              ],
              "optional": true
            }
          ]
        }
      ]
    }
  }
]
*/

GangerChieftain.id = 'ganger-chieftain';

module.exports = GangerChieftain;
