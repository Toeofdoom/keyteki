const Card = require('../../Card.js');

class BlindingLight extends Card {
    //Play: Choose a house. Stun each creature of that house.
    setupCardAbilities(ability) {
        this.play({
            target: {
                mode: 'house'
            },
            gameAction: ability.actions.stun((context) => ({
                target: context.game.creaturesInPlay.filter((card) => card.hasHouse(context.house))
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
      "targets": [
        {
          "mode": "house"
        }
      ],
      "default": [
        {
          "name": "stun",
          "target": {
            "type": "creature",
            "conditions": [
              {
                "name": "chosenHouse"
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

BlindingLight.id = 'blinding-light';

module.exports = BlindingLight;
