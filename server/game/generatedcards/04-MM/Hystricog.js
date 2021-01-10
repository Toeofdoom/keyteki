const Card = require('../../Card.js');

class Hystricog extends Card {
    //Enhance DDD. (These icons have already been added to cards in your deck.)
    //Action: Destroy a damaged creature.
    setupCardAbilities(ability) {
        //Keywords: enhance
        this.action({
            target: {
                cardType: 'creature',
                cardCondition: (card) => card.hasToken('damage'),
                gameAction: ability.actions.destroy()
            }
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
    "name": "bold",
    "trigger": "action",
    "actions": {
      "targets": [
        {
          "type": "creature",
          "conditions": [
            {
              "name": "damaged"
            }
          ],
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "name": "destroy"
            }
          ]
        }
      ]
    }
  }
]
*/

Hystricog.id = 'hystricog';

module.exports = Hystricog;
