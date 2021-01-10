const Card = require('../../Card.js');

class Nerotaurus extends Card {
    //Fight: Enemy creatures cannot reap during your opponent’s next turn.
    //Reap: Enemy creatures cannot fight during your opponent’s next turn.
    setupCardAbilities(ability) {
        this.fight({
            gameAction: ability.actions.cardLastingEffect({
                effect: ability.effects.cardCannot('reap')
            })
        });
        this.reap({
            gameAction: ability.actions.cardLastingEffect({
                effect: ability.effects.cardCannot('fight')
            })
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "fight",
    "actions": {
      "default": [
        {
          "name": "lastingEffect",
          "durationEffect": {
            "name": "persistentEffect",
            "target": {
              "0": "a",
              "1": "l",
              "2": "l",
              "type": "creature",
              "controller": "opponent"
            },
            "effects": [
              {
                "name": "cardCannot",
                "effect": "reap"
              }
            ]
          }
        }
      ]
    }
  },
  {
    "name": "bold",
    "trigger": "reap",
    "actions": {
      "default": [
        {
          "name": "lastingEffect",
          "durationEffect": {
            "name": "persistentEffect",
            "target": {
              "0": "a",
              "1": "l",
              "2": "l",
              "type": "creature",
              "controller": "opponent"
            },
            "effects": [
              {
                "name": "cardCannot",
                "effect": "fight"
              }
            ]
          }
        }
      ]
    }
  }
]
*/

Nerotaurus.id = 'nerotaurus';

module.exports = Nerotaurus;
