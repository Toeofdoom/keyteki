const Card = require('../../Card.js');

class NaturesCall extends Card {
    //Play: Return up to 3 creatures to their owners’ hands.
    setupCardAbilities(ability) {
        this.play({
            target: {
                mode: 'upTo',
                numCards: '3',
                cardType: 'creature',
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
          "type": "creature",
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

NaturesCall.id = 'nature-s-call';

module.exports = NaturesCall;
