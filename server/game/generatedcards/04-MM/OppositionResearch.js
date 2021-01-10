const Card = require('../../Card.js');

class OppositionResearch extends Card {
    //Enhance D. (These icons have already been added to cards in your deck.)
    //Play:  Enemy creatures cannot reap during your opponent’s next turn.
    setupCardAbilities(ability) {
        //Keywords: enhance
        this.play({
            gameAction: ability.actions.cardLastingEffect({
                effect: ability.effects.cardCannot('reap')
            })
        });
    }
}
/*
[
  {
    "name": "keywords",
    "keywords": [
      {
        "name": "enhance"
      }
    ]
  },
  {
    "name": "bold",
    "trigger": "play",
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
  }
]
*/

OppositionResearch.id = 'opposition-research';

module.exports = OppositionResearch;
