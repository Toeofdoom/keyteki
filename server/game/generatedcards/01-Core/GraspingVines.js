const Card = require('../../Card.js');

class GraspingVines extends Card {
    //Play: Return up to 3 artifacts to their owners’ hands.
    setupCardAbilities(ability) {
        this.play({
            target: {
                mode: 'upTo',
                numCards: '3',
                cardType: 'artifact',
                gameAction: ability.actions.returnToHand()
            }
        });
    }
}
/*
[
  {
    "name": "bold",
    "trigger": "play",
    "actions": {
      "targets": [
        {
          "type": "artifact",
          "mode": "upTo",
          "count": 3,
          "actions": [
            {
              "name": "returnToHand"
            }
          ]
        }
      ]
    }
  }
]
*/

GraspingVines.id = 'grasping-vines';

module.exports = GraspingVines;
