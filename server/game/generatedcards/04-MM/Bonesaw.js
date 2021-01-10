const Card = require('../../Card.js');

class Bonesaw extends Card {
    //If a friendly creature was destroyed this turn, $this enters play ready.
    //
    setupCardAbilities(ability) {
        this.destroyedTracker = { events: [] };
        this.persistentEffect({
            location: 'any',
            condition: () =>
                this.destroyedTracker.events.filter((event) => event.card.type === 'creature')
                    .length >= 1,
            effect: ability.effects.entersPlayReady()
        });
    }
}
/*
[
  {
    "name": "persistentEffect",
    "condition": {
      "name": "comparison",
      "operator": ">=",
      "b": {
        "name": "constant",
        "amount": 1
      },
      "a": {
        "name": "eventCount",
        "action": "destroyed",
        "type": "creature",
        "controller": "self"
      }
    },
    "target": {
      "mode": "self"
    },
    "effects": [
      {
        "name": "entersPlayReady"
      }
    ]
  }
]
*/

Bonesaw.id = 'bonesaw';

module.exports = Bonesaw;
