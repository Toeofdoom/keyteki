const Card = require('../../Card.js');

class GrimReminder extends Card {
    //Play: Choose a house. Archive each creature of that house from your discard pile. Gain 1 chain.
    setupCardAbilities(ability) {
        this.play({
            target: {
                mode: 'house'
            },
            gameAction: ability.actions.sequential([
                ability.actions.archive((context) => ({
                    target: context.player.discard.filter(
                        (card) =>
                            card.controller === context.player &&
                            card.type === 'creature' &&
                            card.hasHouse(context.house)
                    ),
                    location: 'discard'
                })),
                ability.actions.gainChains({ amount: 1 })
            ])
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
          "mode": "house"
        }
      ],
      "default": [
        {
          "name": "archive",
          "target": {
            "type": "creature",
            "controller": "self",
            "conditions": [
              {
                "name": "chosenHouse"
              }
            ],
            "mode": "all",
            "location": "discard"
          }
        },
        {
          "name": "gainChains",
          "amount": 1
        }
      ]
    }
  }
]
*/

GrimReminder.id = 'grim-reminder';

module.exports = GrimReminder;
