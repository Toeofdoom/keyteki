const Card = require('../../Card.js');

class FaustTheGreat extends Card {
    //Your opponent’s keys cost +1A for each friendly creature with A on it.
    //Play: You may exalt a friendly creature.
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'opponent',
            effect: ability.effects.modifyKeyCost(1)
        });
        this.play({
            target: {
                optional: true,
                cardType: 'creature',
                controller: 'self',
                gameAction: ability.actions.exalt()
            }
        });
    }
}
/*
[
  {
    "name": "persistentEffect",
    "multiplier": {
      "name": "cards",
      "type": "creature",
      "controller": "self",
      "conditions": [
        {
          "name": "hasAmber"
        }
      ]
    },
    "targetPlayer": "opponent",
    "effects": [
      {
        "name": "modifyKeyCost",
        "amount": 1
      }
    ]
  },
  {
    "name": "bold",
    "trigger": "play",
    "actions": {
      "optional": true,
      "targets": [
        {
          "type": "creature",
          "controller": "self",
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "name": "exalt",
              "optional": true
            }
          ]
        }
      ]
    }
  }
]
*/

FaustTheGreat.id = 'faust-the-great';

module.exports = FaustTheGreat;
