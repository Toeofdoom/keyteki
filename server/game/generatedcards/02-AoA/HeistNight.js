const Card = require('../../Card.js');

class HeistNight extends Card {
    //Alpha. (You can only play this card before doing anything else this step.)
    //Play: Steal 1A for each friendly Thief creature.
    setupCardAbilities(ability) {
        //Keywords: alpha
        this.play({
            gameAction: ability.actions.steal((context) => ({
                amount:
                    1 *
                    context.game.creaturesInPlay.filter(
                        (card) => card.controller === context.player && card.hasTrait('thief')
                    ).length
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
          "name": "steal",
          "amount": 1,
          "multiplier": {
            "name": "cards",
            "type": "creature",
            "controller": "self",
            "conditions": [
              {
                "name": "trait",
                "trait": "thief"
              }
            ]
          }
        }
      ]
    }
  }
]
*/

HeistNight.id = 'heist-night';

module.exports = HeistNight;
