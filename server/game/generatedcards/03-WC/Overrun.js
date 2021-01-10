const Card = require('../../Card.js');

class Overrun extends Card {
    //Play: If 3 or more enemy creatures have been destroyed this turn, your opponent loses 2A.
    setupCardAbilities(ability) {
        this.destroyedTracker = { events: [] };
        this.play({
            condition: () =>
                this.destroyedTracker.events.filter((event) => event.card.type === 'creature')
                    .length === 3,
            gameAction: ability.actions.loseAmber({ amount: 2 })
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "play",
    "actions": {
      "default": [
        {
          "name": "loseAmber",
          "amount": 2,
          "targetPlayer": "opponent",
          "condition": {
            "name": "comparison",
            "operator": "===",
            "b": {
              "name": "constant",
              "amount": 3
            },
            "a": {
              "name": "eventCount",
              "action": "destroyed",
              "type": "creature",
              "controller": "opponent"
            }
          }
        }
      ],
      "condition": {
        "name": "comparison",
        "operator": "===",
        "b": {
          "name": "constant",
          "amount": 3
        },
        "a": {
          "name": "eventCount",
          "action": "destroyed",
          "type": "creature",
          "controller": "opponent"
        }
      }
    }
  }
]
*/

Overrun.id = 'overrun';

module.exports = Overrun;
