const Card = require('../../Card.js');

class MarsNeedsAmber extends Card {
    //Play: Each damaged enemy non-Mars creature captures 1A from their own side.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.capture((context) => ({
                target: context.game.creaturesInPlay.filter(
                    (card) =>
                        card.controller !== context.player &&
                        card.hasToken('damage') &&
                        !card.hasHouse('mars')
                ),
                amount: 1,
                player: context.player.opponent
            }))
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "play",
    "actions": {
      "default": [
        {
          "name": "capture",
          "amount": 1,
          "target": {
            "type": "creature",
            "controller": "opponent",
            "conditions": [
              {
                "name": "damaged"
              },
              {
                "name": "not",
                "condition": {
                  "name": "house",
                  "house": "mars"
                }
              }
            ],
            "mode": "all"
          },
          "player": "opponent"
        }
      ]
    }
  }
]
*/

MarsNeedsAmber.id = 'mars-needs-æmber';

module.exports = MarsNeedsAmber;
