const Card = require('../../Card.js');

class Spartasaur extends Card {
    //After a friendly creature is destroyed, destroy each non-Dinosaur creature.
    //Fight: Gain 2A.
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCardDestroyed: (event, context) =>
                    event.clone.controller === context.player && event.clone.type === 'creature'
            },
            gameAction: ability.actions.destroy((context) => ({
                target: context.game.creaturesInPlay.filter((card) => !card.hasTrait('dinosaur'))
            }))
        });
        this.fight({
            gameAction: ability.actions.gainAmber({ amount: 2 })
        });
    }
}
/*
[
  {
    "name": "reaction",
    "trigger": {
      "trigger": "destroyed",
      "card": {
        "type": "creature",
        "controller": "self"
      }
    },
    "actions": {
      "default": [
        {
          "name": "destroy",
          "target": {
            "type": "creature",
            "conditions": [
              {
                "name": "not",
                "condition": {
                  "name": "trait",
                  "trait": "dinosaur"
                }
              }
            ],
            "mode": "all"
          }
        }
      ]
    }
  },
  {
    "name": "bold",
    "trigger": "fight",
    "actions": {
      "default": [
        {
          "name": "gainAmber",
          "amount": 2
        }
      ]
    }
  }
]
*/

Spartasaur.id = 'spartasaur';

module.exports = Spartasaur;
