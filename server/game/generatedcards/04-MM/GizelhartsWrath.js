const Card = require('../../Card.js');

class GizelhartsWrath extends Card {
    //Play: Destroy each Mutant creature.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.destroy((context) => ({
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
          "name": "destroy",
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

GizelhartsWrath.id = 'gizelhart-s-wrath';

module.exports = GizelhartsWrath;
