const Card = require('../../Card.js');

class DamoKnight extends Card {
    //Destroyed: Steal 1A.
    setupCardAbilities(ability) {
        this.destroyed({
            gameAction: ability.actions.steal({ amount: 1 })
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "destroyed",
    "actions": {
      "default": [
        {
          "name": "steal",
          "amount": 1
        }
      ]
    }
  }
]
*/

DamoKnight.id = 'dæmo-knight';

module.exports = DamoKnight;
