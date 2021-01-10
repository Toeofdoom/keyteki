const Card = require('../../Card.js');

class SkyboosterSquadron extends Card {
    //Reap: Return $this to your hand.
    //
    setupCardAbilities(ability) {
        this.reap({
            gameAction: ability.actions.returnToHand((context) => ({
                target: context.source
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
          "name": "returnToHand",
          "target": {
            "mode": "self"
          }
        }
      ]
    }
  }
]
*/

SkyboosterSquadron.id = 'skybooster-squadron';

module.exports = SkyboosterSquadron;
