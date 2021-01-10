const Card = require('../../Card.js');

class Charybdis extends Card {
    //Each enemy creatures gains, “Before Fight: Lose 1A.”
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'opponent',
            match: (card) => card.type === 'creature',
            effect: ability.effects.gainAbility('beforeFight', {
                gameAction: ability.actions.loseAmber((context) => ({
                    amount: 1,
                    target: context.player
                }))
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
      "controller": "opponent",
      "mode": "all"
    },
    "effects": [
      {
        "name": "gainAbility",
        "ability": {
          "name": "bold",
          "trigger": "beforeFight",
          "actions": {
            "default": [
              {
                "name": "loseAmber",
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

Charybdis.id = 'charybdis';

module.exports = Charybdis;
