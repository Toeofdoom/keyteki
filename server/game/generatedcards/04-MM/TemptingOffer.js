const Card = require('../../Card.js');

class TemptingOffer extends Card {
    //Enhance PT. (These icons have already been added to cards in your deck.)
    //Play: Return an enemy creature to its owner’s hand. If you do, your opponent gains 1A.
    setupCardAbilities(ability) {
        //Keywords: enhance
        this.play({
            target: {
                cardType: 'creature',
                controller: 'opponent',
                gameAction: ability.actions.returnToHand()
            },
            then: {
                gameAction: ability.actions.gainAmber((context) => ({
                    amount: 1,
                    target: context.player.opponent
                }))
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
          "controller": "opponent",
          "mode": "exactly",
          "count": 1,
          "actions": [
            {
              "name": "returnToHand"
            }
          ]
        }
      ],
      "then": {
        "default": [
          {
            "name": "gainAmber",
            "amount": 1,
            "targetPlayer": "opponent",
            "then": true
          }
        ]
      }
    }
  }
]
*/

TemptingOffer.id = 'tempting-offer';

module.exports = TemptingOffer;
