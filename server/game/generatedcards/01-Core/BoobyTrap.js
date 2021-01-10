const Card = require('../../Card.js');

class BoobyTrap extends Card {
    //Play: Deal 4D to a creature that is not on a flank, with 2D splash.
    setupCardAbilities(ability) {
        this.play({
            target: {
                cardType: 'creature',
                cardCondition: (card) => !card.isOnFlank(),
                gameAction: ability.actions.dealDamage({
                    amount: 4,
                    splash: 2
                })
            }
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "play",
    "actions": {
      "targets": [
        {
          "type": "creature",
          "conditions": [
            {
              "name": "not",
              "condition": {
                "name": "flank"
              }
            }
          ],
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "name": "dealDamage",
              "amount": 4,
              "splash": 2
            }
          ]
        }
      ]
    }
  }
]
*/

BoobyTrap.id = 'booby-trap';

module.exports = BoobyTrap;
