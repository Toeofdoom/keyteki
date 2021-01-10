const Card = require('../../Card.js');

class AutoEncoder extends Card {
    //After a card is discarded from your hand, archive the top card of your deck.
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCardDiscarded: (event, context) =>
                    event.location === 'hand' && event.card.controller === context.player
            },
            gameAction: ability.actions.archive({ location: 'hand' })
        });
    }
}
/*
[
  {
    "name": "reaction",
    "trigger": {
      "trigger": "onCardDiscarded",
      "card": {},
      "conditions": [
        {
          "name": "location",
          "location": "hand"
        },
        {
          "name": "controller",
          "controller": "self"
        }
      ]
    },
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

AutoEncoder.id = 'auto-encoder';

module.exports = AutoEncoder;
