const Card = require('../../Card.js');

class Bumblebird extends Card {
    //Alpha. (You can only play this card before doing anything else this step.)
    //Play: Put two +1 power counters on each other friendly Untamed creature.
    setupCardAbilities(ability) {
        //Keywords: alpha
        this.play({
            gameAction: ability.actions.addPowerCounter((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) =>
                        card.controller === context.player &&
                        card !== context.source &&
                        card.hasHouse('untamed')
                ),
                amount: 2
            }))
        });
    }
}
/*
[
  {
    "name": "keywords",
    "keywords": [
      {
        "name": "alpha"
      }
    ]
  },
  {
    "name": "bold",
    "trigger": "play",
    "actions": {
      "default": [
        {
          "name": "addPowerCounter",
          "amount": 2,
          "target": {
            "type": "creature",
            "controller": "self",
            "conditions": [
              {
                "name": "other"
              },
              {
                "name": "house",
                "house": "untamed"
              }
            ],
            "mode": "all"
          }
        }
      ]
    }
  }
]
*/

Bumblebird.id = 'bumblebird';

module.exports = Bumblebird;
