const Card = require('../../Card.js');

class CrystalSurge extends Card {
    //Play: Exalt each Mutant creature.
    //
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.exalt((context) => ({
                target: context.game.creaturesInPlay.filter((card) => card.hasTrait('mutant'))
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
          "name": "exalt",
          "target": {
            "type": "creature",
            "conditions": [
              {
                "name": "trait",
                "trait": "mutant"
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

CrystalSurge.id = 'crystal-surge';

module.exports = CrystalSurge;
