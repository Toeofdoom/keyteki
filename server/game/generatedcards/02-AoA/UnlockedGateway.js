const Card = require('../../Card.js');

class UnlockedGateway extends Card {
    //Omega. (After you play this card, end this step.)
    //Play: Destroy each creature.
    //
    setupCardAbilities(ability) {
        //Keywords: omega
        this.play({
            gameAction: ability.actions.destroy((context) => ({
                target: context.game.creaturesInPlay
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
        "name": "omega"
      }
    ]
  },
  {
    "name": "bold",
    "trigger": "play",
    "actions": {
      "default": [
        {
          "name": "destroy",
          "target": {
            "type": "creature",
            "mode": "all"
          }
        }
      ]
    }
  }
]
*/

UnlockedGateway.id = 'unlocked-gateway';

module.exports = UnlockedGateway;
