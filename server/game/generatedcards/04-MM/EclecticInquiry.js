const Card = require('../../Card.js');

class EclecticInquiry extends Card {
    //Play: Archive the top 2 cards of your deck.
    setupCardAbilities(ability) {
        this.play({
            gameAction: ability.actions.archive({ location: 'hand' })
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
          "name": "archive",
          "target": {
            "mode": "topdeck",
            "amount": 2,
            "location": "hand",
            "controller": "self"
          }
        }
      ]
    }
  }
]
*/

EclecticInquiry.id = 'eclectic-inquiry';

module.exports = EclecticInquiry;
