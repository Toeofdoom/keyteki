const Card = require('../../Card.js');

class DarkHarbinger extends Card {
    //After you play an Untamed action card, ready $this.
    //
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCardPlayed: (event, context) =>
                    event.player === context.player &&
                    event.card.type === 'action' &&
                    event.card.hasHouse('untamed')
            },
            gameAction: ability.actions.ready((context) => ({
                target: context.source
            }))
        });
    }
}
/*
[
  {
    "name": "reaction",
    "trigger": {
      "trigger": "play",
      "card": {
        "type": "action",
        "conditions": [
          {
            "name": "house",
            "house": "untamed"
          }
        ]
      },
      "eventPlayer": "self"
    },
    "actions": {
      "default": [
        {
          "name": "ready",
          "target": {
            "mode": "self"
          }
        }
      ]
    }
  }
]
*/

DarkHarbinger.id = 'dark-harbinger';

module.exports = DarkHarbinger;
