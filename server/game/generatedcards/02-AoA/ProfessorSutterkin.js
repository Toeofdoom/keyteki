const Card = require('../../Card.js');

class ProfessorSutterkin extends Card {
    //Reap: Draw a card for each friendly Logos creature.
    //
    setupCardAbilities(ability) {
        this.reap({
            gameAction: ability.actions.draw((context) => ({
                amount:
                    1 *
                    context.game.creaturesInPlay.filter(
                        (card) => card.controller === context.player && card.hasHouse('logos')
                    ).length
            }))
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "reap",
    "actions": {
      "default": [
        {
          "name": "draw",
          "amount": 1,
          "multiplier": {
            "name": "cards",
            "type": "creature",
            "controller": "self",
            "conditions": [
              {
                "name": "house",
                "house": "logos"
              }
            ]
          }
        }
      ]
    }
  }
]
*/

ProfessorSutterkin.id = 'professor-sutterkin';

module.exports = ProfessorSutterkin;
