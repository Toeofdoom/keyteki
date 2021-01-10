const Card = require('../../Card.js');

class KymoorEclipse extends Card {
    //Play: Shuffle each flank creature into its owner’s deck.
    //
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.returnToDeck((context) => ({
                target: context.game.creaturesInPlay.filter((card) => card.isOnFlank())
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
          "name": "returnToDeck",
          "target": {
            "type": "creature",
            "conditions": [
              {
                "name": "flank"
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

KymoorEclipse.id = 'kymoor-eclipse';

module.exports = KymoorEclipse;
