const Card = require('../../Card.js');

class IntoTheFray extends Card {
    //Play: For the remainder of the turn, a friendly Brobnar creature gains, “Fight: Ready this creature.”
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.cardLastingEffect(() => ({
                effect: ability.effects.gainAbility('fight', {
                    gameAction: ability.actions.ready((context) => ({
                        target: context.source
                    }))
                })
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
          "name": "forRemainderOfTurn",
          "durationEffect": {
            "name": "persistentEffect",
            "target": {
              "type": "creature",
              "controller": "self",
              "conditions": [
                {
                  "name": "house",
                  "house": "brobnar"
                }
              ],
              "mode": "exactly",
              "count": 1
            },
            "effects": [
              {
                "name": "gainAbility",
                "ability": {
                  "name": "bold",
                  "trigger": "fight",
                  "actions": {
                    "default": [
                      {
                        "name": "ready",
                        "target": {
                          "mode": "this"
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ]
    }
  }
]
*/

IntoTheFray.id = 'into-the-fray';

module.exports = IntoTheFray;
