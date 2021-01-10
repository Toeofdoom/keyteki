const Card = require('../../Card.js');

class SagittariisGaze extends Card {
    //Enhance D. (These icons have already been added to cards in your deck.)
    //Play: Exalt a damaged creature.
    setupCardAbilities(ability) {
        //Keywords: enhance
        this.play({
            target: {
                cardType: 'creature',
                cardCondition: (card) => card.hasToken('damage'),
                gameAction: ability.actions.exalt()
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
    "trigger": "play",
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
              "name": "exalt"
            }
          ]
        }
      ]
    }
  }
]
*/

SagittariisGaze.id = 'sagittarii-s-gaze';

module.exports = SagittariisGaze;
