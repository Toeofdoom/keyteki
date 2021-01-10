const Card = require('../../Card.js');

class ArmoryOfficerNel extends Card {
    //Enhance R. (These icons have already been added to cards in your deck.)
    //After an upgrade enters play, draw a card.
    setupCardAbilities(ability) {
        //Keywords: enhance
        this.reaction({
            when: {
                entersPlay: (event) => event.card.type === 'upgrade'
            },
            gameAction: ability.actions.draw({ amount: 1 })
        });
    }
}
/*
[
  {
    "name": "keywords",
    "keywords": [
      {
        "name": "enhance"
      }
    ]
  },
  {
    "name": "reaction",
    "trigger": {
      "trigger": "entersPlay",
      "card": {
        "type": "upgrade"
      }
    },
    "actions": {
      "default": [
        {
          "name": "draw",
          "amount": 1
        }
      ]
    }
  }
]
*/

ArmoryOfficerNel.id = 'armory-officer-nel';

module.exports = ArmoryOfficerNel;
