const Card = require('../../Card.js');

class InstrumentOfSilence extends Card {
    //This creature gains skirmish and, “Fight: Gain 1A.”
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: [
                ability.effects.addKeyword({
                    skirmish: 1
                }),
                ability.effects.gainAbility('fight', {
                    gameAction: ability.actions.gainAmber({ amount: 1 })
                })
            ]
        });
    }
}
/*
[
  {
    "name": "persistentEffect",
    "target": {
      "mode": "this"
    },
    "effects": [
      {
        "name": "gainKeywords",
        "keywords": [
          {
            "name": "skirmish"
          }
        ]
      },
      {
        "name": "gainAbility",
        "ability": {
          "name": "bold",
          "trigger": "fight",
          "actions": {
            "default": [
              {
                "name": "gainAmber",
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

InstrumentOfSilence.id = 'instrument-of-silence';

module.exports = InstrumentOfSilence;
