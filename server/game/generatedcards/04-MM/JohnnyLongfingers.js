const Card = require('../../Card.js');

class JohnnyLongfingers extends Card {
    //Each friendly Mutant creature gains, “Destroyed: Steal 1A.”
    setupCardAbilities(ability) {
        this.persistentEffect({
            match: (card) => card.type === 'creature' && card.hasTrait('mutant'),
            effect: ability.effects.gainAbility('destroyed', {
                gameAction: ability.actions.steal({ amount: 1 })
            })
        });
    }
}
/*
[
  {
    "name": "persistentEffect",
    "target": {
      "type": "creature",
      "controller": "self",
      "conditions": [
        {
          "name": "trait",
          "trait": "mutant"
        }
      ],
      "mode": "all"
    },
    "effects": [
      {
        "name": "gainAbility",
        "ability": {
          "name": "bold",
          "trigger": "destroyed",
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

JohnnyLongfingers.id = 'johnny-longfingers';

module.exports = JohnnyLongfingers;
