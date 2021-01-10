const Card = require('../../Card.js');

class ResearchSmoko extends Card {
    //Destroyed: Archive the top card of your deck.
    setupCardAbilities(ability) {
        this.destroyed({
            gameAction: ability.actions.archive({ location: 'hand' })
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
          "name": "archive",
          "target": {
            "mode": "topdeck",
            "location": "hand",
            "controller": "self"
          }
        }
      ]
    }
  }
]
*/

ResearchSmoko.id = 'research-smoko';

module.exports = ResearchSmoko;
