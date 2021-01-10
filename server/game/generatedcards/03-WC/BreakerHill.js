const Card = require('../../Card.js');

class BreakerHill extends Card {
    //Elusive. (The first time this creature is attacked each turn, no damage is dealt.)
    //Each of $this’s neighbors gains, “Action: Steal 1A.”
    setupCardAbilities(ability) {
        //Keywords: elusive
        this.persistentEffect({
            targetController: 'any',
            match: (card, context) =>
                card.type === 'creature' && context.source.neighbors.includes(card),
            effect: ability.effects.gainAbility('action', {
                gameAction: ability.actions.steal({ amount: 1 })
            })
        });
    }
}
/*
[
  {
    "name": "keywords",
    "keywords": [
      {
        "name": "elusive"
      }
    ]
  },
  {
    "name": "persistentEffect",
    "target": {
      "mode": "all",
      "type": "creature",
      "conditions": [
        {
          "name": "neighboring"
        }
      ]
    },
    "effects": [
      {
        "name": "gainAbility",
        "ability": {
          "name": "bold",
          "trigger": "action",
          "actions": {
            "default": [
              {
                "name": "steal",
                "amount": 1
              }
            ]
          }
        }
      }
    ]
  }
]
*/

BreakerHill.id = 'breaker-hill';

module.exports = BreakerHill;
