const Card = require('../../Card.js');

class MegaAlaka extends Card {
    //If you have used a creature to fight this turn, $this enters play ready.
    setupCardAbilities(ability) {
        this.fightTracker = { events: [] };
        this.persistentEffect({
            location: 'any',
            condition: () =>
                this.fightTracker.events.filter((event) => event.card.type === 'creature').length >=
                1,
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
        "eventPlayer": "self",
        "action": "fight",
        "type": "creature"
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

MegaAlaka.id = 'mega-alaka';

module.exports = MegaAlaka;
