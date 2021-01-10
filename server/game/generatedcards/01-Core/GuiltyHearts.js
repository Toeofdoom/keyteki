const Card = require('../../Card.js');

class GuiltyHearts extends Card {
    //Play: Destroy each creature with A on it.
    //
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.destroy((context) => ({
                target: context.game.creaturesInPlay.filter((card) => card.hasToken('amber'))
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
                "name": "hasAmber"
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

GuiltyHearts.id = 'guilty-hearts';

module.exports = GuiltyHearts;
